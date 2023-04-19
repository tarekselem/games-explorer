import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IPlatform } from "@shared/models";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  onSelect: (platform: IPlatform) => void;
}

export const PlatformSelector = ({ onSelect }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform>();
  const { data, error } = usePlatform();

  const handleSelection = (platform: IPlatform) => {
    onSelect(platform);
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
