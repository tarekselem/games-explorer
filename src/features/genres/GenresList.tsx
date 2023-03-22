import {} from "react";
import { useGenres } from "./hooks";

export const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
