import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { IGame } from "../../games-model";
import { PlatformsList } from "./PlatformsList";
import { CriticScore } from "./CriticScore";

interface Props {
  game: IGame;
}
export const GameCard = ({ game }: Props) => {
  // TODO: improve by adding mappers
  const platforms = game.parent_platforms.map((parent) => parent.platform);

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformsList platforms={platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
