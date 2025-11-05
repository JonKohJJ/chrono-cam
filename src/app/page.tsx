import SeriesTimeline from '@/components/SeriesTimeline'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeToggle } from '@/components/theme-toggle'

export default function ProductTimeline() {
    return (
        <div className='w-full'>
            <Tabs defaultValue='timeline'>
                <div className='nav-bar flex justify-between items-center pb-8'>
                    <div>
                        <p className='text-3xl'>ChronoCam</p>
                        <p className='text-muted-foreground'>
                            Explore Every Camera’s Story — From First Release to Latest Model
                        </p>
                    </div>

                    <div className='flex items-center space-x-1'>
                        <TabsList>
                            <TabsTrigger value='timeline'>Timeline</TabsTrigger>
                            <TabsTrigger value='compare' disabled={true} >Compare</TabsTrigger>
                        </TabsList>
                        <ThemeToggle />
                    </div>
                </div>

                <TabsContent value='timeline'>
                    <SeriesTimeline />
                </TabsContent>
                <TabsContent value='compare'>Compare Cameras</TabsContent>
            </Tabs>
        </div>
    )
}
