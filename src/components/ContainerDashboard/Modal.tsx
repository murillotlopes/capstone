import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Words } from "../../assets/words";
import { theme } from "../../styles/theme";

export const ModalDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bgColor, setBgColor] = useState(true);
  const findRecipes = [];

  return (
    <>
      <Box
        w={["25px", "25px", "35px", "50px"]}
        h={["25px", "25px", "35px", "50px"]}
        borderRadius={40}
        bg={bgColor ? "#000000" : "#FFFFFF"}
        onMouseOver={() => setBgColor(!bgColor)}
        onMouseOut={() => setBgColor(!bgColor)}
        onClick={onOpen}
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

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={"2xl"}
              fontWeight="700"
              color="primary"
              textTransform="uppercase"
            >
              Find Recipes
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"gray.600"} fontWeight={"bold"} m={3}>
              Escolha seus ingredientes:{" "}
            </Text>
            <Flex flexWrap={"wrap"} w={"100%"} justifyContent={"flex-start"}>
              {Words.map((word, index) => (
                <Box
                  key={index}
                  padding={2}
                  m={1}
                  bg={"chardon"}
                  color={"gray.600"}
                  borderRadius={10}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => findRecipes.push(word)}
                >
                  {word}
                </Box>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={"primary"}
              color={"#FFFFFF"}
              _hover={{ bg: "secondary" }}
              mr={3}
              onClick={onClose}
            >
              PRONTO
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
