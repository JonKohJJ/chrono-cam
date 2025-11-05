import { CameraDataset } from "../types";

export const SONY_A7S: CameraDataset = {
    A7S: {
        description:
            'Low-megapixel, high-sensitivity full-frame cameras optimised for video and extreme low-light photography.',
        short_description: 'Video Optimised',
        discontinued: false,
        // targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'A7S',
                    full_name: 'Sony Alpha 7S',
                    release_date: '2014-04-23',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7S II',
                    full_name: 'Sony Alpha 7S II',
                    release_date: '2015-10-19',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7S III',
                    full_name: 'Sony Alpha 7S III',
                    release_date: '2020-09-17',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
        ],
    },
}
