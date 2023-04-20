import { HStack, Image } from "@chakra-ui/react";
import { useSearchActions } from "@shared/hooks";
import logo from "src/assets/logo.png";
import { SearchInput, ColorModeSwitch } from "./components";

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
