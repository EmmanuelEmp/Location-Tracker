'use client'

import Link from "next/link"

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body className="error-div">
                <h2 className='title header-title'>Something went wrong!</h2>
                <Link href="/" >
                    <button
                        className='header-btn product-btn'
                    >
                        Go Back Home
                    </button>
                </Link>
            </body>
        </html>
    )
}