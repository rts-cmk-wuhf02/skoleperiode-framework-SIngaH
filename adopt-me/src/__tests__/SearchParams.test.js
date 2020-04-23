import React from "react";
import { render, cleanup } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropDown = getByTestId("use-dropdown-animal");
  expect(animalDropDown.children.length).toEqual(ANIMALS.length + 1);
});
