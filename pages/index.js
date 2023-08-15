import Head from "next/head";
import { News } from "../components/News";
import { Landing } from "../components/Landing";
import { DetailsTable } from "../components/DetailsTable";
import {
  Box,
  SimpleGrid,
  Heading,
  Avatar,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Img,
} from "@chakra-ui/react";
import { SignUpModal } from "../components/SignUpModal";
import { NavBar } from "../components/NavBar";
import { TwoColWithPic } from "../components/TwoColWithPic";
import { MedSep } from "../components/MedSep";
import { SmSep } from "../components/SmSep";
import { Footer } from "../components/Footer";
import Team from "../data/team.json";
import Sponsors from "../data/sponsors.json";
import { BookletTable } from "../components/BookletTable";
import FAQ from "../data/faq.json";
export default function Home() {
  return (
    <>
      <Head>
        <title>OurCity</title>
        <link rel="logo" href="/Logo.png" />
        <meta
          property="og:description"
          content="Sign up for the our upcoming workshop!"
        />
        <meta property="og:type" content="website" />
        <link rel="logo" href="/Logo.png" />
      </Head>
      <NavBar bg="#3B005A" />
      <Landing />
      <SignUpModal />
      <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="40vh"
        bgImage="linear-gradient(to top, rgba(0, 0, 0, 0.5), rgb(23, 0, 35)), url('/solidbkh.jpg') "
      >
        <Container maxW="container.xl" p={8}>
          <Box pt={16}>
            <DetailsTable />

            <SmSep />

            <BookletTable />

            <SmSep />

            <SmSep line={true} />

            <Box textAlign="center" maxW="900px" mx="auto" id="about" mt = "100px">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                About{" "}
                <Text as="span" color="#F1C232">
                  OurCity
                </Text>
              </Heading>

              <Box fontSize="xl" color="white" mt="40px">
                <Text>
                From our conversations with urban planners working in both government and consulting, we 
                know that many planners recognize the importance of engaging youth but don’t know how to effectively 
                incorporate it into their work. Through OurCity, youth can share their ideas for changes to their 
                local community or city to make the infrastructure more sustainable.

                </Text>

                < div className = "centered-list">
                <Text mt="8">
                Cities For Youth is a toolkit for youth engagement in planning. Drawing from the experience of urban 
                planning professionals across the world, our toolkit includes:
                <Text mt = "4">
                <ul className="guideTools" style={{ listStyleType: 'disc', listStylePosition: 'inside', marginLeft: '40px'}}>
                <li>Guiding principles</li>
                <li>Case Studies</li>
                <li>Best Practises</li>
                </ul>
                </Text>
                </Text>
                </div>

                <Text mt="8">
                From outreach to ideation to feedback and follow-up,
                it is a helpful resource for those looking to better 
                connect with the new generation and deliver more 
                youth-friendly outcomes —creating cities for youth.
                </Text>
                
              </Box>
              
            </Box>


            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" mb={14} mt="-50px">
              <Heading
                as="h1"
                size="3xl"
                color="white"
                fontWeight="bold"
                id="workshops"
              >
                Workshops
              </Heading>
            </Box>

            <TwoColWithPic
              img="/workshop1.jpeg"
              title="City Builders Workshop"
              desc="City Builders is an introductory Urban Planning x Design Thinking workshop that is fun and hands-on. We will work with you to customize the workshop to the students' needs and level of learning, and to support any course curriculum requirements or objectives.
              Youth will learn through self-guided exploration, and take ownership in creating and sharing ideas. Activities include urbam planning brainstorming, mapping exercises, as well as prototyping and idea pitching."
              align="left" 
            />

            <SmSep line={true} />

            <TwoColWithPic
              img="/workshop2.jpeg"
              title="Livable Neighbourhoods Workshop"
              desc="In this workshop, youth will spend more time understanding the qualities and challenges of neighbouring communities before designing potential solutions. In addition to the skills developed in City Builders, students will learn about the concept of livability, conduct research and identify strengths, weaknesses, opportunities and challenges of local neighbourhoods
              , and evaluate neighbourhoods from different perspectives. Additional activities include a guided walking tour of a livable neighbourhood in the city, qualitative and quantitative research, and peer-to-peer teaching."
              align="right"
            />
            <SmSep line={true} />

            <MedSep />

            <SmSep />

            <News />

            <SmSep line={true} />

            <Box textAlign="center" maxW="700px" maxH = "350px" mx="auto" id="team">
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
                    <Heading as="h3" size="lg" color="gray.300">
                      {member.name}
                    </Heading>

                    <Text fontSize="lg" color="gray.300">
                      {member.desc}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <MedSep />

            <Box textAlign="center" maxW="700px" maxH = "150px" mx="auto" id="sponsors">
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

            <MedSep />

            <MedSep />

            <Box maxW="700px" mx="auto" id="faq">
              <Heading
                as="h1"
                size="3xl"
                color="white"
                fontWeight="bold"
                textAlign="center"
              >
                FAQ
              </Heading>
              <Accordion mt={8} allowMultiple defaultIndex={[0]}>
                {FAQ.map((faq, index) => (
                  <AccordionItem key={index} color="white">
                    <AccordionButton
                      _expanded={{ bg: "#3B005A", color: "white" }}
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

            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
}
