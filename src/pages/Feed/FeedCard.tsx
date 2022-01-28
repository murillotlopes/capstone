import { Flex, Box, Image, Heading, Container } from "@chakra-ui/react";
import { usePublication } from "../../contexts/Publication";

// interface Publication {
//   userId: number
//   icon: string
//   username: string
//   photo: string
//   category: string
//   description: string
//   id: number
// }

export const FeedCard = () => {
  return (
    <Container
      w={"100%"}
      h={"100vh"}
      m={0}
      maxW="none"
      p={0}
      bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Box w="300px" margin="20px">
        <Flex>
          <Image
            src="https://www.allstorehospitality.com/wp-content/uploads/2016/09/tableware1-600x600.jpg"
            alt="Dan Abramov"
            mb="2"
            w="50px"
            h="50px"
            borderRadius="10px"
          />

          <Heading
            as="p"
            fontSize="lg"
            ml="3"
            color="gray.500"
            fontWeight="semibold"
          >
            Name
          </Heading>
          <Heading
            as="h6"
            fontSize="md"
            ml="3"
            color="gray.300"
            size="4xs"
            fontWeight="500"
          >
            Data
          </Heading>
        </Flex>

        <Flex>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mb="2"
            w="300px"
            h="300px"
            borderRadius="10px"
          />
        </Flex>

        <Flex>
          <Heading
            as="p"
            fontSize="md"
            color="gray.400"
            p="1px"
            w="100%"
            fontWeight="500"
          >
            You and your will love this refreshing salad that is perfect for
            warm days or summer time!
          </Heading>
        </Flex>
      </Box>
    </Container>
  );
};
