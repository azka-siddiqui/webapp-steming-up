import { motion } from "framer-motion";
import Head from "next/head";

import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Img,
  Button,
  Container,
  Stack,
  Icon,
  createIcon,
} from "@chakra-ui/react";

export function DetailsTable ({ children, noAnim }) {
  return (
      <Box
        backgroundImage="url('/peopletalking.jpg')"
        bgSize="cover"
        bgPos="center"
        bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(23, 0, 35)), url('/peopletalking.jpg') "
        bgRepeat="no-repeat"
        h="110vh"
      >
        <Container maxW={"3xl"} pt={25}>
          <Stack
            as={Box}
            textAlign={"center"}
            position="relative"
            spacing={{ base: 8, md:15 }}
            py={{ base: 20, md: 68 }}
          >
            <Box display={{ sm: "none", md: "block" }}>
              <Icon
                color="green.100"
                w={71}
                transform={"rotate(240deg)"}
                position={"absolute"}
                right={400}
                top={140}
              />

</Box>

      <Heading color="white" fontSize="5xl" mt = "-240" ml = "-8">
        <Text as="span" color="#F1C232">
          What We Do
        </Text>
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={40} 
        mt="-20"
        maxW="1200px"
        mx="auto"
      >
        <Box mt = "10">
          <Img src="/image1.png" alt="Image 1" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Mentorship
          </Text>
          <Text color="white" mx="auto" ml = "-14" maxWidth="300px" mt="10" fontSize="sm" textAlign="center">
          We aim to engage youth in the consultation and design phases of youth-facing projects and services for public and non-profit organizations.
          </Text>
          <Button colorScheme="blue" mt="10" ml = "-14">
            Learn More
          </Button>
        </Box>

        <Box mt = "10">
          <Img src="/idea2.png" alt="Image 2" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Workshops
          </Text>
          <Text color="white" mx="auto" ml = "-12" maxWidth="300px" mt="10" fontSize="sm" textAlign="center">
          We deliver city-building workshops for schools and youth organizations that focus on sustainability.
          </Text>
          <Button colorScheme="blue" mt="20" ml = "-12">
            Learn More
          </Button>
        </Box>

        <Box mt = "10" textAlign="center">
          <Img src="/idea3.png" alt="Image 3" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left" ml = "-4">
            OurCity Program
          </Text>
          <Text color="white" mx="auto" ml = "-12" maxWidth="300px" mt="10" fontSize="sm" textAlign="center">
          We enable high school students to lead their own community design-build projects by providing inspiration, leadership training, and project mentorship.
          </Text>
          <Button colorScheme="blue" mt="3" ml = "-12">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Stack>
    </Container>
    </Box>
    );
}