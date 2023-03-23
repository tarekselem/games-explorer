import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "@shared/layouts";
import { IGenre } from "@shared/models";
import { GamesGrid } from "@features/games";
import { GenresList } from "@features/genres";
import "./App.css";

function App() {
  // TODO: move to store and use selector to get
  const [selectedGenre, setselectedGenre] = useState<IGenre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList onSelect={(genre) => setselectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
