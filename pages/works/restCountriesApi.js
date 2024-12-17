import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rest Countries Api">
    <Container>
      <Title>
        Rest-Countries-Api <Badge>2021-</Badge>
      </Title>
      <P>
        Plataforma Web en la cual podrás buscar información de cualquier país.
        Además cuenta con un campo para realizar busquedas directas por nombre
        de país.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://paulxcz.github.io/REST-Countries-API/index.html"
            target="_blank"
          >
            https://paulxcz.github.io/REST-Countries-API/index.html{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS Vanilla, SASS, CSS-Grid, flexbox y Fetch API</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/restCountriesApi_01.png"
        alt="Rest countries API"
      />
      <WorkImage
        src="/images/works/restCountriesApi_02.png"
        alt="Rest countries API"
      />
      <WorkImage
        src="/images/works/restCountriesApi_03.png"
        alt="Rest countries API"
      />
    </Container>
  </Layout>
)

export default Work
