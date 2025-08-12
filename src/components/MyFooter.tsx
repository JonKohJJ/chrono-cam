import Link from 'next/link'
import React from 'react'

export default function MyFooter() {
    return (
        <footer className='w-full text-center py-12 text-sm'>
            <p>
                Made with ❤️ by{' '}
                <Link
                    href='https://linktr.ee/jonathankohronicles'
                    className='text-primary hover:underline'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Jonathan Koh
                </Link>
            </p>
            <p>If you spot any incorrect information, please feel free to reach out!</p>
            <p className='font-semibold'>jonathan.koh75@gmail.com</p>
        </footer>
    )
}
