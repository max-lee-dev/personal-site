import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Box, Image, HStack, Text} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <Box px={[2, 0]} color={'brandGray.100'} fontFamily={"Poppins"}>
      <HStack justifyContent={'space-between'}>
        <Box>
          <Text color={'brand.600'} fontWeight={600} fontSize={'36px'}>Hey!</Text>
          <Text fontWeight={600} color={'brand.500'} fontSize={'54px'}>I&apos;m Max,</Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{base: 4, md: 0}}
          ml={{md: 6}}
          align="center"
          paddingTop={'10px'}
        >
          <Image
            src={'images/Max.png'}
            borderColor="brand.600"

            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="150px"
            display="inline-block"
            alt={'Max Lee'}
          />
        </Box>
      </HStack>
      <Text paddingTop={5} color={'brandGray.900'} fontSize={'20px'}>
        an aspiring full-stack developer currently attending high school in New York. I aim to create a life-changing
        start up one day. But, as of right now I’m simply passionate about running, playing competitive games, and
        getting better at programming.</Text>

      <Text paddingTop={5} color={'brandGray.900'} fontSize={'20px'}>I believe improving is one of the most
        rewarding
        feelings. So
        whether it be
        competitive programming, running, or web development, I’m always seeking to get better.</Text>
    </Box>
  )
}
