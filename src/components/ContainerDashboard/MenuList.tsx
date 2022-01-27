import { Flex, Box, Image, Text } from "@chakra-ui/react";
import IconFood from "../../assets/IconFood.png";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { theme } from "../../styles/theme";

export const MenuList = () => {
  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(true);
  const [bgColor3, setBgColor3] = useState(true);

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
        bg={bgColor ? "#FFFFFF" : "secondary"}
        onMouseOver={() => setBgColor(!bgColor)}
        onMouseOut={() => setBgColor(!bgColor)}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer" }}
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
            color={bgColor ? "violet.900" : "#FFFFFF"}
            fontWeight={"500"}
            m={3}
            fontSize={["md", "md", "2xl", "3xl"]}
          >
            Foods
          </Text>
          <Box
            w={["25px", "25px", "35px", "50px"]}
            h={["25px", "25px", "35px", "50px"]}
            borderRadius={40}
            bg={bgColor ? "#000000" : "#FFFFFF"}
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
        bg={bgColor2 ? "#FFFFFF" : "secondary"}
        onMouseOver={() => setBgColor2(!bgColor2)}
        onMouseOut={() => setBgColor2(!bgColor2)}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer" }}
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
            color={bgColor2 ? "violet.900" : "#FFFFFF"}
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
            bg={bgColor2 ? "#000000" : "#FFFFFF"}
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
      <Flex
        w={["100%", "30%", "20%", "20%"]}
        h={["30%", "70%", "80%", "100%"]}
        m={["10px 20px", "0px 30px"]}
        borderRadius={"20px"}
        bg={bgColor3 ? "#FFFFFF" : "secondary"}
        onMouseOver={() => setBgColor3(!bgColor3)}
        onMouseOut={() => setBgColor3(!bgColor3)}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        _hover={{ cursor: "pointer" }}
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
            color={bgColor3 ? "violet.900" : "#FFFFFF"}
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
            bg={bgColor3 ? "#000000" : "#FFFFFF"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            m={3}
          >
            <AiOutlineRight
              size={30}
              color={bgColor3 ? "#FFFFFF" : theme.colors.secondary}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
