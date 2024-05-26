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
        bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(21, 20, 38)), url('/park.jpg') "
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
          Welcome Back, [Name]
        </Text>
      </Heading>

      <SimpleGrid
        columns={{ md: 3 }}
        spacing={40} 
        maxW="100%"
        marginLeft="30px"
      >
        <Box mt = "10">
          <Img src="/scan.png" alt="Image 1" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Scan Invasive Species
          </Text>
          
          <Button colorScheme="green" mt="10" ml = "-2" as="a" href="/workshops">
            Learn More
          </Button>
        </Box>

        <Box mt = "10">
          <Img src="/report.png" alt="Image 2" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Report Invasive Species on Interactive Map
          </Text>
          
          <Button colorScheme="green" mt="30" ml = "-2" as="a" href="/workshops#workshops">
            Learn More
          </Button>
        </Box>

        <Box mt = "10" textAlign="center">
          <Img src="/databasepic.png" alt="Image 3" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left" ml = "-2">
            Invasive Species in Mississauga
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
