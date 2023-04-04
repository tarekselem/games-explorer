import { useData } from "@shared/hooks";
import { IPlatform } from "@shared/models";

const usePlatform = () =>
  useData<IPlatform>({
    endpoint: "/platforms/lists/parents",
  });

export default usePlatform;
