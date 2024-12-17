import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blog App">
    <Container>
      {/* Introducción */}
      <Title>
        Blog App <Badge>2024</Badge>
      </Title>
      <P>
        Aplicación web de blogging diseñada para ofrecer a los usuarios una
        experiencia intuitiva y funcional al publicar y gestionar contenido.
        Construido con tecnologías modernas como el MERN Stack (MongoDB,
        Express, React y Node.js), permite la interacción dinámica entre
        usuarios, la publicación de blogs y la moderación del contenido mediante
        un administrador.
      </P>

      {/* Información General */}
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website Client</Meta>
          <Link href="https://github.com/paulxcz/blog-project/" target="_blank">
            https://github.com/paulxcz/blog-project/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website Api</Meta>
          <Link
            href="https://github.com/paulxcz/blog-api-project/"
            target="_blank"
          >
            https://github.com/paulxcz/blog-api-project/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, Express, React y Node.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Blog_app.png" alt="Blog App" />

      {/* Sección: Autenticación */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Flujo de Autenticación
      </Heading>
      <Text mb={4}>
        La autenticación está gestionada con <strong>Clerk</strong>, lo que
        permite un inicio de sesión seguro y fácil de implementar. Cada usuario
        puede registrarse, iniciar sesión y acceder a su cuenta personal.
      </Text>
      <WorkImage
        src="/images/works/blog_app_auth.png"
        alt="Flujo de autenticación"
      />

      {/* Sección: Publicación de Blogs */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Publicación de Posts
      </Heading>
      <Text mb={4}>
        Los usuarios pueden crear, editar y eliminar sus propios blogs
        fácilmente desde una interfaz intuitiva. El administrador tiene permisos
        para moderar el contenido.
      </Text>
      <WorkImage
        src="/images/works/Blog_app_posts.gif"
        alt="Publicación de posts"
      />

      {/* Sección: Gestión de Roles */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Gestión de Roles
      </Heading>
      <Text mb={4}>
        La plataforma incluye un sistema de <strong>roles</strong> bien
        definido: usuarios y administradores. Los administradores tienen
        privilegios adicionales, como la eliminación de posts no deseados.
      </Text>
      <WorkImage
        src="/images/works/Blog_app_user_roles.png"
        alt="Gestión de roles"
      />

      {/* Sección: Infinite Scroll */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Navegación Dinámica - Infinite Scroll
      </Heading>
      <Text mb={4}>
        Implementé un sistema de <strong>Infinite Scroll</strong> para
        garantizar una experiencia fluida al explorar múltiples posts en la
        plataforma.
      </Text>
      <WorkImage
        src="/images/works/blog_inifinite_scroll.gif"
        alt="Infinite Scroll"
      />

      {/* Sección: Filtros */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Filtros de Contenido
      </Heading>
      <Text mb={4}>
        Los usuarios pueden filtrar los blogs por categorías, fecha de
        publicación o autor, mejorando la accesibilidad del contenido.
      </Text>
      <WorkImage
        src="/images/works/blog_filters.gif"
        alt="Filtros de contenido"
      />

      {/* Conclusión */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Conclusión
      </Heading>
      <Text>
        Este proyecto refleja el uso eficiente de tecnologías modernas y la
        aplicación de buenas prácticas en desarrollo web. Se centra en la
        experiencia del usuario, la funcionalidad y la escalabilidad del
        sistema.
      </Text>
    </Container>
  </Layout>
)

export default Work
