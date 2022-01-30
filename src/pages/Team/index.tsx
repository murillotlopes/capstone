import { Flex, Text, Link } from "@chakra-ui/react";
import { TeamCard } from "../../components/TeamCard";
import profileHolder from "../../assets/profileHolder.png"


export const TeamPage = () => {
  return (
    <Flex
      justifyContent={"flex-start"}
      flexDirection={"column"}
      alignItems={"center"}
      bgGradient={"linear(to-r, bgColor 70%, primary 30%)"}
      height={["100vh"]}
      fontFamily="Poppins"
    >
      <Text
        position={"absolute"}
        textAlign={"center"}
        fontSize={["2rem", "2rem", "3rem", "3rem"]}
        fontWeight="500"
        color="violet.900"
        top={["5%", "10%", "10%", "25%"]}
      >
        Time
      </Text>
      <Flex
        position={"absolute"}
        top={["15%", "20%", "20%", "40%"]}
        w={"100vw"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        wrap={["wrap","wrap","wrap","wrap"]}
      >
        <TeamCard name="Luan Diniz" role="PO" image={profileHolder}></TeamCard>
        <TeamCard name="Thiago Dias" role="TL" image={profileHolder}></TeamCard>
        <TeamCard name="Bernardo Costa" role="SM" image={profileHolder}></TeamCard>
        <TeamCard name="Aine Mota" role="QA" image={profileHolder}></TeamCard>
        <TeamCard name="Murilo Lopes" role="QA" image={profileHolder}></TeamCard>
        <TeamCard name="Otávio Ikegami" role="QA" image={profileHolder}></TeamCard>
      </Flex>
    </Flex>
  );
};
