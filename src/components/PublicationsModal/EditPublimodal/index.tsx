import {
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { usePublication } from "../../../contexts/Publication";
import { Input } from "../../Form/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Button";
import { Select } from "../../Form/InputSelect";
import { FaEdit } from "react-icons/fa";
import EditForm from "./EditPubliForm";
import { useState } from "react";

interface Publication { 
  userId: number;
  icon: string;
  username: string;
  category: string;
  description: string;
  id: number;
  date: string;
}

interface EditModalprops {
  publication: Publication;
}

interface PublicationEditData {
  category: string;
  description: string;
}

const EditModal = ({ publication }: EditModalprops) => {
  const { editPublication } =
    usePublication();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [testing, setTesting] = useState(false);

  const PublicationEditShema = yup.object().shape({
    description: yup.string(),
    photo: yup.string(),
    category: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<PublicationEditData>({
    resolver: yupResolver(PublicationEditShema),
  });

  const handleEditPublication =  (data: PublicationEditData) => {
  

    let editData = {};

    if (data.category !== "") {
      editData = {
        ...editData,
        category: data.category,
      }
    }
    if (data.description !== "") {
      editData = {
        ...editData,
        description: data.description,
      }
    }

  
    return editPublication(publication, editData, onClose);
  };

  return (
    <>
      <Center
        fontSize="2xl"
        color="gray.600"
        as="button"
        onClick={() => onOpen()}
      >
        <FaEdit />
      </Center>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            mr="10px"
            bg="chardon"
            borderTopRadius="8px"
            color="primary"
          >
            Preencha os campos que deseja alterar
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm
              errors={errors}
              register={register}
              handleEditPublication={handleSubmit(handleEditPublication)}
            />
          </ModalBody>
        </ModalContent>
      </Modal>{" "}
    </>
  );
};

export default EditModal;
