import { Flex, Heading } from "@chakra-ui/react"
import { DeepMap, FieldError, FieldValues } from "react-hook-form"
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
        bgColor={"chardon"}
        justifyContent={"center"}
        alignItems={"center"}
        w={[
            "90%", "80%", "40%", "40%"
        ]}
        h={[
            "60%", "60%", "55%", "55%"
        ]}
        position={"relative"}
    >
        <Heading as="h3">Entrar</Heading>
        <input
            {...register("email")}
            error={errors.email}
            placeholder="E-MAIL"
            name="email"
        />
        <input
            {...register("password")}
            error={errors.password}
            placeholder="SENHA"
            name="password"
            type={"password"}
        />
        <button type="submit">Login</button>
    </Flex>
)