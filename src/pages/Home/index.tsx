import { Box, Center, Flex, Img, Text, Menu } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Header } from "../Home/header";
import { Content } from "../Home/content";

export const Home = () => {
  const history = useHistory();

  return (
    <Flex
      h="100vh"
      bgGradient={["linear(to-r, chardon 75%, primary 25%)"]}
      fontFamily="Poppins"
      flexDir="column"
      padding={["15px 19px", "15px 50px", "15px 100px", "15px 143px"]}
    >
      <Header />
      <Content />
    </Flex>
  );
};
