import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, soy Paul, un apasionado por el desarrollo de software.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Paul Aranda
          </Heading>
          <p>Paulxcz (FullStack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Paul.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Proyectos
        </Heading>
        <Paragraph>
          Paul es un egresado de la carrera de ingeniería de sistemas de
          información, apasiando por aprender constantemente nuevas tecnologías
          o tendencias, con el objetivo de crear servicios o plataformas
          digitales para poder resolver problemas o facilitar procesos.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/proyectos">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Nacido en Lima, Perú.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Culmine mi formación escolar.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Trabaje en Luz del Sur como practicante de sistemas.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Trabaje en el banco más grande del Perú el BCP, para el COE Riesgos de
          Mercado como practicante.
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          Complete el bachiller de Ingeniería de Sistemas de Información en la
          Universidad Peruana de Ciencias Aplicadas(UPC).
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Yo ♥
        </Heading>
        <Paragraph>
          Natación, Música,{' '}
          <Link href="https://paulxcz.github.io/WeEnjoyManga/" target="_blank">
            Manga/Anime
          </Link>
          , Videojuegos,{' '}
          <Link href="https://github.com/paulxcz" target="_blank">
            Programar
          </Link>
          , Compartir tiempo con mi familia/amigos
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/paulxcz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @paulxcz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/paúl-aranda-bravo-574401180/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Paúl_AB
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Skills
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
