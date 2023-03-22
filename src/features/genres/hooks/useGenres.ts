import { useData } from "@shared/hooks";

interface IGenere {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

export const useGenres = () => useData<IGenere>("/genres");
export default useGenres;
