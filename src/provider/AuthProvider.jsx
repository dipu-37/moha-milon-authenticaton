
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'

import { createContext, useState } from "react";
import auth from '../firebase/firebase.comfig';

export const Authcontext = createContext(null);

const AuthProvider = ({children }) => {
    const [user, setUser]=useState(null);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {user,createUser};
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

 

