import { FiArrowLeftCircle, FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { HStack, Box } from "@chakra-ui/react";

import { CreatePubliModal } from "../../components/PublicationsModal/CreatePubliModal";
import { useAuth } from "../../contexts/Auth";
import { EditProModal } from "../../components/EditProModal";
import { useIcons } from "../../contexts/Icons";
import { useEffect } from "react";

export const ButtonFeed = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const { loadIcons } = useIcons();

  useEffect(() => {
    loadIcons();
  }, []);

  return (
    <HStack
      position="fixed"
      right="0"
      fontSize={["25px", "30px"]}
      cursor="pointer"
      display="flex"
      flexDirection={"row"}
      justifyContent="space-evenly"
      spacing="15px"
      marginRight={["10px", "10px", "30px"]}
    >
      <Box _hover={{ transform: "scale(1.2)", transition: "all 0.5s" }}>
        <EditProModal />
      </Box>
      <Box _hover={{ transform: "scale(1.2)", transition: "all 0.5s" }}>
        <CreatePubliModal />
      </Box>
      <Box _hover={{ transform: "scale(1.2)", transition: "all 0.5s" }}>
        <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      </Box>
      <Box _hover={{ transform: "scale(1.2)", transition: "all 0.5s" }}>
        <FiLogOut onClick={signOut} />
      </Box>
    </HStack>
  );
};
