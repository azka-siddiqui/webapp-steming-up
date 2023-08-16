import { Heading, Text, Box } from '@chakra-ui/react'

export const HeadingWithDesc = ({ desc, children }) => {
    return (
        <Box textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="2xl" color="black" mb="4">{children}</Heading>
            {desc && <Text fontWeight="normal" color="white" fontSize="xl" my="3" >{desc}</Text>}
        </Box >
    )
}
