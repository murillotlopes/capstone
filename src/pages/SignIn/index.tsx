import { useAuth } from "../../contexts/Auth";
import { SignInForm } from "./SignInForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Decor from "../../assets/plant.png";
import Logo from "../../assets/logo.png";
import ModalError from "../../components/Form/ModalError";
import { FiArrowLeftCircle } from "react-icons/fi";

interface SignInData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const toast = useToast();
  const history = useHistory();
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
      <Box
        position="fixed"
        right="0"
        top="0"
        fontSize="40px"
        margin={["10px", "30px 30px 0 0"]}
        _hover={{ color: "white", transition: "0.5s" }}
        cursor="pointer"
      >
        <FiArrowLeftCircle type="button" onClick={() => history.push("/")} />
      </Box>

      <Flex
        h={"100vh"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Link
          href="/"
          textDecor={"none"}
          _hover={{ textDecor: "none" }}
          cursor={"pointer"}
        >
          <Image
            src={Logo}
            position={"absolute"}
            w={["100px", "120px"]}
            margin={["10px", "15px 0 0 30px"]}
          />
        </Link>
        <Image src={Decor} position={"absolute"} bottom="0" h="70%" />
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
