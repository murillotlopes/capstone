import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { FeedCard } from "../Feed/FeedCard";
import { ButtonFeed } from "../Feed/ButtonFeed";
import { usePublication } from "../../contexts/Publication";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const FeedPage = () => {
  const { publications } = usePublication();
  const history = useHistory();

  return (
    <Flex
      direction="column"
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      minWidth="320px"
      h={"100vh"}
      w={"100vw"}
    >
      <Flex
        h="100px"
        w="100vw"
        alignItems="center"
        justifyContent="flex-start"
        margin={"20px 0 20px 0"}
      >
        <Image
          src={Logo}
          w="120px"
          cursor={"pointer"}
          margin={["5px 0 0 5px", "5px 0 0 30px"]}
          onClick={() => history.push("/dashboard")}
        />
        <ButtonFeed />
      </Flex>

      <Flex flexWrap={"wrap"} justifyContent={"center"} overflowY="scroll">
        {publications.map((item, index) => (
          <FeedCard key={index} publication={item} />
        ))}
      </Flex>
    </Flex>
  );
};
