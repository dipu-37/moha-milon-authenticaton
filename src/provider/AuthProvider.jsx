
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types'

import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.comfig';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const Authcontext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children }) => {
    const [user, setUser]=useState(null);
    const [loading, setloading] = useState(true);

    const createUser =(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =()=>{
        setloading(true);
        return signOut(auth);
    }
    // Observe auth state change 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setloading(false);
            console.log('obsorving current user inside useEffect of AuthProvider',currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user,createUser,signInUser,logOut,loading,signInWithGoogle};
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

 

