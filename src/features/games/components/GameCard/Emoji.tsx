import { Image } from "@chakra-ui/react";
import { emojis } from "src/data";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const MIN_RATING = 3;

  if (rating < MIN_RATING) return <></>;
  return <Image {...emojis.get(rating)} boxSize={6} marginTop={1} />;
};

export default Emoji;
