import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import {SmSep} from "../components/SmSep"
import {
    Box,
    Heading,
    Text,
    Img
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
            <title>OurCity - Article</title>
            <link rel="logo" href="/Logo.png" />
            </Head>

            <NavBar bg="#151426"/>

            <Box maxW="1000px" id="about" mt = "30px" bg="white" padding="30px" margin="30px">
                <Box mt={10} margin="10px" textAlign="center">
                    <Heading color="darkgreen">Learn how you can contribute to making your city more sustainable</Heading>
                    <Text fontWeight="bold">
                        The OurCity program supports cities in their transformation into youth-centred places, 
                        by enabling young people to take part in city design and governance and providing space for them to 
                        thrive.
                    </Text>
                </Box>
                
                <SmSep/>

                <Text>
                    Sustainability is a crucial aspect of modern urban living. Here are some ways people can contribute to 
                    making their city more sustainable:
                    <br/>
                    <br/>
                    <ol>
                        <li>
                            <strong>Reduce, reuse, and recycle</strong>: This is a simple yet effective way to reduce waste and conserve resources. 
                            By reducing the amount of waste we produce, we can reduce the amount of energy required to dispose of it. Recycling 
                            also helps to conserve natural resources and reduce greenhouse gas emissions.
                        </li>
                        <br/>
                        <li>
                            <strong>Use public transportation</strong>: Public transportation is an excellent way to reduce carbon emissions and 
                            traffic congestion. By using public transportation, people can reduce their carbon footprint and help to make 
                            their city more sustainable.
                        </li>
                        <br/>
                        <li>
                            <strong>Conserve water</strong>: Water conservation is essential for sustainable living. People can conserve water by 
                            fixing leaks, taking shorter showers, and using low-flow toilets and showerheads.
                        </li>
                        <br/>
                        <li>
                            <strong>Plant trees</strong>: Trees are essential for maintaining a healthy environment. They absorb carbon dioxide and 
                            other pollutants from the air, provide shade, and help to reduce the urban heat island effect.
                        </li>
                        <br/>
                        <li>
                            <strong>Support local businesses</strong>: Supporting local businesses is an excellent way to promote sustainability in 
                            your community. Local businesses tend to have a smaller carbon footprint than larger corporations, and they 
                            often use more sustainable practices.
                        </li>
                        <br/>
                        <li>
                            <strong>Advocate for sustainable policies</strong>: People can advocate for sustainable policies at the local, state, and 
                            federal levels. This includes supporting renewable energy initiatives, promoting green building practices, and 
                            encouraging sustainable transportation options.
                        </li>
                    </ol>
                    
                    By following these simple steps, people can contribute to making their city more sustainable and help to create a 
                    healthier environment for future generations.
                </Text>
                <br/>
                <br/>
                <Text fontSize="10px" fontWeight="800">
                    Sources:
                    <ol>
                        <li>How can we make cities more sustainable? | World Economic Forum. https://www.weforum.org/agenda/2020/09/cities-sustainability-innovation-global-goals/.</li>
                        <li>Sustainable cities? – DW – 06/09/2016. https://www.dw.com/en/can-we-make-our-cities-more-sustainable/a-19314650.</li>
                        <li>6 Traits of a Sustainable City (With Examples) | Digi International. https://www.digi.com/blog/post/sustainable-city.</li>
                        <li>Five ways to make cities healthier and more sustainable. https://www.fao.org/fao-stories/article/en/c/1260457/.</li>
                        <li>3 Big Ideas to Achieve Sustainable Cities and Communities. https://www.worldbank.org/en/news/immersive-story/2018/01/31/3-big-ideas-to-achieve-sustainable-cities-and-communities.</li>
                    </ol>
                </Text>
                
            </Box>
        
            <Footer />
        </Box>
    )
}