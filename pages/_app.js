import '@/styles/globals.css'
import {ChakraProvider, Box, Center, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import Navbar from "./Navbar.js";
import {motion, AnimatePresence} from "framer-motion";
import {extendTheme} from "@chakra-ui/react";

const colors = {
    brand: {
        900: "#1a365d",
    },
    bg: {
        100: "#161616"
    },
    brandWhite: {
        100: "#d2d2d2",
        900: "#b4b4b4"
    },

    brandGray: {
        100: "rgba(148,148,148,0.56)",
        900: "#b4b4b4"
    }

}

export const theme = extendTheme({colors})


export default function App({Component, pageProps, router}) {
    return (

        <ChakraProvider theme={theme}>
            <AnimatePresence mode={"wait"}>
                <motion.div key={router.route} initial={"pageInitial"} animate={"pageAnimate"} exit="pageExit"
                            variants={{


                                pageInitial: {
                                    transition: {
                                        duration: 0.5
                                    },
                                },


                                pageAnimate: {

                                    opacity: 1,
                                    transition: {
                                        duration: 0.5
                                    },
                                },

                                pageExit: {
                                    transition: {
                                        duration: 0.5
                                    },
                                }


                            }}>
                    <Box minH={'100vh'} bg={"bg.100"}>
                        <Center>
                            <Box width={['100%', '70%', '60%', '50%']}>

                                <Navbar/>
                                <motion.div key={router.route} initial={"pageInitial"} animate={"pageAnimate"}
                                            exit="pageExit"
                                            variants={{
                                                pageInitial: {
                                                    opacity: 0,
                                                    y: 1000,
                                                },
                                                pageAnimate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 1,

                                                    },
                                                },

                                                pageExit: {
                                                    opacity: 0,
                                                    y: 1000,
                                                    transition: {
                                                        duration: 1,

                                                    },
                                                }

                                            }}>


                                    <Component {...pageProps} />
                                </motion.div>
                            </Box>
                        </Center>
                    </Box>
                </motion.div>
            </AnimatePresence>
        </ChakraProvider>
    );
}
