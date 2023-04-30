import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useSearchQueryStore } from "@shared/hooks";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { sortOrders } from "src/data";

export const SortSelector = () => {
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");
  const setSortOrder = useSearchQueryStore((store) => store.setSortOrder);

  const handleSelection = (sort: { value: string; label: string }) => {
    setSortOrder(sort.value);
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
