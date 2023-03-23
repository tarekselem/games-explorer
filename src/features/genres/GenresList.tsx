import { useState } from "react";
import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { IGenre } from "@shared/models";
import { useGenres } from "./hooks";

interface Prop {
  onSelect: (genre: IGenre) => void;
}

export const GenresList = ({ onSelect }: Prop) => {
  // TODO: move to store and use selector to get
  const [selectedGenre, setselectedGenre] = useState<IGenre | null>(null);

  const { data, error, isLoading } = useGenres();
  const skeletons = [...Array(15)];

  const handleSelect = (genre: IGenre) => {
    setselectedGenre(genre);
    onSelect(genre);
  };

  if (error) return <></>;

  return (
    <List>
      {isLoading &&
        skeletons.map((skleleton, i) => (
          <ListItem key={i}>
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
            <Button
              onClick={() => handleSelect(genre)}
              fontSize="lg"
              variant="link"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              colorScheme={selectedGenre?.id === genre.id ? "green" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
