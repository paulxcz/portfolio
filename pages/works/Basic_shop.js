import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Text,
  Divider,
  Code
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sistema de Gestión de Pedidos">
    <Container>
      {/* Introducción */}
      <Title>
        Sistema de Gestión de Pedidos <Badge>2024</Badge>
      </Title>
      <P>
        Sistema diseñado para gestionar la venta de productos básicos mediante
        un flujo claro y ordenado de roles y estados de pedidos. Construido con
        una arquitectura robusta usando tecnologías modernas en Frontend y
        Backend, este sistema asegura funcionalidad, seguridad y escalabilidad.
      </P>
      {/* Información General */}
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repositorio Frontend</Meta>
          <Link
            href="https://github.com/paulxcz/basic-shop-frontend/"
            target="_blank"
          >
            https://github.com/paulxcz/basic-shop-frontend/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositorio Backend</Meta>
          <Link
            href="https://github.com/paulxcz/BasicShopService/"
            target="_blank"
          >
            https://github.com/paulxcz/BasicShopService/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Vite, Bootstrap, .NET 6, Entity Framework, SQL Server
          </span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/Basic_shop.png"
        alt="Vista general del sistema"
      />
      <WorkImage
        src="/images/works/Basic_shop_vendedor.png"
        alt="Vista general del sistema"
      />
      <WorkImage
        src="/images/works/Basic_shop_delivery.png"
        alt="Vista general del sistema"
      />
      {/* Sección: Autenticación */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Flujo de Autenticación
      </Heading>
      <Text mb={4}>
        El sistema implementa autenticación segura mediante JWT (JSON Web
        Tokens), gestionando sesiones y roles de usuario como Encargado,
        Vendedor y Delivery para acceso diferenciado.
      </Text>
      <WorkImage
        src="/images/works/Basic_shop_login1.png"
        alt="Flujo de autenticación"
      />
      <WorkImage
        src="/images/works/Basic_shop_login2.png"
        alt="Flujo de autenticación"
      />
      {/* Sección: Gestión de Usuarios */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Gestión de Usuarios
      </Heading>
      <Text mb={4}>
        El módulo de usuarios permite al Encargado realizar operaciones CRUD
        (Crear, Leer, Actualizar, Eliminar) con datos sensibles cifrados. Los
        usuarios tienen roles específicos y su estado puede ser Activado o
        Desactivado.
      </Text>
      <WorkImage
        src="/images/works/Basic_shop_gestionUsuarios.png"
        alt="Gestión de usuarios"
      />
      {/* Sección: Gestión de Productos */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Gestión de Productos
      </Heading>
      <Text mb={4}>
        Los productos son administrados por el Encargado, con búsqueda dinámica
        y filtros por SKU y nombre utilizando técnicas de AJAX para mejorar la
        experiencia del usuario.
      </Text>
      <WorkImage
        src="/images/works/Basic_shop_gestionProductos.png"
        alt="Gestión de productos"
      />
      {/* Sección: Gestión de Pedidos */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Gestión de Pedidos
      </Heading>
      <Text mb={4}>
        El sistema permite registrar pedidos, asignar roles (Vendedor, Delivery)
        y cambiar el estado de los pedidos según el flujo definido: Por atender,
        En proceso, Entregado. Cada rol tiene acceso limitado a las funciones
        disponibles según su perfil.
      </Text>
      <WorkImage
        src="/images/works/basic_shop_registrarPedido.gif"
        alt="Gestión de pedidos"
      />
      <WorkImage
        src="/images/works/basic_shop_detallePedido.gif"
        alt="Gestión de pedidos"
      />
      {/* Sección: Seguridad */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Seguridad Avanzada
      </Heading>
      <Text mb={4}>
        Se implementaron medidas de seguridad como:
        <ul>
          <li>Cifrado de datos sensibles (Ejemplo: Nombre de usuarios).</li>
          <li>URLs seguras para evitar exposición de datos en enlaces.</li>
          <li>Ofuscación de código JavaScript para dificultar inspección.</li>
          <li>
            Las claves son encriptadas con el algoritmo no reversible SHA-256.
          </li>
        </ul>
      </Text>
      <WorkImage
        src="/images/works/Basic_shop_Security.png"
        alt="Medidas de seguridad"
      />
      <WorkImage
        src="/images/works/Basic_shop_Security2.png"
        alt="Medidas de seguridad"
      />
      <Code overflow="auto" whiteSpace="pre">
        {`
    public static string HashPassword(string str)
    {
        SHA256 sha256 = SHA256Managed.Create();
        ASCIIEncoding encoding = new ASCIIEncoding();
        byte[] stream = null;
        StringBuilder sb = new StringBuilder();
        stream = sha256.ComputeHash(encoding.GetBytes(str));
        for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);  
        return sb.ToString();        
    }
    `}
      </Code>
      {/* Conclusión */}
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Conclusión
      </Heading>
      <Text>
        Este proyecto demuestra habilidades avanzadas en el desarrollo de
        software, utilizando tecnologías modernas y aplicando las mejores
        prácticas de arquitectura y seguridad. Su diseño modular lo hace
        escalable y adaptable para negocios con necesidades similares.
      </Text>
    </Container>
  </Layout>
)

export default Work
