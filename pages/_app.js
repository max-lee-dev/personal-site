import '@/styles/globals.css'
import {ChakraProvider, Box, Center} from "@chakra-ui/react";
import Navbar from "./Navbar.js";
import {extendTheme} from "@chakra-ui/react";

const colors = {
    brand: {
        900: "#1a365d",
    },
    bg: {
        100: "#161616"
    },
    brandWhite: {
        100: "#e0e0e0",
        900: "#b4b4b4"
    }

}

export const theme = extendTheme({colors})

export default function App({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <Box minH={'100vh'} bg={'bg.100'}>
                <Center>
                    <Box width={'50%'}>
                        <Navbar/>
                        <Component {...pageProps} />
                    </Box>
                </Center>
            </Box>

        </ChakraProvider>
    );
}
