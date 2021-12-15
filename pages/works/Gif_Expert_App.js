import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Gift Exper App">
    <Container>
      <Title>
        Gif Expert App <Badge>2021-</Badge>
      </Title>
      <P>
        Un aplicativo web que te facilitará la busqueda de gif&apos;s, para obtener los resultados se uso la API de GIPHY.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://paulxcz.github.io/react-gif-expert-app/" target="_blank">
          https://paulxcz.github.io/react-gif-expert-app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Testing, SASS y fetch API </span>
        </ListItem>
    
      </List>

      <WorkImage src="/images/works/gifExpertApp.png" alt="Gift expert app" />
    </Container>
  </Layout>
)

export default Work
