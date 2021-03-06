import Head from 'next/head'
import { Flex, Image, Text, Link, useColorModeValue } from '@chakra-ui/react'

import { MdMail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

export default function Home() {
  const textColor = useColorModeValue("gray.900", "gray.400")

  return (
    <div>
      <Head>
        <title>Renato Hideki Osaka</title>
      </Head>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          p={4}
        >
          <Image
            src='https://github.com/renatoosaka.png'
            width={150}
            height={150}
            alt='Renato Hideki Osaka'
            borderRadius={"50%"}/>
          <Text
            fontSize={"3xl"}
            fontWeight={"bold"}
            textColor={textColor}
            letterSpacing={"tight"}
            mt={4}
          >
            Renato Hideki Osaka
          </Text>
          <Text
            textAlign={"center"}
            textColor={textColor}
            mt={4}
            lineHeight={"base"}
          >
            Sou dev, faço umas paradas maneiras com Node.js ReactJS e React Native
          </Text>
          <Text
            textAlign={"center"}
            textColor={textColor}
            mt={4}
            lineHeight={"base"}
          >
            Ahh estou aprendendo Go, muito massinha!
          </Text>
          <Flex direction={"row"} mt={4}>
            <Link
              href="https://github.com/renatoosaka/"
              textColor={textColor}
              ml={4}
              transition={"all"}
              transitionDuration={"0.25s"}
              _hover={{
                opacity: 0.75
              }}
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/renatohidekiosaka/"
              textColor={textColor}
              ml={4}
              transition={"all"}
              transitionDuration={"0.25s"}
              _hover={{
                opacity: 0.75
              }}
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/renato_osaka/"
              textColor={textColor}
              ml={4}
              transition={"all"}
              transitionDuration={"0.25s"}
              _hover={{
                opacity: 0.75
              }}
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="mailto:oi@renatohidekiosaka.com.br"
              textColor={textColor}
              ml={4}
              transition={"all"}
              transitionDuration={"0.25s"}
              _hover={{
                opacity: 0.75
              }}
            >
              <MdMail size={20} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
