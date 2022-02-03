import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Box, Flex, VStack, Image, Center} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FiArrowLeft, FiArrowRight, FiUser } from 'react-icons/fi'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import { useAuth } from '../../contexts/Auth'
import { useState } from 'react'
import { useIcons } from '../../contexts/Icons'
import { Input } from '../Form/Input'

export const EditProModal = () => {
    const {isOpen: isEditProOpen, onClose: onEditProClose, onOpen: onEditProOpen} = useDisclosure()
    const { user, signUpdate } = useAuth()
    const { icons } = useIcons()

    const [ chgUsername, setChgUsername] = useState(user.username)
    const [ chgProfile, setChgProfile] = useState(user.profile)
    const [ chgPassword, setChgPassword] = useState('')
    const [ chgEmail, setChgEmail] = useState(user.email)
    const [ position, setPosition] = useState(0)


    const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório'),
        profile: yup.string(),
    })

    const { register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const rightProfile = () => {
        const size = icons.length-1

        if(position === size){
            setPosition(0)
        }else{
            setPosition(position+1)
        }

        setChgProfile(icons[position].image)
    }

    const leftProfile = () => {
        const size = icons.length-1

        if(position === size){
            setPosition(0)
        }else{
            setPosition(position-1)
        }

        setChgProfile(icons[position].image)
    }

    const saveEditProfile = () => {
        const data = {username:chgUsername, profile: chgProfile, email: chgEmail, password: chgPassword }

        signUpdate(data, onEditProClose)            
    }

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

                    <Flex as={'form'} onSubmit={handleSubmit(saveEditProfile)}>
                        <VStack w={'100%'}>

                            <Flex flexDir={'column'} alignItems={'center'}>
                                <Image 
                                    src={chgProfile} 
                                    h={'120px'} 
                                    shadow={'outline'} 
                                    borderRadius={'5px'}
                                    marginBottom={'5px'}
                                />
                                <Flex w={'100px'} justifyContent={'space-around'}>
                                    <Center 
                                        backgroundColor={'primary'} 
                                        w={'35px'} 
                                        h={'35px'} 
                                        cursor={'pointer'} 
                                        borderRadius={'5px'}
                                        onClick={leftProfile}
                                    >
                                        <FiArrowLeft color='white'/>
                                    </Center>

                                    <Center 
                                        backgroundColor={'primary'} 
                                        w={'35px'} 
                                        h={'35px'} 
                                        cursor={'pointer'} 
                                        borderRadius={'5px'}
                                        onClick={rightProfile}
                                    >
                                        <FiArrowRight color='white'/>
                                    </Center>
                                </Flex>
                            </Flex>

                            <Input
                                {...register('username')} 
                                value={chgUsername} 
                                placeholder='Seu nome'
                                onChangeCapture={ e => setChgUsername(e.currentTarget.value)}
                                error={errors.username}
                            />

                            <Input 
                                {...register('email')} 
                                value={chgEmail} 
                                placeholder='Seu e-mail'
                                onChangeCapture={e => setChgEmail(e.currentTarget.value)}
                                error={errors.email}
                            />

                            <Input 
                                {...register('password')} 
                                value={chgPassword}
                                placeholder='Sua senha'
                                onChangeCapture={e => setChgPassword(e.currentTarget.value)}
                                type={'password'}
                                error={errors.password}
                            />

                            <Button filled text='Salvar' type='submit'/>

                        </VStack>
                    </Flex>

                </ModalBody>

            </ModalContent>
            </Modal>
        </>
    )
}