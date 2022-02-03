import { Box, Center, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { MenuList } from "../../components/ContainerDashboard/MenuList";
import { RecomendedList } from "../../components/ContainerDashboard/RecomendadList";
import { useAuth } from "../../contexts/Auth";
import Logo from "../../assets/logo.png";

export const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <Container
      w={"100%"}
      h={"120vh"}
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
        position={"absolute"}
        top={0}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"0px 10px"}
      >
        <Image
          src={Logo}
          w={["100px", "120px"]}
          margin={["10px", "15px 0 0 30px"]}
        />
        <Box
          position="fixed"
          right="0"
          top="0"
          fontSize="35px"
          margin={["10px", "30px 30px 0 0"]}
          _hover={{ color: "white", transition: "0.5s" }}
          cursor="pointer"
          onClick={signOut}
        >
          <FiLogOut />
        </Box>
      </Flex>
      <Center
        h={"100%"}
        w={"100%"}
        mt={["100px", "100px", "0px", "0px"]}
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
