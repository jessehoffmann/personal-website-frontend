import { useEffect, useState } from 'react'
import { Box, BoxProps } from '@mui/material'

type ProgressiveBackgroundProps = {
    image: string
    preview: string
    imagePosition?: string
} & BoxProps

const ProgressiveBackground = ({
    image,
    preview,
    imagePosition = 'center',
    children,
    sx,
    ...rest
}: ProgressiveBackgroundProps) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let cancelled = false
        setLoaded(false)

        const img = new Image()
        const markLoaded = () => {
            if (!cancelled) {
                setLoaded(true)
            }
        }

        img.src = image
        if (img.complete) {
            markLoaded()
        } else {
            img.onload = markLoaded
        }

        return () => {
            cancelled = true
            img.onload = null
        }
    }, [image])

    return (
        <Box
            {...rest}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                // Match the hero overlay so nothing light flashes before the preview paints
                bgcolor: '#08161e',
                ...sx,
            }}
        >
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${preview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: imagePosition,
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                }}
            />
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: imagePosition,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s linear',
                }}
            />
            {children}
        </Box>
    )
}

export default ProgressiveBackground
