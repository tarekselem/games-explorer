import { IGenre, IPlatform } from "@shared/models";

interface IPublisher {
  id: number;
  name: string;
}

export interface IGame {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  genres: IGenre[];
  publishers?: IPublisher[];
  // mapping API smell design
  // TODO: creatre DTOs mappers
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}
