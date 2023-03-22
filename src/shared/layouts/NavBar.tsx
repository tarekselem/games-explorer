import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "@shared/components/ColorModeSwitch";
import logo from "src/assets/logo.webp";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};
