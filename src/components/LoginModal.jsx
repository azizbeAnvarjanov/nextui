import React from "react";
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

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };
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
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-3xl font-bold">
                Login
              </ModalHeader>
              <ModalBody>
                <Input
                  key='outside'
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                />
                <Input
                  key='outside'
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your password"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="w-full" onPress={onClose}>
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
