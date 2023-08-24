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
                    <Heading color="darkgreen">It’s time to become a ‘Planner as Advocate’: Starting with Bill 23</Heading>
                    <br/>
                    <Text fontWeight="bold">
                        Planners and designers tend to play several roles in municipalities — planner as facilitator, 
                        as regulator, as policy advisor, as technician, as negotiator. It’s a complicated role to navigate. 
                        Planners are also visionaries, wanting the best for the communities they serve. 
                        Planners also increasingly need to become — and are becoming — advocates.
                    </Text>
                </Box>
                
                <SmSep/>

                <Text>
                    Bill 23, also known as the More Homes Built Faster Act, is a housing bill passed by the Ontario government in 
                    November 2022. The bill is part of the province&apos;s plan to build 1.5 million homes in 10 years. While the bill 
                    aims to spur development, critics argue that it will lead to higher property taxes, weaken conservation 
                    authority powers, and not actually make homes more affordable. The new law is just one move among many in a 
                    flurry of recent housing changes from the Progressive Conservative government, including plans to open some 
                    areas of the protected Greenbelt land to development and allowing the mayors of Toronto and Ottawa to pass 
                    bylaws with just one-third of council support.

                    <br/><br/>

                    Planners are professionals who help shape the built environment. They work with communities, developers, 
                    and governments to create plans that guide growth and development in cities and towns. Planners can be 
                    advocates for sustainable development and can play a crucial role in shaping policies that promote 
                    sustainability. They can work with local governments to create zoning laws that encourage mixed-use 
                    development, which can reduce car dependency and promote walkability. Planners can also advocate for 
                    policies that promote public transportation, bike lanes, and pedestrian-friendly streets. By working with 
                    developers and communities, planners can help create sustainable neighborhoods that are designed for people 
                    rather than cars.

                    <br/><br/>

                    In conclusion, Bill 23 has significant implications for sustainable cities. While it may not directly 
                    address sustainability, it could weaken conservation authority powers. Planners can be advocates for 
                    sustainable development and play a crucial role in shaping policies that promote sustainability. 
                    By working with communities, developers, and governments, planners can help create sustainable neighborhoods 
                    that are designed for people rather than cars.

                </Text>
                <br/>
                <br/>
                <Text fontSize="10px" fontWeight="800">
                    Sources:
                    <ol>
                        <li>[The Globe and Mail](https://www.theglobeandmail.com/canada/toronto/article-ontario-passes-more-homes-built-faster-act-to-speed-up-housing/)</li>
                        <li>[Canadian Institute of Planners](https://www.cip-icu.ca/About-Us/What-is-a-Planner)</li>
                        <li>[American Planning Association](https://www.planning.org/policy/guides/adopted/sustainability.htm)</li>
                    </ol>
                </Text>
                
            </Box>
        
            <Footer />
        </Box>
    )
}