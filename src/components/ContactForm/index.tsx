import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

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
        <form
            onSubmit={submitForm}
            action='https://formspree.io/mzbavqpp'
            method='POST'
            className='contact-form'
        >
            <br />
            <input
                disabled={status === 'SUCCESS'}
                className='input-field'
                style={status === 'SUCCESS' ? { opacity: 0.5 } : undefined}
                type='name'
                name='name'
                placeholder='Name'
                required
            />
            <br />
            <input
                disabled={status === 'SUCCESS'}
                className='input-field'
                style={status === 'SUCCESS' ? { opacity: 0.5 } : undefined}
                type='email'
                name='email'
                placeholder='Email'
                required
            />
            <br />
            <textarea
                disabled={status === 'SUCCESS'}
                className='input-field message'
                style={status === 'SUCCESS' ? { opacity: 0.5 } : undefined}
                name='message'
                placeholder='Message'
                required
            />
            <br />
            <div style={{ margin: '20px 0' }}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Ld6-U4rAAAAAOd1vtGL_Hj-_QKfJSd3W_57DbQu"
                    onChange={handleRecaptchaChange}
                    size="normal"
                />
            </div>
            {status === 'VERIFY' && (
                <p style={{ textAlign: 'center', color: 'red' }}>
                    Please verify that you are not a robot
                </p>
            )}
            {status === 'SUCCESS' ? (
                <p style={{ textAlign: 'center' }}>Thanks!</p>
            ) : (
                <button 
                    disabled={status === 'SUCCESS' || !isVerified} 
                    className='submit'
                    style={{ opacity: !isVerified ? 0.5 : 1 }}
                >
                    Submit
                </button>
            )}
            {status === 'ERROR' && (
                <p style={{ textAlign: 'center' }}>
                    Ooops! There was an error.
                </p>
            )}
        </form>
    )
}

export default ContactForm
