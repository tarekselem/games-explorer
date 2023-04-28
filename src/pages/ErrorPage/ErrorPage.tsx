import { Box, Button } from "@chakra-ui/react";
import { NavBar } from "@shared/layouts/NavBar";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Message, NotFound } from "./components";

export const ErrorPage = () => {
  const errorResponse = useRouteError();

  return (
    <>
      <NavBar />
      <Box textAlign="center" py={10} px={6}>
        {isRouteErrorResponse(errorResponse) ? (
          <NotFound />
        ) : (
          <Message type="error" error={errorResponse as Error} />
        )}

        <Link to={"/"}>
          <Button
            my={10}
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default ErrorPage;
