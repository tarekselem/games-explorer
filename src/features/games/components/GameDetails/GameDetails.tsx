import { Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Flex direction="column" gap={3}>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Flex>
      </GridItem>

      <GridItem>
        <Flex direction="column" gap={3}>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
