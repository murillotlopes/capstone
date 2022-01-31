import {  Flex, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import Button from "../Button";
import { Input } from "../Form/Input";
import { Select } from "../Form/InputSelect";

interface CreatePubliProps {
  handlePublication: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

export const PublicationForm = ({
  errors,
  register,
  handlePublication,
}: CreatePubliProps) => {
  const categoryOptions = [
    { value: "fitness", label: "Fitness" },
    { value: "sobremesa", label: "Sobremesa" },
    { value: "entradas", label: "Entradas" },
    { value: "prato-principal", label: "Prato Principal" },
  ];

  return (
    <Flex as="form" onSubmit={handlePublication} flexDirection={"column"}>
      <VStack spacing="4">
        <Input
          {...register("description")}
          error={errors.description}
          placeholder="Hoje eu cozinhei..."
          name="description"
        />
        <Input
          {...register("photo")}
          error={errors.photo}
          placeholder="Cole o link da imagem desejada"
          name="photo"
        />
        <Select
          erorr={errors.category}
          {...register("category")}
          placeholder="Escolha a categoria da sua receita"
          name="category"
          options={categoryOptions}
        />
        <Button text="Publicar" type="submit" />
      </VStack>
    </Flex>
  );
};
