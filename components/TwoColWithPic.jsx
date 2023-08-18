import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    Img,
    createIcon,
    SimpleGrid
} from '@chakra-ui/react';

export const TwoColWithPic = ({ img, title, desc, align }) => {
    if (align === 'right') {
        return (
            <>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='40px' alignItems='center' justifyContent='center' bg='#100f1c' padding='20px' margin="30px">
                    <Box>
                        <Img src={img} alt={title} maxH='400px' mx='auto' />
                    </Box>
                    <Box>
                        <Text fontSize='3xl' as='h1' fontWeight='bold' color='#32a852' textAlign='right'>
                            {title}
                        </Text>
                        <Text color='white' mt='4' fontSize='xl' textAlign='right'>{desc}</Text>
                    </Box>
                </SimpleGrid>
            </>
        )
    }
    else {
        return (
            <>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='40px' alignItems='center' justifyContent='center' bg='#100f1c' padding='20px' margin="30px">
                    <Box>
                        <Text fontSize='3xl' as='h1' fontWeight='bold' color='#32a852'>
                            {title}
                        </Text>
                        <Text color='white' mt='4' fontSize='xl'>{desc}</Text>
                    </Box>
                    <Box>
                        <Img src={img} alt={title} maxH='400px' mx='auto' />
                    </Box>

                </SimpleGrid>
            </>
        )
    }
}
