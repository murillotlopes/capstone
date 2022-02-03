import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { useRecipes } from "../../contexts/Recipes";
import Plant from "../../assets/plant.png";
import { Header } from "../../pages/RecipePage/header";

export const RecipePage = () => {
  const { recipeRender } = useRecipes();

  return (
    <Flex
      key={recipeRender.id}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      h={["130vh", "100vh"]}
      justifyContent="flex-start"
      alignItems="center"
      flexDirection={["column"]}
    >
      <Header />

      <Image src={Plant} position={"fixed"} bottom={"0"} left={"0"} h={"75%"} />

      <Flex
        flexDirection={"column"}
        h={"70vh"}
        w={"80vw"}
        marginTop={["15px", "15px", "70px", "90px"]}
        alignItems={"center"}
      >
        {/* <----------------------------------------------> */}
        <Flex
          w={["100%", "100%", "100%", "70%"]}
          flexDirection={["column", "column", "row", "row"]}
          bg={"#ffedde"}
          borderRadius={"8px"}
          padding={"20px"}
          boxShadow={"-3px 6px 15px -7px #000000"}
          alignItems={"center"}
          zIndex={"1"}
        >
          <Box w={["100%", "70%", "50%", "50%"]}>
            <Image
              src={recipeRender.image}
              objectFit="cover"
              borderRadius={"8px"}
              height="100%"
            />
          </Box>
          <Flex
            mt={["20px", "20px", "0", "0"]}
            ml={["0", "0", "20px", "20px"]}
            justifyContent={"center"}
          >
            <Box w={"55%"}>
              <Text
                w={["100%", "90%", "70%", "70%"]}
                fontFamily={"Playfair Display"}
                fontStyle={"normal"}
                fontWeight={"700"}
                mb="0.3rem"
                marginRight={["10px"]}
              >
                Ingredientes
              </Text>

              <ul>
                {!!recipeRender.ingredients.length &&
                  recipeRender.ingredients.map((item, index) => (
                    <Box listStyleType="none">
                      <li key={index}>{item}</li>
                    </Box>
                  ))}
              </ul>
            </Box>

            <Box>
              <Text
                fontSize={"1.2rem"}
                fontFamily={"Playfair Display"}
                fontStyle={"normal"}
                fontWeight={"700"}
                mb="0.3rem"
                ml={["10px"]}
              >
                {recipeRender.title}
              </Text>
              <Flex ml={["10px"]}>
                <AiOutlineClockCircle /> <Text ml={"0.2rem"}>30 min</Text>
              </Flex>
              <Flex ml={["10px"]}>
                <FiUser /> <Text ml={"0.2rem"}>{recipeRender.serves}</Text>{" "}
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Flex
          marginTop={"20px"}
          w={["100%", "100%", "100%", "70%"]}
          bg={"#ffedde"}
          borderRadius={"8px"}
          boxShadow={"-3px 6px 15px -7px #000000"}
          padding={"20px"}
          zIndex={"1"}
        >
          <Text>{recipeRender.method}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
