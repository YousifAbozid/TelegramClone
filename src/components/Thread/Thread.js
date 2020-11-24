import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { MoreHoriz, SendRounded, TimerOutlined, MicNoneOutlined } from '@material-ui/icons'
import './Thread.css'
import firebase from 'firebase'
import database from '../../firebase'
import { useSelector } from 'react-redux'
import { selectThreadId, selectThreadName } from '../../features/threadSlice'
import { selectUser } from '../../features/userSlice'
import Message from '../Message/Message'

const Thread = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const user = useSelector(selectUser)
    const threadName = useSelector(selectThreadName)
    const threadId = useSelector(selectThreadId)

    useEffect(() => {
        if (threadId) {
            database
                .collection('threads')
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapShot((snapshot) => setMessages(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data
                    }
                })))
        }
    }, [])

    const sendMessage = (event) => {
        event.preventDefault()
        database
            .collection('threads')
            .doc(threadId) // this not working now in 3:35 min, I know where is the bug and they don't ha
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName: user.displayName
            })

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
            <div className="thread__messages">
                {messages.map(({ id, data }) => (
                    <Message key={id} data={data} />
                ))}
            </div>
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