import React from 'react';
import axios from 'axios';
import { CardContainer, Card, LoadMoreButton, SearchInput } from '../styles/pokemonsStyle';

class ContainerPokemons extends React.Component {
    state = {
        pokemons: [],
        sprites: [],
        offset: 0,
        searchQuery: '',
    };

    componentDidMount() {
        this.takePokemons();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pokemons !== this.state.pokemons) {
            this.roamPokemons();
        }
    }

    roamPokemons = () => {
        const promises = this.state.pokemons.map(pokemon =>
            axios.get(pokemon.url).then(response => ({
                name: response.data.name,
                sprite: response.data.sprites.front_default
            }))
        );

        Promise.all(promises)
            .then(sprites => this.setState({ sprites: [...this.state.sprites, ...sprites] }))
            .catch(err => console.log(err.message));
    };

    takePokemons = () => {
        const  offset  = this.state.offset;
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`)
            .then((response) => {
                this.setState({
                    pokemons: response.data.results,
                    offset: offset + 21
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    searchPokemon = () => {
        const  searchPokemon  = this.state.searchQuery;
        if (searchPokemon === '') {
            this.takePokemons(); 
        } else {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`)
                .then(response => {
                    const pokemon = {
                        name: response.data.name,
                        sprite: response.data.sprites.front_default,
                    };
                    this.setState({ sprites: [pokemon] }); 
                })
                .catch(err => {
                    console.log(err.message);
                    this.setState({ sprites: [] });
                });
        }
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        const cardPokemons = this.state.sprites.map((pokemon, index) => (
            <Card key={index}>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p>{pokemon.name}</p>
            </Card>
        ));

        return (
            <div>
                <SearchInput
                    type="text"
                    placeholder="Pesquise um Pokémon..."
                    value={this.state.searchQuery}
                    onChange={this.handleSearchChange}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            this.searchPokemon();
                        }
                    }}
                />
                <CardContainer>
                    {cardPokemons}
                </CardContainer>
                <LoadMoreButton onClick={this.takePokemons}>Carregar mais Pokémons</LoadMoreButton>
            </div>
        );
    }
}

export default ContainerPokemons;
