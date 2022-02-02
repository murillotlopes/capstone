import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { FeedCard } from "../Feed/FeedCard";
import { ButtonFeed } from "../Feed/ButtonFeed";
import { usePublication } from "../../contexts/Publication";
import Logo from "../../assets/logo.png";

export const FeedPage = () => {
  const { publications } = usePublication();

  return (
    <Flex
      direction="column"
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      minWidth="320px"
      h={"100vh"}
      w={"100vw"}
    >
      <Flex h="100px" w="100vw" alignItems="center" justifyContent="flex-start">
        <Image src={Logo} w="85px" margin="10px" />
      </Flex>
      <ButtonFeed />

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2 , 1fr)"]}
        padding={["10px", "20px", "30px"]}
      >
        {publications.map((item, index) => (
          <FeedCard key={index} publication={item} />
        ))}
      </Grid>
    </Flex>
  );
};
