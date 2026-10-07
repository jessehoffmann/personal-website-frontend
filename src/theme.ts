import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#17404D',
            light: '#456670',
        },
        background: {
            default: '#FCFCFD',
            paper: '#FFFFFF',
        },
    },
    shape: {
        borderRadius: 14,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1000,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: "'Raleway', sans-serif",
        h1: {
            fontWeight: 300,
            fontSize: 'clamp(34px, 5vw, 62px)',
            lineHeight: 1.12,
        },
        h2: {
            fontWeight: 300,
            fontSize: '44px',
            lineHeight: 1.1,
        },
        h3: {
            fontWeight: 300,
            fontSize: '22px',
            lineHeight: 1.2,
            textAlign: 'center',
            '@media (min-width:600px)': {
                fontSize: '26px',
            },
        },
        h5: {
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: 1.3,
        },
        overline: {
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.14em',
            lineHeight: 1.4,
        },
        body1: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: 1.55,
        },
        body2: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                },
            },
        },
    },
})

export default theme
