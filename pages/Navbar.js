import React from 'react';
import {motion} from "framer-motion";
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
        <Box paddingTop={'25px'} paddingBottom={'30px'} fontFamily={'Source Code Pro'}>


            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={3}

                bg={"bg.100"}
                position="sticky"
                zIndex="sticky"
            >
                <HStack align="center" mr={5} spacing={15}>
                    <NextLink href="/">
                        <Text fontSize="20px" color={pathname === '/' ? 'brandWhite.100' : 'brandGray.100'}
                              fontWeight="bold">
                            /
                        </Text>
                    </NextLink>
                    <NextLink href={'/projects'}>

                        <Text ml={2} fontSize="20px" fontWeight="bold"
                              color={pathname === '/projects' ? 'brandWhite.100' : 'brandGray.100'}>

                            /projects
                        </Text>
                    </NextLink>
                    <NextLink href={'/music'}>
                        <Text ml={2} fontSize="20px" fontWeight="bold"
                              color={pathname === '/music' ? 'brandWhite.100' : 'brandGray.100'}>
                            /music
                        </Text>
                    </NextLink>
                </HStack>

            </Flex>
            <motion.div
                initial={"hidden"}
                animate={"visible"}

                variants={{
                    hidden: {
                        opacity: 0,
                        y: 10
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.5,
                            when: "beforeChildren",
                            staggerChildren: 0.01
                        }

                    }
                }}
            >
                <Divider orientation="horizontal" borderColor="brandGray.100"/>
            </motion.div>
        </Box>
    );


}

export default Navbar;