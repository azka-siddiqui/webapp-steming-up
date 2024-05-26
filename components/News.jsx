import React from 'react';

import { Container, Box, Heading, Text, SimpleGrid, Img, Button } from "@chakra-ui/react";

export const News = () => {
  return (
    <Box 
    h="120vh" 
    textAlign="center"
    maxW={"8xl"}
    id="news" 
    mx = "auto"
    marginBottom = "-5px"
    >

      <Container maxW="container.xl" pt={8}>

        <Box className="basicText" textAlign="center">
          <Heading as="h3" color="white">
            EcoScan Features
          </Heading>
          <Text color="white" fontSize="sm" mt={2}>
            Our app features.
          </Text>
        </Box>

      </Container>

      <SimpleGrid columns={{md: 3 }} spacing={8} textAlign="right" margin="30px">
        <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/map.png" display="block" style={{width: "auto", height: "auto", alignSelf: "flex-end"}}/>
          <div>
          <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={0} style={{ marginLeft: "2px" }}>
              Report a Sighting
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "2px" }} fontSize="12px">
          Please select the location of your sighting on the map above, or allow ECOSCAN to use your location.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article1">
              Learn More
          </Button>
          </div>
          </Box>
          <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/sample.jpeg" display="block" style={{ marginLeft: "auto", marginRight: "25px", width: "350px", alignSelf: "flex-end", marginTop: "20px" }}/>
          <div>
          <Heading as="h3" textAlign="left" color="black" fontSize="lg" mt={0} style={{ marginLeft: "2px" }}>
          Alternative Resources
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "2px" }} fontSize="12px">
          If you identify an invasive species in Mississauga,  we encourage you to report it on our interactive map or call the toll free Invading Species Hotline at Toll-free: 1-800-563-7711.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article2">
              Privacy and Location Details
          </Button>
          </div>
          </Box>
          <Box className="column" bg="white" p={4}  display="flex" flexDirection="column" justifyContent="space-between">
          <Img src="/options.png" display="block" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", alignSelf: "flex-end" }} />
          <div>
          <Heading as="h3" textAlign="center" color="black" fontSize="lg" mt={15} style={{ marginLeft: "0px" }}>
          Learn About Species from our Database
          </Heading>
          <Text color="black" mt={2} textAlign="left" style={{ marginLeft: "auto" }} fontSize="12px">
          We have invasive plant species from across Mississauga, with a 95% accuracy rate.
          </Text>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button type="button" colorScheme="gray" mt={4} as="a" href="/article3">
              LEARN MORE
          </Button>
          </div>
          </Box>
      </SimpleGrid>

    </Box>
  );
};
