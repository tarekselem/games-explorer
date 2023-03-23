export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  // mapping API smell design
  // TODO: creatre DTOs mappers
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}
