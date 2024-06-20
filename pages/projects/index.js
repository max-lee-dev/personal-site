import React from 'react';
import {Box, HStack, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import Project from "@/components/Project";

export default function Projects() {
  return (
    <Box color={'brandGray.100'} fontFamily={"Lexend Deca"}>
      <Text pb={2} px={[2, 0]} color={'brand.600'} fontWeight={500} fontSize={'36px'}>Projects</Text>
      <VStack spacing={5}>
        <Stack
          width={'100%'}
          direction={['column', 'row']}
          justifyContent={'space-between'}>
          <Project image={'/images/hackertype.png'} video={'/images/hackertype.mp4'} title={'hackertype.dev'}
                   description={'A typing website for programmers to practice their coding speed'}
                   link={'https://www.hackertype.dev/'}/>
          <Project image={'/images/essayswaplogo.png'} video={'/images/essayswap.mp4'} title={'EssaySwap'}
                   description={'A website for high school students to peer review their college essays'}
                   link={'/music'}/>
        </Stack>

      </VStack>
    </Box>
  )

}