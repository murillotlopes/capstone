import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useRecipes } from "../../contexts/Recipes";
import Logo from "../../assets/logo.png"
import { useHistory } from "react-router-dom";

export const RecipePage = () => {

  const { recipeRender } = useRecipes();

  const history = useHistory();


  return (
    <Flex
      key={recipeRender.id}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      h={["150vh", "150vh", "100vh", "100vh"]}
      flexDirection={"column"}
    >
      <Flex
      justifyContent={"space-between"}
      >
        <Image
          src={Logo}
          w="85px"
          margin="10px"
          onClick={() => history.push("/dashboard")}
        />
        <Stack
        position="fixed"
        right="0"
        fontSize="30px"
        cursor="pointer"
        display="flex"
        flexDirection={["row", "column"]}
        margin="30px"
        spacing="15px"
        >
          <FiArrowLeftCircle
          onClick={() => history.push("/dashboard")}
        />
        </Stack>
      </Flex>
    <Flex
      flexDir={["column", "column", "row-reverse", "row-reverse"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        justifyContent={"flex-end"}
      >
        <Image 
        src={recipeRender.image} 
        borderRadius={"5px 0px 0px 525px"}
        w={["100vw", "100vw", "50vw", "50vw"]}
        maxH={"75vh"}
        mt={"1rem"}
        />
      </Flex>
      <Flex flexDir={"column"}>
        <Flex
          justifyContent={"flex-start"}
          margin={[
            "2.5rem auto",
            "2.5rem auto",
            "auto auto auto 2.5rem",
            "auto auto auto 2.5rem",
          ]}
          width={["100vw", "100vw", "50vw", "50vw"]}
        >
          <Box
            width={"40%"}
            mr={"0.5rem"}
            ml={["1rem", "1rem", "1rem", "1rem"]}
          >
            <Text
              fontSize={"1.2rem"}
              fontFamily={"Playfair Display"}
              fontStyle={"normal"}
              fontWeight={"700"}
              mb="0.3rem"
            >
              {recipeRender.title}
            </Text>
            <Flex justifyContent={"flex-start"}>
              {" "}
              <AiOutlineClockCircle /> <Text ml={"0.2rem"}>30 min</Text>{" "}
            </Flex>
            <Flex justifyContent={"flex-start"}>
              {" "}
              <FiUser /> <Text ml={"0.2rem"}>{recipeRender.serves}</Text>{" "}
            </Flex>
          </Box>
          <Box width={"40%"}>
            <Text
              fontFamily={"Playfair Display"}
              fontStyle={"normal"}
              fontWeight={"700"}
              mb="0.3rem"
            >
              Ingredientes
            </Text>
            <ul>
              {!!recipeRender.ingredients.length &&
                recipeRender.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </Box>
        </Flex>
        <Box
          width={["90vw", "90vw", "50vw", "50vw"]}
          bgColor={"white"}
          borderRadius={"25px"}
          marginLeft={["auto", "auto", "2.5rem", "2.5rem"]}
          mt={["auto", "auto", "1,5rem", "1.5rem"]}
          padding={"1rem"}
        >
          <Text>Receita</Text>
          <Text>{recipeRender.method}</Text>
        </Box>
      </Flex>
    </Flex>
    </Flex>
  );
};
