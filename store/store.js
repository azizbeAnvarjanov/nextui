import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { create } from "zustand";
import { auth, db } from "../firebaseConfig";

const useStore = create((set, get) => ({
  user: null,
  validateRegister: (
    e,
    auth,
    email,
    password,
    confPassword,
    fullName,
    avatarImg,
    onClose
  ) => {
    e.preventDefault();
    const register = get().register;

    if (password !== confPassword) {
      toast.error("Parollar bir xil emas !");
      return;
    }

    register(auth, email, password, fullName, avatarImg, onClose);
  },
  register: (auth, email, password, fullName, avatarImg, onClose) => {
    const getUserdetails = get().getUserdetails;
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      toast.success("User created success !");
      localStorage.setItem("user", JSON.stringify(res.user));
      setDoc(doc(db, "Users", res.user.uid), {
        email,
        fullName,
        avatarImg,
      })
        .then(() => {
          onClose();
          toast.success("user doc created");
          getUserdetails();
        })
        .catch((err) => {
          toast.error(err);
        });
    });
  },
  loginUser: (e, auth, email, password,onClose) => {
    e.preventDefault();
    const getUserdetails = get().getUserdetails;
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      toast.success("Sign in success !");
      localStorage.setItem("user", JSON.stringify(res.user));
      onClose();
      getUserdetails();
    });
  },
  getUserdetails: async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const docSnap = await getDoc(doc(db, "Users", user.uid));
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        localStorage.setItem("userDetails", JSON.stringify(docSnap.data()));
        window.location.reload();
      } else {
        console.log("No such document!");
      }
    }
  },
  logOutUser: () => {
    auth.signOut();
    localStorage.clear();
    window.location.reload();
  },
}));

export default useStore;
