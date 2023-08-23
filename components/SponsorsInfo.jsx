import Sponsors from "../data/sponsors.json";
import {
    SimpleGrid,
    Heading,
    Box,
    Text,
    Img,
} from "@chakra-ui/react"

export const SponsorsInfo = () => {
    return(
        <>
            <Box textAlign="center" maxW="75%" mx="auto" marginBottom="5%" bg="#444261" padding="20px">
                <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                    Sponsors
                </Heading>

                <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={8}
                >
                    {Sponsors.map((logo, index) => (
                        <Box key={index} as="a" target="_blank" href={logo.link}>
                        <Img src={logo.img} alt={logo.name} size="3xl" />
                        <Text mt={2} fontSize="xl" color="#c9ac2c">
                            {logo.name}
                        </Text>
                        </Box>
                    ))}
                </SimpleGrid>    
            </Box>

            <Box color="white" maxW="75%">
                <Text>
                    INSERT SPONSOR BENEFITS HERE !!!!!!!!!!!!!!!!!!!!!!
                </Text>
            </Box>
        </>
    )
}



