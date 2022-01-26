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
            flexDir={["column", "column", "row-reverse", "row-reverse"]}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Image 
            src={recipe.imagem} 
            width={["100vw", "100vw", "50vw", "50vw"]} 
            borderRadius={"5px 0px 0px 525px"} />
            <Flex flexDir={"column"} >
            <Flex 
                justifyContent={"flex-start"} 
                margin={["2.5rem auto", "2.5rem auto", "auto auto auto 2.5rem", "auto auto auto 2.5rem"]}
                width={["100vw", "100vw", "50vw", "50vw"]}
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
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    </ul>
                </Box>
            </Flex>
            <Box
                width={["90vw", "90vw", "50vw", "50vw"]}
                bgColor={"white"}
                borderRadius={"25px"}
                marginLeft={["auto", "auto", "2.5rem", "2.5rem"]}
            >
                <Text>Receita</Text>
                <Text>{recipe.modo_de_preparo}</Text>
            </Box>
            </Flex>
        </Flex>
    )
}