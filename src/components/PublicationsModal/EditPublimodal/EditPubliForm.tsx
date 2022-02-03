import { Flex, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import Button from "../../Button";
import { Input } from "../../Form/Input";
import { Select } from "../../Form/InputSelect";
import { TextArea } from "../../Form/TextArea";

interface EditPubliProps {
  handleEditPublication: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

const EditForm = ({
  errors,
  register,
  handleEditPublication,
}: EditPubliProps) => {
  const categoryOptions = [
    { value: "fitness", label: "Fitness" },
    { value: "sobremesa", label: "Sobremesa" },
    { value: "entradas", label: "Entradas" },
    { value: "prato-principal", label: "Prato Principal" },
  ];

  return (
    <Flex
      as="form"
      onSubmit={handleEditPublication}
      alignItems="center"
      justifyContent="center"
    >
      <VStack mb="20px">
        <Select
          erorr={errors.category}
          {...register("category")}
          placeholder="Escolha a categoria da sua receita"
          name="category"
          options={categoryOptions}
        />
        <TextArea
          erorr={errors.description}
          {...register("description")}
          name="description"
          placeholder="Como foi sua experiência?"
        />
        <Button width="100%" filled text="Enviar" type="submit" />
      </VStack>
    </Flex>
  );
};

export default EditForm;
