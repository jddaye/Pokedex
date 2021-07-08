let pokemonList = [
  {name: 'Bulbasaur', height: .7, type: ['Grass', 'Poison']},
  {name: 'Charmander', height: .6, type: 'Fire'},
  {name: 'Squirtle', height: .5, type: 'Water'},
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (Height: ' + pokemonList[i].height +') ');


if (pokemonList[i].height <1.5 && pokemonList[i].height >.6){
  document.write(" - Wow, that's big! ")
}
}