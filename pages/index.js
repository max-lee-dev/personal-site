import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Box, Text} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Box color={'brandGray.100'} fontFamily={"Lexend Deca"}>
            <Text color={'brandWhite.100'} fontSize={'40px'}>hey im max </Text>
            <Text paddingTop={5} fontSize={'24px'}>I'm an aspiring full-stack developer who currently attends high
                school in New York.
                I enjoy running mid/long distance while getting better at programming in my free
                time.</Text>

            <Text paddingTop={5} fontSize={'24px'}>I believe improving is one of the most rewarding feelings. So
                whether it be
                LeetCode, competitive programming, running, or web development, I’m always seeking to get better.</Text>
        </Box>
    )
}
