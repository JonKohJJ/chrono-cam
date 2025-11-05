import { CameraDataset } from "../types";

export const SONY_A7C: CameraDataset = {
    A7C: {
        description:
            'Compact full-frame rangefinder-style mirrorless cameras, combining A7-series performance with a smaller, lighter body.',
        short_description: 'Compact',
        discontinued: false,
        // targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'A7C',
                    full_name: 'Sony Alpha 7C',
                    release_date: '2020-09-01',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7C II',
                    full_name: 'Sony Alpha 7C II',
                    release_date: '2023-09-01',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7CR',
                    full_name: 'Sony Alpha 7CR',
                    release_date: '2023-09-01',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
        ],
    },
}
