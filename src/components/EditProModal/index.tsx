import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Box} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FiUser } from 'react-icons/fi'
import { ProfileForm } from './ProfileForm'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export const EditProModal = () => {
    const {isOpen: isEditProOpen, onClose: onEditProClose, onOpen: onEditProOpen} = useDisclosure()

    const schema = yup.object().shape({

    })

    const { register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })


    return(
        <>
            <Box
            bgSize="30px"
            onClick={() => onEditProOpen()}
            _hover={{ cursor: "pointer" }}
            >
                <FiUser />
            </Box>


            <Modal isOpen={isEditProOpen} onClose={onEditProClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <ProfileForm/>
                </ModalBody>

                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onEditProOpen}>
                    Salve
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}