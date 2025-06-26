import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.config.js";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  const signInWithGithub = () => {
    return signInWithPopup(auth).then((result) => {

      const user = result.user;

      const githubEmail = result._tokenResponse.email || result.user.email;
      if (!user.email && githubEmail) {
        updateProfile(user, {
          email: githubEmail,
        }).then(() => {
          setUser({ ...user, email: githubEmail });
        });
      }

      return result;
    });
  };

  const signUp = (email, password, name) => {
    // Register user with email/password
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // After signing up, update the profile with name
        return updateProfile(user, { displayName: name });
      })
      .then(() => {
        setUser({ ...auth.currentUser });
      });
  };

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const updateUserProfile = async (displayName, photoURL) => {
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser }); // Let onAuthStateChanged refresh if needed
  };

  const logOut = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out",
  }).then(async (result) => {
    if (result.isConfirmed) {
      setIsLoading(true);
      try {
        await signOut(auth);
        Swal.fire({
          icon: "success",
          title: "Logged out!",
          text: "You have been successfully logged out.",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } catch (error) {
        console.error("Logout error:", error);
        Swal.fire("Error", "Failed to log out.", "error");
      } finally {
        setIsLoading(false);
      }
    }
  });
};


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    isLoading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
