import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import Button from "../Components/Button";
import { Input } from "../Components/Form/Input";

const mockFn = jest.fn();

const addNumber = mockFn; 


describe("Button component", () => {
    test("Should render a button", async () => {
  render(<Button text="btn" />);

  expect(screen.getByText("btn")).toBeTruthy();
});

test("Should execute the onClick action", async () => {

  render(<Button text="btn" onClick={addNumber} />);


    userEvent.click(screen.getByRole("button"))

    await waitFor(()=>{
        expect(addNumber).toBeCalled()
    })
});

})

