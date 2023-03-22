import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const CardContainer = ({ children }: Props) => {
  return (
    <Box width={300} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
