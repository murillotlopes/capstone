import { Box, Center, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { MenuList } from "../../components/ContainerDashboard/MenuList";
import { RecomendedList } from "../../components/ContainerDashboard/RecomendadList";
import { useAuth } from "../../contexts/Auth";

export const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <Container
      w={"100%"}
      h={["100%", "100vh", "100vh", "100vh"]}
      m={0}
      maxW="none"
      p={0}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"0px 10px"}
      >
        <Text
          fontSize={["xl", "2xl", "3xl", "5xl"]}
          fontWeight="700"
          color="primary"
          textTransform="uppercase"
        >
          Find Recipes
        </Text>
        <Box onClick={signOut}>
          <FiLogOut color={"#000000"} size={25} />
        </Box>
      </Flex>
      <Center
        h={"100%"}
        w={"100%"}
        p={["70px 50px", "70px 50px", "70px 100px", "70px 100px"]}
      >
        <VStack spacing={[10, 20, 20, 20]} w={"100%"} h={"100%"}>
          <MenuList />
          <RecomendedList />
        </VStack>
      </Center>
    </Container>
  );
};
