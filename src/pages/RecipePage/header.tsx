import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { FiArrowLeftCircle, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts/Auth";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      marginTop={"10px"}
      h={"auto"}
      w={"90%"}
    >
      <Link
        href="/dashboard"
        textDecor={"none"}
        _hover={{ textDecor: "none" }}
        cursor={"pointer"}
      >
        <Image
          src={Logo}
          w="120px"
          onClick={() => history.push("/dashboard")}
        />
      </Link>

      <Box>
        <Box
          onClick={() => history.goBack()}
          _hover={{ color: "white", transition: "0.5s" }}
          cursor="pointer"
        >
          <FiArrowLeftCircle size={30} />
        </Box>
        <Box
          onClick={signOut}
          _hover={{ color: "white", transition: "0.5s" }}
          cursor="pointer"
          mt={"15px"}
        >
          <FiLogOut size={30} />
        </Box>
      </Box>
    </Flex>
  );
};
