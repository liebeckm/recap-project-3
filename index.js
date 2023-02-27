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

export function createCharacterCard(characterData) {
  const list = document.createElement("li");
  list.classList.add("card");
  list.innerHTML = `
  <div class="card__image-container">
  <img class="card__image" src="${characterData.image}" alt="${characterData.name}" />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${characterData.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${characterData.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${characterData.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${characterData.occurrences}</dd>
  </dl>
</div>
`;
  cardContainer.append(list);
}

// Write a function createCharacterCard inside the card.js file and export it.
// You can use innerHTML to generate the HTML of the card. Cut the relevant HTML code
// of the card from the index.html and use it in your function.

// The following elements of the card need to be dynamic and change for each character:
// the src of the image
// the name of the character
// the status, type and occurrences values

// HINT: go to the docs and look where you can find all the information in the
// character objects you will receive from the API.
// Think about which input parameters this function will need.
// The function finally returns the created li HTML element.
