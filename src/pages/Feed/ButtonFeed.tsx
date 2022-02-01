import { FiArrowLeftCircle, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";
import { PseudoBox } from "@chakra-ui/core";

import { CreatePubliModal } from "../../components/PublicationsModal/CreatePubliModal"
import { useAuth } from "../../contexts/Auth";



export const ButtonFeed = () => {
  const history = useHistory();
  const { signOut } = useAuth();

  return (
    <Box
      position="fixed"
      right="0"
      fontSize="30px"
      cursor="pointer"
      display="flex"
      flexDirection={["row", "column"]}
      justifyContent="space-evenly"
      margin={["10px", "5px 30px 0 0"]}
      h={["50px", "150px"]}
      w={["120px", "30px"]}
    >
      <CreatePubliModal />
      <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      <FiLogOut onClick={signOut} />
    </Box>
  );
};
