import React from "react"
import { render, screen } from "@testing-library/react"
import {Input} from "../Components/Form/Input"
import {FaAirbnb} from "react-icons/fa"


describe ("Input component", () => {

    test("Should render an input",async () => {
        render( <Input name="email" label="Email" icon={FaAirbnb}  />);

        const input = screen.getAllByRole("textbox")

         expect(input).toBeTruthy();
    })



})