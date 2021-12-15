import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="IP Tracker">
    <Container>
      <Title>
        IP Tracker <Badge>2021-</Badge>
      </Title>
      <P>
        Aplicativo web que permite trackear(localizar) una IP, además muestra la localización de manera visual en un mapa.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://paulxcz.github.io/IP-Address-Tracker/" target="_blank">
          https://paulxcz.github.io/IP-Address-Tracker/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, SCSS y Fetch API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/IpTracker_01.png" alt="Ip Tracker" />
      <WorkImage src="/images/works/IpTracker_02.png" alt="Ip Tracker" />
    </Container>
  </Layout>
)

export default Work
