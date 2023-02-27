import { fetchCharacters } from "../../index.js";
import { createCharacterCard } from "../card/card.js";

export const searchBarFunction = (input, cardContainer, index) => {
  input.addEventListener("input", async (event) => {
    const data = await fetchCharacters(event.target.value);
    console.log(data);
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      cardContainer.append(createCharacterCard(character));
    });
  });
};
