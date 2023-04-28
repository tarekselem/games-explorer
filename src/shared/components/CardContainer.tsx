import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};
