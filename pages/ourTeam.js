import Head from "next/head";
import { NavBar } from "../components/NavBar";
import Team from "../data/team.json";
import Sponsors from "../data/sponsors.json";
import { Footer } from "../components/Footer";

import {
    Box,
    SimpleGrid,
    Heading,
    Avatar,
    Text,
    Img,
  } from "@chakra-ui/react";

export default function teams() {
    return (
      <Box
      bgPos="center"
      bgRepeat="repeat"
      minH="40vh"
      bg="rgb(21, 20, 38)">
        <Head>
          <title>OurCity - Our Team</title>
          <link rel="logo" href="/Logo.png" />
        </Head>

        <NavBar bg="#151426"/>

        <Box textAlign="center" maxW="700px" maxH = "350px" mx="auto" marginBottom="10%">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                Meet the Team
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={12}
              >
                {Team.map((member) => (
                  <Box key={member.name}>
                    <Avatar
                      src={member.pic}
                      alt={member.name}
                      height="200px"
                      width="200px"
                    />
                    <Heading as="h3" size="lg" color="#32a852">
                      {member.name}
                    </Heading>

                    <Text fontSize="lg" color="#c9ac2c">
                      {member.desc}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>


            <Box textAlign="center" maxW="700px" maxH = "150px" mx="auto" marginBottom="20%">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                Sponsors
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={8}
              >
                {Sponsors.map((logo, index) => (
                  <Box key={index} as="a" target="_blank" href={logo.link}>
                    <Img src={logo.img} alt={logo.name} size="3xl" />
                    <Text mt={2} fontSize="xl" color="white">
                      {logo.name}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Footer />
            
    </Box>
    )
}