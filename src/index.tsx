import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import App from './App'
import theme from './theme'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>
)
