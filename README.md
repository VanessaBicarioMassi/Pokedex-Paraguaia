# Pokédex Paraguaia

Uma aplicação frontend em React que utiliza a API pública do Pokémon ( https://pokeapi.co/ ) para exibir uma lista de Pokémons. O usuário pode pesquisar por Pokémons específicos ou carregar mais Pokémons para explorar.

## Funcionalidades
- Listar Pokémons com nome e imagem.
- Carregar mais Pokémons através do botão.
- Pesquisar Pokémons por nome.
- Ao clicar em um pokemon abre outra aba com os status do mesmo.

## Tecnologias Utilizadas
- React	
- Axios 
- Styled Components

### Como Utilizar

Na interface inicial você verá:

- **Header**: Um header com nome Pokémons e um botão **Home** para voltar a página inicial.
- **Input para pesquisa**: Um campo de input que você poderá digitar o nome do pokémon para pesquisar, e pressionando enter para ativar 
- **Lista de pokémons**: Uma lista com os pokémons com foto e nome clicavél para ser direcionado para a página do mesmo com seu status.
- **Botão para carregar mais pokémons**: Um **botão** para carregar mais pokémons na lista.

Ná página do pokémon você verá:

- **Header**: Um header com nome Pokémons e um botão **Home** para voltar a página inicial.
- **Status do Poémon**: Um card com o pokémon selecionado anteriormente com seu nome, foto, seus tipos e suas fraquezas
