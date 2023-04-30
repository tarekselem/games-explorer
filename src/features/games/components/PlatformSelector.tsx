import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IPlatform } from "@shared/models";
import { useSearchQueryStore } from "@shared/hooks";
import usePlatform from "../hooks/usePlatforms";

export const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform>();
  const setPlatformId = useSearchQueryStore((store) => store.setPlatformId);
  const { data, error } = usePlatform();

  const handleSelection = (platform: IPlatform) => {
    setPlatformId(platform.id);
    setSelectedPlatform(platform);
  };

  if (error) return <></>;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => handleSelection(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
