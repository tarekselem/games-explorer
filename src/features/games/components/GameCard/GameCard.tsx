import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { IGame } from "../../games-model";
import { PlatformsList } from "./PlatformsList";
import { CriticScore } from "./CriticScore";
import Stars from "./Stars";
import { transform } from "framer-motion";

interface Props {
  game: IGame;
}
export const GameCard = ({ game }: Props) => {
  // TODO: improve by adding mappers
  const platforms =
    game.parent_platforms?.map((parent) => parent.platform) ?? [];

  return (
    <Card maxWidth="600px">
      <Link to={`/games/${game.slug}`}>
        <Image
          maxWidth={600}
          maxHeight={400}
          src={getCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformsList platforms={platforms} />
            <Stars rating={game.rating_top} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};
