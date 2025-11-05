import { CameraDataset } from "../types";

export const SONY_A1: CameraDataset = {
    A1: {
        description:
            'Sony’s flagship hybrid full-frame camera combining high resolution, ultra-fast burst shooting, and advanced 8K video capabilities.',
        short_description: 'Flagship FF',
        discontinued: false,
        // targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'A1',
                    full_name: 'Sony Alpha 1',
                    release_date: '2021-01-27',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                },
            },
            {
                summary: {
                    short_name: 'A1 II',
                    full_name: 'Sony Alpha 1 II',
                    release_date: '2024-11-19',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                },
            },
        ],
    },
};
