import { FiArrowLeftCircle, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

export const ButtonFeed = () => {
  const history = useHistory();

  return (
    <VStack
      direction={["column", "row"]}
      spacing="24px"
      position="fixed"
      right="0"
      fontSize="30px"
      margin="30px 60px 0 0"
      cursor="pointer"
    >
      <FiPlusCircle />
      <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      <FiLogOut />
    </VStack>
  );
};
