import { HStack, Image } from "@chakra-ui/react";
import { useSearchQueryStore } from "@shared/hooks";
import { Link } from "react-router-dom";
import logo from "src/assets/logo.png";
import { SearchInput, ColorModeSwitch } from "./components";

export const NavBar = () => {
  const setSearchText = useSearchQueryStore((store) => store.setSearchText);

  return (
    <HStack padding="10px">
      <Link to={"./"}>
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>

      <SearchInput onSearch={(searchText) => setSearchText(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};
