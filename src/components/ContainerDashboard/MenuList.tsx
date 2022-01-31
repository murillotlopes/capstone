import { Flex, Box, Image, Text } from "@chakra-ui/react";
import IconFood from "../../assets/IconFood.png";
import { AiOutlineRight } from "react-icons/ai";
import { useHistory } from "react-router";
import { ModalDashboard } from "./Modal";

export const MenuList = () => {
  const history = useHistory();

  return (
    <Flex
      flexDir={["column", "row", "row", "row"]}
      w={"100%"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w={["100%", "30%", "20%", "20%"]}
        h={["30%", "70%", "80%", "100%"]}
        m={["10px 20px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "column", "column", "column"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={IconFood}
            m={3}
            w={["63px", "63px", "100px", "126px"]}
            h={["63px", "63px", "100px", "126px"]}
          />
          <Text
            color={"#000000"}
            fontWeight={"500"}
            m={3}
            fontSize={["md", "md", "2xl", "3xl"]}
          >
            Foods
          </Text>
          <ModalDashboard />
        </Flex>
      </Flex>
      <Flex
        w={["100%", "30%", "20%", "20%"]}
        h={["30%", "70%", "80%", "100%"]}
        m={["10px 20px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "column", "column", "column"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={IconFood}
            m={3}
            w={["63px", "63px", "100px", "126px"]}
            h={["63px", "63px", "100px", "126px"]}
          />
          <Text
            color={"#000000"}
            fontWeight={"500"}
            fontSize={["md", "md", "2xl", "3xl"]}
            m={3}
          >
            Drinks
          </Text>
          <Box
            w={["25px", "25px", "35px", "50px"]}
            h={["25px", "25px", "35px", "50px"]}
            borderRadius={40}
            bg={"#000000"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            m={3}
          >
            <AiOutlineRight size={30} color={"#FFFFFF"} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        w={["100%", "30%", "20%", "20%"]}
        h={["30%", "70%", "80%", "100%"]}
        m={["10px 20px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "column", "column", "column"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={IconFood}
            m={3}
            w={["63px", "63px", "100px", "126px"]}
            h={["63px", "63px", "100px", "126px"]}
          />
          <Text
            color={"#000000"}
            fontWeight={"500"}
            fontSize={["md", "md", "2xl", "3xl"]}
            m={3}
          >
            Feed
          </Text>
          <Box
            w={["25px", "25px", "35px", "50px"]}
            h={["25px", "25px", "35px", "50px"]}
            borderRadius={40}
            bg={"#000000"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            m={3}
          >
            <AiOutlineRight
              type="button"
              size={30}
              color={"#FFFFFF"}
              onClick={() => history.push("/feed")}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
