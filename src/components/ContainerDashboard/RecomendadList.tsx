import {
  Box,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export const RecomendedList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      w={"100%"}
      h={["60%", "60%", "80%", "80%"]}
      justifyContent={"center"}
      marginTop={0}
    >
      <VStack
        w={["50%", "50%", "25%", "20%"]}
        h={"100%"}
        m={2}
        bg={"#FFFFFF"}
        borderRadius={"15px"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box
          h={"100%"}
          w={"95%"}
          bg={"secondary"}
          m={2}
          borderRadius={"15px"}
        />
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          pl={[0, 2, 4, 4]}
          h={"50%"}
        >
          <Text
            fontWeight={"bold"}
            mb={[0, 1, 2, 2]}
            fontSize={["xs", "md", "lg", "xl"]}
          >
            Recomendado
          </Text>
          <Text
            mb={[0, 1, 2, 2]}
            color={"gray.600"}
            fontSize={["xs", "md", "lg", "xl"]}
          >
            Chicken Burguer
          </Text>
        </Flex>
      </VStack>
      <VStack
        w={["50%", "50%", "25%", "20%"]}
        h={"100%"}
        m={2}
        bg={"#FFFFFF"}
        borderRadius={"15px"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box
          h={"100%"}
          w={"95%"}
          bg={"secondary"}
          m={2}
          borderRadius={"15px"}
        />
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          pl={[0, 2, 4, 4]}
          h={"50%"}
        >
          <Text
            fontWeight={"bold"}
            mb={[0, 1, 2, 2]}
            fontSize={["xs", "md", "lg", "xl"]}
          >
            Recomendado
          </Text>
          <Text
            mb={[0, 1, 2, 2]}
            color={"gray.600"}
            fontSize={["xs", "md", "lg", "xl"]}
          >
            Chicken Burguer
          </Text>
        </Flex>
      </VStack>
      {isWideVersion && (
        <VStack
          w={["50%", "50%", "25%", "20%"]}
          h={"100%"}
          m={2}
          bg={"#FFFFFF"}
          borderRadius={"15px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <Box
            h={"100%"}
            w={"95%"}
            bg={"secondary"}
            m={2}
            borderRadius={"15px"}
          />
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            pl={[0, 2, 4, 4]}
            h={"50%"}
          >
            <Text
              fontWeight={"bold"}
              mb={[0, 1, 2, 2]}
              fontSize={["xs", "md", "lg", "xl"]}
            >
              Recomendado
            </Text>
            <Text
              mb={[0, 1, 2, 2]}
              color={"gray.600"}
              fontSize={["xs", "md", "lg", "xl"]}
            >
              Chicken Burguer
            </Text>
          </Flex>
        </VStack>
      )}
    </Flex>
  );
};
