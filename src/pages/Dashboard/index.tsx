import { Center, Container, VStack } from "@chakra-ui/react";
import { MenuList } from "../../components/ContainerDashboard/MenuList";
import { RecomendedList } from "../../components/ContainerDashboard/RecomendadList";

export const Dashboard = () => {
  return (
    <Container
      w={"100%"}
      h={"100vh"}
      m={0}
      maxW="none"
      p={0}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
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
