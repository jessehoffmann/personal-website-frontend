import React, { useState } from 'react'

const ContactForm = () => {
    const [status, setStatus] = useState('')

    const submitForm = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                setStatus('SUCCESS')
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
                style={status === 'SUCCESS' ? { opacity: 0.5 } : null}
                type='name'
                name='name'
                placeholder='Name'
            />
            <br />
            <input
                disabled={status === 'SUCCESS'}
                className='input-field'
                style={status === 'SUCCESS' ? { opacity: 0.5 } : null}
                type='email'
                name='email'
                placeholder='Email'
            />
            <br />
            <textarea
                disabled={status === 'SUCCESS'}
                className='input-field message'
                style={status === 'SUCCESS' ? { opacity: 0.5 } : null}
                type='text'
                name='message'
                placeholder='Message'
            />
            <br />
            {status === 'SUCCESS' ? (
                <p style={{ textAlign: 'center' }}>Thanks!</p>
            ) : (
                <button disabled={status === 'SUCCESS'} className='submit'>
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
