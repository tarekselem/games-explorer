import { HStack, Icon } from "@chakra-ui/react";
import { IPlatform } from "../../games-model";
import platformsIconsMapper from "@lib/platforms-mapper";

interface Props {
  platforms: IPlatform[];
}

export const PlatformsList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color="gray.500"
          as={platformsIconsMapper.mapIcons(platform.slug)}
        />
      ))}
    </HStack>
  );
};
