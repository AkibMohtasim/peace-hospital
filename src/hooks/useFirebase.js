import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();



  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSignInWithEmailPassword = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user)
        console.log(result.user)
      })
  }

  const handleRegistration = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user, email, password);
      })
  }



  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }


  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
    })
  }, [])


  return {
    user,
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleSignInWithEmailPassword,
    logOut
  }
}


export default useFirebase;