import { Box, Flex } from "@chakra-ui/react";
import { GameHeading } from "./GameHeading";
import { PlatformSelector } from "./PlatformSelector";
import { SortSelector } from "./SortSelector";

export const GridHeader = () => {
  return (
    <Box paddingLeft={2}>
      <GameHeading />
      <Flex marginBottom={5} gap={5}>
        <PlatformSelector />
        <SortSelector />
      </Flex>
    </Box>
  );
};
