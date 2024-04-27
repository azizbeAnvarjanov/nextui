import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebaseConfig";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    if (!user) {
      navigate("/");
      toast.error("User not loged in");
    }
  });
  const avatarImg = user?.avatarImg;

  return (
    <div>
      <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full object-cover"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full object-cover"
              src={avatarImg}
              alt=""
            />
          </div>
          <div>
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">
                {user?.fullName}
              </h2>
              <p>{user?.email}</p>
            </div>
            <input type="file" onChange={(e) => uploadImg(e.target.files[0])} />
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <span className="font-semibold">2.5 k </span> Followers
                </p>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  {" "}
                  <span className="font-semibold">2.0 k </span> Following
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
