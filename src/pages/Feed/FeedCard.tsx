import { Flex, Box, Image, Heading, HStack, Center } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";
import DeleteConfirmModal from "../../components/PublicationsModal/DeleteConfirmModal";
import EditModal from "../../components/PublicationsModal/EditPublimodal";
import { useEffect, useState } from "react";
import Entrada from "../../assets/entradas.png"
import Sobremesa from "../../assets/sweet.png"
import Principal from "../../assets/principal.png"
import Fitness from "../../assets/healthy.png"
import { string } from "yup/lib/locale";


interface FeedCartProps {
  publication: {
    userId: number;
    icon: string;
    username: string;
    category: string;
    description: string;
    id: number;
    date: string;
  };
}

export const FeedCard = ({ publication }: FeedCartProps) => {
  const { user } = useAuth();
  const userId = parseInt(user.id, 10);
  const [categoryImage, setCategoryImage] = useState("")

  useEffect(()=>{
    if(publication.category === "sobremesa"){
      setCategoryImage(Sobremesa);
    }
    if(publication.category === "fitness"){
      setCategoryImage(Fitness)
    }
    if(publication.category === "entradas"){
      setCategoryImage(Entrada)
    }
    if(publication.category === "prato-principal"){
      setCategoryImage(Principal)
    }

    
  },[publication])


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
          src={publication.icon}
          alt={publication.username}
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
            {publication.date}
          </Heading>
        </Box>
        {publication.userId === userId && (
          <HStack spacing="6" position="absolute" right="30px " top="15px">
            <EditModal publication={publication} />
            <DeleteConfirmModal publication={publication} />
          </HStack>
        )}
      </Flex>

      <Flex w="100%" alignItems="center" justifyContent="center" direction="column" >
        
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
        <Center opacity="0.4" margin="20px" bg="chardon" color="chardon" w="40px" h="30px" borderRadius="30%" >
        <Image  boxSize="25px"  src={categoryImage}  />

        </Center>
      </Flex>
    </Box>
  );
};
