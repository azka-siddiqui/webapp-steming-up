import Head from "next/head";
import { Landing } from "../components/Landing";
import { News } from "../components/News";
import { DetailsTable } from "../components/DetailsTable";
import {
  Box,
  Container
} from "@chakra-ui/react";
import { SignUpModal } from "../components/SignUpModal";
import { NavBar } from "../components/NavBar";
import { SmSep } from "../components/SmSep";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
export default function Home() {
  return (
    <>
      <Head>
        <title>OurCity</title>
        <link rel="logo" href="/Logo.png" />
        <link rel="logo" href="/Logo.png" />
      </Head>
      <NavBar bg="#151426" />
      <Landing />
      
      <SignUpModal />

      <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="40vh"
        bg="rgb(21, 20, 38)"
      >

        <Container maxW="100%" p={8}>
          <Box pt={16}>
            <DetailsTable />

            <SmSep />

            <News />

            <SmSep />

            <Form />

            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
}
