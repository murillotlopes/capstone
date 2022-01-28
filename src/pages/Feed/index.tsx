import { Flex } from "@chakra-ui/react";
import { FeedCard } from "../Feed/FeedCard";
import { ButtonFeed } from "../Feed/ButtonFeed";

export const FeedPage = () => {
  return (
    <Flex
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      h={"100vh"}
    >
      <ButtonFeed></ButtonFeed>
      <FeedCard></FeedCard>
    </Flex>
  );
};
