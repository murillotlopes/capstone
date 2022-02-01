import { Flex, Box, Image, Heading, Container, Center } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { usePublication } from "../../contexts/Publication";

interface FeedCartProps {
  publication: {
    userId: number;
    icon: string;
    username: string;
    photo: string;
    category: string;
    description: string;
    id: number;
  };
}

export const FeedCard = ({publication}: FeedCartProps) => {
  const { editPublication, deletePublication } = usePublication();

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
      flexDirection={"column"}
    >
      <Box
        w={["280px", "320px"]}
        margin="5px 10px 5px 20px"
        background="chardon"
        display="flex"
        alignItems="center"
        flexDirection={"column"}
        borderRadius="10px"
      >
        <Flex
          w="100%"
          display="flex"
          justifyContent={"flex-start"}
          margin="10px 0 0 21px"
        >
          <Image
            src="https://www.allstorehospitality.com/wp-content/uploads/2016/09/tableware1-600x600.jpg"
            alt="Dan Abramov"
            mb="2"
            w="50px"
            h="50px"
            borderRadius="10px"
          />
          <Box>
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
          </Box>
          {/* <Center as="button" onClick={() => editPublication(publication)}>
            <FaEdit />
          </Center>
          <Center as="button" onClick={() => deletePublication(publication)}> */}
            {/* <FaTrash />
          </Center> */}
        </Flex>

        <Flex>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mb="2"
            w={["250px", "300px"]}
            h={["250px", "300px"]}
            borderRadius="10px"
          />
        </Flex>

        <Flex w="100%" textAlign="start">
          <Heading
            as="p"
            fontSize="md"
            color="gray.400"
            p="1px"
            w="100%"
            fontWeight="500"
            margin="0 14px 5px 10px"
          >
            You and your will love this refreshing salad that is perfect for
            warm days or summer time!
          </Heading>
        </Flex>
      </Box>
    </Container>
  );
};
