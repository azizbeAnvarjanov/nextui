import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import useStore from "../../store/store";

const RegisterModal = () => {
  // custom states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [avatarImg, setAvatarImg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QpKHeBbrELrNRa-63gDAsBM2TQR3GzSxCYwMw73LVw&s"
  );

  // next ui components
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  // custom functions

  // 1 register function
  const validateRegister = useStore((state) => state.validateRegister);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="shadow"
          color="primary"
          onPress={() => handleOpen("blur")}
          className="capitalize"
        >
          Register
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={(e) => validateRegister(e,auth,email,password,confPassword, fullName,avatarImg,onClose)}>
              <ModalHeader className="flex flex-col gap-1">
                Registration
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Full Name"
                  labelPlacement="outside"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  type="password"
                  label="Confirm password"
                  labelPlacement="outside"
                  placeholder="Confirm password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" className="w-full">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
