import { IconType } from "react-icons/lib";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

class PlatformsMapper {
  mapIcons(slug: string): IconType {
    switch (slug) {
      case "pc":
        return FaWindows;

      case "playstation":
        return FaPlaystation;

      case "xbox":
        return FaXbox;

      case "nintendo":
        return SiNintendo;

      case "mac":
        return FaApple;

      case "android":
        return FaAndroid;

      case "linux":
        return FaLinux;

      case "ios":
        return MdPhoneIphone;

      case "web":
        return BsGlobe;

      default:
        return FaGamepad;
    }
  }
}

export default new PlatformsMapper();
