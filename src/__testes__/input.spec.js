import React from "react"
import { render, screen } from "@testing-library/react"
import {Input} from "../Components/Form/Input"
import {FaAirbnb} from "react-icons/fa"
import useEvent from "@testing-library/user-event"


describe ("Input component", () => {

    test("Should render an input",async () => {
        render( <Input name="email" label="Email" icon={FaAirbnb}  />);

        const input = screen.getAllByRole("textbox")

         expect(input).toBeTruthy();
    })


    // test("Should render green border and text when the input has a value",async () => {
    //     render( <Input name="email" label="Email" icon={FaAirbnb}  />)

    //     const input = screen.getAllByRole("textbox");

    //     await useEvent.type(input, "aine@mota.com");

    


    // })
})