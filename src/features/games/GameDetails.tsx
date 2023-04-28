import { Heading } from "@chakra-ui/react";
import { ExpandableText } from "@shared/components";
import { GameAttributes, GameTrailer } from "./components";
import { IGame } from "./games-model";

interface Props {
  game: IGame;
}

export const GameDetails = ({ game }: Props) => {
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetails;
