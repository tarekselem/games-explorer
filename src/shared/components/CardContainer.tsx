import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
