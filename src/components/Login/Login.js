import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import './Login.css'
import telegramLogo from './telegram.png'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch((error) => {
                alert(error.message)
            })
    }
    
    return (
        <div className="login">
            <div className="login__telegram">
                <img
                    src={telegramLogo}
                    alt="telegram-logo"
                />
                <h1>Telegram</h1>
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login