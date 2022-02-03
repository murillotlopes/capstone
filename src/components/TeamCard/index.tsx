import { Flex, Img, Text, Link, Box } from "@chakra-ui/react";
import linkedinLogo from "../../assets/linkedinLogoGrey.png";
import { BsLinkedin } from "react-icons/bs";
interface MemberProps {
  name: string;
  role: string;
  image: string;
  linkedinLink?: string;
}
export const TeamCard = ({ name, role, image, linkedinLink }: MemberProps) => {
  return (
    <Flex
      flexDirection={["row", "column", "column", "column"]}
      alignItems={"center"}
      fontWeight={"500"}
      fontSize={"20px"}
      lineHeight={"32px"}
      borderRadius="20px"
      bg={"#ffedde"}
      margin={"5px"}
      padding={"15px"}
      minWidth={["278px", "190px", "190px", "190px"]}
      boxShadow={"-3px 6px 15px -7px #000000"}
    >
      <Img
        backgroundColor={"white"}
        w={"100%"}
        h={"140px"}
        src={image}
        objectFit="cover"
        borderRadius={"8px"}
      ></Img>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text
          textAlign={"center"}
          w={["110px", "160px"]}
          bgGradient="linear(to-l, black, primary)"
          bgClip="text"
        >
          {name}
        </Text>
        <Text fontSize={"16px"} color={"black"}>
          {role}
        </Text>
        <Link href={linkedinLink} target="_blank">
          <BsLinkedin color={"black"} />
        </Link>
      </Flex>
    </Flex>
  );
};
