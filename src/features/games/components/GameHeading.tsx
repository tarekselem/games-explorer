import { Heading } from "@chakra-ui/react";
import { useSearchContext } from "@shared/hooks";

export const GameHeading = () => {
  const { genre, platform } = useSearchContext();

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
