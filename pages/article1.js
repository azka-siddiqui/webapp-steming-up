import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import {SmSep} from "../components/SmSep"
import { SignUpModal } from "../components/SignUpModal"
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
            <title>EcoScan - Invasive Species</title>
            <link rel="logo" href="/ecoscan.png" />
            </Head>

            <NavBar bg="#151426"/>

            <SignUpModal/>

            <Box maxW="1000px" id="about" mt = "30px" bg="white" padding="30px" margin="30px">
                <Box mt={10} margin="10px" textAlign="center">
                    <Heading color="darkgreen">Garlic Mustard</Heading>
                    <Text fontWeight="bold">
                        
                        Garlic Mustard is an invasive herb native to Europe. It’s been present in North America since the 1800s. Garlic Mustard spreads quickly and crowds out native plants. It also releases chemicals from its roots that can change soil chemistry. The loss of native plants reduces the biodiversity of an area. This results in reduced ecosystem health and less resilience to environmental change.
                        </Text>
                </Box>
                
                <SmSep/>

                <br/>
                <br/>
               
            </Box>
        
            <Footer />
        </Box>
    )
}