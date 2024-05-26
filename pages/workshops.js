import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { TwoColWithPic } from "../components/TwoColWithPic";
import { BookletTable } from "../components/BookletTable";

import {
    Box,
    Heading,
    Button
  } from "@chakra-ui/react";

export default function workshops() {
    return (
      <Box
      bgPos="center"
      bgRepeat="repeat"
      minH="40vh"
      bg="rgb(21, 20, 38)">
        <Head>
          <title>EcoScan - Scanner</title>
          <link rel="logo" href="/ecoscan.png" />
        </Head>

        <NavBar bg="#151426"/>

        <Box textAlign="center" maxW="700px" mx="auto" mb={10}>
              <Heading
                as="h1"
                size="3xl"
                color="#c9ac2c"
                fontWeight="bold"
                mt={10}
              >
                Sample Species and Location
              </Heading>
        </Box>

        <BookletTable id="scannerpage"/>

        <br id="scanner"/>

        <TwoColWithPic
              img="/workshop1.jpeg"
              title="Tree of Heaven"
              desc="Tree of Heaven is an invasive tree species native to China.

              It spreads quickly and crowds out native plants. The loss of native plants reduces the biodiversity of an area and the ecosystem's health. Tree of Heaven is a preferred host plant for the adult Spotted Lanternfly, an invasive insect that is not present in Canada but is identified as an emerging threat to the forestry industry."
              align="left" 
        />

        <TwoColWithPic
            img="/workshop2.jpeg"
            title="Wild Parsnip"
            desc="Wild Parsnip is an invasive plant native to Eurasia and is toxic to humans.

            Contact with sap can cause severe burns when exposed to sunlight. If exposure is suspected, wash the area with soap and water, cover it for 48 hours, and watch for a reaction. The sap can also cause blindness if it gets into the eyes."
            align="right"
        />

        <Box textAlign={"center"} id="calendar">
            <Button
              color="white"
              border-color = "white"
              border-radius = "5px"
              as="a"
              href="/calendar"
              bg={"#212D71"}
              px={6}
              _hover={{
                bg: "#56d679",
              }}
              target="_blank"
            >
              Check out our app updates here where we regularly notify users of new species added to the database!
            </Button>
          </Box>

        <Footer />
            
    </Box>
    )
}