import ProjectPage from '../../components/project'

const data = {
  title: 'Agente de IA Conversacional para Ventas y Atención',
  year: 2025,
  accent: '#22c55e',
  intro:
    'Asistente conversacional con IA para una empresa del rubro retail / e-commerce. Atiende por WhatsApp, Instagram y chat web las 24 horas: entiende preguntas en lenguaje natural, cotiza, responde dudas de stock y precios, y cierra pedidos dentro de la misma conversación. Cuando el caso es complejo, deriva a una persona con todo el contexto. Resuelve el 87% de las consultas sin intervención humana.',
  metrics: [
    { value: '87%', label: 'Consultas resueltas por IA' },
    { value: '−64%', label: 'Costo de atención' },
    { value: 'S/ 82K', label: 'Ventas asistidas / mes' }
  ],
  meta: [
    { label: 'Rol', value: 'AI Engineer (freelance)' },
    { label: 'Sector', value: 'Retail / e-commerce' },
    { label: 'Modalidad', value: '100% remoto · por entregables + retainer' },
    {
      label: 'Stack',
      value: 'Python, FastAPI, LLM + RAG, WhatsApp Business API, integración con catálogo y ERP'
    },
    { label: 'Entregable', value: 'Agente omnicanal + panel de analítica de conversaciones' }
  ],
  images: [
    { src: '/images/works/agente_ia_chat.png', alt: 'Conversación del agente de IA' },
    { src: '/images/works/agente_ia_panel.png', alt: 'Panel de analítica del asistente' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'El equipo respondía cientos de mensajes al día con preguntas repetidas de precio, stock y envío. Fuera del horario laboral no había respuesta, y cada demora era una venta perdida. Escalar la atención significaba contratar más gente.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Desarrollé un agente que entiende la intención real del cliente (consulta, cotización, reclamo o compra) sin menús rígidos, apoyado en el catálogo real de la empresa para no inventar datos. Toma la dirección, aplica precios y registra el pedido directo en el sistema.',
        'Si detecta un caso que requiere criterio humano, escala al equipo con el historial completo, para que nadie repita preguntas. Cada conversación alimenta reportes de intenciones y productos más consultados.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'El asistente resuelve el 87% de las consultas por su cuenta, con tiempo de respuesta de ~1.2 s frente a horas antes, y un CSAT de 4.8/5 sobre miles de chats. Además genera ventas asistidas dentro del chat y reduce el costo de atención en 64%, liberando al equipo para los casos que de verdad importan.'
      ]
    }
  ],
  closing:
    'Un agente bien diseñado atiende, vende y aprende 24/7, y libera al equipo del trabajo repetitivo. Es una de las inversiones en IA con retorno más rápido y directo para negocios con alto volumen de mensajes.'
}

const Work = () => <ProjectPage data={data} />
export default Work
