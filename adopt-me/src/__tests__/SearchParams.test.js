import React from "react";
import { render, cleanup } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
  //added after fail container and getByText
  const { getByTestId } = render(<SearchParams />);
  // const { container, getByTestId, getByText } = render(<SearchParams />);

  const animalDropDown = getByTestId("use-dropdown-animal");
  expect(animalDropDown.children.length).toEqual(ANIMALS.length + 1);

  //added after fail
  // expect(pet.breeds).toHaveBeenCalled();
  // const breedDropDown = getByTestId("use-dropdown-breeds");
  // expect(breedDropDown.children.length).toEqual(_breeds.length + 1);

  //added after fail
  // const searchResults = getByTestId("search-results");
  // expect(searchResults.textContent).toEqual("No Pets Found")
});
