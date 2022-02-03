import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiUserPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Plate from "../../assets/this.png";
import Half from "../../assets/metade.png";

export const Content = () => {
  const [users, setUsers] = useState(1231);
  const [isLargerThan1090] = useMediaQuery("(min-width: 1090px)");
  const history = useHistory();

  setTimeout(function () {
    setUsers(users + 3);
  }, 3000);

  return (
    <Flex W="100%" h="90%" justifyContent="space-between">
      <Flex flexDirection="column" justifyContent="flex-start">
        <Text
          fontSize={["100px", "120px", "200px"]}
          bgGradient="linear(to-l, black, primary)"
          bgClip="text"
          fontWeight="bold"
        >
          FIND
        </Text>
        <Text fontSize={["1.3rem", "1.3rem", "2rem"]} fontWeight={"900"}>
          FAÇA COMIDA COM O QUE VOCÊ TEM!
        </Text>
        <Text fontSize={["0.9rem", "1.5rem"]}>
          Nossa comunidade já conta com:
        </Text>
        <Text
          bgGradient="linear(to-l, black, primary)"
          bgClip="text"
          fontSize={["2.5rem", "3rem"]}
          fontWeight={900}
        >
          {users} inscritos
        </Text>

        <Button
          background="transparent"
          border="1px solid black"
          w={["50%", "40%"]}
          marginTop={["10px", "0px"]}
          onClick={() => history.push("/signup")}
          _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
        >
          <FiUserPlus />
          <Text marginLeft="5px">Cadastrar</Text>
        </Button>
      </Flex>

      <Box display="flex" alignItems="center">
        {isLargerThan1090 ? (
          <Image src={Plate} w="100%" />
        ) : (
          <Box
            position="fixed"
            left="0"
            maxHeight="25%"
            bottom="0"
            alignItems="center"
          >
            <Image src={Half} w="100%" />
          </Box>
        )}
      </Box>
    </Flex>
  );
};
