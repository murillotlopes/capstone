import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { RecipeBox } from "../../components/RecipeBox";
import { useRecipes } from "../../contexts/Recipes";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/Auth";
import { useHistory } from "react-router-dom";

export const MatchFood = () => {
  const { recipes } = useRecipes();
  const { signOut } = useAuth();
  const history = useHistory();

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
        <Box onClick={signOut} _hover={{ cursor: "pointer" }}>
          <FiLogOut color={"#000000"} size={25} />
        </Box>
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
          color={"violet.900"}
          textAlign={"center"}
          marginBottom={"10px"}
        >
          Explore Nossas Comidas
        </Text>

        <Text fontSize={"14px"} color={"gray.600"} textAlign={"center"}>
          Conheça as receitas que combinam com os ingredientes que você
          selecionou!
        </Text>
      </Center>

      <Flex
        flexWrap={"wrap"}
        justifyContent={["center", "center", "space-between"]}
        padding={["0 25px", "0 50px", "0 100px"]}
      >
        {recipes.map((item) => (
          <RecipeBox key={item.id} recipe={item} />
        ))}
      </Flex>
    </Flex>
  );
};
