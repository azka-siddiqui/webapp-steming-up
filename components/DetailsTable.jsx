import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Img,
  Button,
  Container,
  Stack,
  Link
} from "@chakra-ui/react";

export function DetailsTable ({ children, noAnim }) {
  return (
      <Box
        bgSize="cover"
        bgPos="center"
        bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(21, 20, 38)), url('/peopletalking.jpg') "
        bgRepeat="no-repeat"
        h="110vh"
      >
        <Container maxW={"3xl"} pt={25}>
          <Stack
            as={Box}
            textAlign={"center"}
            position="relative"
            mt="10"
          >

      <Heading color="white" fontSize="5xl">
        <Text as="span" color="#c9ac2c">
          What We Do
        </Text>
      </Heading>

      <SimpleGrid
        columns={{ md: 3 }}
        spacing={40} 
        maxW="100%"
        marginLeft="30px"
      >
        <Box mt = "10">
          <Img src="/image1.png" alt="Image 1" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Mentorship
          </Text>
          <Text color="white" mx="auto" ml = "-14" maxWidth="300px" mt="10" fontSize="sm" textAlign="center">
          We aim to engage youth in the consultation and design phases of youth-facing projects and services for public and non-profit organizations.
          </Text>
          <Button colorScheme="green" mt="10" ml = "-14" as="a" href="/workshops">
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
          <Button colorScheme="green" mt="20" ml = "-12" as="a" href="/workshops#workshops">
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
          <Button colorScheme="green" mt="3" ml = "-12" as="a" href="/about">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Stack>
    </Container>
    </Box>
    );
}
