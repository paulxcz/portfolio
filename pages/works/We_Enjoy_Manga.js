import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="We Enjoy Manga">
    <Container>
      <Title>
        We Enjoy Manga <Badge>2021-</Badge>
      </Title>
      <P>
        We Enjoy Manga es un sitio dedidcado al manga/anime, en el cual se publican recomendaciones, resúmenes y música de animes(openings y endings).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://weenjoymanga.com" target="_blank">
          https://weenjoymanga.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS Vanilla, Sass, flexbox, CSS-Grid</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/WeEnjoyManga.png" alt="We Enjoy Manga" />
    </Container>
  </Layout>
)

export default Work
