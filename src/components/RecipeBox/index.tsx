import { Flex, Box, Text } from "@chakra-ui/react";
import { useRecipes } from "../../contexts/Recipes";

interface RecipeBox {
  recipe: Recipe;
}

interface Recipe {
  id: number;
  title: string;
  serves: number;
  method: string;
  ingredients: string[];
  image: string;
}

export const RecipeBox = ({ recipe }: RecipeBox) => {
  const { getRecipeById } = useRecipes();

  return (
    <Flex
      bg={"#ffedde"}
      boxShadow={"-3px 6px 15px -7px #000000"}
      flexWrap={["nowrap", "nowrap", "wrap"]}
      borderRadius={"25px"}
      flexDir={["row", "row", "column"]}
      w={["95%", "70%", "200px"]}
      h={["100px", "100px", "270px"]}
      margin={"10px"}
      onClick={() => getRecipeById(recipe.id)}
      cursor={"pointer"}
    >
      <Box
        minW={["100px", "100px", "200px"]}
        h={["100px", "100px", "200px"]}
        _hover={{ filter: "brightness(0.6)", transition: "all 0.5s" }}
        backgroundImage={recipe.image}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        objectFit="cover"
        borderRadius={"8px"}
      ></Box>

      <Flex
        flexDir={"column"}
        padding={["8px", "8px", "10px 12px"]}
        justifyContent={"center"}
        w={"100%"}
      >
        <Text
          as={"h3"}
          fontSize={["12px", "15px", "15px"]}
          fontWeight={"900"}
          color={"black"}
          lineHeight={"20px"}
          textAlign="center"
        >
          {recipe.title}
        </Text>
      </Flex>
    </Flex>
  );
};
