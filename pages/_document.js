import {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Max Lee's personal website"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>

                <link
                    href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&family=Source+Code+Pro:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"/>
            </Head>

            <body>
            <ColorModeScript/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
