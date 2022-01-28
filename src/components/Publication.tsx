import {
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/Auth";
import { usePublication } from "../contexts/Publication";

interface NewPublication {
  isOpen: boolean;
  onClose: () => void;
}

const NewPublication = ({ isOpen, onClose }: NewPublication) => {
  const { addPublication } = usePublication();

  const { user } = useAuth();

  const handleNewpublication = () => {
    return addPublication;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        Que bom saber que te ajudamos a fazer mágica com o que tinha na cozinha!
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Heading>Conte-nos mais sobre a sua experiência.</Heading>
        <Select placeholder='Escolha a categoria da sua receita'>
  <option value='fitness'>Fitness</option>
  <option value='sobremesa'>Sobremesa</option>
  <option value='entradas'>Entradas</option>
  <option value='prato-principal'>Prato Principal</option>
</Select>
      </ModalBody>
    </Modal>
  );
};

export default NewPublication;
