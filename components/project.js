import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Text,
  Divider,
  SimpleGrid,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from './work'
import P from './paragraph'
import Layout from './layouts/article'

// Data-driven project detail page.
// All copy is passed as JS strings and rendered via expressions,
// so apostrophes/quotes never trip eslint's no-unescaped-entities.
const ProjectPage = ({ data }) => {
  const metricBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const metricBorder = useColorModeValue('gray.200', 'whiteAlpha.300')
  return (
    <Layout title={data.title}>
      <Container>
        <Title>
          {data.title} <Badge>{data.year}</Badge>
        </Title>

        <P>{data.intro}</P>

        {data.metrics && (
          <SimpleGrid columns={[1, 3, 3]} gap={4} my={6}>
            {data.metrics.map(m => (
              <Box
                key={m.label}
                p={4}
                borderRadius="lg"
                bg={metricBg}
                borderWidth="1px"
                borderColor={metricBorder}
                textAlign="center"
              >
                <Text fontSize={28} fontWeight="bold" color={data.accent}>
                  {m.value}
                </Text>
                <Text fontSize={13} opacity={0.8}>
                  {m.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        )}

        <List ml={4} my={4}>
          {data.meta.map(row => (
            <ListItem key={row.label} mb={1}>
              <Meta>{row.label}</Meta>
              <span>{row.value}</span>
            </ListItem>
          ))}
        </List>

        {data.images.map((img, i) => (
          <WorkImage key={i} src={img.src} alt={img.alt} />
        ))}

        {data.sections.map((sec, i) => (
          <Box key={i}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
              {sec.h}
            </Heading>
            {sec.p.map((para, j) => (
              <Text key={j} mb={4}>
                {para}
              </Text>
            ))}
            {sec.img && <WorkImage src={sec.img.src} alt={sec.img.alt} />}
          </Box>
        ))}

        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Resultado
        </Heading>
        <Text>{data.closing}</Text>
      </Container>
    </Layout>
  )
}

export default ProjectPage
