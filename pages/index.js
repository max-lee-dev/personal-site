import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Box, Text} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Box margin={5} bg={'red'} className={'font'}>
            <Text>hey</Text>
            <Text>this is my w.i.p. portfolio site!!!!</Text>
        </Box>
    )
}
