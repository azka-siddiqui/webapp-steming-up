import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import {
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";

export default function about() {
    return (
        <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="40vh"
        bg="rgb(21, 20, 38)">
            <Head>
            <title>OurCity - About</title>
            <link rel="logo" href="/Logo.png" />
            <meta property="og:type" content="website" />
            <link rel="logo" href="/Logo.png" />
            </Head>

            <NavBar bg="#151426"/>

            <Box textAlign = "center" maxW="1000px" mx="auto" id="about" mt = "30px" bg="#444261" padding="30px" margin="30px">
                
                <Heading as="h1" size="3xl" color = "white" fontWeight="bold" textAlign="center">
                About{" "}
                <Text as="span" color="#32a852">
                    OurCity
                </Text>
                </Heading>

                <Box fontSize="xl" color="white" mt="40px">
                    <Text>
                    From our conversations with urban planners working in both government and consulting, we 
                    know that many planners recognize the importance of engaging youth but don’t know how to effectively 
                    incorporate it into their work. Similarly, youth do not know how they can get involved in their cities urban planning initiatives. OurCity is here to change that - youth can share their ideas for changes to their 
                    local community or city to make the infrastructure more sustainable. 

                    </Text>

                    <Text mt="8">
                    Youth can fill out our form about a project or idea that they would like to see implemented in their community. We will then work with our partners to help bring this vision to life alongside young people. 
                    From outreach to ideation to feedback and follow-up, our program is a tangible way for youth to kickstart their journey in urban planning and make an impact in their community. We also host workshops as a helpful resource for those looking to better 
                    create liveable communities — cities for everyone.
                    </Text>
                        
                </Box>

            </Box>
        
            <Footer />
        </Box>
    )
}