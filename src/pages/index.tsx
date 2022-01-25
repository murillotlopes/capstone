import { useAuth } from "../contexts/Auth"
import { SignInForm } from "./SignInForm"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Flex, Image } from "@chakra-ui/react"
import Decor from "../assets/plant.png"

interface SignInData {
    email: string
    password: string
}

export const SignIn = () => {
    const { signIn } = useAuth()

    const SignInSchema = yup.object().shape({
        email: yup
        .string()
        .required("Campo obrigatório")
        .email("E-mail inválido"),
        password: yup
        .string()
        .required("Campo obrigatório")
    })

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm <SignInData> ({
        resolver: yupResolver(SignInSchema)
    })

    const handleSignIn = (data: SignInData) => {
        signIn(data)
        .then((_) => {
            console.log(data)
            // Adicionar toast
        })
        .catch((err) => {
            console.log(err)
            // Adicionar toast
        })
    }

    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
            h={"100vh"}
        >
            <SignInForm
                errors={errors}
                register={register}
                handleSignIn={handleSubmit(handleSignIn)}
            />
        </Flex>
    )
}
