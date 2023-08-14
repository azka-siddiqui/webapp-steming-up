import { Box, Divider } from '@chakra-ui/react'

export const SmSep = ({ line }) => {
    if (line) return <Divider my="10" h="1px" />
    else return <Box my="10" h="1px" />
}