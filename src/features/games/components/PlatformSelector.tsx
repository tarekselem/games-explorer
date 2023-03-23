import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IPlatform } from "../games-model";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  onSelect: (platform: IPlatform) => void;
}

export const PlatformSelector = ({ onSelect }: Props) => {
  // TODO: move to store and use selector to get
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  );
  const { data, error } = usePlatform();

  const handleSelection = (platform: IPlatform) => {
    onSelect(platform);
    setSelectedPlatform(platform);
  };

  if (error) {
    return <></>;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => handleSelection(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
