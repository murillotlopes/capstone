import { Flex, Box, Text } from "@chakra-ui/react"
import { useRecipes } from "../../contexts/Recipes"

interface RecipeBox{
    recipe: Recipe
}

interface Recipe {
    id: number;
    title: string;
    serves: number;
    method: string;
    ingredients: string[];
    image: string;
}

export const RecipeBox = ({recipe}: RecipeBox) => {
    const { getRecipeById } = useRecipes()

    return(
        <Flex 
            bg={'#FFFFFF'}
            flexWrap={['nowrap', 'nowrap', 'wrap']} 
            borderRadius={'25px'}
            boxShadow={'sm'} 
            flexDir={['row', 'row', 'column']}
            w={['95%', '70%', '200px']}
            h={['100px', '100px', '300px']}
            margin={'10px 5px'}
            onClick={ () => getRecipeById(recipe.id)}
            cursor={'pointer'}
        >
            <Box                     
                minW={['100px', '100px', '200px']} 
                h={['100px', '100px', '200px']}
                backgroundImage={recipe.image}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                borderRadius={['25px', '25px', '25px 25px 0px 0px']}
            >
            </Box>

            <Flex 
                flexDir={'column'} 
                padding={['8px', '8px', '10px 12px']}
                justifyContent={'center'}
            >
                <Text 
                    as={'h3'}  
                    fontSize={['12px', '15px', '15px']} 
                    fontWeight={'500'} 
                    color={'violet.900'} 
                    lineHeight={'20px'} 
                >
                    {recipe.title}
                </Text>

                <Text fontSize={['10px', '12px', '12px']} color={'gray.600'} lineHeight={'15px'} marginTop={'5px'}>
                    {recipe.title}
                </Text>
            </Flex>  
        </Flex>
    )
}