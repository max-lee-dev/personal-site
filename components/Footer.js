import {Box, Container, Link, VStack, HStack} from '@chakra-ui/react'
import {IoLogoGithub, IoLogoLinkedin, IoMail} from 'react-icons/io5'

const AnimatedLogo = ({logo}) => {
  return (
    <Box
      as={logo}
      transition="all 0.2s ease-in-out"
      _hover={{transform: 'translateY(-2px)', color: 'brand.500'}}
      fontSize="32px"
      color="brand.600"
    />
  )
}

const Footer = () => {
  return (
    <VStack width={'100%'}>
      <Container width={'100%'} bg="brand.100">
        <HStack justifyContent={'center'}>
          <Box>
            <Link
              href="https://github.com/max-lee-dev"
              target="_blank"
              _hover={{textDecoration: 'none'}}
            >
              <AnimatedLogo logo={IoLogoGithub}/>
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/max-lee-dev/"
              target="_blank"
              _hover={{textDecoration: 'none'}}
            >
              <AnimatedLogo logo={IoLogoLinkedin}/>
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:hey@max-lee.dev"
              target="_blank"
              _hover={{textDecoration: 'none'}}
            >
              <AnimatedLogo logo={IoMail}/>
            </Link>
          </Box>
        </HStack>
        <Link
          href={'https://github.com/max-lee-dev/personal-site'}
          isExternal
        >
          <Box
            pt={2}
            align="center"
            opacity={0.3}
            fontSize={'sm'}
            color={'black'}
          >
            site last updated 6/20/2024
          </Box>
        </Link>
      </Container>
      <Box
        position="fixed"
        bg="brand.600"
        bottom="0"
        left="0"
        width="100%"
        textColor="#5F967C"
        height="15px"
        fontSize="1px"
      >
        easter egg!!
      </Box>
    </VStack>
  )
}

export default Footer