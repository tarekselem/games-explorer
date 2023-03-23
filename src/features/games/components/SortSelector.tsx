import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (sortOrder: string) => void;
}

export const SortSelector = ({ onSelect }: Props) => {
  // TODO: move to store and use selector to get
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");

  const sortOrders: { value: string; label: string }[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

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
