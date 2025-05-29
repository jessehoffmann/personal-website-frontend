import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { 
    TextField, 
    Button, 
    Box, 
    Container,
    Alert
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ContactForm = () => {
    const [status, setStatus] = useState('')
    const [isVerified, setIsVerified] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const handleRecaptchaChange = (token: string | null) => {
        setIsVerified(!!token)
    }

    const submitForm = async (ev: React.FormEvent) => {
        ev.preventDefault()
        
        if (!isVerified) {
            setStatus('VERIFY')
            return
        }

        const form = ev.target as HTMLFormElement
        const data = new FormData(form)
        
        // Add reCAPTCHA token to form data
        const recaptchaToken = await recaptchaRef.current?.executeAsync()
        if (recaptchaToken) {
            data.append('g-recaptcha-response', recaptchaToken)
        }

        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                setStatus('SUCCESS')
                recaptchaRef.current?.reset()
                setIsVerified(false)
            } else {
                setStatus('ERROR')
            }
        }
        xhr.send(data)
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 2 }}>
                <form
                    onSubmit={submitForm}
                    action='https://formspree.io/mzbavqpp'
                    method='POST'
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textIndent: 0 }}>
                        <TextField
                            disabled={status === 'SUCCESS'}
                            name='name'
                            label='Name'
                            variant='outlined'
                            required
                            fullWidth
                        />
                        
                        <TextField
                            disabled={status === 'SUCCESS'}
                            name='email'
                            label='Email'
                            type='email'
                            variant='outlined'
                            required
                            fullWidth
                        />
                        
                        <TextField
                            disabled={status === 'SUCCESS'}
                            name='message'
                            label='Message'
                            multiline
                            rows={4}
                            variant='outlined'
                            required
                            fullWidth
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6Ld6-U4rAAAAAOd1vtGL_Hj-_QKfJSd3W_57DbQu"
                                onChange={handleRecaptchaChange}
                                size="normal"
                            />
                        </Box>

                        {status === 'VERIFY' && (
                            <Alert severity="warning">
                                Please verify that you are not a robot
                            </Alert>
                        )}

                        {status === 'SUCCESS' ? (
                            <Alert severity="success">
                                Thanks for your message!
                            </Alert>
                        ) : (
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={status === 'SUCCESS' || !isVerified}
                                endIcon={<SendIcon />}
                                sx={{ 
                                    opacity: !isVerified ? 0.5 : 1,
                                }}
                            >
                                Send Message
                            </Button>
                        )}

                        {status === 'ERROR' && (
                            <Alert severity="error">
                                Oops! There was an error sending your message.
                            </Alert>
                        )}
                    </Box>
                </form>
        </Container>
    )
}

export default ContactForm
