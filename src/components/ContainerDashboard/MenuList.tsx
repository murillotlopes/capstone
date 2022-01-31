import { Flex, Box, Image, Text } from "@chakra-ui/react";
import IconFood from "../../assets/IconFood.png";
import IconCandy from "../../assets/IconCandy.png";
import IconFeed from "../../assets/IconFeed.png";
import { AiOutlineRight } from "react-icons/ai";
import { useHistory } from "react-router";
import { ModalDashboard } from "./Modal";
import { theme } from "../../styles/theme";
import { useState } from "react";

export const MenuList = () => {
  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(true);
  const history = useHistory();

  return (
    <Flex
      flexDir={["column", "column", "row", "row"]}
      w={"100%"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w={["100%", "100%", "20%", "20%"]}
        h={["30%", "30%", "80%", "100%"]}
        m={["10px 20px", "10px 20px", "0px 30px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "row", "column", "column"]}
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
            Comidas
          </Text>
          <ModalDashboard />
        </Flex>
      </Flex>
      <Flex
        w={["100%", "100%", "20%", "20%"]}
        h={["30%", "30%", "80%", "100%"]}
        m={["10px 20px", "10px 20px", "0px 30px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "row", "column", "column"]}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => history.push("/explore")}
        >
          <Image
            src={IconCandy}
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
            Explorar
          </Text>
          <Box
            w={["25px", "25px", "35px", "50px"]}
            h={["25px", "25px", "35px", "50px"]}
            borderRadius={40}
            bg={bgColor ? "#000000" : "#FFFFFF"}
            onMouseOver={() => setBgColor(!bgColor)}
            onMouseOut={() => setBgColor(!bgColor)}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            m={3}
          >
            <AiOutlineRight
              size={30}
              color={bgColor ? "#FFFFFF" : theme.colors.secondary}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        w={["100%", "100%", "20%", "20%"]}
        h={["30%", "30%", "80%", "100%"]}
        m={["10px 20px", "10px 20px", "0px 30px", "0px 30px"]}
        borderRadius={"20px"}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer", bg: "secondary" }}
      >
        <Flex
          flexDir={["row", "row", "column", "column"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={IconFeed}
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
            bg={bgColor2 ? "#000000" : "#FFFFFF"}
            onMouseOver={() => setBgColor2(!bgColor2)}
            onMouseOut={() => setBgColor2(!bgColor2)}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            m={3}
          >
            <AiOutlineRight
              size={30}
              color={bgColor2 ? "#FFFFFF" : theme.colors.secondary}
              type="button"
              onClick={() => history.push("/feed")}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
