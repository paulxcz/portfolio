import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Count Down App">
    <Container>
      <Title>
        Count-Down <Badge>2021-</Badge>
      </Title>
      <P>
        Contador de días, el cual presenta una animación en cada uno de sus
        campos.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://paulxcz.github.io/frontendMentor-Launch-countdown-timer/"
            target="_blank"
          >
            https://paulxcz.github.io/frontendMentor-Launch-countdown-timer/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>JS Vanilla, SASS, setTimeOout API</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/countdown-timer.png"
        alt="Countdown timer"
      />
    </Container>
  </Layout>
)

export default Work
