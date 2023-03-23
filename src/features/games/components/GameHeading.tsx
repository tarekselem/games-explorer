import { Heading } from "@chakra-ui/react";

//TODO: move to state
interface IGamesQuery {
  platformName: string;
  gerneName: string;
}

interface Props {
  query: IGamesQuery;
}
const GameHeading = ({ query }: Props) => {
  const heading = `${query.platformName || ""} ${query.gerneName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
