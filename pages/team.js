import Team from "../data/team.json";

import {
    Box,
    SimpleGrid,
    Heading,
    Avatar,
    Text
  } from "@chakra-ui/react";

const OurTeam = () => {
    return (
        <>
            <Box textAlign="center" maxW="75%" maxH = "100%" mx="auto" marginBottom="5%" padding="20px" border={"1px solid white"} id="ourteam">
                <Heading as="h1" size="2xl" color="#c9ac2c" fontWeight="bold">
                    Our Team
                </Heading>

                <SimpleGrid
                columns={{ base: 1, md: 1, lg: 3 }}
                mt={12}
                >
                    {Team.map((member) => (
                        <Box key={member.name}>
                            <Avatar
                                src={member.pic}
                                alt={member.name}
                                height="150px"
                                width="150px"
                            />
                            <Heading as="h3" size="lg" color="#32a852">
                                {member.name}
                            </Heading>

                            <Text fontSize="lg" color="white">
                                {member.desc}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </>
    )
}

export default OurTeam;
