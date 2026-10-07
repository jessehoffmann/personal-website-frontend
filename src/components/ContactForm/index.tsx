import React, { useState } from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type FieldName = 'name' | 'email' | 'message'
type FieldErrors = Partial<Record<FieldName, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState<FieldErrors>({})

    const clearError = (field: FieldName) => {
        setErrors((current) =>
            current[field] ? { ...current, [field]: undefined } : current
        )
    }

    const submitForm = (ev: React.FormEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const data = new FormData(form)
        const name = String(data.get('name') || '').trim()
        const email = String(data.get('email') || '').trim()
        const message = String(data.get('message') || '').trim()
        const nextErrors: FieldErrors = {}

        if (!name) nextErrors.name = 'Enter your name'
        if (!email) nextErrors.email = 'Enter your email'
        else if (!emailPattern.test(email))
            nextErrors.email = 'Enter a valid email'
        if (!message) nextErrors.message = 'Enter a message'

        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return

        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                setStatus('SUCCESS')
                form.reset()
            } else {
                setStatus('ERROR')
            }
        }
        xhr.send(data)
    }

    return (
        <form
            onSubmit={submitForm}
            action='https://formspree.io/mzbavqpp'
            method='POST'
            noValidate
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    textIndent: 0,
                }}
            >
                <Box
                    component='input'
                    type='text'
                    name='_gotcha'
                    tabIndex={-1}
                    autoComplete='off'
                    aria-hidden='true'
                    sx={{ display: 'none' }}
                />
                <TextField
                    disabled={status === 'SUCCESS'}
                    name='name'
                    label='Name'
                    variant='outlined'
                    fullWidth
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    onChange={() => clearError('name')}
                />

                <TextField
                    disabled={status === 'SUCCESS'}
                    name='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    onChange={() => clearError('email')}
                />

                <TextField
                    disabled={status === 'SUCCESS'}
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                    variant='outlined'
                    fullWidth
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    onChange={() => clearError('message')}
                />

                {status === 'SUCCESS' ? (
                    <Alert severity='success'>Thanks for your message!</Alert>
                ) : (
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'
                        endIcon={<SendIcon />}
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            alignSelf: { xs: 'stretch', sm: 'flex-start' },
                        }}
                    >
                        Send message
                    </Button>
                )}

                {status === 'ERROR' && (
                    <Alert severity='error'>
                        Oops! There was an error sending your message.
                    </Alert>
                )}
            </Box>
        </form>
    )
}

export default ContactForm
