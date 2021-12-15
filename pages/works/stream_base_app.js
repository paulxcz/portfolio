import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Stream Base App">
    <Container>
      <Title>
        Stream Base App <Badge>2021</Badge>
      </Title>
      <P>
        Stream-base-app creada con react, sass, metodología BEM y first mobile.
        Es un sitio web que implementa funciones básicas de &quot;Twitch.tv&quot;.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://paulxcz.github.io/Stream-base-app/" target="_blank">
            https://paulxcz.github.io/Stream-base-app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node Js, SASS, First Mobile y Metodología BEM</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/stream-base-app.png" alt="Stream base app" />
      <WorkImage src="/images/works/stream_base_app_02.png" alt="Stream base app" />
    </Container>
  </Layout>
)

export default Work
