import { Heading, Text, Box } from '@chakra-ui/react'

export const HeadingWithDesc = ({ desc, children }) => {
    return (
        <Box textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="2xl" color="blue.dark" mb="4" fontWeight="bold">{children}</Heading>
            {desc && <Text fontWeight="normal" color="text.dark" fontSize="xl" my="3" >{desc}</Text>}
        </Box >
    )
}