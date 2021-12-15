import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbHtmlLogo from '../public/images/skills/logo_html.png'
import thumbCssLogo from '../public/images/skills/logo_css.png'
import thumbJSLogo from '../public/images/skills/logo_js.png'
import thumbGitLogo from '../public/images/skills/logo_git.png'
import thumbBemLogo from '../public/images/skills/bem_logo.png'
import thumbFigmaLogo from '../public/images/skills/Figma_logo.png'
import thumbSassLogo from '../public/images/skills/logo_sass.png'
import thumbNodeLogo from '../public/images/skills/nodeJs_logo.png'
import thumbReactLogo from '../public/images/skills/react_logo.png'

const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis Skills
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1,2,3]} gap={6}>
          <GridItem
            title="HTML"
            thumbnail={thumbHtmlLogo}
          />
          <GridItem
            title="CSS"
            thumbnail={thumbCssLogo}
          />
          <GridItem
            title="JavaScript"
            thumbnail={thumbJSLogo}
          />
          <GridItem
            title="Git"
            thumbnail={thumbGitLogo}
          />
          <GridItem
            title="React"
            thumbnail={thumbReactLogo}
          />
          <GridItem
            title="Node Js"
            thumbnail={thumbNodeLogo}
          />
          <GridItem
            title="Metodología BEM"
            thumbnail={thumbBemLogo}
          />
          <GridItem
            title="Figma"
            thumbnail={thumbFigmaLogo}
          />
          <GridItem
            title="SASS"
            thumbnail={thumbSassLogo}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
