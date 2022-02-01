import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiUser, FiUsers } from "react-icons/fi";

export const Header = () => {
  const [isLargerThan479] = useMediaQuery("(min-width: 479px)");
  const history = useHistory();

  return (
    <Flex
      w="100%"
      flexDirection={["row"]}
      justifyContent={["space-between"]}
      alignItems="center"
    >
      <Box>
        <Image src={logo} w="85px" />
      </Box>

      <Flex margin={["0"]}>
        {isLargerThan479 ? (
          <Button
            background="transparent"
            border="1px solid black"
            marginRight={"10px"}
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => history.push("/signin")}
          >
            <FiUser />
            <Text marginLeft="5px">Entrar</Text>
          </Button>
        ) : (
          <Box
            marginRight="15px"
            _hover={{ color: "gray.600", transition: "0.5s" }}
          >
            <FiUser
              onClick={() => history.push("/signin")}
              cursor="pointer"
              fontSize="2rem"
            />
          </Box>
        )}
        {isLargerThan479 ? (
          <Button
            background="transparent"
            border="1px solid black"
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => history.push("/team")}
          >
            <FiUsers />
            <Text marginLeft="5px">Nosso Time</Text>
          </Button>
        ) : (
          <Box _hover={{ color: "gray.600", transition: "0.5s" }}>
            <FiUsers
              onClick={() => history.push("/team")}
              cursor="pointer"
              fontSize="2rem"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
