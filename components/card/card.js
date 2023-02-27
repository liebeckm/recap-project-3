export function createCharacterCard(character) {
  const list = document.createElement("li");
  list.classList.add("card");
  list.innerHTML = `
    <div class="card__image-container">
    <img
      class="card__image"
      src="${character.image}"
      alt="${character.name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">"${character.name}"</h2>
    <dl class="card__info">
      <dt class="card__info-title">"${character.status}"</dt>
      <dd class="card__info-description">"${character.status}"</dd>
      <dt class="card__info-title">"${character.type}"</dt>
      <dd class="card__info-description">"${character.type}"</dd>
      <dt class="card__info-title">"${character.episode.length}"</dt>
      <dd class="card__info-description">"${character.episode.length}"</dd>
    </dl>
  </div>
  `;

  cardContainer.append(list);
}

createCharacterCard();

// HINT: go to the docs and look where you can find all the information in the
// character objects you will receive from the API.
// Think about which input parameters this function will need.
// The function finally returns the created li HTML element.
