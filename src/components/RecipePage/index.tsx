import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { FiUser } from "react-icons/fi"

interface Recipe {
    id: number
    titulo: string
    porção: number
    modo_de_preparo: string
    ingredientes: string[]
    imagem: string
}

export const RecipePage = ( recipe: Recipe ) => {

    return (
        <Flex
            key={recipe.id}
            bgGradient={"linear(to-r, bgColor 75%, primary 25%)"}
            h={"100vh"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Image src={recipe.imagem} width={"100vw"} borderRadius={"5px 0px 0px 525px"} />
            <Flex 
                justifyContent={"flex-start"} 
                margin="2.5rem auto"
            >
                <Box
                width={"40%"}
                mr={"0.5rem"}
                >
                    <Text>{recipe.titulo}</Text>
                    <Flex justifyContent={"flex-start"} > <AiOutlineClockCircle/>  <Text ml={"0.2rem"} >30 min</Text>  </Flex>
                    <Flex justifyContent={"flex-start"} > <FiUser/> <Text ml={"0.2rem"} >{recipe.porção}</Text> </Flex>
                </Box>
                <Box
                width={"40%"}
                >
                    <Text>Ingredientes</Text>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </Box>
            </Flex>
            <Box
                width={"90vw"}
                bgColor={"white"}
                borderRadius={"25px"}
            >
                <Text>Receita</Text>
                <Text>{recipe.modo_de_preparo}</Text>
            </Box>
        </Flex>
    )
}