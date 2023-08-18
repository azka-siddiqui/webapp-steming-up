import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { TwoColWithPic } from "../components/TwoColWithPic";
import { BookletTable } from "../components/BookletTable";

import {
    Box,
    Heading,
  } from "@chakra-ui/react";

export default function workshops() {
    return (
      <Box
      bgPos="center"
      bgRepeat="repeat"
      minH="40vh"
      bg="rgb(21, 20, 38)">
        <Head>
          <title>OurCity - Workshops</title>
          <link rel="logo" href="/Logo.png" />
        </Head>

        <NavBar bg="#151426"/>

        <Box textAlign="center" maxW="700px" mx="auto" mb={10}>
              <Heading
                as="h1"
                size="3xl"
                color="#c9ac2c"
                fontWeight="bold"
                id="workshops"
              >
                Workshops
              </Heading>
        </Box>

        <BookletTable/>

        <TwoColWithPic
              img="/workshop1.jpeg"
              title="City Builders Workshop"
              desc="City Builders is an introductory Urban Planning x Design Thinking workshop that is fun and hands-on. We will work with you to customize the workshop to the students' needs and level of learning, and to support any course curriculum requirements or objectives.
              Youth will learn through self-guided exploration, and take ownership in creating and sharing ideas. Activities include urbam planning brainstorming, mapping exercises, as well as prototyping and idea pitching."
              align="left" 
        />

        <TwoColWithPic
            img="/workshop2.jpeg"
            title="Livable Neighbourhoods Workshop"
            desc="In this workshop, youth will spend more time understanding the qualities and challenges of neighbouring communities before designing potential solutions. In addition to the skills developed in City Builders, students will learn about the concept of livability, conduct research and identify strengths, weaknesses, opportunities and challenges of local neighbourhoods
            , and evaluate neighbourhoods from different perspectives. Additional activities include a guided walking tour of a livable neighbourhood in the city, qualitative and quantitative research, and peer-to-peer teaching."
            align="right"
        />

        <Footer />
            
    </Box>
    )
}