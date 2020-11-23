import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Telegram from './components/Telegram/Telegram'
import Login from './components/Login/Login'
import { auth } from './firebase'
import { login, logout, selectUser } from './features/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div>
      { user ? <Telegram /> : <Login /> }
    </div>
  )
}

export default App