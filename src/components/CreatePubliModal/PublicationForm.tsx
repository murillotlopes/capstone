import { Flex } from "@chakra-ui/react";
import {
    DeepMap,
    FieldError,
    FieldValues,
  } from "react-hook-form";
import Button from "../Button";
import { Input } from "../Form/Input";
  
  interface CreatePubliProps {
    handlePublication: () => void;
    errors: DeepMap<FieldValues, FieldError>;
    register: any
  }

export const PublicationForm = ({ errors, register, handlePublication }: CreatePubliProps) => {
    return (
        <Flex
            as="form"
            onSubmit={handlePublication}
            flexDirection={"column"}
        >
            <Input
                {...register("description")}
                error={errors.description}
                placeholder="Hoje eu cozinhei..."
                name="description"
            />
            <Button text="Publicar" type="submit" />
        </Flex>
    )
}