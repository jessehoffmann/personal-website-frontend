import { Box, type BoxProps } from '@mui/material'

export const pageGutterPx = { xs: 16, sm: 24 }
export const pageMaxWidth = 1000

export const pageColumnSx = {
    width: {
        xs: `calc(100% - ${pageGutterPx.xs * 2}px)`,
        sm: `calc(100% - ${pageGutterPx.sm * 2}px)`,
    },
    maxWidth: pageMaxWidth,
    mx: 'auto',
    minWidth: 0,
}

const PageColumn = ({ sx, ...props }: BoxProps) => (
    <Box
        {...props}
        sx={[pageColumnSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
)

export default PageColumn
