let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur', height: .7, type: ['Grass', 'Poison']},
    {name: 'Charmander', height: .6, type: 'Fire'},
    {name: 'Squirtle', height: .5, type: 'Water'},
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

document.write(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu'});
document.write(pokemonRepository.getAll());

// function pokemonLoop(pokemon) {
  // document.write(pokemon.name + ' is ' + pokemon.height + 'm tall and is ' + pokemon.type + ' type.');
// }
// pokemonList.forEach(pokemonLoop)


 // if (pokemonList[i].height <1.5 && pokemonList[i].height >.6){
  // document.write(" - Wow, that's big! ")
//}
