let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innterText = "pokemon.name";
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
}) ();

pokemonRepository.add ({name: 'Bulbasaur', height: '.7', type: ['Grass','Poison']});
pokemonRepository.add ({name: 'Charmander', height: '.6', type: 'Fire'});
pokemonRepository.add ({name: 'Squirtle', height: '.5', type: 'Water'});
pokemonRepository.add ({name: 'Clefairy', height: '.6', type: 'Fairy'});
pokemonRepository.add ({name: 'Vulpix', height: '.6', type: ['Fire','Ice']});
pokemonRepository.add ({name: 'Jigglypuff', height: '.5', type: ['Normal', 'Fairy']});
pokemonRepository.add ({name: 'Moewth', height: '.4', type: ['Normal','Steel','Dark']});
pokemonRepository.add ({name: 'Psyduck', height: '.8', type: 'Water'});
pokemonRepository.add ({name: 'Abra', height: '.9', type: 'Psychic'});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
