/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const LazyLoadImage = ({
    preview,
    src,
    alt,
    bgColor = 'transparent',
    className,
}) => {
    const [currentImage, setCurrentImage] = useState(preview)
    const [loading, setLoading] = useState(true)

    const fetchImage = (src) => {
        const loadingImage = new Image()
        loadingImage.src = src
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImage(src)
    }, [])

    return (
        <img
            className={className}
            style={{
                filter: `${loading ? 'blur(10px)' : ''}`,
                transition: '.5s filter linear',
                width: '100%',
                background: bgColor,
            }}
            src={currentImage}
            alt={alt}
        />
    )
}

export default LazyLoadImage
