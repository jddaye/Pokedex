let pokemonRepository = (function () {

  let modalContainer = document.querySelector('#modal-container');

  let modal = document.querySelector('modal');

  let modalClose = document.createElement('button');
  modalClose.classList.add('modal-close');

  let pokemonName = document.createElement('h1');
  pokemonName.classList.add('pokemonName');

  let pokemonHeight = document.createElement('p');
  pokemonHeight.classList.add('pokemonHeight');

  let pokemonWeight = document.createElement('p');
  pokemonWeight.classList.add('pokemonWeight');

  let imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  let pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemonImage');

  let pokemonType = document.createElement('p');
  pokemonType.classList.add('pokemonType');

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
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () { 
      showDetails(pokemon);
    });
  }

  function showModal() {
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  modalClose.addEventListener('click', hideModal);

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      pokemonName.innerHTML = pokemon.name;
      pokemonImage.src = pokemon.imageUrl;
      pokemonHeight.innerHTML = 'Height: ' + pokemon.height;
      pokemonWeight.innterHTML = 'Weight: ' + pokemon.weight;
      pokemonType.innterHTML = 'Type: ' + pokemon.type;
      modalClose.innterHTML = 'Close';
      showModal(pokemon);
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
      item.imageUrl = details.sprites.other.dream_world;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  modal.appendChild(modalClose);
  modal.appendChild(pokemonName);
  modal.appendChild(pokemonHeight);
  modal.appendChild(pokemonWeight);
  modal.appendChild(pokemonType);
  modal.appendChild(imageContainer);
  imageContainer.appendChild(pokemonImage);

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
}) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});