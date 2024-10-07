# Pokédex Paraguaia

Uma aplicação frontend em React que consome a API pública do Pokémon para exibir uma lista de Pokémons. O usuário pode pesquisar por Pokémons específicos ou carregar mais Pokémons para explorar.

## Funcionalidades
- Listar Pokémons com nome e imagem.
- Carregar mais Pokémons através do botão.
- Pesquisar Pokémons por nome.
- Ao clicar em um pokemon abre outra aba com os status do mesmo.
## Tecnologias Utilizadas
- React	
- Axios 
- Styled Components

## Componentes  -  ContainerPokemons
- takePokemons(): Função responsável por buscar os Pokémons a partir da API.
- roamPokemons(): Busca os detalhes de cada Pokémon, incluindo a imagem e o nome.
- searchPokemon(): Realiza uma busca por um Pokémon específico na barra de pesquisa.
- handleSearchChange(): Atualiza o estado da aplicação sempre que o valor do campo de pesquisa for alterado.
