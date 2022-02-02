import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { usePublication } from "../../contexts/Publication";

interface Publication {
  userId: number;
  icon: string;
  username: string;
  photo: string;
  category: string;
  description: string;
  id: number;
  date:string;
}

interface DeleteConfirmationProps {
  publication: Publication;
}

const DeleteConfirmModal = ({
  publication,
}: DeleteConfirmationProps) => {
  const { deletePublication } = usePublication();
  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <>
      <Center as="button" fontSize="xl" color="gray.600" onClick={() => onOpen()}>
        <FaTrash />
      </Center>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent h="250px">
          <ModalHeader bg="primary" borderTopRadius="8px" color="white">
            Oopa
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mt="50px">
            Tem certeza de que deseja deletar essa publicação?
          </ModalBody>
          <ModalFooter
            m=" 20px 0 "
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Button
              color="white"
              fontSize="lg"
              bg="primary"
              onClick={() => deletePublication(publication)}
              _hover={{ bg: "secondary" }}
            >
              Tenho Certeza
            </Button>
            <Button
              onClick={onClose}
              color="primary"
              fontSize="lg"
              _hover={{ bg: "chardon" }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteConfirmModal;
