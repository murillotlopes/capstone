import { Flex, Box, Image, Text } from "@chakra-ui/react";
import IconFood from "../../assets/IconFood.png";
import { AiOutlineRight } from "react-icons/ai";
import { ModalDashboard } from "./Modal";
import { theme } from "../../styles/theme";
import { useState } from "react";

export const MenuList = () => {
  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(true);
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
            Comidas
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
            src={
              "https://images.vexels.com/media/users/3/151804/isolated/preview/96a36d4589e3ce8334995ab1d34e2619-icone-plano-de-sundae-de-sorvete.png"
            }
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
            Doces
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
            src={
              "https://www.gedai.com.br/wp-content/uploads/2018/08/icone-boletins-3CC6ED.png"
            }
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
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
