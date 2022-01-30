import { Flex, Img, Text, Link } from "@chakra-ui/react";
import linkedinLogo from "../../assets/linkedinLogoGrey.png";

interface MemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}
export const TeamCard = ({ name, role, image, linkedin }: MemberProps) => {
  return (
    <Flex
      w={["200px", "150px", "200px", "150px"]}
      h={["125px", "250px", "250px", "250px"]}
      flexDirection={["row", "column", "column", "column"]}
      alignItems={"center"}
      color={"violet.900"}
      fontWeight={"500"}
      fontSize={"20px"}
      lineHeight={"32px"}
      margin={["0% 6%", "0% 6%", "3%", "0% 0%"]}
    >
      <Img
        backgroundColor={"white"}
        w={"100px"}
        h={"100px"}
        src={image}
        borderRadius={"50%"}
        border={"2px grey solid"}
        padding={"10px"}
      ></Img>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text textAlign={"center"} w={"160px"}>
          {name}
        </Text>
        <Text>{role}</Text>
        <Link href={linkedin}>
          <Img w={"30px"} h={"30px"} src={linkedinLogo}></Img>
        </Link>
      </Flex>
    </Flex>
  );
};
