import { Flex, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import Button from "../../Button";
import { Input } from "../../Form/Input";
import { Select } from "../../Form/InputSelect";

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


  return (
    <Flex as="form" onSubmit={handlePublication} flexDirection={"column"}>
      <VStack spacing="4">
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
          
        />
        <Input
          {...register("description")}
          error={errors.description}
          placeholder="Hoje eu cozinhei..."
          name="description"
        />
        <Button text="Publicar" type="submit" />
      </VStack>
    </Flex>
  );
};
