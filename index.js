import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { searchBarFunction } from "./components/search-bar/search-bar.js";
//imports

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
let maxPage = 20;
let page = 1;
page = createPagination(nextButton, prevButton, pagination, maxPage, page);
console.log(page);
const searchQuery = "";

// functions
export async function fetchCharacters(searchQuery) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchQuery}&page=${page}`
  );
  const data = await response.json();
  return data;
}

searchBarFunction(searchBar, cardContainer);
