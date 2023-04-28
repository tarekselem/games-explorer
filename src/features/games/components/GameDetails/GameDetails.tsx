import { Heading } from "@chakra-ui/react";
import { ExpandableText } from "@shared/components";
import { IGame } from "../../games-model";
import GameAttributes from "./GameAttributes";
import GameScreenshots from "./GameScreenshots";
import GameTrailer from "./GameTrailer";

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
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetails;
