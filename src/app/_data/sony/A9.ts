import { CameraDataset } from "../types";

export const SONY_A9: CameraDataset = {
    A9: {
        description:
            'Professional full-frame sports and action line with blazing-fast burst shooting and advanced autofocus performance.',
        short_description: 'Sports and Action',
        discontinued: false,
        // targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'A9',
                    full_name: 'Sony Alpha 9',
                    release_date: '2017-05-25',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                },
            },
            {
                summary: {
                    short_name: 'A9 II',
                    full_name: 'Sony Alpha 9 II',
                    release_date: '2019-10-23',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                },
            },
            {
                summary: {
                    short_name: 'A9 III',
                    full_name: 'Sony Alpha 9 III',
                    release_date: '2024-02-01',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                },
            },
        ],
    },
};
