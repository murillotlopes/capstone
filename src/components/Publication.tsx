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
import Button from "./Button";

interface NewPublicationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HandleNewPublicationProps{
  image:string;
  category: string;
  description: string;
}

const NewPublication = ({ isOpen, onClose }: NewPublicationProps) => {
  const { addPublication } = usePublication();
  const { user } = useAuth();

  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")


  const handleNewpublication = (image, category,description )=> {
    return addPublication;
  };

  //Funcao para fazer upload da foto para API

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        Que bom saber que te ajudamos a fazer mágica com o que tinha na cozinha!
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>

        <Heading>Conte-nos mais sobre a sua experiência.</Heading>
        <Flex as="form"
        onSubmit={}>
          <Input placeholder="Cole o link da imagem desejada" onChangeCapture={e => setImage(e.currentTarget.value)} />
        <Input placeholder="o que você achou ?" variant="outline" onChangeCapture={e => setDescription(e.currentTarget.value)} />
        <Select variant="outline"  placeholder="Escolha a categoria da sua receita" onChangeCapture={e => setCategory(e.currentTarget.value)}>
          <option value="fitness">Fitness</option>
          <option value="sobremesa">Sobremesa</option>
          <option value="entradas">Entradas</option>
          <option value="prato-principal">Prato Principal</option>
        </Select>
        <Button  text="Postar" type="submit" />
        </Flex>
        
      </ModalBody>
    </Modal>
  );
};

export default NewPublication;
