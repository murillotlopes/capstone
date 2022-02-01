import { Box, Center, Flex, Img, Text, Link } from "@chakra-ui/react";
//import { Link } from "react-router-dom"
import circleGrid from "../../assets/circle_grid.svg";
import foodPlate from "../../assets/food_plate.png";

export const Home = () => {
  return (
    <Flex
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={["linear(to-r, chardon 75%, primary 25%)"]}
      fontFamily="Poppins"
      flexDir="column"
      padding={["15px 19px", "15px 50px", "15px 100px", "15px 143px"]}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          fontSize={["40px", "48px", "72px"]}
          fontWeight="700"
          color="primary"
          textTransform="uppercase"
          lineHeight={["45px", "65px"]}
        >
          Find Recipes
        </Text>

        <Flex
          color={["violet.900"]}
          fontWeight="700"
          flexDir={["column", "row", "row", "row"]}
        >
          <Link href="/signin">
            <Text mr={["10px", "15px", "15px", "40px"]}>Entrar</Text>
          </Link>

          <Link href="/signup">
            <Text mr={["10px", "15px", "15px", "40px"]}>Cadastrar</Text>
          </Link>

          <Link href="/team">
            <Text>Sobre Nós</Text>
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDir={["column", "column", "row", "row"]}
        mt={["50px", "60px", "70px", "80px"]}
      >
        <Box>
          <Text
            fontSize={["80px", "90px", "100px"]}
            color={["violet.900"]}
            opacity={["0.05"]}
            fontWeight={["900"]}
          >
            Food
          </Text>

          <Text
            fontSize={["20px", "30px", "30px", "40px"]}
            color={["violet.900"]}
            fontWeight={["900"]}
            w={["60%"]}
          >
            Faça comida com o que você tem!
          </Text>
        </Box>

        <Center
          bgImage={circleGrid}
          backgroundRepeat="no-repeat"
          mt={["25px", "30px", "0", "0"]}
        >
          <Img src={foodPlate} />
        </Center>
      </Flex>
    </Flex>
  );
};
