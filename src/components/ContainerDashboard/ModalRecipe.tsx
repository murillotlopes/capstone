import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  VStack,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useRecipes } from "../../contexts/Recipes";

interface Recipe {
  id: number;
  title: string;
  serves: number;
  method: string;
  ingredients: string[];
  searchIngredients: string[];
  image: string;
}

interface ModalRecipeProps {
  handleClick: () => void;
  findRecipes: Recipe[];
  findIngredient: string[];
  setFindRecipes: Dispatch<SetStateAction<Recipe[]>>;
}

export const ModalRecipe = ({
  handleClick,
  findRecipes,
  findIngredient,
  setFindRecipes,
}: ModalRecipeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRecipeById } = useRecipes();

  const handleRecipe = (id: number) => {
    getRecipeById(id);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Button
          bg={"primary"}
          color={"#FFFFFF"}
          _hover={{ cursor: "pointer", bg: "secondary" }}
          mr={3}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          onClick={onOpen}
        >
          PRONTO
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent bg={"chardon"}>
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
          <ModalCloseButton onClick={() => setFindRecipes([])} />
          <ModalBody>
            {findIngredient.length >= 3 && findRecipes.length > 0 ? (
              <Flex
                w={"100%"}
                h={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                {findRecipes.map((recipe, index) => (
                  <Flex
                    flexDir={"row"}
                    w={"100%"}
                    h={["150px", "200px", "250px", "300px"]}
                    bg={"#FFFFFF"}
                    mb={5}
                    borderRadius={"15px"}
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    key={index}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => handleRecipe(recipe.id)}
                  >
                    <VStack w={"50%"}>
                      <Image
                        h={"70%"}
                        w={"80%"}
                        minH={"70%"}
                        mt={2}
                        borderRadius={"15px"}
                        src={recipe.image}
                        alt={recipe.title}
                      />
                      <Flex flexDir={"column"} alignItems={"center"} h={"33%"}>
                        <Text
                          color={"gray.600"}
                          fontSize={["xs", "md", "lg", "xl"]}
                        >
                          {recipe.title}
                        </Text>
                      </Flex>
                    </VStack>
                    <Box
                      maxW={"50%"}
                      display={"flex"}
                      alignItems={[
                        "flex-start",
                        "flex-start",
                        "center",
                        "center",
                      ]}
                      color={"gray.600"}
                      pr={4}
                      m={2}
                      overflow={"auto"}
                    >
                      {recipe.method}
                    </Box>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Text
                fontSize={"2xl"}
                color={"gray.600"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Infelizmente não encontramos receitas com seus ingredientes,
                verifique se foi adicionado 3 itens, ou tente outras
                combinações!
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Box onClick={() => setFindRecipes([])}>
              <Button
                bg={"primary"}
                color={"#FFFFFF"}
                _hover={{ bg: "secondary", color: "#FFFFFF" }}
                mr={3}
                onClick={onClose}
              >
                VOLTAR
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
