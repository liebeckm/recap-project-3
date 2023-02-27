import { fetchCharacters } from "../../index.js";
export const searchBarFunction = (input) => {
  input.addEventListener("input", (event) => {
    console.log(event.target.value);
    fetchCharacters(event.target.value);
  });
};
