import { Flex, Heading } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
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

export const SignInForm = ({ handleSignIn, errors, register }: SignInProps) => (
  <Flex
    as="form"
    onSubmit={handleSignIn}
    flexDirection={"column"}
    bgColor={"bgColor"}
    justifyContent={"space-evenly"}
    alignItems={"center"}
    w={["90%", "55%", "40%", "40%"]}
    h={["60%", "60%", "400px", "450px"]}
    position={"relative"}
    padding={"5rem"}
    boxShadow="lg"
    p="6"
    rounded="lg"
    margin={["0 auto", "0 auto", "0", "0"]}
  >
    <Heading color={"violet.900"} as="h3">
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
        text="Login"
        margin="1rem auto"
        boxShadow="md"
        p="6"
        rounded="md"
      />
    </Flex>
  </Flex>
);
