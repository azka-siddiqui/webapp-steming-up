import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { NewForm } from "../components/NewForm";

import {
    Box,
    Heading,
    Text
  } from "@chakra-ui/react";

  export default function form() {
    return (
        <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="rgb(21, 20, 38)">
            <Head>
            <title>OurCity - Form</title>
            <link rel="logo" href="/Logo.png" />
            </Head>

            <NavBar bg="#151426"/>

            <Box textAlign = "center" maxW="1000px" id="about" mt = "30px" bg="#444261" padding="30px" margin="30px">
                
                <NewForm/>
                
            </Box>
        
            <Footer />
        </Box>
    )
}