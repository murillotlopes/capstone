import { Center, Flex, Text } from "@chakra-ui/react"
import { RecipeBox } from "../../components/RecipeBox"
import { useRecipes } from "../../contexts/Recipes"

export const MatchFood = () => {
    const { recipes } = useRecipes()

    return(
        <Flex 
            bg={'chardon'} 
            w={'100vw'}
            maxw={'100vw'}
            minH={'100vh'} 
            alignItems={'flex-start'}
            flexDir={'column'}
            padding={'10px 0'}
            justifyContent={'center'}
        >

            <Center w={'100vw'} flexDir={'column'} marginBottom={'30px'} padding={['0 25px', '0 50px', '0 100px']}>
                <Text 
                    as={'h2'}
                    fontSize={['22px','34px', '46px','58px']} 
                    fontWeight={'500'} 
                    color={'violet.900'}
                    textAlign={'center'}
                    marginBottom={'10px'}
                >
                    Explore Nossas Comidas
                </Text>

                <Text
                    fontSize={'14px'}
                    color={'gray.600'}
                    textAlign={'center'}
                >
                    Conheça as receitas que combinam com os ingredientes que você selecionou!
                </Text>

            </Center>

            <Flex flexWrap={'wrap'} justifyContent={['center', 'center', 'space-between']} padding={['0 25px', '0 50px', '0 100px']}>
                {
                    recipes.map( item => <RecipeBox key={item.id} recipe={item}/>)
                }
            </Flex>
            
        </Flex>
    )
}