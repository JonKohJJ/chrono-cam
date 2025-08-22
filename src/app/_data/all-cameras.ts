export type CameraModel = {
    summary: {
        short_name: string
        full_name: string
        release_date: string
        discontinued: boolean
        image_url: string
        purchase_links: string[]
    }
    ergonomics: {
        weightGrams: number
        dimensionsMm: { width: number; height: number; depth: number }
        materialBuild:
            | 'Magnesium Alloy'
            | 'Polycarbonate'
            | 'Magnesium Alloy + Polycarbonate'
            | 'Carbon Fiber'
            | 'Plastic'
            | 'Magnesium Alloy + Plastic'
        weatherSealed: boolean
    }
}

export type CameraSeries = {
    description: string
    short_description: string
    discontinued: boolean
    targetAudience: 'Entry-Level' | 'Enthusiast' | 'Professional'
    imageUrl?: string
    models: CameraModel[]
}

export type CameraDataset = Record<string, CameraSeries>

export const SONY_CAMERAS: CameraDataset = {
    A7: {
        description:
            'Sony’s standard full-frame mirrorless line, offering a balance of resolution, speed, and low-light performance for all-around photography and video.',
        short_description: 'Standard Full-Frame',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/sony-a7-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A7',
                    full_name: 'Sony Alpha 7',
                    release_date: '2013-10-16', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 474,
                    dimensionsMm: { width: 127, height: 94, depth: 48 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7 II',
                    full_name: 'Sony Alpha 7 II',
                    release_date: '2014-11-20', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7-ii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 599,
                    dimensionsMm: { width: 127, height: 96, depth: 60 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7 III',
                    full_name: 'Sony Alpha 7 III',
                    release_date: '2018-02-26', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7-iii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 650,
                    dimensionsMm: { width: 126.9, height: 95.6, depth: 73.7 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7 IV',
                    full_name: 'Sony Alpha 7 IV',
                    release_date: '2021-10-21', // Official announcement & release date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7-iv.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 658,
                    dimensionsMm: { width: 131.3, height: 96.4, depth: 79.8 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    A7R: {
        description:
            'High-resolution full-frame series designed for maximum image detail, ideal for landscape, studio, and commercial work.',
        short_description: 'High Resolution',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/sony-a7r-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A7R',
                    full_name: 'Sony Alpha 7R',
                    release_date: '2013-10-16', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7r.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 465,
                    dimensionsMm: { width: 127, height: 94, depth: 48 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A7R II',
                    full_name: 'Sony Alpha 7R II',
                    release_date: '2015-06-10', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7r-ii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 625,
                    dimensionsMm: { width: 127, height: 96, depth: 60 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7R III',
                    full_name: 'Sony Alpha 7R III',
                    release_date: '2017-10-25', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7r-iii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 657,
                    dimensionsMm: { width: 127, height: 96, depth: 60 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7R IV',
                    full_name: 'Sony Alpha 7R IV',
                    release_date: '2019-07-16', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7r-iv.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 665,
                    dimensionsMm: { width: 128, height: 96, depth: 70 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7R V',
                    full_name: 'Sony Alpha 7R V',
                    release_date: '2022-10-21', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7r-v.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 723,
                    dimensionsMm: { width: 128, height: 96, depth: 70 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    A7S: {
        description:
            'Low-megapixel, high-sensitivity full-frame cameras optimised for video and extreme low-light photography.',
        short_description: 'Video Optimised',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/sony-a7s-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A7S',
                    full_name: 'Sony Alpha 7S',
                    release_date: '2014-04-16', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7s.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 489,
                    dimensionsMm: { width: 127, height: 94, depth: 48 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A7S II',
                    full_name: 'Sony Alpha 7S II',
                    release_date: '2015-09-12', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a7s-ii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 627,
                    dimensionsMm: { width: 127, height: 96, depth: 60 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7S III',
                    full_name: 'Sony Alpha 7S III',
                    release_date: '2020-07-28', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7s-iii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 699,
                    dimensionsMm: { width: 128, height: 96, depth: 70 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    A7C: {
        description:
            'Compact full-frame rangefinder-style mirrorless cameras, combining A7-series performance with a smaller, lighter body.',
        short_description: 'Compact',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/sony-a7c-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A7C',
                    full_name: 'Sony Alpha 7C',
                    release_date: '2020-09-14', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7c.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 509,
                    dimensionsMm: { width: 124, height: 71, depth: 59 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A7C II',
                    full_name: 'Sony Alpha 7C II',
                    release_date: '2023-08-29', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7c-ii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 512,
                    dimensionsMm: { width: 124, height: 71, depth: 60 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A7CR',
                    full_name: 'Sony Alpha 7CR',
                    release_date: '2023-09-21', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a7cr.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 502,
                    dimensionsMm: { width: 124, height: 71, depth: 60 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
        ],
    },

    A9: {
        description:
            'Professional full-frame sports and action line with blazing-fast burst shooting and advanced autofocus.',
        short_description: 'Sports and Action',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/sony-a9-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A9',
                    full_name: 'Sony Alpha 9',
                    release_date: '2017-04-19', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a9.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 673,
                    dimensionsMm: { width: 127, height: 96, depth: 81 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A9 II',
                    full_name: 'Sony Alpha 9 II',
                    release_date: '2019-10-25', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a9-ii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 678,
                    dimensionsMm: { width: 127, height: 96, depth: 81 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A9 III',
                    full_name: 'Sony Alpha 9 III',
                    release_date: '2023-11-07', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a9-iii.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 670,
                    dimensionsMm: { width: 127, height: 96, depth: 82 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    A1: {
        description:
            'Sony’s flagship hybrid full-frame camera combining high resolution, fast shooting, and advanced video capabilities.',
        short_description: 'Flagship',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/sony-a1-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A1',
                    full_name: 'Sony Alpha 1',
                    release_date: '2021-01-27', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a1.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 737,
                    dimensionsMm: { width: 128, height: 96, depth: 89 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    A6xxx: {
        description: 'APS-C E-mount cameras offering a compact form factor for enthusiasts and hybrid shooters.',
        short_description: 'APS-C',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/sony-a6xxx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'A5000',
                    full_name: 'Sony Alpha 5000',
                    release_date: '2014-01-07', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a5000.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 269,
                    dimensionsMm: { width: 109, height: 63, depth: 35 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A6000',
                    full_name: 'Sony Alpha 6000',
                    release_date: '2014-02-12', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a6000.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 285,
                    dimensionsMm: { width: 120, height: 67, depth: 45 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A6300',
                    full_name: 'Sony Alpha 6300',
                    release_date: '2016-02-03', // Corrected official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a6300.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 404,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A6500',
                    full_name: 'Sony Alpha 6500',
                    release_date: '2016-10-06', // Official announcement date
                    discontinued: true,
                    image_url: 'https://example.com/sony-a6500.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 453,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A6400',
                    full_name: 'Sony Alpha 6400',
                    release_date: '2019-01-15', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a6400.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 403,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A6100',
                    full_name: 'Sony Alpha 6100',
                    release_date: '2019-08-28', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a6100.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 396,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'A6600',
                    full_name: 'Sony Alpha 6600',
                    release_date: '2019-08-28', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a6600.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 503,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'A6700',
                    full_name: 'Sony Alpha 6700',
                    release_date: '2023-08-29', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-a6700.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 488,
                    dimensionsMm: { width: 120, height: 66.9, depth: 69.3 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: true,
                },
            },
        ],
    },

    ZV: {
        description:
            'Sony’s vlogging-focused cameras, available in both compact and interchangeable lens E-mount designs.',
        short_description: 'Vlogging',
        discontinued: false,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/sony-zv-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'ZV-1',
                    full_name: 'Sony ZV-1',
                    release_date: '2020-05-26', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-zv-1.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 294,
                    dimensionsMm: { width: 105, height: 60, depth: 44 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'ZV-E10',
                    full_name: 'Sony ZV-E10',
                    release_date: '2021-08-27', // Corrected official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-zv-e10.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 343,
                    dimensionsMm: { width: 115, height: 64, depth: 44 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'ZV-E1',
                    full_name: 'Sony ZV-E1',
                    release_date: '2023-04-26', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-zv-e1.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 343,
                    dimensionsMm: { width: 128, height: 71, depth: 67 },
                    materialBuild: 'Magnesium Alloy + Plastic',
                    weatherSealed: false,
                },
            },
        ],
    },

    FX: {
        description:
            'High-end full-frame E-mount cameras with advanced features targeted at professional photographers and videographers.',
        short_description: 'Full-Frame Pro',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/sony-fx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'FX3',
                    full_name: 'Sony FX3',
                    release_date: '2021-02-23', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-fx3.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 715,
                    dimensionsMm: { width: 129, height: 97, depth: 77 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'FX6',
                    full_name: 'Sony FX6',
                    release_date: '2020-11-12', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-fx6.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 890,
                    dimensionsMm: { width: 120, height: 113, depth: 212 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'FX9',
                    full_name: 'Sony FX9',
                    release_date: '2019-10-16', // Official announcement date
                    discontinued: false,
                    image_url: 'https://example.com/sony-fx9.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 2110,
                    dimensionsMm: { width: 160, height: 204, depth: 148 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'FX2',
                    full_name: 'Sony FX2',
                    release_date: '2025-05-28',
                    discontinued: false,
                    image_url: 'https://example.com/sony-fx2.jpg',
                    purchase_links: [],
                },
                ergonomics: {
                    weightGrams: 730,
                    dimensionsMm: { width: 129, height: 97, depth: 77 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },
}

export const FUJIFILM_CAMERAS: CameraDataset = {
    X100: {
        description:
            'Premium compact cameras with APS-C sensors and a fixed 23mm f/2 lens. Known for their hybrid optical/electronic viewfinder, timeless rangefinder-style design, and high-quality build.',
        short_description: 'Premium',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x100-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X100',
                    full_name: 'Fujifilm X100',
                    release_date: '2011-03-10',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x100.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/682540-REG/Fujifilm_FinePix_X100_Digital_Camera.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 440,
                    dimensionsMm: { width: 126, height: 74, depth: 53 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X100S',
                    full_name: 'Fujifilm X100S',
                    release_date: '2013-01-07',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x100s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/910178-REG/fujifilm_16240639_x100s_digital_camera.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 445,
                    dimensionsMm: { width: 126.5, height: 74.4, depth: 53.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X100T',
                    full_name: 'Fujifilm X100T',
                    release_date: '2014-09-10',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x100t.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1082159-REG/fujifilm_x100t_digital_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 440,
                    dimensionsMm: { width: 126.5, height: 74.4, depth: 52.4 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X100F',
                    full_name: 'Fujifilm X100F',
                    release_date: '2017-01-19',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x100f.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1318272-REG/fujifilm_16534590_x100f_digital_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 469,
                    dimensionsMm: { width: 126.5, height: 74.8, depth: 52.4 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X100V',
                    full_name: 'Fujifilm X100V',
                    release_date: '2020-02-04',
                    discontinued: true, // discontinued in 2024 with X100VI release
                    image_url: 'https://example.com/fujifilm-x100v.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1538606-REG/fujifilm_x100v_digital_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 478,
                    dimensionsMm: { width: 128.0, height: 74.8, depth: 53.3 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true, // requires filter for full sealing
                },
            },
            {
                summary: {
                    short_name: 'X100VI',
                    full_name: 'Fujifilm X100VI',
                    release_date: '2024-02-20',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x100vi.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1830765-REG/fujifilm_x100vi_digital_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 521,
                    dimensionsMm: { width: 128.0, height: 74.8, depth: 55.3 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true, // requires filter for full sealing
                },
            },
        ],
    },

    X10: {
        description:
            'High-end compact digital cameras with manual controls, retro design, and larger-than-average sensors (2/3-inch or APS-C for X70). Part of Fujifilm\'s "X" enthusiast line before the mirrorless era.',
        short_description: 'Compact',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x10-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X10',
                    full_name: 'Fujifilm X10',
                    release_date: '2011-09-01',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x10.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 350,
                    dimensionsMm: { width: 117, height: 70, depth: 57 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X20',
                    full_name: 'Fujifilm X20',
                    release_date: '2013-01-07',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x20.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 353,
                    dimensionsMm: { width: 117, height: 70, depth: 57 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X30',
                    full_name: 'Fujifilm X30',
                    release_date: '2014-08-26',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x30.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 423,
                    dimensionsMm: { width: 119, height: 72, depth: 60 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X70',
                    full_name: 'Fujifilm X70',
                    release_date: '2016-01-15', // announced January 2016
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x70.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 340,
                    dimensionsMm: { width: 112.5, height: 64.4, depth: 44.4 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-Pro': {
        description:
            'Flagship rangefinder-style mirrorless cameras with hybrid viewfinders, exceptional image quality, and professional-grade features.',
        short_description: 'Professional',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-x-pro-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-Pro1',
                    full_name: 'Fujifilm X-Pro1',
                    release_date: '2012-03-29',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-pro1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/798930-REG/Fujifilm_X_Pro1_Mirrorless_Digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 450,
                    dimensionsMm: { width: 139, height: 81, depth: 42 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-Pro2',
                    full_name: 'Fujifilm X-Pro2',
                    release_date: '2016-01-07',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-pro2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1224353-REG/fujifilm_x_pro2_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 495,
                    dimensionsMm: { width: 139, height: 82, depth: 46 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-Pro3',
                    full_name: 'Fujifilm X-Pro3',
                    release_date: '2019-11-23',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-pro3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1482881-REG/fujifilm_x_pro3_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 497,
                    dimensionsMm: { width: 140, height: 83, depth: 46 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    XF: {
        description:
            'Premium fixed-lens compacts in Fujifilm’s “X” line, offering larger-than-average sensors, manual controls, and sophisticated image quality in a stylish, pocketable body.',
        short_description: 'Stylish',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-xf-compact-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'XF1',
                    full_name: 'Fujifilm XF1',
                    release_date: '2012-09-17',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-xf1.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 255,
                    dimensionsMm: { width: 108, height: 62, depth: 33 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'XF10',
                    full_name: 'Fujifilm XF10',
                    release_date: '2018-07-19',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-xf10.jpg',
                    purchase_links: ['https://www.bhphotovideo.com/c/product/???'],
                },
                ergonomics: {
                    weightGrams: 279,
                    dimensionsMm: { width: 113, height: 64, depth: 41 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-E': {
        description:
            'Compact, rangefinder-style mirrorless cameras with APS-C sensors, manual controls, and retro aesthetics.',
        short_description: 'Rangefinder',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-e-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-E1',
                    full_name: 'Fujifilm X-E1',
                    release_date: '2012-09-06',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-e1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 350,
                    dimensionsMm: { width: 137.5, height: 82.8, depth: 41.8 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-E2',
                    full_name: 'Fujifilm X-E2',
                    release_date: '2013-10-15',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-e2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 350,
                    dimensionsMm: { width: 129, height: 75, depth: 37 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-E2S',
                    full_name: 'Fujifilm X-E2S',
                    release_date: '2016-02-15',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-e2s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 350,
                    dimensionsMm: { width: 129, height: 75, depth: 37 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-E3',
                    full_name: 'Fujifilm X-E3',
                    release_date: '2017-09-07',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-e3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 337,
                    dimensionsMm: { width: 121.3, height: 73.9, depth: 32.7 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-E4',
                    full_name: 'Fujifilm X-E4',
                    release_date: '2021-03-04',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-e4.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 364,
                    dimensionsMm: { width: 121.3, height: 73.9, depth: 32.7 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-E5',
                    full_name: 'Fujifilm X-E5',
                    release_date: '2025-08-01',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-e5.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1900553-REG/fujifilm_16949961_x_e5_mirrorless_camera_with.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 445,
                    dimensionsMm: { width: 131.5, height: 78.5, depth: 39.5 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-M': {
        description:
            'Compact and lightweight mirrorless cameras designed for entry-level users seeking high-quality imaging capabilities.',
        short_description: 'Entry-Level',
        discontinued: false,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/fujifilm-x-m-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-M1',
                    full_name: 'Fujifilm X-M1',
                    release_date: '2013-06-25',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-m1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 330,
                    dimensionsMm: { width: 116, height: 66, depth: 40 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-M5',
                    full_name: 'Fujifilm X-M5',
                    release_date: '2024-11-01',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-m5.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1855424-REG/fujifilm_16900707_x_m5_mirrorless_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 355,
                    dimensionsMm: { width: 125, height: 74, depth: 43 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-A': {
        description:
            'Entry-level mirrorless cameras in Fujifilm’s “X” line, featuring APS-C sensors, compact bodies, and user-friendly interfaces.',
        short_description: 'Entry-Level',
        discontinued: true,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/fujifilm-x-a-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-A1',
                    full_name: 'Fujifilm X-A1',
                    release_date: '2013-09-17',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 330,
                    dimensionsMm: { width: 116, height: 66, depth: 40 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A2',
                    full_name: 'Fujifilm X-A2',
                    release_date: '2015-01-15',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 335,
                    dimensionsMm: { width: 116, height: 66, depth: 40 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A3',
                    full_name: 'Fujifilm X-A3',
                    release_date: '2016-08-25',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 339,
                    dimensionsMm: { width: 116.9, height: 66.5, depth: 40.4 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A10',
                    full_name: 'Fujifilm X-A10',
                    release_date: '2016-12-01',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a10.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 331,
                    dimensionsMm: { width: 116.9, height: 66.5, depth: 40.4 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A5',
                    full_name: 'Fujifilm X-A5',
                    release_date: '2018-01-31',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a5.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 455,
                    dimensionsMm: { width: 116.9, height: 67.7, depth: 40.4 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A7',
                    full_name: 'Fujifilm X-A7',
                    release_date: '2019-09-12',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a7.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 320,
                    dimensionsMm: { width: 119, height: 68, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
        ],
    },

    XQ: {
        description:
            'Premium ultracompact fixed-lens cameras in Fujifilm’s “X” line, offering X-Trans sensors, manual controls, and excellent image quality in a pocketable form factor.',
        short_description: 'Ultracompact',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-xq-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'XQ1',
                    full_name: 'Fujifilm XQ1',
                    release_date: '2013-10-18',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-xq1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 206,
                    dimensionsMm: { width: 100, height: 58, depth: 34 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'XQ2',
                    full_name: 'Fujifilm XQ2',
                    release_date: '2015-01-15',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-xq2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1112821-REG/fujifilm_x_q2_digital_camera_silver.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 206,
                    dimensionsMm: { width: 100, height: 58, depth: 34 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-Tx': {
        description:
            'Flagship mirrorless cameras in Fujifilm’s X series, offering advanced features and performance for professional photographers.',
        short_description: 'Flagship',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-x-tx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-T1',
                    full_name: 'Fujifilm X-T1',
                    release_date: '2014-01-28',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 440,
                    dimensionsMm: { width: 129, height: 93, depth: 52 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-T2',
                    full_name: 'Fujifilm X-T2',
                    release_date: '2016-07-07',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 507,
                    dimensionsMm: { width: 132, height: 91, depth: 49 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-T3',
                    full_name: 'Fujifilm X-T3',
                    release_date: '2018-09-06',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 539,
                    dimensionsMm: { width: 132, height: 92, depth: 58 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-T4',
                    full_name: 'Fujifilm X-T4',
                    release_date: '2020-02-25',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t4.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 607,
                    dimensionsMm: { width: 134, height: 92, depth: 63 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-T5',
                    full_name: 'Fujifilm X-T5',
                    release_date: '2022-11-25',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t5.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 557,
                    dimensionsMm: { width: 134, height: 92, depth: 65 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    'X-Txx': {
        description:
            'Mid-range mirrorless cameras offering a balance between performance and portability, suitable for enthusiasts and advanced users.',
        short_description: 'Mid-Range',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-txx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-T10',
                    full_name: 'Fujifilm X-T10',
                    release_date: '2015-05-18',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t10.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 381,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-T20',
                    full_name: 'Fujifilm X-T20',
                    release_date: '2017-01-19',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t20.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 383,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-T30',
                    full_name: 'Fujifilm X-T30',
                    release_date: '2019-02-14',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t30.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 383,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-T30 II',
                    full_name: 'Fujifilm X-T30 II',
                    release_date: '2021-10-01',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t30-ii.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1638580-REG/fujifilm_x_t30_ii_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 383,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-T50',
                    full_name: 'Fujifilm X-T50',
                    release_date: '2024-04-01',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t50.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 455,
                    dimensionsMm: { width: 119, height: 83, depth: 43 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
        ],
    },

    GFX: {
        description:
            'Fujifilm’s medium format mirrorless cameras, offering exceptional image quality, larger sensors, and professional-grade features for photographers and cinematographers.',
        short_description: 'Medium Format',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-gfx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'GFX 50S',
                    full_name: 'Fujifilm GFX 50S',
                    release_date: '2017-01-31',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-gfx-50s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1296483-REG/fujifilm_gfx_50s_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 920,
                    dimensionsMm: { width: 156, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 50R',
                    full_name: 'Fujifilm GFX 50R',
                    release_date: '2018-10-25',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-gfx-50r.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1430858-REG/fujifilm_gfx_50r_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 775,
                    dimensionsMm: { width: 156.2, height: 163.6, depth: 82.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 100',
                    full_name: 'Fujifilm GFX 100',
                    release_date: '2019-06-27',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-gfx-100.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1461411-REG/fujifilm_gfx_100_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 1400,
                    dimensionsMm: { width: 156.2, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 100S',
                    full_name: 'Fujifilm GFX 100S',
                    release_date: '2021-01-27',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-100s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1585547-REG/fujifilm_gfx_100s_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 900,
                    dimensionsMm: { width: 156, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 50S II',
                    full_name: 'Fujifilm GFX 50S II',
                    release_date: '2021-09-02',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-50s-ii.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1662700-REG/fujifilm_gfx_50s_ii_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 900,
                    dimensionsMm: { width: 156, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 100 II',
                    full_name: 'Fujifilm GFX 100 II',
                    release_date: '2023-09-15',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-100-ii.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1761001-REG/fujifilm_gfx_100_ii_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 1400,
                    dimensionsMm: { width: 156, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 100RF',
                    full_name: 'Fujifilm GFX 100RF',
                    release_date: '2025-03-01',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-100rf.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1901001-REG/fujifilm_gfx_100rf_mirrorless_medium.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 1400,
                    dimensionsMm: { width: 156, height: 163.6, depth: 102.9 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    'X-H': {
        description:
            'High-end professional mirrorless cameras with robust build quality, in-body image stabilization, and advanced video and photography capabilities.',
        short_description: 'Professional',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-x-h-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-H1',
                    full_name: 'Fujifilm X-H1',
                    release_date: '2018-02-15',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-h1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1332463-REG/fujifilm_x_h1_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 673,
                    dimensionsMm: { width: 139, height: 97, depth: 85 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-H2',
                    full_name: 'Fujifilm X-H2',
                    release_date: '2022-09-09',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-h2.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1675573-REG/fujifilm_x_h2_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 660,
                    dimensionsMm: { width: 138, height: 97, depth: 85 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-H2S',
                    full_name: 'Fujifilm X-H2S',
                    release_date: '2022-05-31',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-h2s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1665806-REG/fujifilm_x_h2s_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 660,
                    dimensionsMm: { width: 138, height: 97, depth: 85 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    'X-Txxx': {
        description:
            'Entry-level mirrorless cameras offering simplicity and ease of use, ideal for beginners venturing into photography.',
        short_description: 'Entry-Level',
        discontinued: true,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/fujifilm-x-txxx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-T100',
                    full_name: 'Fujifilm X-T100',
                    release_date: '2018-05-24',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t100.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 448,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-T200',
                    full_name: 'Fujifilm X-T200',
                    release_date: '2020-01-23',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-t200.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1007601-REG/fujifilm_16410609_xq1_digital_camera_black.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 370,
                    dimensionsMm: { width: 118, height: 83, depth: 41 },
                    materialBuild: 'Plastic',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-S': {
        description:
            'Versatile, enthusiast-friendly mirrorless cameras with in-body image stabilization and a balance of performance and usability.',
        short_description: 'Enthusiast',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-s-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-S10',
                    full_name: 'Fujifilm X-S10',
                    release_date: '2020-10-15',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-s10.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1585552-REG/fujifilm_x_s10_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 465,
                    dimensionsMm: { width: 126, height: 85, depth: 65 },
                    materialBuild: 'Magnesium Alloy + Plastic',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-S20',
                    full_name: 'Fujifilm X-S20',
                    release_date: '2023-07-27',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-s20.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1762222-REG/fujifilm_x_s20_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 470,
                    dimensionsMm: { width: 126, height: 85, depth: 66 },
                    materialBuild: 'Magnesium Alloy + Plastic',
                    weatherSealed: false,
                },
            },
        ],
    },
}
