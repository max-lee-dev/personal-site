import React from 'react';
import {Box, HStack, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import Project from "@/components/Project";

export default function Projects() {
  return (
    <Box color={'brandGray.100'} fontFamily={"Lexend Deca"}>
      <Text px={[2, 0]} color={'brandWhite.100'} fontSize={'40px'}>Projects</Text>
      <VStack spacing={5}>
        <Stack
          width={'100%'}
          direction={['column', 'row']}
          justifyContent={'space-between'}>
          <Project image={'/images/hackertypelogo.png'} title={'hackertype.dev'}
                   description={'A typing website for programmers to practice their coding speed'}
                   link={'https://www.hackertype.dev/'}/>
          <Project image={'/images/spotify.png'} title={'Spotify Music Player'}
                   description={'A typing website for programmers'} link={'/music'}/>
        </Stack>
        <Project image={'/images/spotify.png'} title={'Spotify Music Player'}
                 description={'A music player that uses the Spotify API to play music.'} link={'/music'}/>
      </VStack>
    </Box>
  )

}