import React from 'react'
import { styles } from '../styles'

const Footer = () => {
    return (
        <footer>
            <div className='w-full h-32  bg-tertiary  '>
                <div className={`${styles.padding} max-w-7xl mx-auto h-full`}>
                    <p className='text-center'>© Copyright 2025. All Rights Reserved.</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer