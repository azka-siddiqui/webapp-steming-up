import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import {Box} from "@chakra-ui/react";
import { SponsorsInfo } from "../components/SponsorsInfo";

export default function teams() {
    return (
      <Box
      bgPos="center"
      bgRepeat="repeat"
      minH="40vh"
      bg="rgb(21, 20, 38)">
        <Head>
          <title>OurCity - Sponsors</title>
          <link rel="logo" href="/Logo.png" />
        </Head>

        <NavBar bg="#151426"/>
        
        <SponsorsInfo/>

        <Footer/>
    </Box>
    )
}