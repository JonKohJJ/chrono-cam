import { CameraDataset } from "../types";

export const SONY_A7: CameraDataset = {
    A7: {
        description:
            'Sony’s standard full-frame mirrorless line, offering a balance of resolution, speed, and low-light performance for all-around photography and video.',
        short_description: 'Standard FF',
        discontinued: false,
        // targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'A7',
                    full_name: 'Sony Alpha 7',
                    release_date: '2013-10-16',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7 II',
                    full_name: 'Sony Alpha 7 II',
                    release_date: '2014-12-09',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7 III',
                    full_name: 'Sony Alpha 7 III',
                    release_date: '2018-04-10',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
            {
                summary: {
                    short_name: 'A7 IV',
                    full_name: 'Sony Alpha 7 IV',
                    release_date: '2021-12-09',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
                    purchase_links: [],
                }
            },
        ],
    }
}
