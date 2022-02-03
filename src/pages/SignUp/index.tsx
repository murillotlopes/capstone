import { SignUpForm } from "./SignUpForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
import { useAuth } from "../../contexts/Auth";
import ModalError from "../../components/Form/ModalError";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FiArrowLeftCircle } from "react-icons/fi";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const toast = useToast();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const history = useHistory();

  const { signUp } = useAuth();
  const SignUpSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    const currentData = {
      username: data.username,
      email: data.email,
      password: data.password,
      profile:
        "https://raw.githubusercontent.com/thdias00/capstone/develop/src/assets/profileHolder.png",
    };
    signUp(currentData)
      .then((_) => {
        console.log(data);
        toast({
          position: "top",
          title: "Conta criada com sucesso! ",
          description: "Por favor, faça o login.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        history.push("/dashboard");
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
        flexDirection={"column"}
        justifyContent={"space-between"}
        h={"100vh"}
      >
        <Link href="/" textDecor={"none"} _hover={{ textDecor: "none" }}>
          <Image
            src={Logo}
            position={"absolute"}
            w={["100px", "120px"]}
            margin={["10px", "15px 0 0 30px"]}
          />
        </Link>
        <Image src={Decor} position={"absolute"} bottom="0" h="70%" />
      </Flex>

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

      <SignUpForm
        errors={errors}
        register={register}
        handleSignUp={handleSubmit(handleSignUp)}
      />
      <ModalError isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
