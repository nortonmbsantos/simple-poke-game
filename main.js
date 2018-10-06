import { Pokemon } from "Pokemon";

function callPokemon(){
    pokemon = new Pokemon('jesus');
    document.getElementById("pokemon").innerHTML = pokemon.getPokemon();
}