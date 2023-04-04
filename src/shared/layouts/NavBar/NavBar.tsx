import { HStack, Image } from "@chakra-ui/react";
import { useSearchActions } from "@shared/hooks";
import logo from "src/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  const { setSearchText } = useSearchActions();

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => setSearchText(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};
