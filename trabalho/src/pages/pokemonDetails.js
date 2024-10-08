import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CardContainer } from '../styles/pokemonsStyle';
import { DetailsCard, TypeBadge, WeaknessBadge } from '../styles/pokemonDetailsStyles';

class PokemonDetails extends React.Component {
    state = {
        pokemon: null,
        types: [],
        weaknesses: [],
    };

    componentDidMount() {
        this.fetchPokemonData();
    }

    fetchPokemonData = () => {
        const { pokemonName } = this.props;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                console.log('Pokemon data response:', response.data);

                const types = response.data.types.map(typeInfo => typeInfo.type.name);
                const weaknesses = this.getWeaknesses(types);

                this.setState({ pokemon: response.data, types: types, weaknesses: weaknesses });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    getWeaknesses(types) {
        const typeWeaknesses = {
            normal: ['Fighting'],
            fire: ['Water', 'Rock', 'Ground'],
            water: ['Eletric', 'Grass'],
            grass: ['Fire', 'Ice', 'Bug', 'Flying', 'Poison'],
            eletric: ['Ground'],
            ice: ['Fire', 'Fighting', 'Rock', 'Steel'],
            fighting: ['Psychic', 'Fairy', 'Flying'],
            poison: ['Psychic', 'Ground'],
            ground: ['Water', 'Ice', 'Grass'],
            flying: ['Eletric', 'Rock', 'Ice'],
            psychic: ['Bug', 'Ghost', 'Dark'],
            bug: ['Fire', 'Flying', 'Rock', 'Ice', 'Fairy'],
            rock: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
            ghost: ['Ghost', 'Dark'],
            dragon: ['Ice', 'dragon', 'Fairy'],
            dark: ['Fighting', 'Bug', 'Fairy'],
            steel: ['Fire', 'Fighting', 'Ground'],
            fairy: ['Poison', 'Steel'],
        };

        const weaknesses = types.flatMap(type => typeWeaknesses[type] || []);
        return [...new Set(weaknesses)];
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { pokemon, types, weaknesses } = this.state;

        if (!pokemon) return <div>Dados indisponíveis</div>;

        return (
            <CardContainer style={{ textAlign: 'center' }}>
                <DetailsCard>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '200px', height: '200px' }} />
                    <h3>Tipos:</h3>
                    <div>
                        {types.map(type => (
                            <TypeBadge key={type}>
                                {this.capitalizeFirstLetter(type)}
                            </TypeBadge>
                        ))}
                    </div>
                    <h3>Fraquezas:</h3>
                    <div>
                        {weaknesses.length > 0 ? weaknesses.map(weakness => (
                            <WeaknessBadge key={weakness}>
                                {weakness}
                            </WeaknessBadge>
                        )) : <span>Sem Fraquezas</span>}
                    </div>
                </DetailsCard>
            </CardContainer>
        );
    }
}

const PokemonDetailsWrapper = () => {
    const { pokemonName } = useParams();
    return <PokemonDetails pokemonName={pokemonName} />;
};

export default PokemonDetailsWrapper;
