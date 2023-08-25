import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import FAQ from "../data/faq.json";
import { SmSep } from "../components/SmSep";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading
  } from "@chakra-ui/react";

export default function faq() {
    return (
      <Box
      bgPos="center"
      bgRepeat="repeat"
      minH="100vh"
      bg="rgb(21, 20, 38)">
        <Head>
          <title>OurCity - FAQ</title>
          <link rel="logo" href="/Logo.png" />
        </Head>

        <NavBar bg="#151426"/>


        <SmSep line />

        <Box maxW="700px" mx="auto">
            <Heading
            as="h1"
            size="3xl"
            color="white"
            fontWeight="bold"
            textAlign="center"
            >
            FAQ
            </Heading>
            <Accordion mt={8} allowMultiple>
            {FAQ.map((faq, index) => (
                <AccordionItem key={index} color="white">
                <AccordionButton
                    _expanded={{ bg: "#32a852", color: "black" }}
                >
                    <Box flex="1" textAlign="left" fontWeight="bold">
                    {faq.question}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} color="gray.200">
                    {faq.answer}
                </AccordionPanel>
                </AccordionItem>
            ))}
            </Accordion>
        </Box>

        <SmSep/>
        <SmSep/>


        <Footer />
            
    </Box>
    )
}