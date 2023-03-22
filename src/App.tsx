import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GamesGrid } from "@features/games";
import { NavBar } from "@layouts/NavBar";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
