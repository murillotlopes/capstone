import { FiArrowLeftCircle, FiLogOut, FiPlusCircle, FiUser } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import { PseudoBox } from "@chakra-ui/core";
import { useAuth } from "../../contexts/Auth";
import { CreatePubliModal } from "../../components/CreatePubliModal";
import { EditProModal } from "../../components/EditProModal";
import { useIcons } from "../../contexts/Icons";
import { useEffect } from "react";

export const ButtonFeed = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const { loadIcons} = useIcons()
  
  useEffect(() => {
    loadIcons()
  }, [])

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
      <EditProModal/>
      <CreatePubliModal />
      <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      <FiLogOut onClick={signOut} />
    </Box>
  );
};
