import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import '../styles/globals.css'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif"
  },
})
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
