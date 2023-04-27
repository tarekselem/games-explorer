import { Box, Heading, Text } from "@chakra-ui/react";
import { MdError, MdWarning } from "react-icons/md";

interface Props {
  type: "warning" | "error";
  error: Error;
}

export const Message = ({ type, error }: Props) => {
  return (
    <>
      <Box
        color={type === "error" ? "red.300" : "orange.300"}
        alignItems="center"
        alignContent="center"
        display="inline-flex"
      >
        {type === "error" ? (
          <MdError size={"50px"} />
        ) : (
          <MdWarning size={"50px"} />
        )}
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        An unexpected error occurred.
      </Heading>
      <Text color={"gray.500"}>{error.message}</Text>
    </>
  );
};
