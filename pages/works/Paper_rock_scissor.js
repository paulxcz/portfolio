import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Piedra, Papel y Tijera <Badge>2021-</Badge>
      </Title>
      <P>
        El clásico juego de Piedra, papel y Tijera, pero con un bonus; ya que este cuenta con 2 figuras adicionales, que harán el juego más variado.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://paulxcz.github.io/paper-scissor-rock-frontendmentor/" target="_blank">
          https://paulxcz.github.io/paper-scissor-rock-frontendmentor/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React y Sass</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/paper_rock_scissor_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/paper_rock_scissor_02.png" alt="Inkdrop" />
      <WorkImage src="/images/works/paper_rock_scissor_03.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
