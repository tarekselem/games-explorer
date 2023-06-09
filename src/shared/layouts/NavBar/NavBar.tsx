import { HStack, Image } from "@chakra-ui/react";
import { useSearchQueryStore } from "@shared/hooks";
import { Link } from "react-router-dom";
import logo from "src/assets/logo.webp";
import { SearchInput, ColorModeSwitch } from "./components";

export const NavBar = () => {
  const setSearchText = useSearchQueryStore((store) => store.setSearchText);

  return (
    <HStack padding="10px">
      <Link to={"./"}>
        <Image src={logo} alt="Games-Hub" boxSize="60px" objectFit="contain" />
      </Link>

      <SearchInput onSearch={(searchText) => setSearchText(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};
