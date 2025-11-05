import { ReactNode } from 'react'

export type CameraModel = {
    summary: {
        short_name: string
        full_name: string
        release_date: string
        discontinued: boolean
        image_url: string
        purchase_links: string[]
    }
}

export type CameraSeries = {
    description: ReactNode
    short_description: string
    discontinued: boolean
    // targetAudience: 'Entry-Level' | 'Enthusiast' | 'Professional'
    imageUrl?: string
    models: CameraModel[]
}

export type CameraDataset = Record<string, CameraSeries>