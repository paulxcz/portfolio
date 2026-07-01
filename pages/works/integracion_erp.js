import ProjectPage from '../../components/project'

const data = {
  title: 'Integración de ERP y Sistemas Legacy a la Web',
  year: 2023,
  accent: '#2563eb',
  intro:
    'Capa de integración para una empresa del sector energía / utilities que necesitaba exponer datos atrapados en su ERP y sistemas legacy hacia un portal web y una app móvil, sin reescribir esos sistemas críticos. Construí un middleware con APIs REST seguras que sincroniza la información en tiempo real: lo que antes era un reporte al día siguiente, ahora está disponible en segundos.',
  metrics: [
    { value: '42', label: 'Procesos sincronizados' },
    { value: '< 2 s', label: 'Latencia de datos' },
    { value: '99.95%', label: 'Disponibilidad' }
  ],
  meta: [
    { label: 'Rol', value: 'Backend / Integration Engineer (freelance)' },
    { label: 'Sector', value: 'Energía / utilities' },
    { label: 'Modalidad', value: '100% remoto · por hitos' },
    {
      label: 'Stack',
      value: '.NET, Node.js, APIs RESTful, colas de mensajes, ETL, SQL Server, JWT, React'
    },
    { label: 'Entregable', value: 'Middleware + APIs + monitor de sincronización' }
  ],
  images: [
    { src: '/images/works/erp_flow.png', alt: 'Arquitectura de integración' },
    { src: '/images/works/erp_sync.png', alt: 'Monitor de sincronización' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'Los datos vivían en un ERP y sistemas antiguos (SAP, AS/400, SQL) que no se podían tocar sin riesgo. El negocio necesitaba consultarlos desde la web y el campo, pero cualquier integración directa amenazaba la estabilidad de sistemas críticos.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Diseñé una capa intermedia (middleware) que actúa de puente: lee del legacy sin modificarlo, normaliza los datos con procesos ETL y los expone como APIs REST seguras para el portal web y la app móvil. Colas de mensajes y reintentos garantizan que ningún dato se pierda.',
        'Un monitor muestra en vivo cada endpoint, su throughput, latencia y estado, con alertas ante cualquier falla. Todo con autenticación JWT, cifrado y bitácora de auditoría.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'Se sincronizan 42 procesos con latencia menor a 2 segundos y 99.95% de disponibilidad, procesando cientos de miles de registros al día. La información pasó de estar disponible al día siguiente a estarlo casi en tiempo real, sin reescribir un solo sistema de origen.'
      ]
    }
  ],
  closing:
    'Modernizar sin romper lo que funciona: los sistemas legacy siguen operando y el negocio gana agilidad. Este patrón de integración es aplicable a cualquier organización con ERP o software heredado que quiera llevar sus datos a la web.'
}

const Work = () => <ProjectPage data={data} />
export default Work
