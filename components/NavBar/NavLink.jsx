import { chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const DesktopNavLink = (props) => {
    return (
        <chakra.a
            fontWeight="medium"
            display="flex"
            color='white'
            alignItems="center"
            justifyContent="center"
            borderBottom="2px"
            borderColor="transparent"
            transition="all 0.2s"
            _hover={{
                borderColor: 'currentcolor',
            }}
            {...props}
        />
    )
}

const MobileNavLink = (props) => {
    return (
        <chakra.a
            display="block"
            textAlign="center"
            fontWeight="bold"
            py="5"
            fontSize="lg"
            color="black"
            w="full"
            _hover={{
                bg: 'blackAlpha.200',
            }}
            {...props}
        />
    )
}

export const NavLink = {
    Mobile: MobileNavLink,
    Desktop: DesktopNavLink,
}
