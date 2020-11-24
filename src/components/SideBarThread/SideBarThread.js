import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar } from '@material-ui/core'
import './SideBarThread.css'
import database from '../../firebase'
import { setThread } from "../../features/threadSlice"

const SideBarThread = ({ id, threadName }) => {
    const dispatch = useDispatch()
    const [threadInfo, setThreadInfo] = useState([])

    useEffect(() => {
        database.collection("threads")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setThreadInfo(snapshot.docs.map((doc) => doc.data()));
            })
    }, [id])

    const handleClick = () => {
        dispatch(setThread({
            threadId: id,
            threadName: threadName
          }))
    }

    return (
        <div
            className="sidebarThread"
            onClick={handleClick}
        >
            <Avatar src={threadInfo[0]?.photo} />
            <div className="sidebarThread__details">
                <h3>{threadName}</h3>
                <p>{threadInfo[0]?.message}</p>
                <small className="sidebarThread__timestamp">
                    {new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()}
                </small>
            </div>
        </div>
    )
}

export default SideBarThread