import { FiArrowLeftCircle, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import { CreatePubliModal } from "../../components/CreatePubliModal";

export const ButtonFeed = () => {

  const { isOpen, onClose, onOpen } = useDisclosure()

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
      <CreatePubliModal isOpen={isOpen} onClose={onClose} />
      <FiPlusCircle onClick={onOpen} />
      <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      <FiLogOut />
    </VStack>
  );
};
