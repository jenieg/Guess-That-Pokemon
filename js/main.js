pokemonName = {}

document.querySelector('.newPoke').addEventListener('click', getPokemon)

function getPokemon(){
  const randomNumber = Math.floor(Math.random() * 151) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('h2').innerText = ``
        pokemonName.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.querySelector('img').src = data.sprites.other.dream_world.front_default
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('.guessPoke').addEventListener('click', guessPokemon)

function guessPokemon() {
  document.querySelector('h2').innerText = `${pokemonName.name}`

}