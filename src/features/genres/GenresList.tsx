import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  SkeletonText,
} from "@chakra-ui/react";
import {} from "react";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { useGenres } from "./hooks";

export const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [...Array(15)];

  if (error) return <></>;

  return (
    <List>
      {isLoading &&
        skeletons.map((skleleton) => (
          <ListItem>
            <SkeletonText />
          </ListItem>
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
