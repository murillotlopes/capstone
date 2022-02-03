import {
    FormControl,
    FormLabel,
    InputGroup,
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps,
    InputLeftElement,
    forwardRef,
    FormErrorMessage,
  } from "@chakra-ui/react";
import { ForwardRefRenderFunction, useCallback, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";



interface TextAreaProps extends ChakraTextareaProps {
    label?: string;
    name?: string;
    error?: FieldError | null;
    icon?: IconType;
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
  
  const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
    { label, name, error = null, icon: Icon, ...rest },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [inputStatus, setInputStatus] = useState("default");
  
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
          {Icon && (
            <InputLeftElement color={InputColor[inputStatus]}>
              <Icon />
            </InputLeftElement>
          )}
  
          <ChakraTextarea
            _hover={{ bg: "gray.600", color: "white" }}
            border="2px"
            ref={ref}
            h="50px"
            name={name}
            id={name}
            variant="outline"
            color={InputColor[inputStatus]}
            borderColor={InputColor[inputStatus]}
            onBlur={InputBlur}
            onFocusCapture={InputFocus}
            onChangeCapture={(e) => setInputValue(e.currentTarget.value)}
            value={inputValue}
            {...rest}
          />
        </InputGroup>
        {!!error && <FormErrorMessage> {error.message}</FormErrorMessage>}
      </FormControl>
    );
  };
  
  export const TextArea = forwardRef(TextAreaBase);
  