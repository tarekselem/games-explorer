import { Image } from "@chakra-ui/react";
import { starsRate } from "src/data";

interface Props {
  rating: number;
}

const Stars = ({ rating }: Props) => {
  const MIN_RATING = 1;

  if (rating < MIN_RATING) return <></>;
  return <Image {...starsRate.get(rating)} boxSize={6} marginTop={1} />;
};

export default Stars;
