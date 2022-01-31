import { Flex, Text, Link } from "@chakra-ui/react";
import { TeamCard } from "../../components/TeamCard";
import profileHolder from "../../assets/profileHolder.png";
import LuanProfile from "../../assets/LuanLinkedin.png";
import ThiagoProfile from "../../assets/ThiagoLinkedin.png";
import BernardoProfile from "../../assets/BernardoLinkedin.png";
import AineProfile from "../../assets/AineLinkedin.png";
import MuriloProfile from "../../assets/MuriloLinkedin.png";
import OtavioProfile from "../../assets/OtavioLinkedin.png";

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
        w={"90vw"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
      >
        <TeamCard
          name="Luan Diniz"
          role="PO"
          image={LuanProfile}
          linkedinLink="https://www.linkedin.com/in/luan-diniz-985a7b223/"
        ></TeamCard>
        <TeamCard
          name="Thiago Dias"
          role="TL"
          image={ThiagoProfile}
          linkedinLink="https://www.linkedin.com/in/thiagodias00/"
        ></TeamCard>
        <TeamCard
          name="Bernardo Costa"
          role="SM"
          image={BernardoProfile}
          linkedinLink="https://www.linkedin.com/in/bernardo-c-costa/"
        ></TeamCard>
        <TeamCard
          name="Aine Mota"
          role="QA"
          image={AineProfile}
          linkedinLink="https://www.linkedin.com/in/aine-mota-3b9735187/"
        ></TeamCard>
        <TeamCard
          name="Murilo Lopes"
          role="QA"
          image={MuriloProfile}
          linkedinLink="https://www.linkedin.com/in/murillotlopes/"
        ></TeamCard>
        <TeamCard
          name="Otávio Ikegami"
          role="QA"
          image={OtavioProfile}
          linkedinLink="https://www.linkedin.com/in/otávio-ikegami-b51a9b22b/"
        ></TeamCard>
      </Flex>
    </Flex>
  );
};
