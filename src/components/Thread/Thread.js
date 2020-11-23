import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { MoreHoriz, SendRounded, TimerOutlined, MicNoneOutlined } from '@material-ui/icons'
import './Thread.css'

const Thread = () => {
    const [input, setInput] = useState('')

    const sendMessage = (event) => {
        event.preventDefault()

        setInput('')
    }

    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar />
                    <div className="thread__header__contents__info">
                        <h4>Threadname</h4>
                        <h5>Last seen</h5>
                    </div>
                </div>
                <IconButton>
                    <MoreHoriz className="thread__header__details" />
                </IconButton>
            </div>
            <div className="thread__messages">messages</div>
            <div className="thread__input">
                <form>
                    <input
                        placeholder="Type your message..."
                        type="text"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                    />
                    <IconButton>
                        <TimerOutlined></TimerOutlined>
                    </IconButton>
                    <IconButton onClick={sendMessage}>
                        <SendRounded />
                    </IconButton>
                    <IconButton>
                        <MicNoneOutlined></MicNoneOutlined>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Thread