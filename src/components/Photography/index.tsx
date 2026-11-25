import { useCallback, useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box,
    Button,
    ButtonBase,
    Dialog,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'

import Firefall from '../../static/img/photography/firefall.webp'
import { firefallPreview } from '../../static/img/previews'
import PageColumn from '../PageColumn'
import PageHeader from '../PageHeader'
import { photographyIntro, photos, type Photo } from './data'
import {
    avifSrcSet,
    fallbackSrc,
    gridSizes,
    preloadViewerImage,
    viewerSizes,
} from './images'

const photoLabel = (photo: Photo) =>
    photo.location ? `${photo.title} · ${photo.location}` : photo.title

const lightboxButtonSx = {
    color: 'common.white',
    bgcolor: 'rgba(0, 0, 0, 0.45)',
    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.65)' },
}

const Photography = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const isOpen = openIndex !== null
    const current = isOpen ? photos[openIndex] : null

    const close = () => setOpenIndex(null)
    const step = useCallback((delta: number) => {
        setOpenIndex((index) =>
            index === null
                ? index
                : (index + delta + photos.length) % photos.length
        )
    }, [])

    useEffect(() => {
        if (!isOpen) return
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') step(-1)
            if (event.key === 'ArrowRight') step(1)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen, step])

    // Fetch the previous and next photos in the background so stepping through is instant
    useEffect(() => {
        if (openIndex === null) return
        for (const delta of [1, -1]) {
            const neighbor =
                photos[(openIndex + delta + photos.length) % photos.length]
            preloadViewerImage(neighbor.name, neighbor.width, neighbor.height)
        }
    }, [openIndex])

    // Grid images, so the viewer can show the already-loaded tile while the large file arrives
    const gridImages = useRef<(HTMLImageElement | null)[]>([])
    const placeholder =
        openIndex === null
            ? ''
            : (gridImages.current[openIndex]?.currentSrc ?? '')

    return (
        <main>
            <PageHeader
                title='Photography'
                subtitle='Moments in time from trails, coastlines, and cities.'
                image={Firefall}
                preview={firefallPreview}
                imagePosition='center 12%'
            />
            <PageColumn sx={{ pt: 5, pb: 2 }}>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                        textAlign: 'center',
                        maxWidth: 640,
                        mx: 'auto',
                        mb: 4,
                        textWrap: 'balance',
                    }}
                >
                    {photographyIntro}
                </Typography>

                <Box
                    sx={{
                        columnCount: { xs: 1, sm: 2, md: 3 },
                        columnGap: { xs: 2, sm: 2.5 },
                    }}
                >
                    {photos.map((photo, index) => (
                        <ButtonBase
                            key={photo.name}
                            onClick={() => setOpenIndex(index)}
                            aria-label={`View ${photoLabel(photo)} larger`}
                            sx={{
                                display: 'block',
                                width: '100%',
                                mb: { xs: 2, sm: 2.5 },
                                breakInside: 'avoid',
                                borderRadius: 1,
                                overflow: 'hidden',
                                position: 'relative',
                                bgcolor: 'grey.200',
                                textAlign: 'left',
                                '& img': {
                                    transition: 'transform 0.4s ease',
                                },
                                '&:hover img, &.Mui-focusVisible img': {
                                    transform: 'scale(1.03)',
                                },
                                '&:hover .caption, &.Mui-focusVisible .caption':
                                    { opacity: 1 },
                                '&.Mui-focusVisible': {
                                    outline: (theme) =>
                                        `3px solid ${theme.palette.primary.main}`,
                                    outlineOffset: 2,
                                },
                            }}
                        >
                            <picture>
                                <source
                                    type='image/avif'
                                    srcSet={avifSrcSet(photo.name)}
                                    sizes={gridSizes}
                                />
                                <Box
                                    component='img'
                                    ref={(el: HTMLImageElement | null) => {
                                        gridImages.current[index] = el
                                    }}
                                    src={fallbackSrc(photo.name)}
                                    alt={photo.alt}
                                    width={photo.width}
                                    height={photo.height}
                                    loading='lazy'
                                    decoding='async'
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </picture>
                            <Box
                                className='caption'
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    px: 2,
                                    pt: 4,
                                    pb: 1.5,
                                    color: 'common.white',
                                    background:
                                        'linear-gradient(to top, rgba(8, 22, 30, 0.75), transparent)',
                                    opacity: { xs: 1, md: 0 },
                                    transition: 'opacity 0.3s ease',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 600, lineHeight: 1.3 }}
                                >
                                    {photo.title}
                                </Typography>
                                {photo.location && (
                                    <Typography variant='body2'>
                                        {photo.location}
                                    </Typography>
                                )}
                            </Box>
                        </ButtonBase>
                    ))}
                </Box>

                <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ textAlign: 'center', mt: 2 }}
                >
                    All photos taken by me, Jesse Thomas Hoffmann.
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    useFlexGap
                    spacing={{ xs: 1.5, sm: 1.75 }}
                    sx={{
                        mt: 6,
                        alignItems: { xs: 'stretch', sm: 'center' },
                        justifyContent: { sm: 'center' },
                    }}
                >
                    <Button
                        component={RouterLink}
                        to='/about'
                        variant='contained'
                        size='large'
                    >
                        More about me
                    </Button>
                    <Button
                        component={RouterLink}
                        to='/contact'
                        variant='outlined'
                        size='large'
                        sx={{
                            color: 'text.primary',
                            borderColor: 'text.primary',
                        }}
                    >
                        Get in touch
                    </Button>
                </Stack>
            </PageColumn>

            <Dialog
                open={isOpen}
                onClose={close}
                fullScreen
                aria-label={current ? photoLabel(current) : 'Photo'}
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: alpha('#05090c', 0.96),
                            backgroundImage: 'none',
                        },
                    },
                }}
            >
                {current && (
                    <Box
                        sx={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: { xs: 1, sm: 3 },
                            pb: { xs: 2, sm: 3 },
                        }}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) close()
                        }}
                    >
                        <IconButton
                            aria-label='Close'
                            onClick={close}
                            sx={{
                                ...lightboxButtonSx,
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                zIndex: 1,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Box
                            component='picture'
                            key={current.name}
                            sx={{
                                display: 'contents',
                            }}
                        >
                            <source
                                type='image/avif'
                                srcSet={avifSrcSet(current.name)}
                                sizes={viewerSizes(
                                    current.width,
                                    current.height
                                )}
                            />
                            <Box
                                component='img'
                                src={fallbackSrc(current.name)}
                                alt={current.alt}
                                width={current.width}
                                height={current.height}
                                sx={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: 'calc(100% - 64px)',
                                    objectFit: 'contain',
                                    borderRadius: 1,
                                    // Show the already-loaded grid tile until the large file arrives
                                    background: placeholder
                                        ? `url(${placeholder}) center / contain no-repeat`
                                        : undefined,
                                }}
                            />
                        </Box>

                        <Stack
                            direction='row'
                            spacing={2}
                            sx={{
                                mt: 2,
                                alignItems: 'center',
                                color: 'common.white',
                            }}
                        >
                            <IconButton
                                aria-label='Previous photo'
                                onClick={() => step(-1)}
                                sx={lightboxButtonSx}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                            <Box sx={{ textAlign: 'center', minWidth: 0 }}>
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 600 }}
                                >
                                    {current.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{ opacity: 0.75 }}
                                >
                                    {[
                                        current.location,
                                        `${openIndex! + 1} of ${photos.length}`,
                                    ]
                                        .filter(Boolean)
                                        .join(' · ')}
                                </Typography>
                            </Box>
                            <IconButton
                                aria-label='Next photo'
                                onClick={() => step(1)}
                                sx={lightboxButtonSx}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                )}
            </Dialog>
        </main>
    )
}

export default Photography
