import { Flex } from "@chakra-ui/react";
import { FeedCard } from "../Feed/FeedCard";
import { ButtonFeed } from "../Feed/ButtonFeed";
import { usePublication } from "../../contexts/Publication";

export const FeedPage = () => {

  const {publications} = usePublication();

  return (
    <Flex
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      minWidth="320px"
      h={"100vh"}
      w={"100vw"}
    >
      <ButtonFeed></ButtonFeed>
      {publications.map((item) =>  <FeedCard publication={item} />)}
     
    </Flex>
  );
};
