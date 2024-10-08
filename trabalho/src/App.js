import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ContainerPokemons from './components/pokemons';
import PokemonDetails from './pages/pokemonDetails';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<ContainerPokemons />} />
                    <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
