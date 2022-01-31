import { FiArrowLeftCircle, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";
import { PseudoBox } from "@chakra-ui/core";

export const ButtonFeed = () => {
  const history = useHistory();

  return (
    <Stack
      position="fixed"
      right="0"
      fontSize="30px"
      cursor="pointer"
      display="flex"
      flexDirection={["row", "column"]}
      margin="30px"
      spacing="15px"
    >
      <FiPlusCircle />
      <FiArrowLeftCircle onClick={() => history.push("/dashboard")} />
      <FiLogOut />
    </Stack>
  );
};
