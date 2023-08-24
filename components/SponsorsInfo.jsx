import Sponsors from "../data/sponsors.json";
import {
    SimpleGrid,
    Heading,
    Box,
    Text,
    Img,
    Link
} from "@chakra-ui/react"

export const SponsorsInfo = () => {
    return(
        <>
            <Box textAlign="center" maxW="75%" mx="auto" marginBottom="5%" bg="white" padding="20px" mt={30}>
                <Heading as="h1" size="3xl" fontWeight="bold" color="darkgreen">
                    Sponsors
                </Heading>

                <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={12}
                >
                    {Sponsors.map((logo, index) => (
                        <Box key={index}>
                            <Img src={logo.img} alt={logo.name} size="3xl" />
                            <Text mt={2} fontSize="xl">
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
                            Positive brand awareness: OurCity features sponsor logos and names across our home site and other media. Your brand will become associated with our cause.
                        </li>
                        <br/>
                        <li>
                            Introduction to a new audience: Through OurCity sponsors can connect to a our viewers and subscribers and pitch products or services to an audience that might not be familiar with them.
                        </li>
                        <br/>
                        <li>
                            Standing out: By supporting our brand, you can set your brand apart from other competitors. Customers are more likely to pick a brand associated with a good cause over one that is not.
                        </li>
                    </ul>
                    <br/>
                    <br/>
                </Text>
            </Box>
                
            <Text bg="white" width="100%" padding={20} textAlign="center">
                Interested in becoming a sponsor? Email us at <Link textDecoration={"underline"} fontWeight="bold" color="darkgreen" href="mailto:stemingup@gmail.com" > stemingup@gmail.com </Link>
            </Text>
        </>
    )
}



