/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import { clearCookie } from '../api/auth'
import axios from 'axios'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const axiosPublic= useAxiosPublic()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut =() => {
    setLoading(true)
    // await clearCookie()
    
    return signOut(auth)

  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if (currentUser) {
        const userInfo = { email: currentUser.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            console.log(res.data);
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
            }
          })
      } else {
        console.log('no user');
        localStorage.removeItem('access-token');
      }
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosPublic])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
