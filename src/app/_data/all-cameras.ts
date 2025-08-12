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
    'X-A': {
        description:
            'Entry-level APS-C mirrorless cameras, affordable and user-friendly, typically without an electronic viewfinder.',
        short_description: 'Entry-Level',
        discontinued: false,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/fujifilm-x-a-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-A7',
                    full_name: 'Fujifilm X-A7',
                    release_date: '2019-09-12',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-a7.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1479785-REG/fujifilm_x_a7_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 320,
                    dimensionsMm: { width: 121.3, height: 83.4, depth: 49.0 },
                    materialBuild: 'Polycarbonate',
                    weatherSealed: false,
                },
            },
            {
                summary: {
                    short_name: 'X-A5',
                    full_name: 'Fujifilm X-A5',
                    release_date: '2018-01-30',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-a5.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1351814-REG/fujifilm_x_a5_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 331,
                    dimensionsMm: { width: 116.9, height: 66.5, depth: 41.4 },
                    materialBuild: 'Polycarbonate',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-E': {
        description:
            'Rangefinder-style APS-C mirrorless cameras with electronic viewfinders, designed for enthusiasts.',
        short_description: 'Rangefinder-Style',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-e-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-E4',
                    full_name: 'Fujifilm X-E4',
                    release_date: '2021-01-27',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-e4.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1625519-REG/fujifilm_x_e4_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 364,
                    dimensionsMm: { width: 121.3, height: 72.9, depth: 32.7 },
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
                        'https://www.bhphotovideo.com/c/product/1326119-REG/fujifilm_x_e3_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 337,
                    dimensionsMm: { width: 121.3, height: 73.9, depth: 42.7 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-M': {
        description: 'Simple, entry-level APS-C mirrorless cameras with basic features and compact design.',
        short_description: 'Mirco ',
        discontinued: true,
        targetAudience: 'Entry-Level',
        imageUrl: 'https://example.com/fujifilm-x-m-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-M1',
                    full_name: 'Fujifilm X-M1',
                    release_date: '2013-06-18',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-m1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1044892-REG/fujifilm_x_m1_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 330,
                    dimensionsMm: { width: 117.3, height: 66.9, depth: 39.0 },
                    materialBuild: 'Polycarbonate',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-T': {
        description:
            'Flagship APS-C mirrorless cameras with DSLR-style handling, designed for enthusiasts and professionals.',
        short_description: 'Flagship',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-t-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-T3',
                    full_name: 'Fujifilm X-T3',
                    release_date: '2018-09-06',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1414625-REG/fujifilm_x_t3_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 539,
                    dimensionsMm: { width: 134.6, height: 92.8, depth: 63.8 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'X-T4',
                    full_name: 'Fujifilm X-T4',
                    release_date: '2020-02-26',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t4.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1564233-REG/fujifilm_x_t4_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 607,
                    dimensionsMm: { width: 134.6, height: 92.8, depth: 63.8 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    'X-T10': {
        description: 'Mid-tier budget APS-C mirrorless cameras, offering many flagship features at a lower price.',
        short_description: 'Mid-Tier',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: 'https://example.com/fujifilm-x-t10-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-T30',
                    full_name: 'Fujifilm X-T30',
                    release_date: '2019-02-14',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-t30.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1403714-REG/fujifilm_x_t30_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 383,
                    dimensionsMm: { width: 118.4, height: 82.8, depth: 46.8 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
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
                        'https://www.bhphotovideo.com/c/product/1304873-REG/fujifilm_x_t20_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 383,
                    dimensionsMm: { width: 117.3, height: 82.8, depth: 41.4 },
                    materialBuild: 'Magnesium Alloy + Polycarbonate',
                    weatherSealed: false,
                },
            },
        ],
    },

    'X-Pro': {
        description:
            'Hybrid optical/electronic viewfinder APS-C mirrorless cameras with a rangefinder style, targeting advanced users and professionals.',
        short_description: 'Rangefinder-Style Pro',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-x-pro-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-Pro3',
                    full_name: 'Fujifilm X-Pro3',
                    release_date: '2019-11-23',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-x-pro3.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1532288-REG/fujifilm_x_pro3_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 497,
                    dimensionsMm: { width: 140.5, height: 82.8, depth: 46.1 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
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
                        'https://www.bhphotovideo.com/c/product/1324979-REG/fujifilm_x_pro2_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 495,
                    dimensionsMm: { width: 140.5, height: 82.8, depth: 46.1 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    'X-H': {
        description:
            'High-end APS-C mirrorless cameras with rugged build quality and advanced features, designed for professionals.',
        short_description: 'Video',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-x-h-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'X-H1',
                    full_name: 'Fujifilm X-H1',
                    release_date: '2018-02-27',
                    discontinued: true,
                    image_url: 'https://example.com/fujifilm-x-h1.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1398326-REG/fujifilm_x_h1_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 673,
                    dimensionsMm: { width: 139.8, height: 97.3, depth: 85.5 },
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
                        'https://www.bhphotovideo.com/c/product/1731344-REG/fujifilm_x_h2s_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 660,
                    dimensionsMm: { width: 138.5, height: 97.3, depth: 84.6 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },

    GFX: {
        description:
            'Medium format mirrorless cameras with large sensors for ultra-high resolution and image quality, aimed at professionals.',
        short_description: 'Medium Format',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: 'https://example.com/fujifilm-gfx-series.jpg',
        models: [
            {
                summary: {
                    short_name: 'GFX 50S II',
                    full_name: 'Fujifilm GFX 50S II',
                    release_date: '2021-09-02',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-50s-ii.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1650296-REG/fujifilm_gfx_50s_ii_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 900,
                    dimensionsMm: { width: 150, height: 104.2, depth: 87.2 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
            {
                summary: {
                    short_name: 'GFX 100S',
                    full_name: 'Fujifilm GFX 100S',
                    release_date: '2021-02-25',
                    discontinued: false,
                    image_url: 'https://example.com/fujifilm-gfx-100s.jpg',
                    purchase_links: [
                        'https://www.bhphotovideo.com/c/product/1608860-REG/fujifilm_gfx_100s_mirrorless_digital.html',
                    ],
                },
                ergonomics: {
                    weightGrams: 900,
                    dimensionsMm: { width: 150, height: 104.2, depth: 87.2 },
                    materialBuild: 'Magnesium Alloy',
                    weatherSealed: true,
                },
            },
        ],
    },
}
