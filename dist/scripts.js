let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=151";function n(e){"object"==typeof e&&"name"in e?t.push(e):console.log("Pokemon is not correct.")}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.other.dream_world.front_default,t.height=e.height,t.weight=e.weight,t.types=[];for(let n=0;n<e.types.length;n++)t.types.push(" "+e.types[n].type.name)}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){console.log(t),l(t)})}function l(t){let e=$(".modal-body"),n=$(".modal-title");n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),i=$('<img class="modal-img">');i.attr("src",t.imageUrl);let l=$("<p>height: "+t.height+"</p>"),a=$("<p>weight: "+t.weight+"</p>"),r=$("<p>types : "+t.types+"</p>");n.append(o),e.append(i),e.append(l),e.append(a),e.append(r)}return{add:n,getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".list-group"),n=document.createElement("li");n.classList.add("list-group-item","list-group-item-action");let o=document.createElement("button");o.innerText=t.name,o.classList.add("btn"),o.setAttribute("data-target","#pokemonModal"),o.setAttribute("data-toggle","modal"),n.appendChild(o),e.appendChild(n),o.addEventListener("click",function(){i(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};n(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i,showModal:l}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});