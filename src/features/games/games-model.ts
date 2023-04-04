import { IPlatform } from "@shared/models";

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
