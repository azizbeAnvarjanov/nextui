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
import useStore from "../../store/store";
import { auth } from "../../firebaseConfig";

const LoginModal = () => {
  //  custom states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // next ui
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  // custom functions

  // 1 login function
  const loginUser = useStore((state) => state.loginUser);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="bordered"
          color="primary"
          onPress={() => handleOpen("blur")}
          className="capitalize"
        >
          Login
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={(e) => loginUser(e, auth, email, password,onClose)}>
              <ModalHeader className="flex flex-col gap-1 text-center text-3xl font-bold">
                Login
              </ModalHeader>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" className="w-full">
                  Login
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
