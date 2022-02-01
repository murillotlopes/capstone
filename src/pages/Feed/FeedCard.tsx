import {
  Flex,
  Box,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";
import DeleteConfirmModal from "../../components/PublicationsModal/DeleteConfirmModal";
import EditModal from "../../components/PublicationsModal/EditPublimodal";

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

export const FeedCard = ({ publication }: FeedCartProps) => {
  const { user } = useAuth();
  const userId = parseInt(user.id, 10);

  return (
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
        alignItems="center"
        justifyContent="start"
        margin="10px 0 0 21px"
        position="relative"
      >
        <Image
          src={user.profile}
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
            {publication.username !== "" ? publication.username : "Anonymous"}
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
        {publication.userId === userId && (
          <HStack spacing="6" position="absolute" right="30px " top="15px">
            <EditModal publication={publication} />
            <DeleteConfirmModal publication={publication} />
          </HStack>
        )}
      </Flex>

      {publication.photo !== "" && (
        <Flex>
          <Image
            src={publication.photo}
            alt="Dan Abramov"
            mb="2"
            w={["250px", "300px"]}
            h={["250px", "300px"]}
            borderRadius="10px"
          />
        </Flex>
      )}

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
          {publication.description}
        </Heading>
      </Flex>

    </Box>
  );
};
