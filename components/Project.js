import React, {useState} from 'react';
import {Box, Divider, Text, VStack, Image, Center} from '@chakra-ui/react';

export default function Project({image, title, video, description, link}) {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alignSelf={['center', 'flex-start']}
      width={'350px'}
      minHeight={'250px'}
      as={'a'}
      href={link}
      _hover={{
        borderColor: 'brand.500',
        transform: 'scale(1.05)',
        cursor: 'pointer',
        transition: 'all 0.1s'
      }}
      borderWidth={1} borderRadius={5} color={'brand.900'}
      borderColor={'brand.900'}
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
                  src={video} type="video/mp4"/>
              </video>
            </Center>
            :


            <Image src={image}
                   alt={title}
                   objectFit={'cover'}
                   borderTopRadius={5}
                   p={0.5}
            />
          }
        </Box>

        {!isHovered &&
          <Box width={'100%'}
               bg={'brand.100'}
               borderColor={'brand.900'}
               borderBottomRadius={5}
               borderTop={0}

          >
            <Divider borderColor={'brand.900'}/>
            <Box alignSelf='flex-start' px={3} py={2}>
              <Text color={'brandWhite.100'} fontWeight={600} fontSize={'20px'}>{title}</Text>
              <Text color={'brandGray.900'} fontSize={'16px'}>{description}</Text>
            </Box>
          </Box>}


      </VStack>

    </Box>
  )
}