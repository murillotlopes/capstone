import { SignUpForm } from "./SignUpForm";
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
import { useAuth } from "../../contexts/Auth";
import ModalError from "../../components/ModalError";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";

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
      profile: "https://raw.githubusercontent.com/thdias00/capstone/develop/src/assets/profileHolder.png",
    };
    signUp(currentData)
      .then((_) => {
        console.log(data);
        toast({
          position: "top",
          title: "Conta criada com sucesso! ",
          description: "Você será redirecionado.",
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
          <Image src={Logo} position={"absolute"} w={"85px"} margin={"10px"} />
        </Link>
        <Image
          src={Decor}
          position={["absolute"]}
          w={["45%", "30%", "20%", "12%"]}
          h="auto"
          top={["20%", "15%", "30%", "30%"]}
          right={["60%", "80%", "80%", "88%"]}
        />
      </Flex>
      <SignUpForm
        errors={errors}
        register={register}
        handleSignUp={handleSubmit(handleSignUp)}
      />
      <ModalError isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
