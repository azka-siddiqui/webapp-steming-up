import React from 'react';

import { Container, Box, Heading, Text, SimpleGrid, Img, Button } from "@chakra-ui/react";

export const News = () => {
  return (
    <Box 
    h="120vh" 
    textAlign="center"
    maxW={"8xl"}
    id="news" 
    mx="auto"
    marginBottom = "-5px"
    >

      <Container maxW="container.xl" pt={8}>

        <Box className="basicText" textAlign="center">
          <Heading as="h3" color="white">
            News &amp; Views
          </Heading>
          <Text color="white" fontSize="sm" mt={2}>
            Our latest youth engagement events and stories.
          </Text>
        </Box>

      </Container>

      <SimpleGrid columns={{md: 3 }} spacing={8} textAlign="right" margin="30px">
        <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/news1.png" display="block" style={{width: "350px", height: "160px", alignSelf: "flex-end"}}/>
          <div>
          <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={0} style={{ marginLeft: "2px" }}>
              How the highway-dependency of Canadian cities can be seen today
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "2px" }} fontSize="12px">
              And why mixed-use zoning doesn’t always make sense in North American cities and suburbs.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article1">
              LEARN MORE
          </Button>
          </div>
          </Box>
          <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/news2.png" display="block" style={{ marginLeft: "auto", marginRight: "25px", width: "350px", alignSelf: "flex-end", marginTop: "20px" }}/>
          <div>
          <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={0} style={{ marginLeft: "2px" }}>
          Learn how you can contribute to making your city more sustainable
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "2px" }} fontSize="12px">
          The OurCity program supports cities in their transformation into youth-centred places, by enabling young people to take part in city design  and governance and providing space for them to thrive.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article2">
              LEARN MORE
          </Button>
          </div>
          </Box>
          <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/news3.png" display="block" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", alignSelf: "flex-end" }} />
          <div>
          <Heading as="h3" textAlign="center" color="black" fontSize="lg" mt={15} style={{ marginLeft: "0px" }}>
          It’s time to become a ‘Planner as Advocate’: Starting with Bill 23
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "auto" }} fontSize="12px">
          Planners and designers tend to play several roles in municipalities — planner as facilitator, as regulator, as policy advisor, as technician, as negotiator. It’s a complicated role to navigate.
          Planners are also visionaries, wanting the best for the communities they serve. Planners also increasingly need to become — and are becoming — advocates.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article3">
              LEARN MORE
          </Button>
          </div>
          </Box>
      </SimpleGrid>

      <Box textAlign="center" mt={8}>
        <Text className="basicText" fontSize="16px" mt={2} color = "white">
          Subscribe for more stories from our team.
        </Text>
      </Box>
    </Box>
  );
};
