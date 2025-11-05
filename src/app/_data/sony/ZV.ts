import { CameraDataset } from "../types";

export const SONY_ZV: CameraDataset = {
    ZV: {
        description:
            'Sony’s vlogging-focused cameras, available in both compact and interchangeable lens E-mount designs.',
        short_description: 'Vlogging',
        discontinued: false,
        // targetAudience: 'Entry-Level',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'ZV-1',
                    full_name: 'Sony ZV-1',
                    release_date: '2020-05-26',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'ZV-E10',
                    full_name: 'Sony ZV-E10',
                    release_date: '2021-07-27',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'ZV-E1',
                    full_name: 'Sony ZV-E1',
                    release_date: '2023-05-01',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
        ],
    },
}
