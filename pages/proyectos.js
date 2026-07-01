import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbVisionQC from '../public/images/works/vision_qc.png'
import thumbAgenteIA from '../public/images/works/agente_ia.png'
import thumbAutoBanca from '../public/images/works/automatizacion_banca.png'
import thumbIntegracionERP from '../public/images/works/integracion_erp.png'
import thumbCompliance from '../public/images/works/compliance_us.png'
import thumbPedidos from '../public/images/works/pedidos_comida.png'

// Proyectos académicos y demos anteriores: se mantienen sus páginas en
// /pages/works, pero se ocultan de la grilla para dar protagonismo a los
// proyectos profesionales. Para volver a mostrarlos, reactivar las tarjetas.

const Works = () => (
  <Layout title="Proyectos">
    <Container>
      <Heading as="h3" fontSize={20} mb={2}>
        Proyectos
      </Heading>
      <Text mb={6} opacity={0.85}>
        Soluciones que he construido para empresas de distintos rubros. Por
        confidencialidad menciono el sector, no el nombre del cliente, y
        priorizo el resultado de negocio.
      </Text>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="vision_qc"
            title="Visión computacional para control de calidad"
            thumbnail={thumbVisionQC}
          >
            Inspección visual en línea que detecta defectos en tiempo real para
            una empresa productora de snacks. −31% de mermas y 99.2% de
            precisión.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="agente_ia"
            title="Agente de IA para ventas y atención"
            thumbnail={thumbAgenteIA}
          >
            Asistente conversacional 24/7 (WhatsApp, Instagram, web) para una
            empresa de retail / e-commerce. Resuelve el 87% de las consultas sin
            humanos.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="automatizacion_banca"
            title="Automatización de backoffice con IA"
            thumbnail={thumbAutoBanca}
          >
            Reportería y procesos automatizados para una empresa del sector
            banca / riesgos. −80% de tiempo operativo y cero errores manuales.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="integracion_erp"
            title="Integración de ERP y legacy a la web"
            thumbnail={thumbIntegracionERP}
          >
            Middleware y APIs que exponen datos de ERP y sistemas legacy a web y
            móvil para una empresa de energía / utilities. Datos en menos de 2 s.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="compliance_us"
            title="Compliance y trazabilidad regulatoria"
            thumbnail={thumbCompliance}
          >
            Trazabilidad seed-to-sale con sincronización automática al regulador
            para un sector regulado en EE.UU. Cero rechazos desde el despliegue.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pedidos_comida"
            title="Plataforma de gestión de pedidos"
            thumbnail={thumbPedidos}
          >
            Tablero de pedidos en tiempo real (caja, cocina, delivery, admin)
            para una empresa de comida rápida. −35% en tiempo de atención.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
