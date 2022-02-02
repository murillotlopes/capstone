import {
  FormControl,
  FormLabel,
  InputGroup,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  forwardRef,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  label?: string;
  name?: string;
  error?: FieldError | null;
}

type inputColorsOption = {
  [key: string]: string;
};

const InputColor: inputColorsOption = {
  error: "negative",
  default: "gray.600",
  focus: "gray.600",
  filled: "sucess",
};

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { label, name, error = null, icon: Icon, ...rest },
  ref
) => {
  const [inputValue, setInputValue] = useState("");
  const [inputStatus, setInputStatus] = useState("default");
  const categoryOptions = [
    { value: "fitness", label: "Fitness" },
    { value: "sobremesa", label: "Sobremesa" },
    { value: "entradas", label: "Entradas" },
    { value: "prato-principal", label: "Prato Principal" },
  ];

  useEffect(() => {
    if (!!error) {
      return setInputStatus("error");
    }
  }, [error]);

  const InputFocus = useCallback(() => {
    if (!error) {
      return setInputStatus("focus");
    }
  }, [error]);

  const InputBlur = useCallback(() => {
    if (inputValue.length > 1 && !error) {
      return setInputStatus("filled");
    } else if (!!error) {
      return setInputStatus("error");
    }
  }, [error, inputValue]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup margin={"0.5rem auto"}>
        <ChakraSelect
          // _hover={{ bg: "gray.600", color: "white" }}
          border="2px"
          ref={ref}
          h="50px"
          name={name}
          id={name}
          variant="outline"
          {...rest}
          color={InputColor[inputStatus]}
          borderColor={InputColor[inputStatus]}
          onBlur={InputBlur}
          onFocusCapture={InputFocus}
          onChangeCapture={(e) => setInputValue(e.currentTarget.value)}
        >
          {categoryOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </ChakraSelect>
      </InputGroup>
      {!!error && <FormErrorMessage> {error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
