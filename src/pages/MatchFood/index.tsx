import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowLeftCircle, FiLogOut } from "react-icons/fi";
import { RecipeBox } from "../../components/RecipeBox";
import { useRecipes } from "../../contexts/Recipes";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/Auth";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const MatchFood = () => {
  const { recipes } = useRecipes();
  const { signOut } = useAuth();
  const history = useHistory();
  const [renderRecipes, setRenderRecipes] = useState(recipes);

  const healthyFilter = () => {
    setRenderRecipes(recipes.filter((recipe) => recipe.type === "fit"));
  };
  const candyFilter = () => {
    setRenderRecipes(recipes.filter((recipe) => recipe.type === "candy"));
  };
  const fastFilter = () => {
    setRenderRecipes(recipes.filter((recipe) => recipe.time < 30));
  };

  return (
    <Flex
      bg={"chardon"}
      w={"100vw"}
      maxw={"100vw"}
      minH={"100vh"}
      alignItems={"flex-start"}
      flexDir={"column"}
      padding={"10px 0"}
      justifyContent={"center"}
    >
      <Flex
        w={"100%"}
        position={"absolute"}
        top={0}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"0px 10px"}
      >
        <Image
          src={Logo}
          w="85px"
          margin="10px"
          _hover={{ cursor: "pointer" }}
          onClick={() => history.push("/dashboard")}
        />
        <Flex flexDir={"column"}>
          <Box
            onClick={() => history.goBack()}
            cursor="pointer"
            margin={["10px", "30px 30px 0 0"]}
          >
            <FiArrowLeftCircle size={30} />
          </Box>
          <Box
            onClick={signOut}
            cursor="pointer"
            mt={"15px"}
            margin={["10px", "30px 30px 0 0"]}
          >
            <FiLogOut color={"#000000"} size={30} />
          </Box>
        </Flex>
      </Flex>
      <Center
        w={"100vw"}
        flexDir={"column"}
        mt={["100px", "100px", "0px", "0px"]}
        marginBottom={"30px"}
        padding={["0 25px", "0 50px", "0 100px"]}
      >
        <Text
          as={"h2"}
          fontSize={["22px", "34px", "46px", "58px"]}
          fontWeight={"500"}
          bgGradient="linear(to-l, black, primary)"
          bgClip="text"
          textAlign={"center"}
          marginBottom={"10px"}
          marginTop={["10px", "10px", "60px"]}
        >
          Explore Nossas Comidas
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w={"70%"}
          h={["200px", "200px", "auto", "auto"]}
          justifyContent={"space-between"}
        >
          <Button
            background="transparent"
            border="1px solid black"
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => fastFilter()}
          >
            <Text marginLeft="5px">Menos de 30</Text>
          </Button>
          <Button
            background="transparent"
            border="1px solid black"
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => healthyFilter()}
          >
            <Text marginLeft="5px">Saudável</Text>
          </Button>
          <Button
            background="transparent"
            border="1px solid black"
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => candyFilter()}
          >
            <Text marginLeft="5px">Doces</Text>
          </Button>
          <Button
            background="transparent"
            border="1px solid black"
            _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
            onClick={() => setRenderRecipes(recipes)}
          >
            <Text marginLeft="5px">Todos</Text>
          </Button>
        </Flex>
      </Center>

      <Flex
        flexWrap={"wrap"}
        justifyContent={["center", "center", "space-between"]}
        padding={["0 25px", "0 50px", "0 100px"]}
      >
        {renderRecipes.map((item) => (
          <RecipeBox key={item.id} recipe={item} />
        ))}
      </Flex>
    </Flex>
  );
};
