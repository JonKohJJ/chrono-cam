'use client'

import { useRef, useState } from 'react'
import { SONY_CAMERAS, CameraDataset, CameraSeries, CameraModel, FUJIFILM_CAMERAS } from '@/app/_data/all-cameras'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from './ui/card'

const DATASETS: Record<string, CameraDataset> = {
    Sony: SONY_CAMERAS,
    Fujifilm: FUJIFILM_CAMERAS,
}

const BRANDS = Object.keys(DATASETS)

export default function SeriesTimeline() {
    const [selectedBrand, setSelectedBrand] = useState('Sony')
    const [open, setOpen] = useState(false)
    const dataset = DATASETS[selectedBrand] || {}

    const timelineRefs = useRef<(HTMLDivElement | null)[]>([])
    const headerRef = useRef<HTMLDivElement>(null)

    // Get all release dates and calculate month range
    const allDates: Date[] = []
    Object.values(dataset).forEach((series) => {
        series.models.forEach((model) => {
            allDates.push(new Date(model.summary.release_date))
        })
    })

    allDates.sort((a, b) => a.getTime() - b.getTime())
    const startDate = allDates[0]
    const endDate = allDates[allDates.length - 1]

    const startYear = startDate.getFullYear()
    const currentYear = new Date().getFullYear()
    const endYear = Math.max(endDate.getFullYear(), currentYear)

    // Get unique years for headers (including current year)
    const years: number[] = []
    for (let year = startYear; year <= endYear; year++) {
        years.push(year)
    }
    const timelineWidth = years.length * 120 + 128 // Add padding (64px * 2)

    type PositionedCameraModel = CameraModel & {
        originalPosition: number
        adjustedPosition: number
        row: number
    }

    // Function to detect collisions and adjust positions
    const getAdjustedPositions = (models: CameraModel[]): PositionedCameraModel[] => {
        const positions = models.map((model) => ({
            ...model,
            originalPosition: getPositionForDate(model.summary.release_date),
            adjustedPosition: getPositionForDate(model.summary.release_date),
            row: 0,
        }))

        // Sort chronologically
        positions.sort((a, b) => a.originalPosition - b.originalPosition)

        const minDistance = 50

        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const distance = Math.abs(positions[i].adjustedPosition - positions[j].adjustedPosition)

                if (distance < minDistance && positions[i].row === positions[j].row) {
                    positions[j].row = positions[i].row + 1
                    break // stop checking once moved down
                }
            }
        }

        return positions
    }

    // Function to get the maximum number of rows needed for a series
    const getMaxRows = (models: CameraModel[]) => {
        const positions = getAdjustedPositions(models)
        return Math.max(...positions.map((p) => p.row)) + 1 // +1 because rows are 0-indexed
    }

    // Function to get position based on date within the year grid
    const getPositionForDate = (dateString: string) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()

        const yearIndex = years.indexOf(year)
        if (yearIndex === -1) return 0

        const daysInYear =
            new Date(year, 11, 31).getDate() === 31 ? (new Date(year, 1, 29).getDate() === 29 ? 366 : 365) : 365
        const dayOfYear = new Date(year, month, day).getTime() - new Date(year, 0, 1).getTime()
        const dayOfYearNumber = Math.floor(dayOfYear / (1000 * 60 * 60 * 24)) + 1
        const yearProgress = dayOfYearNumber / daysInYear

        const yearStartPosition = yearIndex * 120
        const positionWithinYear = yearProgress * 120

        return yearStartPosition + positionWithinYear
    }

    // Function to format date for badge
    const formatDateForBadge = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB', {
            month: 'short',
            day: 'numeric',
            year: '2-digit',
        })
    }

    // Synchronize scrolling
    const handleScroll = (scrollingElement: HTMLDivElement, index: number) => {
        const scrollLeft = scrollingElement.scrollLeft

        if (headerRef.current) {
            headerRef.current.scrollLeft = scrollLeft
        }

        timelineRefs.current.forEach((ref, i) => {
            if (ref && i !== index) {
                ref.scrollLeft = scrollLeft
            }
        })
    }

    return (
        <div className='flex flex-col gap-8 w-full'>
            <div className='timeline-years-label flex gap-8 items-center'>
                {/* Left Section - dropdown + empty space */}
                <div className='w-1/6 flex-shrink-0'>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant='secondary'
                                role='combobox'
                                aria-expanded={open}
                                className='w-[250px] justify-between border-none cursor-pointer '
                            >
                                {selectedBrand}
                                <ChevronsUpDown className='opacity-50' />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className='w-[250px] p-0 border-none'>
                            <Command>
                                {/* <CommandInput placeholder='Search brand...' className='h-9' /> */}
                                <CommandList>
                                    <CommandEmpty>No brand found.</CommandEmpty>
                                    <CommandGroup>
                                        {BRANDS.map((brand) => (
                                            <CommandItem
                                                key={brand}
                                                value={brand}
                                                onSelect={(value) => {
                                                    // Only update if different brand selected
                                                    if (value !== selectedBrand) {
                                                        setSelectedBrand(value)
                                                    }
                                                    setOpen(false)
                                                }}
                                            >
                                                {brand}
                                                <Check
                                                    className={cn(
                                                        'ml-auto',
                                                        selectedBrand === brand ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Right Section - Year Headers */}
                <div
                    className='flex-1 overflow-x-auto'
                    ref={headerRef}
                    onScroll={(e) => handleScroll(e.currentTarget, -1)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div style={{ width: `${timelineWidth}px` }}>
                        <div className='flex mb-4 px-16'>
                            {years.map((year) => (
                                <div key={year} className='flex-shrink-0 text-left relative' style={{ width: '120px' }}>
                                    <div className='text-xs font-medium py-2'>{year}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-content relative'>
                {Object.entries(dataset).map(([seriesName, series], index) => (
                    <div key={seriesName} className='series-timeline-row flex gap-8 relative'>
                        {/* Left Section - Series Info */}
                        <div className='w-1/6 flex-shrink-0 flex items-center relative'>
                            <Dialog>
                                <DialogTrigger className='w-full flex items-center justify-between border-none cursor-pointer px-2 py-3 rounded-md transition-colors hover:bg-popover'>
                                    <div className='flex items-center gap-4 flex-wrap'>
                                        <Badge variant='secondary'>{series.models.length}</Badge>
                                        <h3 className='font-semibold text-lg'>{seriesName}</h3>
                                    </div>
                                    <Badge variant='default'>{series.short_description}</Badge>
                                </DialogTrigger>

                                <DialogContent className='border-none'>
                                    <SeriesCard name={seriesName} {...series} />
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Right Section - Timeline */}
                        <div
                            className='flex-1 overflow-x-auto relative'
                            ref={(el) => {
                                timelineRefs.current[index] = el
                            }}
                            onScroll={(e) => handleScroll(e.currentTarget, index)}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div
                                className='relative flex items-center px-16'
                                style={{
                                    width: `${timelineWidth}px`,
                                    minHeight: `${Math.max(60, 60 + (getMaxRows(series.models) - 1) * 65)}px`,
                                }}
                            >
                                {/* Background line */}
                                <div className='absolute top-1/2 left-16 right-16 h-px bg-border -translate-y-1/2'></div>

                                {/* Vertical lines at year start */}
                                {years.map((year, yearIndex) => {
                                    const position = 64 + yearIndex * 120

                                    return (
                                        <div
                                            key={`row-${index}-year-line-${year}`}
                                            className={`absolute top-0 bottom-0 w-px bg-border pointer-events-none ${
                                                yearIndex === 0 ? 'hidden' : ''
                                            }`}
                                            style={{ left: `${position}px` }}
                                        ></div>
                                    )
                                })}

                                {/* Models badges */}
                                {getAdjustedPositions(series.models).map((model) => {
                                    const position = 100 + model.adjustedPosition
                                    const verticalOffset = model.row * 35

                                    return (
                                        <Dialog key={`${model.summary.short_name}`}>
                                            <DialogTrigger>
                                                <div
                                                    className='model-badge absolute -translate-x-1/2'
                                                    style={{
                                                        left: `${position}px`,
                                                        top: `calc(50% + ${verticalOffset}px)`,
                                                        transform: 'translateY(-50%) translateX(-50%)',
                                                    }}
                                                >
                                                    <Card className='border border-transparent hover:border-primary gap-0 text-xs px-2 py-1 rounded shadow-sm transition-all cursor-pointer relative z-20 text-center'>
                                                        <p className='whitespace-nowrap font-semibold'>
                                                            {model.summary.short_name}
                                                        </p>
                                                        <p className='whitespace-nowrap text-muted-foreground'>
                                                            {formatDateForBadge(model.summary.release_date)}
                                                        </p>
                                                    </Card>
                                                </div>
                                            </DialogTrigger>

                                            <DialogContent className='border-none'>
                                                <ModelCard {...model} />
                                            </DialogContent>
                                        </Dialog>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SeriesCard({
    name,
    models,
    description,
    discontinued,
    targetAudience,
}: { name: string } & CameraSeries) {
    return (
        <div className='space-y-4'>
            <DialogTitle className='flex gap-4 items-center'>
                <p>{name} Series</p>
                <Badge variant={discontinued ? 'destructive' : 'active'}>
                    {discontinued ? 'Discontinued' : 'Active'}
                </Badge>
                <Badge variant='secondary'>{models.length} Models</Badge>
            </DialogTitle>

            <DialogDescription>{description}</DialogDescription>
            <p>
                Audience: <strong>{targetAudience}</strong>
            </p>
        </div>
    )
}

export function ModelCard({ summary, ergonomics }: CameraModel) {
    // Helper to safely show a value or "N/A"
    const display = (value: any) => (value !== undefined && value !== null && value !== '' ? value : 'N/A')

    // For dimensions, join with " x " but show N/A if any missing
    const displayDimensions = () => {
        if (!ergonomics?.dimensionsMm) return 'N/A'
        const { width, height, depth } = ergonomics.dimensionsMm
        return [width, height, depth].map((v) => (v !== undefined && v !== null ? v : 'N/A')).join(' x ') + ' mm'
    }

    return (
        <div className='space-y-4 text-sm'>
            <DialogTitle className='flex gap-4 items-center text-xl font-bold'>
                <p>Model: {display(summary.short_name)}</p>
                <Badge variant={summary.discontinued ? 'destructive' : 'active'}>
                    {summary.discontinued ? 'Discontinued' : 'Active'}
                </Badge>
            </DialogTitle>

            <div className='placeholder-image w-full bg-blue-200 aspect-[16/9]'></div>

            <Tabs defaultValue='summary' className='gap-4 w-full'>
                <TabsList className='overflow-scroll'>
                    <TabsTrigger value='summary'>Summary</TabsTrigger>
                    <TabsTrigger value='ergonomics'>Ergonomics</TabsTrigger>
                    {/* <TabsTrigger value='sensor'>Sensor</TabsTrigger>
                    <TabsTrigger value='screenViewfinder'>Screen & Viewfinder</TabsTrigger> */}
                </TabsList>

                <div className='min-h-[200px] max-h-[500px] overflow-auto'>
                    <TabsContent value='summary'>
                        <p className='flex justify-between'>
                            <span>Model Name:</span> <span>{display(summary.short_name)}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span>Full Name:</span> <span>{display(summary.full_name)}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span>Release Date:</span> <span>{display(summary.release_date)}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span>Purchase Links:</span>
                            <span>
                                {summary.purchase_links.length > 0
                                    ? summary.purchase_links.map((link, idx) => (
                                          <a
                                              key={idx}
                                              href={link}
                                              target='_blank'
                                              rel='noopener noreferrer'
                                              className='underline mr-2'
                                          >
                                              Link {idx + 1}
                                          </a>
                                      ))
                                    : 'None'}
                            </span>
                        </p>
                    </TabsContent>

                    <TabsContent value='ergonomics'>
                        <section>
                            <p className='flex justify-between'>
                                <span>Body Weight:</span> <span>{display(ergonomics?.weightGrams)} g</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Dimensions:</span> <span>{displayDimensions()}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Build Material:</span> <span>{display(ergonomics?.materialBuild)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Weather Sealing:</span>{' '}
                                <span>
                                    {ergonomics?.weatherSealed === undefined
                                        ? 'N/A'
                                        : ergonomics?.weatherSealed
                                        ? 'Yes'
                                        : 'No'}
                                </span>
                            </p>
                        </section>
                    </TabsContent>

                    {/* <TabsContent value='sensor'>
                        <section>
                            <p className='flex justify-between'>
                                <span>Sensor Size:</span> <span>{display(sensor?.sensorSize)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Megapixels:</span> <span>{display(sensor?.megapixels)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Aspect Ratio:</span> <span>{display(sensor?.aspectRatio)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Sensor Type:</span> <span>{display(sensor?.sensorType)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Dynamic Range Stops:</span> <span>{display(sensor?.dynamicRangeStops)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Native ISO:</span> <span>{display(sensor?.nativeISO)}</span>
                            </p>
                        </section>
                    </TabsContent>

                    <TabsContent value='screenViewfinder'>
                        <section>
                            <p className='flex justify-between'>
                                <span>Screen Size:</span>{' '}
                                <span>{display(screenViewfinder?.screenSizeInches)} inches</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Screen Resolution:</span>{' '}
                                <span>{display(screenViewfinder?.screenResolution)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Screen Type:</span> <span>{display(screenViewfinder?.screenType)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Viewfinder Type:</span> <span>{display(screenViewfinder?.viewfinderType)}</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>Viewfinder Resolution:</span>{' '}
                                <span>{display(screenViewfinder?.viewfinderResolution)}</span>
                            </p>
                        </section>
                    </TabsContent> */}
                </div>
            </Tabs>
        </div>
    )
}
