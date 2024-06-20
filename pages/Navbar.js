import React from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {Box, Divider, Flex, Text, Link, HStack, Button, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {useMediaQuery} from '@chakra-ui/react';

import {usePathname} from "next/navigation";

function Navbar() {
  const {toggleColorMode} = useColorMode();
  const pathname = usePathname();
  return (
    <AnimatePresence mode={"wait"}>
      <Box paddingTop={'25px'} paddingBottom={'30px'} fontFamily={'Source Code Pro'}>


        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding={3}
          bg={"brand.100"}
          position="sticky"
          zIndex="sticky"
        >
          <HStack align="center" mr={5} spacing={15}>
            <NextLink href="/">
              <Text fontSize="20px" color={pathname === '/' ? 'brand.500' : 'brand.900'}
                    fontWeight="bold">
                /
              </Text>
            </NextLink>
            <NextLink href={'/projects'}>

              <Text ml={2} fontSize="20px" fontWeight="bold"
                    color={pathname === '/projects' ? 'brand.500' : 'brand.900'}>/projects
              </Text>
            </NextLink>
            {/*<NextLink href={'/music'}>*/}
            {/*  <Text ml={2} fontSize="20px" fontWeight="bold"*/}
            {/*        color={pathname === '/music' ? 'brand.500' : 'brand.900'}>*/}
            {/*    /music*/}
            {/*  </Text>*/}
            {/*</NextLink>*/}
          </HStack>

        </Flex>
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          exit={"pageExit"}

          variants={{
            hidden: {
              opacity: 1,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,

              }

            },

            pageExit: {
              opacity: 0,
              y: 100,
              transition: {
                duration: 0.5,

              },
            }
          }}
        >
          <Divider orientation="horizontal" borderColor="brand.600"/>
        </motion.div>
      </Box>
    </AnimatePresence>
  );


}

export default Navbar;