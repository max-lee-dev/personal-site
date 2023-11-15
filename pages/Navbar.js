import React from 'react';
import {Box, Flex, Text, Link, HStack, Button, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import NextLink from 'next/link';
import {useMediaQuery} from '@chakra-ui/react';
import {usePathname} from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <Box paddingTop={'50px'} fontFamily={'Source Code Pro'}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                bg={"bg.100"}
                position="sticky"
                top="0"
                zIndex="sticky"
            >
                <HStack align="center" mr={5} spacing={15}>
                    <NextLink href="/">
                        <Text fontSize="38px" color={pathname === '/' ? 'brandWhite.100' : 'brandWhite.900'}
                              fontWeight="bold">
                            <Text as="span" color={useColorModeValue('gray.600', 'gray.200')}>
                                {'<'}
                            </Text>
                            {'max-lee'}
                            <Text as="span" color={useColorModeValue('gray.600', 'gray.200')}>
                                {'>'}
                            </Text>
                        </Text>
                    </NextLink>
                    <NextLink href={'/projects'}>

                        <Text ml={2} fontSize="28px" fontWeight="bold"
                              color={pathname === '/projects' ? 'brandWhite.100' : 'brandWhite.900'}>

                            <Text as="span" color={useColorModeValue('gray.600', 'gray.200')}>
                                {'<'}
                            </Text>
                            {'projects'}
                            <Text as="span" color={useColorModeValue('gray.600', 'gray.200')}>
                                {'>'}
                            </Text>
                        </Text>
                    </NextLink>

                </HStack>
            </Flex>
        </Box>
    );


}

export default Navbar;