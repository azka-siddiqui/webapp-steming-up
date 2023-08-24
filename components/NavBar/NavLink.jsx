import { chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const DesktopNavLink = (props) => {
    return (
        <chakra.a
            fontWeight="medium"
            display="flex"
            color='white'
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
