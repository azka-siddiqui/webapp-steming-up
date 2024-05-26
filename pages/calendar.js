import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WorkshopTimeline } from "../components/Calendar";

import {
    Box
  } from "@chakra-ui/react";

  export default function form() {
    return (
        <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="rgb(21, 20, 38)">
            <Head>
            <title>EcoScan Features</title>
            <link rel="logo" href="/Logo.png" />
            </Head>

            <NavBar bg="#151426"/>

            <WorkshopTimeline/>
        
            <Footer />
        </Box>
    )
}