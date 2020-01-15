import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      allPokemons: [],
      searchedPokemon: "",
      filteredPokemons: []
    };
  }

  fetchPokemons = async () => {
    const response = await fetch("http://localhost:3000/pokemon");
    const apiData = await response.json();
    console.log(apiData);
    this.setState({
      pokemons: apiData,
      allPokemons: apiData,
      filteredPokemons: apiData
    });
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  postPokemons = async (event) => {
    const fetchUrl = "http://localhost:3000/pokemon";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: event.target.name.value,
        stats: [
          {
            value: event.target.hp.value,
            name: "hp"
          }
        ],
        sprites: {
          front: event.target.frontUrl.value,
          back: event.target.backUrl.value
        }
      })
    };
    const response = await fetch(fetchUrl, settings);
    const postData = await response.json();
    this.setState({
      allPokemons: [...this.state.allPokemons, postData]
    });
  };


  searchedPokemon = (event) => {
    console.log(event.target.value)
    let searchResult = this.state.allPokemons.filter(pokemon =>
      pokemon.name.includes(event.target.value)
    );
    this.setState({
      filteredPokemons: searchResult
    });
  };

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemons={this.postPokemons} />
        <br />
        <Search searchedPokemon={this.searchedPokemon} />
        <br />
        <PokemonCollection allPokemons={this.state.filteredPokemons} />
      </Container>
    );
  }
}

export default PokemonPage;
