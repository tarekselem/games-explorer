import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "@components/ColorModeSwitch";
import logo from "../assets/logo.webp";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};
