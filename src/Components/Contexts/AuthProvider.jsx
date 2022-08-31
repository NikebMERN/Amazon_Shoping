import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import auth from '../../firbase';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [users, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('Users', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const UserAuth = () => useContext(AuthContext);