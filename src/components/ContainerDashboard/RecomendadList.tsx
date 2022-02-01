import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useRecipes } from "../../contexts/Recipes";

export const RecomendedList = () => {
  const { recipes, getRecipeById } = useRecipes();

  const recommendedWide = recipes.sort(() => 0.5 - Math.random()).slice(0, 3);
  const recommendedMobile = recipes.sort(() => 0.5 - Math.random()).slice(0, 2);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const handleRecipe = (id: number) => {
    getRecipeById(id);
  };

  return (
    <Flex
      w={"100%"}
      h={["150px", "200px", "300px", "300px"]}
      justifyContent={"center"}
      marginTop={0}
    >
      {(isWideVersion ? recommendedWide : recommendedMobile).map((recipe) => (
        <VStack
          w={["50%", "50%", "25%", "20%"]}
          h={"100%"}
          maxH={"300px"}
          m={2}
          bg={"#FFFFFF"}
          borderRadius={"15px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          key={recipe.id}
          _hover={{ cursor: "pointer" }}
          onClick={() => handleRecipe(recipe.id)}
        >
          <Image
            h={["75px", "100px", "150px", "150px"]}
            w={"95%"}
            minH={["75px", "100px", "150px", "150px"]}
            m={2}
            borderRadius={"15px"}
            src={recipe.image}
            alt={recipe.title}
            objectFit={"cover"}
          />
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            pl={[1.5, 2, 4, 4]}
            pb={2}
            h={"50%"}
            w={"100%"}
          >
            <Text
              fontWeight={"bold"}
              mb={[0, 1, 2, 2]}
              fontSize={["xs", "md", "lg", "xl"]}
            >
              Recomendado
            </Text>
            <Text
              mb={[0, 1, 2, 2]}
              color={"gray.600"}
              fontSize={["xs", "md", "lg", "xl"]}
              w={["90%", "90%", "95%", "95%"]}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {recipe.title}
            </Text>
          </Flex>
        </VStack>
      ))}
    </Flex>
  );
};
