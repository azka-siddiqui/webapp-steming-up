import { Box, SimpleGrid, Heading, Text, Img, Button } from "@chakra-ui/react";

export const BookletTable = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Img src="/toolkitpic.png" mx="auto" maxH="400px" rounded="md" />
      </Box>

      <Box bg="#444261" padding="20px">
        <Heading color="white" fontSize="5xl">
          <Text as="span" color="#c9ac2c">
            Our Toolkit For Youth Engagement Planning:
          </Text>{" "}
        </Heading>
        <Text color="white" fontSize="2xl" fontWeight="normal" my={4} >
        A helpful resource for planners and community engagement professionals looking to better connect with the new generation and deliver more youth-friendly outcomes
        </Text>

        <Button
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
