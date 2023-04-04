import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { sortOrders } from "src/data";

interface Props {
  onSelect: (sortOrder: string) => void;
}

export const SortSelector = ({ onSelect }: Props) => {
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");

  const handleSelection = (sort: { value: string; label: string }) => {
    onSelect(sort.value);
    setSelectedSortLabel(sort.label);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSortLabel}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => handleSelection(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
