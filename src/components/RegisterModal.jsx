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

const RegisterModal = () => {
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
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registration
              </ModalHeader>
              <ModalBody>
                <Input
                  key="outside"
                  type="text"
                  label="Full Name"
                  labelPlacement="outside"
                  placeholder="Enter your full name"
                />
                <Input
                  key="outside"
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                />
                <Input
                  key="outside"
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your password"
                />
                <Input
                  key="outside"
                  type="password"
                  label="Confirm password"
                  labelPlacement="outside"
                  placeholder="Confirm password"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="w-full" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
