import { fetchCharacter } from "../../index.js";
export const searchBarFunction = (input) => {
  input.addEventListener("input", (event) => {
    fetchCharacter(event.target.value);
  });
};
