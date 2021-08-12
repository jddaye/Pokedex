/* POKEMON FUNCTION, in IIFE */
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  
  function add(pokemon) {
   if (
     typeof pokemon === 'object' &&
     'name' in pokemon) {
     pokemonList.push(pokemon);
   } else {
     console.log("Pokemon is not correct.");
   }
  }



  function getAll() {
    return pokemonList;
  }



  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');

    let listpokemon = document.createElement('li');
    listpokemon.classList.add('list-group-item', 'list-group-item-action');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');

    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener('click', function () { 
      showDetails(pokemon);
    });
  }



  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e); 
    })
  }



  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = []
        for (let i = 0; i < details.types.length; i++) {
          item.types.push(" " + details.types[i].type.name)
        }
    }).catch(function (e) {
      console.error(e);
    });
  }



  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }


  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1>' + pokemon.name + '</h1>');

    let imageElement = $('<img class="modal-img">');
    imageElement.attr('src', pokemon.imageUrl);

    let heightElement = $('<p>' + 'height: ' + pokemon.height + '</p>');

    let weightElement = $('<p>' + 'weight: ' + pokemon.weight + '</p>');

    let typesElement = $('<p>' + 'Types : ' + pokemon.types + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
}) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});