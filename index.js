import { searchBarFunction } from "./components/search-bar/search-bar.js";
//imports
import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

searchBarFunction(searchBar);

// functions
export async function fetchCharacters(searchQuery) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchQuery}&page=${page}`
  );
  const data = await response.json();
  return data;
}

async function showCharacter() {
  const data = await fetchCharacters("");
  console.log(data);
  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    cardContainer.append(createCharacterCard(character));
  });
}
showCharacter();
