import { useData } from "@shared/hooks";
import { IPlatform } from "../games-model";

const usePlatform = () =>
  useData<IPlatform>({
    endpoint: "/platforms/lists/parents",
  });

export default usePlatform;
