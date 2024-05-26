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
        <Img src="/location.png" mx="auto" maxH="300px" rounded="md" />
      </Box>

      <Box bg="#444261" padding="20px" maxH="1000px">
        <Heading color="white" fontSize="5xl">
          <Text as="span" color="#c9ac2c">
            How We Use Location Data
          </Text>{" "}
        </Heading>
        <Text color="white"fontWeight="normal" fontSize="18px" my={4}>
        
        </Text>
        < div className = "centered-list">
                <ul className="guideTools" style={{ listStyleType: 'disc', listStylePosition: 'inside', fontSize: '18px', color: 'white', marginLeft: '10px'}}>
                
                <Text as="span" color="white">
            
ECOSCAN only uses your location momentarily when using the map reporting feature. ECOSCAN will ask for permission to monetarily use your location each time you report. Furthermore, ECOSCAN does not collect location data tied to an individual user. 
          </Text>{" "}

                </ul>
          </div>
      </Box>
    </SimpleGrid>
  );
};
