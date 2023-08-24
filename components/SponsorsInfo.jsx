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
            <Box textAlign="center" maxW="75%" mx="auto" marginBottom="5%" bg="white" padding="20px" mt={30}>
                <Heading as="h1" size="3xl" color="#32a852" fontWeight="bold">
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

            <Box color="white" maxW="75%" mx="auto">
                <Heading mb={10} color="#c9ac2c">
                    Why should you sponsor OurCity?
                </Heading>
                
                <Text ml={20}>
                    OurCity sponsors receive a variety of benefits for supporting our non-profit organization. To outline a few:
                        <br/> <br/>
                </Text>
                <Text ml={20} color="#32a852">
                    <ul>
                        <li>
                            Increased brand awareness: OurCity features sponsor logos and names across our home site and other media. Your brand will become associatedwith our cause.
                        </li>
                        <br/>
                        <li>
                            Introduction to a new audience: Through OurCity sponsors can connect to a new audience and pitch products or services to a demographic that might not be familiar with them.
                        </li>
                        <br/>
                        <li>

                        </li>
                    </ul>
                </Text>
            </Box>
        </>
    )
}



