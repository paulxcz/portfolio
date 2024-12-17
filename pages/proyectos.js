import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIpTacker from '../public/images/works/IpTracker.jpg'
import thumbRestCountries from '../public/images/works/restCountriesApi.jpg'
import thumbPaperScissorRock from '../public/images/works/Paper_Scissor_rock.png'
import thumbStreamBaseApp from '../public/images/works/stream-base-app.png'
import thumbCalculator from '../public/images/works/calculator.png'
import thumbCountDownTimer from '../public/images/works/countdown-timer.png'
import thumbWeEnjoyManga from '../public/images/works/WeEnjoyManga.png'
import thumbGifExpertApp from '../public/images/works/gifExpertApp.png'
import thumbBlogApp from '../public/images/works/Blog_app.png'

const Works = () => (
  <Layout title="Proyectos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="Blog_app" title="Blog App" thumbnail={thumbBlogApp}>
            Aplicativo web diseñada para ofrecer a los usuarios una experiencia
            intuitiva y funcional al publicar y gestionar contenido. Construido
            con MongoDB, Express, React y Node.js.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Paper_rock_scissor"
            title="Piedra, Papel y Tijera"
            thumbnail={thumbPaperScissorRock}
          >
            Aplicativo web que simula el clásico juego de &quot;Piedra, Papel y
            Tijera&quot;, solo que este cuenta con un bonus y es que hay 2
            figuras adicionales, lo cual aumenta la dificultad.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="stream_base_app"
            thumbnail={thumbStreamBaseApp}
            title="Stream Base App"
          >
            Sitio web que simula características básicas de twitch.tv, realizado
            con React, Sass, first mobile y metodología BEM.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ipTracker"
            title="Ip Tracker"
            thumbnail={thumbIpTacker}
          >
            Un aplicativo web a través del cual puedes consultar la ubicación de
            una IP.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="restCountriesApi"
            title="Rest Countries API"
            thumbnail={thumbRestCountries}
          >
            Aplicativo web en el cuál podrás consultar información de cualquier
            país, además de filtrar busqueda de países por continente o nombre.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="We_Enjoy_Manga"
            thumbnail={thumbWeEnjoyManga}
            title="We Enjoy Manga"
          >
            Página web dedicada a publicar información actualizada,
            recomendaciones y playlist sobre anime y manga.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Gif_Expert_App"
            thumbnail={thumbGifExpertApp}
            title="Gif Expert App"
          >
            Aplicativo web en el cual podrás buscar Gif&apos;s de cualquier
            genero.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="calculator_app"
            thumbnail={thumbCalculator}
            title="Calculator App"
          >
            Aplicativo desarrollado con HTML, JS vanila, scss, flexbox y
            css-grid, cuenta con 3 temas diferentes.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Count_Down_App"
            thumbnail={thumbCountDownTimer}
            title="Count-down timer"
          >
            Un aplicativo que simula características básicas de twitch.tv,
            realizado con React, Sass, first mobile y metodología BEM.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
