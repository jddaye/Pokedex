let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
}) ();

pokemonRepository.add (
{name: 'Bulbasaur', height: '.7', type: ['Grass','Poison']},
{name: 'Charmander', height: '.6', type: 'Fire'},
{name: 'Squirtle', height: '.5', type: 'Water'},
{name: 'Clefairy', height: '.6', type: 'Fairy'},
{name: 'Vulpix', height: '.6', type: ['Fire','Ice']},
{name: 'Jigglypuff', height: '.5', type: ['Normal', 'Fairy']},
{name: 'Moewth', height: '.4', type: ['Normal','Steel','Dark']},
{name: 'Psyduck', height: '.8', type: 'Water'},
{name: 'Abra', height: '.9', type: 'Psychic'},
);

function pokemonLoop(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height 'm tall and is ' + pokemon.type + ' type');
}
pokemonList.forEach(pokemonLoop);

//console.log(pokemonRepository.getAll()); <- This one works, but only prints the first pokemon
