import { useAuth } from "../../contexts/Auth";
import { SignInForm } from "./SignInForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Flex,
  Image,
  Link,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Decor from "../../assets/plant.png";
import Logo from "../../assets/logo.png"
import ModalError from "../../components/ModalError";

interface SignInData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { signIn } = useAuth();

  const SignInSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    signIn(data)
      .then((_) => {
        toast({
          position: "top",
          title: `Seja bem-vindo(a).`,
          description: "Ótimo te ver por aqui novamente!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        onOpen();
      });
  };

  return (
    <Flex
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      h={"100vh"}
    >
      <Flex
        h={"100vh"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Link href="/" textDecor={"none"} _hover={{ textDecor: "none" }} cursor={"pointer"} >
          <Image
            src={Logo}
            position={"absolute"}
            w={"85px"}
            margin={"10px"}
          />
        </Link>
        <Image 
          src={Decor} 
          position={["absolute"]}
          w={["20%", "20%", "15%", "10%"]}
          h="auto"
          top={["50%", "25%", "30%", "30%"]}
          right={["80%", "80%", "85%", "90%"]}
        />
      </Flex>
      <SignInForm
        errors={errors}
        register={register}
        handleSignIn={handleSubmit(handleSignIn)}
      />
      <ModalError isOpen={isOpen} onClose={onClose} signIn />
    </Flex>
  );
};
