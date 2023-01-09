import {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase'


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    //returns user as object

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        //function to make a post request to firebase authentication service
    }

    const logout = () => {
        return signOut(auth)

    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}