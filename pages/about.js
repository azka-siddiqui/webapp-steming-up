import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function about() {
  return (
    <Box bgPos='center' bgRepeat='repeat' minH='100vh' bg='rgb(21, 20, 38)'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Head>
          <title>EcoScan - About</title>
          <link rel='logo' href='/Logo.png' />
        </Head>

        <NavBar bg='#151426' />

        <Box
          textAlign='center'
          maxW='1000px'
          id='about'
          mt='30px'
          bg='#444261'
          padding='30px'
          margin='30px'
        >
          <Heading
            as='h1'
            size='3xl'
            color='white'
            fontWeight='bold'
            textAlign='center'
          >
            About{" "}
            <Text as='span' color='#32a852'>
               EcoScan
            </Text>
          </Heading>

          <Box fontSize='xl' color='white' mt='40px'>
            <Text>
            EcoScan is an app that allows users to identify invasive plants in Mississauga, learn about the negative effects they have on the environment, and educate them of the precautions and steps they should take in their removal. 
            </Text>

            <Text mt='8'>
             Users can upload photos of plants they suspect may belong to invasive species through the scan feature. EcoScan will then use a specially trained system to accurately identify which of the seven major invasive species in Mississauga it belongs to. The “Invasive Species in Mississauga” tab can then be used to garner information about the scanned plant. 
            </Text>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
