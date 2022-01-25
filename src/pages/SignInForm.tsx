import { Flex, Heading } from "@chakra-ui/react"
import { DeepMap, FieldError, FieldValues } from "react-hook-form"
import { FiUser } from "react-icons/fi"
import { FiLock } from "react-icons/fi"
import Button from "../components/Button"
import { Input } from "../components/Form/Input"

interface SignInProps {
    handleSignIn: () => void
    errors: DeepMap<FieldValues, FieldError>
    register: any
}

export const SignInForm = ({ handleSignIn, errors, register }: SignInProps) => (
    <Flex
        as="form"
        onSubmit={handleSignIn}
        flexDirection={"column"}
        bgColor={"bgColor"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={[
            "90%", "80%", "40%", "40%"
        ]}
        h={[
            "60%", "60%", "70%", "70%"
        ]}
        position={"relative"}
        padding={"5rem"}
        boxShadow='md' p='6' rounded='md'
    >
        <Heading color={"violet.900"} as="h3">Entrar</Heading>
        <Flex flexDirection={"column"}>
        <Input
            icon={FiUser}
            {...register("email")}
            error={errors.email}
            placeholder="E-MAIL"
            name="email"
            mb={"1rem"}
        />
        <Input
            icon={FiLock}
            {...register("password")}
            error={errors.password}
            placeholder="SENHA"
            name="password"
            type={"password"}
        />
        <Button width={"100%"} type="submit" text="Login" margin="1rem auto" boxShadow='md' p='6' rounded='md'/>
        </Flex>
    </Flex>
)