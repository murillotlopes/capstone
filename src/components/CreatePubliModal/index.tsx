import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { usePublication } from "../../contexts/Publication"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { PublicationForm } from "./PublicationForm";

interface CreatePubliModalProps {
    isOpen: boolean
    onClose: () => void

}

interface PublicationData {
    userId: number
    icon: string
    username: string
    photo: string
    category: string
    description: string
    id: number       
}

export const CreatePubliModal = ({ isOpen, onClose }: CreatePubliModalProps) => {
    
    const { addPublication } = usePublication()

    const PublicationShema = yup.object().shape({
        description: yup.string().required("Campo obrigatório")
    })

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<PublicationData>({
        resolver: yupResolver(PublicationShema)
    })

    const handlePublication = (data: PublicationData) => {
        addPublication(data)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>O que deseja compartilhar?</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <PublicationForm
                    errors={errors}
                    register={register}
                    handlePublication={handleSubmit(handlePublication)}
                    />
                </ModalBody>
                <ModalFooter/>
            </ModalContent>
        </Modal>
    )
}