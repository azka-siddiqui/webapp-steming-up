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
                    <Heading color="darkgreen">How the highway-dependency of Canadian cities can be seen today</Heading>
                    <Text fontWeight="bold">And why mixed-use zoning doesn’t always make sense in North American cities and suburbs.</Text>
                </Box>
                
                <SmSep/>

                <Text>
                    The highway-dependency of Canadian cities is a phenomenon that can be observed today. In many cities, 
                    long strips of pale white surround major highways, as seen in the Greater Toronto Area¹. This zoning is 
                    composed of office parks, industrial and shipping buildings, and leisure and shopping centers¹. 
                    The reason for this zoning is car dependency in North America and the importance of highways in connecting 
                    these types of buildings¹. With suburban sprawl present in many Canadian (and American) cities, many people 
                    do not work close to home and may need to commute via car over long distances. Highways serve this exact 
                    purpose of long commutes, resulting in the extensive use of these massive freeways¹. According to Statistics 
                    Canada, more than 800k people commuted at least 60 minutes to work each day in 2016¹. As a result, if offices 
                    are built near highways, this would be very convenient for distant commuters to access these office spaces. 
                    If they had been tucked away into the corners of suburban neighborhoods, this would not only produce an 
                    extensive amount of externally-sourced traffic but also involve an even longer commute time¹. 
                    
                    <br/>
                    <br/>

                    Mixed-use zoning is a type of urban development that blends multiple uses such as residential, commercial, cultural, 
                    institutional, or entertainment into one space where those functions are physically and functionally integrated⁶. While 
                    mixed-use zoning has been increasingly common in American cities as urban populations grew⁵, it doesn't always make sense 
                    in North American cities and suburbs. With massive distances between amenities, this results in high car dependency and 
                    significant negative impacts on our planet⁶. However, there are still many ways to allow Canadian cities to become 
                    climate-conscious while still maintaining their unique urban design characteristics⁶. 

                    <br/>
                    <br/>

                    In conclusion, the highway-dependency of Canadian cities can be seen today due to car dependency in North America and the 
                    importance of highways in connecting different types of buildings. Mixed-use zoning is a type of urban development that has 
                    been increasingly common in American cities but doesn't always make sense in North American cities and suburbs due to high 
                    car dependency. However, there are still ways to allow Canadian cities to become climate-conscious while still maintaining 
                    their unique urban design characteristics.
                </Text>
                <br/>
                <br/>
                <Text fontSize="10px" fontWeight="800">
                    Sources:
                    <ol>
                        <li>How the highway-dependency of Canadian cities can be seen today. https://medium.com/urban-minds/how-the-highway-dependency-of-canadian-cities-can-be-seen-today-eec4ad3ca917.</li>
                        <li>Mixed-use development - Wikipedia. https://en.wikipedia.org/wiki/Mixed-use_development.</li>
                        <li>The Pros and Cons of Mixed-Use Development | Crexi Insights. https://www.crexi.com/insights/the-pros-and-cons-of-mixed-use-development.</li>
                        <li>Urban Minds - Medium. https://medium.com/urban-minds.</li>
                        <li>Roads and Highways | The Canadian Encyclopedia. https://www.thecanadianencyclopedia.ca/en/article/roads-and-highways.</li>
                        <li>Ranking/Map of cities/areas with mixed-use zoning in the US. https://www.reddit.com/r/urbanplanning/comments/s7um7p/rankingmap_of_citiesareas_with_mixeduse_zoning_in/.</li>
                    </ol>
                </Text>
                
            </Box>
        
            <Footer />
        </Box>
    )
}