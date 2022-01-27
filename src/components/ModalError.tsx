import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  signIn?: boolean;
}

const ModalError = ({ isOpen, onClose, signIn }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderTopRadius="8px">
        <ModalHeader bg="primary" borderTopRadius="8px" color="white">Oooops</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody padding="20px">
          <Flex  direction='column' alignItems="center" justifyContent="center" textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              {!!signIn
                ? "Algo deu errado durante sua autenticação!"
                : "Este email já está em uso!"}
            </Text>
            <Text mt="20px" mb="20px">
              {!!signIn
                ? "Revise seus dados e tente novamente."
                : "Escolha outro email e tente novamente."}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
