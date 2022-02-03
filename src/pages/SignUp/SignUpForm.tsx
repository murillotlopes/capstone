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
import { Input } from "../../components/Form/Input";
import Button from "../../components/Button";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface SignUpProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
}

export const SignUpForm = ({ handleSignUp, errors, register }: SignUpProps) => {
  const history = useHistory();

  return (
    <Flex
      as="form"
      onSubmit={handleSignUp}
      flexDirection={"column"}
      bgColor={"bgColor"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      w={["90%", "55%", "40%", "40%"]}
      h={["60%", "60%", "70%", "70%"]}
      position={"relative"}
      padding={"5rem"}
      boxShadow="md"
      p="6"
      rounded="md"
      margin={["0 auto", "0 auto", "0 auto", "0 auto"]}
    >
      <Heading bgGradient="linear(to-l, black, primary)" bgClip="text" as="h3">
        Cadastrar
      </Heading>
      <Flex flexDirection={"column"} alignItems="center">
        <Input
          icon={FiUser}
          {...register("username")}
          error={errors.name}
          placeholder="USERNAME"
          name="username"
        />
        <Input
          icon={FiUser}
          {...register("email")}
          error={errors.email}
          placeholder="EMAIL"
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
          text="Cadastrar"
          margin="1rem auto"
          boxShadow="md"
          p="6"
          rounded="md"
          _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
          bg="gray.800"
          bgClip="text"
        />
        <Text>
          Já possui cadastro?
          <ChakraButton
            variant="link"
            color="gray.800"
            onClick={() => history.push("/signin")}
          >
            Faça login
          </ChakraButton>
        </Text>
      </Flex>
    </Flex>
  );
};
