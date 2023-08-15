import React from "react";

import { Container, Box, Heading, Text, SimpleGrid, Img, Button } from "@chakra-ui/react";

export const News = () => {
return (
    <Box 
    backgroundColor = "Thistle"
    h="140vh" 
    textAlign="center"
    maxW={"8xl"}
    id="about" 
    mt = "-190px"
    marginBottom = "-5px"
    >
      <Container maxW="container.xl" p={8}>

        <Box className="basicText" textAlign="center" mb={8} mt={8}>
          <Heading as="h3" color="black">
            News &amp; Views
          </Heading>
          <Text color="black" fontSize="sm" mt={2}>
            Our latest youth engagement events and stories.
          </Text>
        </Box>

        </Container>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="right">
        <Box className="column" bg="white" p={4} maxW="300px" marginLeft="84px" minHeight="500px" display="flex" flexDirection="column" justifyContent="space-between">
            <Img src="/public/static/images/news1.png" alt="News 1" display="block" style={{ marginLeft: "auto", marginRight: 25 }} />
            <div>
            <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={-10} style={{ marginLeft: "20px" }}>
                How the highway-dependency of Canadian cities can be seen today
            </Heading>
            <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "20px" }} fontSize="12px">
                And why mixed-use zoning doesn’t always make sense in North American cities and suburbs.
            </Text>
            </div>
            <div style={{ textAlign: "center" }}>
            <Button type="button" colorScheme="gray" mt={4}>
                LEARN MORE
            </Button>
            </div>
            </Box>
            <Box className="column" bg="white" p={4} maxW="300px" marginLeft="40px" minHeight="500px" display="flex" flexDirection="column" justifyContent="space-between">
            <Img src="/public/static/images/news2.png" alt="News 2" display="block" style={{ marginLeft: "auto", marginRight: "25px", width: "350px", alignSelf: "flex-end", marginTop: "20px" }}/>
            <div>
            <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={-12} style={{ marginLeft: "2px" }}>
            Learn how you can contribute to making your city more sustainable
            </Heading>
            <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "2px" }} fontSize="12px">
            The OurCity program supports cities in their transformation into youth-centred places, by enabling young people to take part in city design  and governance and providing space for them to thrive.
            </Text>
            </div>
            <div style={{ textAlign: "center" }}>
            <Button type="button" colorScheme="gray" mt={4}>
                LEARN MORE
            </Button>
            </div>
            </Box>
            <Box className="column" bg="white" p={4} maxW="300px" marginLeft="-14px" minHeight="500px" display="flex" flexDirection="column" justifyContent="space-between">
            <Img src="/public/static/images/news3.png" alt="News 3" display="block" style={{ marginLeft: "auto", marginRight: "25px", marginTop: "30px" }} />
            <div>
            <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={2} style={{ marginLeft: "10px" }}>
            It’s time to become a ‘Planner as Advocate’: Starting with Bill 23
            </Heading>
            <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "10px" }} fontSize="12px">
            Planners and designers tend to play several roles in municipalities — planner as facilitator, as regulator, as policy advisor, as technician, as negotiator. It’s a complicated role to navigate.
            Planners are also visionaries, wanting the best for the communities they serve. Planners also increasingly need to become — and are becoming — advocates.
            </Text>
            </div>
            <div style={{ textAlign: "center" }}>
            <Button type="button" colorScheme="gray" mt={4}>
                LEARN MORE
            </Button>
            </div>
            </Box>
        </SimpleGrid>
        <Box textAlign="center" mt={8}>
          <Button className="basicText" colorScheme="blue" size="lg" backgroundColor = "SeaGreen" color = "white" border-color = "black" border-radius = "5px">
            Visit Our Blog
          </Button>
          <Text className="basicText" fontSize="16px" mt={2} color = "black" font-face = "Times New Roman">
            For more stories from our team.
          </Text>
      </Box>
      </Box>
    );
};