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
      h={["60%", "60%", "80%", "80%"]}
      justifyContent={"center"}
      marginTop={0}
    >
      {(isWideVersion ? recommendedWide : recommendedMobile).map((recipe) => (
        <VStack
          w={["50%", "50%", "25%", "20%"]}
          h={"100%"}
          m={2}
          bg={"#FFFFFF"}
          borderRadius={"15px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          key={recipe.id}
          _hover={{ cursor: "pointer" }}
          onClick={() => handleRecipe(recipe.id)}
        >
          <Image
            h={"200px"}
            w={"95%"}
            minH={"200px"}
            m={2}
            borderRadius={"15px"}
            src={recipe.image}
            alt={recipe.title}
          />
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            pl={[0, 2, 4, 4]}
            h={"50%"}
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
            >
              {recipe.title}
            </Text>
          </Flex>
        </VStack>
      ))}
    </Flex>
  );
};
