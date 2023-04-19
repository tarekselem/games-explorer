import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { useSearchActions, useSearchContext } from "@shared/hooks";
import { IGenre } from "@shared/models";
import { useGenres } from "./hooks";

export const GenresList = () => {
  const { selectGenre } = useSearchActions();
  const { genre: selectedGenre } = useSearchContext();

  const { data, error, isLoading } = useGenres();
  const skeletons = [...Array(15)];

  const handleSelect = (genre: IGenre) => selectGenre(genre);

  if (error) return <></>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skleleton, i) => (
            <ListItem key={i}>
              <SkeletonText />
            </ListItem>
          ))}

        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={8}
                fit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => handleSelect(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                colorScheme={
                  selectedGenre?.id === genre.id ? "green" : "normal"
                }
              >
                <Text fontSize="md">{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
