import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Sweet from "../../assets/sweet.png";
import Healthy from "../../assets/healthy.png";
import All from "../../assets/all.png";
import Tirthy from "../../assets/tirthy.png";

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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      w={"100vw"}
      maxw={"100vw"}
      minH={"100vh"}
      alignItems={"center"}
      flexDir={"column"}
      justifyContent={"flex-start"}
    >
      <Flex
        w={"100%"}
        position={"relative"}
        top={0}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          src={Logo}
          w={["100px", "120px"]}
          margin={["10px", "15px 0 0 30px"]}
          _hover={{ cursor: "pointer" }}
          onClick={() => history.push("/dashboard")}
        />
        <Flex flexDir={"row"} h={"100%"}>
          <Box
            onClick={() => history.goBack()}
            cursor="pointer"
            _hover={{ color: "white", transition: "0.5s" }}
            marginRight="20px"
          >
            <FiArrowLeftCircle size={30} />
          </Box>
          <Box
            onClick={signOut}
            cursor="pointer"
            _hover={{ color: "white", transition: "0.5s" }}
            marginRight="40px"
          >
            <FiLogOut size={30} />
          </Box>
        </Flex>
      </Flex>
      <Center
        w={"100vw"}
        flexDir={"column"}
        marginTop={""}
        marginBottom={"30px"}
      >
        <Text
          as={"h2"}
          fontSize={["22px", "34px", "46px", "58px"]}
          fontWeight={"900"}
          bgGradient="linear(to-l, black, primary)"
          bgClip="text"
          textAlign={"center"}
          marginBottom={"15px"}
        >
          Explore Nossas Receitas
        </Text>
        <Flex flexDir={"row"} w={"70%"}>
          {isLargerThan768 ? (
            <HStack
              w="100%"
              display="flex"
              justifyContent={"center"}
              spacing={"15px"}
            >
              <Button
                background="transparent"
                border="1px solid black"
                _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
                onClick={() => fastFilter()}
              >
                <Text marginLeft="5px">Menos de 30min</Text>
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
            </HStack>
          ) : (
            <HStack
              w="100%"
              display="flex"
              justifyContent={"center"}
              spacing={"25px"}
            >
              <Box
                width="55px"
                onClick={() => fastFilter()}
                _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
              >
                <Image src={Tirthy} />
              </Box>
              <Box
                width="55px"
                onClick={() => healthyFilter()}
                _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
              >
                <Image src={Healthy} />
              </Box>
              <Box
                width="55px"
                onClick={() => candyFilter()}
                _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
              >
                <Image src={Sweet} />
              </Box>
              <Box
                width="55px"
                onClick={() => setRenderRecipes(recipes)}
                _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
              >
                <Image src={All} />
              </Box>
            </HStack>
          )}
        </Flex>
      </Center>

      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        padding={["0 25px", "0 50px", "0 100px"]}
        w={["100%", "100%", "90%", "90%"]}
      >
        {renderRecipes.map((item) => (
          <RecipeBox key={item.id} recipe={item} />
        ))}
      </Flex>
    </Flex>
  );
};
