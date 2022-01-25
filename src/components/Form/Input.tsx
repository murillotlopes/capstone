import {
  FormControl,
  FormLabel,
  InputGroup,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  forwardRef,
} from "@chakra-ui/react";
import {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  label?: string;
  name?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputColorsOption = {
  [key: string]: string;
};

const InputColor: inputColorsOption = {
  error: "red0",
  default: "gray",
  focus: "gray",
  filled: "green",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error, icon: Icon, ...rest },
  ref
) => {
  const [inputValue, setInputValue] = useState("");
  const [inputStatus, setInputStatus] = useState("default");

  const InputFocus = useCallback(() => {
    if (!error) {
      return setInputStatus("focus");
    }
  }, [error]);

  useEffect(() => {
    if (error) {
      return setInputStatus("error");
    }
  }, [error]);

  const InputBlur = useCallback(() => {
    if (inputValue.length > 1 && !error) {
      return setInputStatus("filled");
    }
  }, []);
  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup>
        {Icon && (
          <InputLeftElement>
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          h="50px"
          name={name}
          variant="outline"
          {...rest}
          color={InputColor[inputStatus]}
          borderColor={InputColor[inputStatus]}
          onBlurCapture={InputBlur}
          onFocus={InputFocus}
          onChangeCapture={(e) => setInputValue(e.currentTarget.value)}
        />
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
