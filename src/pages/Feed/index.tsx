import { Box, Flex, Image } from "@chakra-ui/react";
import { FeedCard } from "../Feed/FeedCard";
import { ButtonFeed } from "../Feed/ButtonFeed";
import { usePublication } from "../../contexts/Publication";
import Logo from "../../assets/logo.png";


export const FeedPage = () => {

  const {publications} = usePublication();
console.log(publications)
  return (
    <Flex
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      minWidth="320px"
      h={"100vh"}
      w={"100vw"}
    >
      <Box>
      <Image src={Logo} w="85px" margin="10px"></Image>
      </Box>
      <ButtonFeed />
      {publications.map((item ) =>  <FeedCard key={item.description} publication={item} />)}
     
    </Flex>
  );
};
