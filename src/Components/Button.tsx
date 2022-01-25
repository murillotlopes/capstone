import {Button as ChakraButton , ButtonProps as ChakraButtonProps} from "@chakra-ui/react"

    interface ButtonProps extends ChakraButtonProps{
        filled?: boolean;
        text:string
    }


const Button = ({filled, text, ...rest}:ButtonProps) =>{



    return(<ChakraButton h="60px" {...rest}>
        {text}
    </ChakraButton>)
}

export default Button;