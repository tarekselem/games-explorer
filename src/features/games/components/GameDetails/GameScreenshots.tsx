import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useScreenshots } from "@features/games/hooks";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.map((screenshot) => (
        <Image
          key={screenshot.id}
          alt={String(screenshot.id)}
          src={screenshot.image}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
