import '@/styles/globals.css'
import {ChakraProvider, Box, Center, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import Navbar from "./Navbar.js";
import {motion, AnimatePresence} from "framer-motion";
import {extendTheme} from "@chakra-ui/react";
import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";

const colors = {
  brand: {
    100: "#E8EEFD",
    200: "#D1DFFA",
    300: "#B5C4F3",
    400: "#9AA9EC",
    500: "#1349D8",
    600: "#0a256c",
    700: "#051641",
    800: "#040f2b",
    900: "#02071a"
  },
  bg: {
    100: "#161616"
  },
  brandWhite: {
    100: "#02071a",
    900: "#0a256c"
  },

  brandGray: {
    100: "rgba(148,148,148,0.56)",
    900: "#38466C"
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
          <Box minH={['140vh', '120vh']} bg={"brand.100"}>
            <Box minH={['120vh', '108vh']} bg={"brand.100"}>
              <Center>
                <Box width={['100%', '70%', '60%', '50%']}>

                  <Navbar/>
                  <motion.div key={router.route} initial={"pageInitial"} animate={"pageAnimate"}
                              exit="pageExit"
                              variants={{
                                pageInitial: {
                                  opacity: 0,
                                  y: 100,
                                },
                                pageAnimate: {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    duration: 0.5,

                                  },
                                },

                                pageExit: {
                                  opacity: 0,
                                  y: 50,
                                  transition: {
                                    duration: 0.5,

                                  },
                                }

                              }}>


                    <Box maxH={'100vh'}>
                      <Component {...pageProps} />
                    </Box>
                  </motion.div>
                </Box>
              </Center>

            </Box>

            <Footer/>
          </Box>


        </motion.div>


      </AnimatePresence>
    </ChakraProvider>
  );
}
