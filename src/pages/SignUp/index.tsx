import { SignUpForm } from "./SignUpForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Image, useDisclosure, useToast } from "@chakra-ui/react";
import Decor from "../../assets/plant.png";
import { useAuth } from "../../contexts/Auth";
import ModalError from "../../components/ModalError"


interface SignUpData {
  email: string;
  password: string;
  confirm_password:string;   
}

export const SignUp = () => {

    const toast = useToast();

  const {isOpen, onClose, onOpen} = useDisclosure();


  const { signUp } = useAuth();
  const SignUpSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    const currentData = { email: data.email, password: data.password}
    signUp(currentData)
      .then((_) => {
        console.log(data);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((err) => {
        console.log(err);
        onOpen()
      });
  };




  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      h={"100vh"}
    >
      <Image
        src={Decor}
        position={"absolute"}
        w={["45%", "45%", "12%", "12%"]}
        h="auto"
        top={["40%", "15%", "40%", "25%"]}
        right={["60%", "85%", "85%", "85%"]}
      />
      <SignUpForm
        errors={errors}
        register={register}
        handleSignUp={handleSubmit(handleSignUp)}
      />
      <ModalError isOpen={isOpen} onClose={onClose}  />
    </Flex>
  );
};
