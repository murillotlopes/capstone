import { Button as ChakraButton, Flex, Heading, Text } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Input } from "../../components/Form/Input";

interface SignInData {
  email: string;
  password: string;
}

interface SignInProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
}

export const SignInForm = ({ handleSignIn, errors, register }: SignInProps) => {
  const history = useHistory();
  return (
    <Flex
      as="form"
      onSubmit={handleSignIn}
      flexDirection={"column"}
      bgColor={"bgColor"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      w={["80%", "55%", "45%", "40%"]}
      h={["60%", "60%", "70%", "70%"]}
      position={"relative"}
      padding={"5rem"}
      boxShadow="lg"
      p="6"
      rounded="lg"
      margin={["0 auto", "0 auto", "0 auto", "0 auto"]}
    >
      <Heading bgGradient="linear(to-l, black, primary)" bgClip="text" as="h3">
        Entrar
      </Heading>
      <Flex flexDirection={"column"}>
        <Input
          icon={FiUser}
          {...register("email")}
          error={errors.email}
          placeholder="E-MAIL"
          name="email"
        />
        <Input
          icon={FiLock}
          {...register("password")}
          error={errors.password}
          placeholder="SENHA"
          name="password"
          type={"password"}
        />
        <Button
          width={"100%"}
          type="submit"
          text="Entrar"
          margin="1rem auto"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="gray.800"
          bgClip="text"
          _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
        />
        <Text textAlign={"center"}>
          Ainda não possui conta?
          <br />
          <ChakraButton
            variant="link"
            bg="gray.800"
            bgClip="text"
            onClick={() => history.push("/signup")}
          >
            Cadastre-se
          </ChakraButton>
        </Text>
      </Flex>
    </Flex>
  );
};
