import { CameraDataset } from "./types";

export const FUJIFILM_CAMERAS: CameraDataset = {
    X100: {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Fujifilm launched the X100 series in 2010 to revive the spirit of classic rangefinder-style
                    photography in the digital era.
                </span>
                <span>
                    It filled a unique niche at the very top of Fuji’s fixed-lens lineup, aimed at serious enthusiasts
                    and professionals who wanted a premium compact with superb image quality and tactile controls.
                </span>
                <span>
                    Its target audience was photographers seeking a dedicated stills camera with character, not just a
                    functional tool. The series is known for its APS-C sensor, fast 23mm f/2 lens, and the innovative
                    hybrid optical/electronic viewfinder, which became a defining Fujifilm hallmark.
                </span>
            </span>
        ),
        short_description: 'Iconic',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X100',
                    full_name: 'Fujifilm X100',
                    release_date: '2011-03-10',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X10-X70': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Fujifilm introduced the X10 series in 2011 to offer advanced compact cameras with manual controls
                    and larger-than-average sensors, targeting enthusiasts seeking portability without sacrificing image
                    quality.
                </span>
                <span>
                    The X10–X70 series occupied a mid-tier position in Fujifilm&apos;s lineup, bridging the gap between
                    casual point-and-shoot cameras and the premium X100 series, catering to users desiring more control
                    and better performance in a compact form factor.
                </span>
                <span>
                    The series was discontinued due to declining demand for compact cameras, influenced by the rise of
                    smartphones and a shift towards interchangeable-lens models. The X70, in particular, was
                    discontinued in December 2016.
                </span>
                <span>
                    Known for their solid build, manual dials, and capable optics, these cameras offered a blend of
                    portability and performance, with the X70 being notable for its pocketable design and APS-C sensor.
                </span>
            </span>
        ),
        short_description: 'Advanced',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X10',
                    full_name: 'Fujifilm X10',
                    release_date: '2011-09-01',
                    discontinued: true,
                    image_url: '/images/cameras/fuji/X10.jpg',
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
                    image_url: '/images/cameras/fuji/X20.jpeg',
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
                    image_url: '/images/cameras/fuji/X30.png',
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
                    release_date: '2016-01-15',
                    discontinued: true,
                    image_url: '/images/cameras/fuji/X70.png',
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

    XQ: {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Fujifilm introduced the XQ series to cater to the demand for ultra-pocketable premium compacts in
                    the early 2010s, aiming to provide high-quality imaging in a truly slim form factor.
                </span>
                <span>
                    The XQ series sat at the entry point of Fujifilm&apos;s fixed-lens lineup, targeting everyday users
                    and travelers who desired a camera that could easily slip into a pocket yet deliver better image
                    quality than a smartphone.
                </span>
                <span>
                    The series was discontinued in 2016, with the XQ2 being officially discontinued in April 2016.
                </span>
                <span>
                    Known for their 2/3&quot; X-Trans CMOS II sensors, fast zoom lenses (25–100mm f/1.8–4.9), and
                    compact designs, the XQ series offered a blend of portability and performance, making them ideal for
                    casual photography needs.
                </span>
            </span>
        ),
        short_description: 'Pocketable',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: 'public/images/cameras/fuji/XQ1.jpg',
        models: [
            {
                summary: {
                    short_name: 'XQ1',
                    full_name: 'Fujifilm XQ1',
                    release_date: '2013-10-18',
                    discontinued: true,
                    image_url: '/images/cameras/fuji/XQ1.jpg',
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
                    image_url: '/images/cameras/fuji/XQ2.jpg',
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

    XF: {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Fujifilm introduced the XF1 in September 2012 to offer a stylish and compact camera with manual
                    controls and a larger-than-average 2/3&quot; sensor, targeting casual shooters seeking a balance
                    between portability and image quality.
                </span>
                <span>
                    The XF series occupied the lifestyle-friendly end of Fujifilm&apos;s lineup, appealing to users who
                    valued aesthetics and portability without compromising on performance.
                </span>
                <span>
                    The XF1 was discontinued in 2014, while the XF10 was discontinued in 2020, primarily due to
                    overlapping roles with other models in Fujifilm&apos;s lineup and declining demand for compact
                    cameras.
                </span>
                <span>
                    Known for their slim designs and compact form factors, the XF series offered features like manual
                    controls, RAW support, and in the case of the XF10, an APS-C sensor in a pocketable body.
                </span>
            </span>
        ),
        short_description: 'Stylish',
        discontinued: true,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'XF1',
                    full_name: 'Fujifilm XF1',
                    release_date: '2012-09-17',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The X-E series debuted in 2012 as a compact, rangefinder-style mirrorless camera line, offering
                    manual controls and an APS-C sensor to appeal to enthusiasts seeking portability without sacrificing
                    image quality.
                </span>
                <span>
                    Positioned between the entry-level X-A series and the premium X-Pro series, the X-E line balanced
                    performance and size, making it ideal for street and travel photography.
                </span>
                <span>
                    The X-E4, released in 2021, was discontinued in 2023, marking the end of the series. However, the
                    X-E5 was announced in June 2025, reviving the line with modern features like a 40MP sensor and
                    in-body image stabilization.
                </span>
                <span>
                    Known for its minimalist design, tactile controls, and optical viewfinder, the X-E series has been
                    favored by photographers desiring a classic shooting experience in a compact form.
                </span>
            </span>
        ),
        short_description: 'Rangefinder',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-E1',
                    full_name: 'Fujifilm X-E1',
                    release_date: '2012-09-06',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-A': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Launched in 2013, the X-A series targeted entry-level users with its affordable pricing,
                    user-friendly interface, and stylish design, featuring a Bayer sensor and no viewfinder.
                </span>
                <span>
                    The X-A line served as Fujifilm’s gateway into the X-series system, offering interchangeable lenses
                    and manual controls at a lower price point.
                </span>
                <span>
                    The series was discontinued after the X-A7 in 2020, primarily due to market shifts and declining
                    demand for entry-level mirrorless cameras.
                </span>
                <span>
                    Known for its accessible design and vibrant color options, the X-A series attracted casual shooters
                    and beginners looking to explore photography beyond smartphone capabilities.
                </span>
            </span>
        ),
        short_description: 'Entry-Level',
        discontinued: true,
        targetAudience: 'Entry-Level',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-A1',
                    full_name: 'Fujifilm X-A1',
                    release_date: '2013-09-17',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-M': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Introduced in 2013, the X-M series was a minimalist line focusing on simplicity and manual controls,
                    appealing to purists who desired a straightforward shooting experience.
                </span>
                <span>
                    The X-M series occupied a niche within Fujifilm&apos;s lineup, offering a compact body without a
                    built-in viewfinder, targeting users who preferred external viewfinders or composing shots using the
                    LCD screen.
                </span>
                <span>
                    The series was discontinued after the X-M1, with supplies lasting for another year due to unsold
                    inventory. However, rumors suggest a potential revival with the upcoming X-M5 model.
                </span>
                <span>
                    Known for its clean design and manual control dials, the X-M series appealed to photographers
                    valuing simplicity and direct control over their camera settings.
                </span>
            </span>
        ),
        short_description: 'Entry-Level',
        discontinued: false,
        targetAudience: 'Entry-Level',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-M1',
                    full_name: 'Fujifilm X-M1',
                    release_date: '2013-06-25',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-Pro': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The X-Pro series debuted in 2012 as Fujifilm’s flagship interchangeable-lens line, featuring a
                    hybrid optical/electronic viewfinder and robust build quality, catering to professional
                    photographers and enthusiasts.
                </span>
                <span>
                    Positioned at the high end of the X-series lineup, the X-Pro series emphasized manual controls, a
                    rangefinder-style design, and exceptional image quality, making it ideal for street and documentary
                    photography.
                </span>
                <span>
                    The X-Pro3, released in 2019, was discontinued in 2023, but the series continues with the
                    anticipated X-Pro4, expected to build upon the legacy of its predecessors with modern enhancements.
                </span>
                <span>
                    Known for its unique hybrid viewfinder, durable construction, and classic design, the X-Pro series
                    has been celebrated for delivering a tactile and immersive shooting experience.
                </span>
            </span>
        ),
        short_description: 'Professional',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-Pro1',
                    full_name: 'Fujifilm X-Pro1',
                    release_date: '2012-03-29',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-H': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Launched in 2017, the X-H series was designed for hybrid shooters, offering advanced video
                    capabilities, in-body image stabilization, and enhanced autofocus performance.
                </span>
                <span>
                    The X-H series occupies a specialized position within the X lineup, catering to content creators and
                    videographers seeking a versatile camera capable of delivering high-quality video and stills.
                </span>
                <span>
                    Models such as the X-H1, X-H2, and X-H2S remain in production as of 2025, with Fujifilm actively
                    supporting them through firmware updates and ongoing improvements.
                </span>
                <span>
                    Known for its robust build, comprehensive video features, fast autofocus, and hybrid functionality,
                    the X-H series is favored by professionals and enthusiasts requiring a camera that excels in both
                    video and stills.
                </span>
            </span>
        ),
        short_description: 'Professional',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-H1',
                    full_name: 'Fujifilm X-H1',
                    release_date: '2018-02-15',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-S': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    Introduced in 2023, the X-S series was aimed at vloggers and content creators, offering a compact
                    design, flip-out screen, and advanced video features at an accessible price point.
                </span>
                <span>
                    The X-S series was positioned as a budget-friendly alternative to the X-H line, targeting users who
                    desired high-quality video capabilities without the higher price tag.
                </span>
                <span>
                    The X-S20, released in 2023, was discontinued in 2025, with the series being phased out in favor of
                    the X-T series, which now offers a broader range of features for both photography and videography.
                </span>
                <span>
                    Known for its lightweight design, user-friendly interface, and versatile video features, the X-S
                    series was popular among creators seeking a portable and capable camera for content production.
                </span>
            </span>
        ),
        short_description: 'Enthusiast',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-S10',
                    full_name: 'Fujifilm X-S10',
                    release_date: '2020-10-15',
                    discontinued: false,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-Tx': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The X-Tx series represents Fujifilm&apos;s professional-tier mirrorless cameras, combining robust
                    build quality with top-tier performance and advanced imaging features.
                </span>
                <span>
                    Starting with the X-T1 in 2014 and progressing through X-T2, X-T3, X-T4, and X-T5, these cameras
                    offered APS-C X-Trans sensors, hybrid viewfinders, IBIS, and high-speed autofocus, catering to
                    professional photographers and enthusiasts.
                </span>
                <span>
                    All models up to the X-T5 have been discontinued, with the line evolving into newer offerings in the
                    X-T series while maintaining its flagship professional-tier positioning.
                </span>
                <span>
                    Known for classic DSLR-style design, tactile manual controls, high-resolution sensors, and versatile
                    performance, the X-Tx series delivered a premium and immersive shooting experience.
                </span>
            </span>
        ),
        short_description: 'Flagship',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-T1',
                    full_name: 'Fujifilm X-T1',
                    release_date: '2014-01-28',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The X-Txx series is the enthusiast-tier line, offering a more compact and affordable alternative to
                    the professional X-Tx cameras while maintaining high image quality and manual controls.
                </span>
                <span>
                    Models include the X-T10, X-T20, X-T30, X-T30 II, and X-T50, featuring improvements in X-Trans
                    sensors, autofocus, touchscreen interfaces, and 4K video recording over each generation.
                </span>
                <span>
                    Earlier models have been discontinued, but the X-T50 remains in production as the current
                    enthusiast-focused option in the X-T lineup.
                </span>
                <span>
                    Known for balancing portability, ease of use, and high-quality imaging, the X-Txx series is popular
                    among enthusiasts seeking versatility without the size and price of the professional tier.
                </span>
            </span>
        ),
        short_description: 'Mid-Range',
        discontinued: false,
        targetAudience: 'Enthusiast',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-T10',
                    full_name: 'Fujifilm X-T10',
                    release_date: '2015-05-18',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    'X-Txxx': {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The X-Txxx series targets entry-level users, providing high-quality imaging in a user-friendly,
                    accessible package with simplified controls and compact designs.
                </span>
                <span>
                    This tier includes the X-T100 and X-T200, featuring Bayer sensors, tilting screens, and video
                    capabilities suitable for beginners and casual photographers.
                </span>
                <span>
                    Both the X-T100 and X-T200 have been discontinued, and the series is no longer in production.
                </span>
                <span>
                    Known for approachable design, simplified controls, and solid image quality, the X-Txxx series
                    served as an entry point into the Fujifilm X ecosystem for new photographers.
                </span>
            </span>
        ),
        short_description: 'Entry-Level',
        discontinued: true,
        targetAudience: 'Entry-Level',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'X-T100',
                    full_name: 'Fujifilm X-T100',
                    release_date: '2018-05-24',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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

    GFX: {
        description: (
            <span className='flex flex-col space-y-3'>
                <span>
                    The GFX series, introduced in 2016, is Fujifilm&apos;s medium-format mirrorless camera line,
                    designed to deliver exceptional image quality and dynamic range for professional photographers.
                </span>
                <span>
                    Positioned above the APS-C X-series, the GFX series targets studio, landscape, and commercial
                    photographers who demand large sensors and unparalleled detail.
                </span>
                <span>
                    Models include the GFX 50S, GFX 50R, GFX 100, GFX 100S, and GFX 50S II, offering medium-format
                    sensors ranging from 51MP to 102MP, IBIS in certain models, and advanced autofocus systems.
                </span>
                <span>
                    None of the GFX models have been fully discontinued as of 2025, though earlier models like the GFX
                    50S have been succeeded by updated versions with improved features and ergonomics.
                </span>
                <span>
                    Known for extraordinary image quality, superb dynamic range, and medium-format sensor performance in
                    a relatively compact body, the GFX series is celebrated by professionals for studio, landscape, and
                    high-end commercial photography.
                </span>
            </span>
        ),
        short_description: 'Medium Format',
        discontinued: false,
        targetAudience: 'Professional',
        imageUrl: '/images/chronocam-demo.png',
        models: [
            {
                summary: {
                    short_name: 'GFX 50S',
                    full_name: 'Fujifilm GFX 50S',
                    release_date: '2017-01-31',
                    discontinued: true,
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
                    image_url: '/images/chronocam-demo.png',
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
}
