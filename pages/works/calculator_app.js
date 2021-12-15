import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Calculator App">
    <Container>
      <Title>
        Calculator App <Badge>2021-</Badge>
      </Title>
      <P>
       Una caculadora que cuenta con 3 temas diferentes y es responsive, por lo que se puedfe usar desde cualquier dispositivo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://paulxcz.github.io/FronteendMentor-calculator/" target="_blank">
          https://paulxcz.github.io/FronteendMentor-calculator/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS vanilla, SASS, flexbox y CSS-grid</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/calculator.png" alt="calculator app" />
    </Container>
  </Layout>
)

export default Work
