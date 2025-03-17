import { auth } from '../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null) ;
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const unsunscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser);
       setLoading(false);
    });
    return ()=>unsunscribe()
  },[]);

  const login = (email,password)=>{
    return  signInWithEmailAndPassword(auth,email,password);
  }
  const signup = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logout = ()=> signOut(auth)

  return (
    <AuthContext.Provider value={{user,login,signup,logout}}>
       {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useAuth = ()=>useContext(AuthContext)