import { Box, Button } from "@chakra-ui/react";
import { NavBar } from "@shared/layouts/NavBar";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Message, NotFound } from "./components";

export const ErrorPage = () => {
  const errorResponse = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box textAlign="center" py={10} px={6}>
        {isRouteErrorResponse(errorResponse) ? (
          <NotFound />
        ) : (
          <Message type="error" error={errorResponse as Error} />
        )}

        <Button
          my={10}
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;
