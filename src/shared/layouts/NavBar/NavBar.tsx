import { HStack, Image } from "@chakra-ui/react";
import logo from "src/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  // TODO: dispatch an action for seatchText

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => console.log(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};
