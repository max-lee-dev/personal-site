import React, {useState} from 'react';
import {Box, Divider, Text, VStack, Image, Center} from '@chakra-ui/react';

export default function Project({image, title, description, link}) {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alignSelf={['center', 'flex-start']}
      width={'350px'}
      height={'250px'}
      as={'a'}
      href={link}
      _hover={{
        borderColor: 'brandWhite.100',
        transform: 'scale(1.01)',
        cursor: 'pointer',
        transition: 'all 0.1s'
      }}
      borderWidth={1} borderRadius={5} color={'brandGray.100'} borderColor='brandGray.100'
      fontFamily={"Lexend Deca"}>
      <VStack spacing={0}>
        <Box width={['350px']}
             height={['150px']}
        >
          {isHovered ?
            <Center

              borderRadius={5}
              overflow={'hidden'}

            >
              <video autoPlay loop muted playsInline
                     style={{width: '98%', height: '20%', objectFit: 'cover'}}
              >
                <source
                  src="/images/hackertype.mp4" type="video/mp4"/>
              </video>
            </Center>
            :


            <Image src={image}
                   alt={title}
                   objectFit={'cover'}
                   borderRadius={5}
            />
          }
        </Box>

        {!isHovered &&
          <Box width={'100%'}>
            <Divider orientation="horizontal" borderColor="brandGray.100"/>
            <Box alignSelf='flex-start' px={3} py={2}>
              <Text color={'brandWhite.100'} fontWeight={600} fontSize={'20px'}>{title}</Text>
              <Text color={'brandGray.100'} fontSize={'16px'}>{description}</Text>
            </Box>
          </Box>}


      </VStack>

    </Box>
  )
}