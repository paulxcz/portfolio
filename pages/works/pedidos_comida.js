import ProjectPage from '../../components/project'

const data = {
  title: 'Plataforma de Gestión de Pedidos',
  year: 2024,
  accent: '#f97316',
  intro:
    'Plataforma web para una empresa del rubro comida rápida que ordena todo el flujo del pedido, desde que entra hasta que se entrega. Caja, cocina, delivery y administración trabajan sobre un mismo tablero en tiempo real, con roles y permisos diferenciados. El pedido nunca se pierde: cambia de estado de forma clara y todos ven lo mismo al instante.',
  metrics: [
    { value: '640/día', label: 'Pedidos gestionados' },
    { value: '−35%', label: 'Tiempo de atención' },
    { value: '4 roles', label: 'Caja · cocina · delivery · admin' }
  ],
  meta: [
    { label: 'Rol', value: 'Fullstack Engineer (freelance)' },
    { label: 'Sector', value: 'Comida rápida / delivery' },
    { label: 'Modalidad', value: '100% remoto · por hitos' },
    {
      label: 'Stack',
      value: 'React, Vite, Node.js / .NET, SQL Server, JWT, actualización en tiempo real'
    },
    { label: 'Entregable', value: 'Tablero de pedidos, gestión de menú, seguimiento de delivery' }
  ],
  images: [
    { src: '/images/works/pedidos_board.png', alt: 'Tablero de pedidos en tiempo real' },
    { src: '/images/works/pedidos_detail.png', alt: 'Seguimiento de pedido y delivery' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'Los pedidos se coordinaban por WhatsApp y papeles: cocina no sabía qué priorizar, caja perdía el rastro y delivery no tenía claridad de rutas. En horas pico se generaban errores, demoras y clientes molestos.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Construí un tablero tipo kanban donde cada pedido avanza por estados (Por atender, En preparación, En camino, Entregado) y se actualiza en vivo para todos. Cada rol ve solo lo que le corresponde, con seguridad por JWT.',
        'La vista de detalle reúne items, cliente, dirección, pago y línea de tiempo del pedido, además del seguimiento del repartidor. El encargado administra menú, precios y usuarios desde el mismo panel.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'La plataforma soporta picos de ~90 pedidos por hora sin caídas y redujo el tiempo total de atención en 35%. Menos errores de coordinación, entregas más rápidas y una operación que el dueño controla desde un solo lugar.'
      ]
    }
  ],
  closing:
    'Ordenar la operación con software propio se traduce en más pedidos atendidos, menos errores y clientes que vuelven. La base es escalable para agregar sucursales, cocina de despacho o integración con apps de delivery.'
}

const Work = () => <ProjectPage data={data} />
export default Work
