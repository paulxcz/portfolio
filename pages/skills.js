import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbHtmlLogo from '../public/images/skills/logo_html.png'
import thumbCssLogo from '../public/images/skills/logo_css.png'
import thumbJSLogo from '../public/images/skills/logo_js.png'
import thumbGitLogo from '../public/images/skills/logo_git.png'
import thumbNodeLogo from '../public/images/skills/nodeJs_logo.png'
import thumbReactLogo from '../public/images/skills/react_logo.png'
import thumbCsharpLogo from '../public/images/skills/Csharp_logo.png'
import thumbVbLogo from '../public/images/skills/VB_Logo.png'
import thumbPhytonLogo from '../public/images/skills/phyton_logo.png'
import thumbNet from '../public/images/skills/Net-Framework_Logo.png'
import thumbSQL from '../public/images/skills/Sql_logo.png'
import thumbAzureFuncions from '../public/images/skills/azureFunctions_logo.png'

const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis Skills
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
          <GridItem title="HTML" thumbnail={thumbHtmlLogo} />
          <GridItem title="CSS" thumbnail={thumbCssLogo} />
          <GridItem title="JavaScript" thumbnail={thumbJSLogo} />
          <GridItem title="Git" thumbnail={thumbGitLogo} />
          <GridItem title="React" thumbnail={thumbReactLogo} />
          <GridItem title="Node Js" thumbnail={thumbNodeLogo} />
          <GridItem title="C#" thumbnail={thumbCsharpLogo} />
          <GridItem title="Visual Basic" thumbnail={thumbVbLogo} />
          <GridItem title="Phyton" thumbnail={thumbPhytonLogo} />
          <GridItem title=".Net" thumbnail={thumbNet} />
          <GridItem title="SQL" thumbnail={thumbSQL} />
          <GridItem title="Azure Functions" thumbnail={thumbAzureFuncions} />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
