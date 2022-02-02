import { Flex, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import Button from "../../Button";
import { Select } from "../../Form/InputSelect";
import { TextArea } from "../../Form/TextArea";

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
        <Select
          error={errors.category}
          placeholder="Escolha a categoria da sua receita"
          name="category"
          options={categoryOptions}
          {...register("category")}
        />
        <TextArea
          
          error={errors.description}
          placeholder="Descreva sua experiência..."
          name="description"
          {...register("description")}
        />
        <Button text="Publicar" type="submit" />
      </VStack>
    </Flex>
  );
};
