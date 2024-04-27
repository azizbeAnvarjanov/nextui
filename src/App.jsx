import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.uid);

  const getUser = async () => {
    const docSnap = await getDoc(doc(db, "Users", user.uid));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      localStorage.setItem("userDetails", JSON.stringify(docSnap.data()));
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
