import {
  Center,
  Container,
  Flex,
  HStack,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import IconFood from "../../assets/IconFood.png";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { theme } from "../../styles/theme";

export const ContainerDashboard = () => {
  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(true);
  const [bgColor3, setBgColor3] = useState(true);

  return (
    <Container
      w={"100vw"}
      h={"100vh"}
      m={0}
      maxW="none"
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center>
        <VStack spacing={20}>
          <HStack spacing={20}>
            <Flex
              w={"320px"}
              h={"495px"}
              borderRadius={"20px"}
              bg={bgColor ? "#FFFFFF" : "secondary"}
              onMouseOver={() => setBgColor(!bgColor)}
              onMouseOut={() => setBgColor(!bgColor)}
              justifyContent={"center"}
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <VStack spacing={10}>
                <Image src={IconFood} ml={3} />
                <Text
                  color={bgColor ? "violet.900" : "#FFFFFF"}
                  fontWeight={"500"}
                  fontSize={"3xl"}
                >
                  Foods
                </Text>
                <Box
                  w={"50px"}
                  h={"50px"}
                  borderRadius={40}
                  bg={bgColor ? "#000000" : "#FFFFFF"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <AiOutlineRight
                    size={30}
                    color={bgColor ? "#FFFFFF" : theme.colors.secondary}
                  />
                </Box>
              </VStack>
            </Flex>
            <Flex
              w={"320px"}
              h={"495px"}
              borderRadius={"20px"}
              bg={bgColor2 ? "#FFFFFF" : "secondary"}
              onMouseOver={() => setBgColor2(!bgColor2)}
              onMouseOut={() => setBgColor2(!bgColor2)}
              justifyContent={"center"}
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <VStack spacing={10}>
                <Image src={IconFood} />
                <Text
                  color={bgColor2 ? "violet.900" : "#FFFFFF"}
                  fontWeight={"500"}
                  fontSize={"3xl"}
                >
                  Drinks
                </Text>
                <Box
                  w={"50px"}
                  h={"50px"}
                  borderRadius={40}
                  bg={bgColor2 ? "#000000" : "#FFFFFF"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <AiOutlineRight
                    size={30}
                    color={bgColor2 ? "#FFFFFF" : theme.colors.secondary}
                  />
                </Box>
              </VStack>
            </Flex>
            <Flex
              w={"320px"}
              h={"495px"}
              borderRadius={"20px"}
              bg={bgColor3 ? "#FFFFFF" : "secondary"}
              onMouseOver={() => setBgColor3(!bgColor3)}
              onMouseOut={() => setBgColor3(!bgColor3)}
              justifyContent={"center"}
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <VStack spacing={10}>
                <Image src={IconFood} />
                <Text
                  color={bgColor3 ? "violet.900" : "#FFFFFF"}
                  fontWeight={"500"}
                  fontSize={"3xl"}
                >
                  Feed
                </Text>
                <Box
                  w={"50px"}
                  h={"50px"}
                  borderRadius={40}
                  bg={bgColor3 ? "#000000" : "#FFFFFF"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <AiOutlineRight
                    size={30}
                    color={bgColor3 ? "#FFFFFF" : theme.colors.secondary}
                  />
                </Box>
              </VStack>
            </Flex>
          </HStack>
          <HStack spacing={20}>
            <VStack
              w={"345px"}
              h={"300px"}
              bg={"#FFFFFF"}
              borderRadius={40}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ></VStack>
            <VStack
              w={"345px"}
              h={"300px"}
              bg={"#FFFFFF"}
              borderRadius={40}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ></VStack>
            <VStack
              w={"345px"}
              h={"300px"}
              bg={"#FFFFFF"}
              borderRadius={40}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ></VStack>
          </HStack>
        </VStack>
      </Center>
    </Container>
  );
};
