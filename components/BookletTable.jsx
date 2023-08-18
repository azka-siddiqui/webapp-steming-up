import { Box, SimpleGrid, Heading, Text, Img, Button } from "@chakra-ui/react";

export const BookletTable = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={4}
      alignItems="center"
      justifyContent="center"
      marginRight="30px"
      
    >
      <Box>
        <Img src="/toolkitpic.png" mx="auto" maxH="400px" rounded="md" />
      </Box>

      <Box bg="#444261" padding="20px" maxH="1000px">
        <Heading color="white" fontSize="5xl">
          <Text as="span" color="#c9ac2c">
            Our Toolkit For Youth Engagement Planning:
          </Text>{" "}
        </Heading>
        <Text color="white"fontWeight="normal" fontSize="18px" my={4}>
        A helpful resource for planners and community engagement professionals looking to better connect with the new generation and deliver more youth-friendly outcomes. Drawing from the experience of urban 
                planning professionals across the world, our toolkit includes:
        </Text>
        < div className = "centered-list">
                <ul className="guideTools" style={{ listStyleType: 'disc', listStylePosition: 'inside', fontSize: '18px', color: 'white', marginLeft: '10px'}}>
                <li >Guiding principles</li>
                <li>Case Studies</li>
                <li>Best Practises</li>
                </ul>
          </div>

        <Button
        mt = "10px"
          color="#494949"
          as="a"
          bg={"#32a852"}
          px={6}
          _hover={{
            bg: "#56d679",
          }}
          target="_blank"
        >
          Learn more
        </Button>
      </Box>
    </SimpleGrid>
  );
};
