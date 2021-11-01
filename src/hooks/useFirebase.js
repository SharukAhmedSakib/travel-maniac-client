import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState("");
  //   const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  //   const toggleLogin = (e) => {
  //     setIsLogin(e.target.checked);
  //   };

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleRegistration = (e) => {
  //     e.preventDefault();
  //     if (password.length < 6) {
  //       setError("Password Must be at least 6 characters long.");
  //       return;
  //     }
  //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
  //       setError("Password Must contain 2 upper case");
  //       return;
  //     }

  //     if (isLogin) {
  //       processLogin(email, password);
  //     } else {
  //       registerNewUser(email, password);
  //     }
  //   };

  //   const processLogin = (email, password) => {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         setError("");
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   };

  //   const registerNewUser = (email, password) => {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         setError("");
  //         verifyEmail();
  //         setUserName();
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   };

  //   const setUserName = () => {
  //     updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  //   };

  //   const verifyEmail = () => {
  //     sendEmailVerification(auth.currentUser).then((result) => {});
  //   };

  //   const handleResetPassword = () => {
  //     sendPasswordResetEmail(auth, email).then((result) => {});
  //   };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    // error,
    isLoading,
    // isLogin,
    // handleRegistration,
    // handleNameChange,
    // handleEmailChange,
    // handlePasswordChange,
    // toggleLogin,
    signInUsingGoogle,
    // handleResetPassword,
    logOut,
  };
};

export default useFirebase;
