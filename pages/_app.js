import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/montserrat"
import "@fontsource/oswald"
import { Global, css } from '@emotion/react'
import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'


const theme = extendTheme({
  fonts: {
    heading: 'Oswald',
    body: 'Montserrat',
  },
})

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return children;
}

const GlobalStyle = ({ children }) => {
  let { colorMode } = useColorMode()
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #fffff;
          }
        `}
      />
      {children}
    </>
  )
}



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ForceLightMode>
        <Component {...pageProps} />
      </ForceLightMode>
    </ChakraProvider>
  )
}

export default MyApp
