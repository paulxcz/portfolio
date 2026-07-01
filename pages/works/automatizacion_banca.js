import ProjectPage from '../../components/project'

const data = {
  title: 'Automatización de Backoffice con IA',
  year: 2024,
  accent: '#6366f1',
  intro:
    'Automatización de procesos operativos y reportería para una empresa del sector banca, en el área de riesgos de mercado. Los cierres diarios que antes se armaban a mano en Excel —consolidando datos de varias fuentes— ahora se ejecutan solos: se conectan a las bases, calculan, generan el reporte en PDF/Excel y lo envían por correo y Teams. El tiempo operativo por cierre cayó un 80%.',
  metrics: [
    { value: '−80%', label: 'Tiempo operativo por cierre' },
    { value: '320 h', label: 'Horas/mes liberadas' },
    { value: '0', label: 'Errores de digitación' }
  ],
  meta: [
    { label: 'Rol', value: 'Automation / Backend Engineer (freelance)' },
    { label: 'Sector', value: 'Banca / riesgos de mercado' },
    { label: 'Modalidad', value: '100% remoto · asincrónico' },
    {
      label: 'Stack',
      value: 'Python, FastAPI, SQL Server, Pandas, integración ERP, generación de PDF/Excel'
    },
    { label: 'Entregable', value: '18 flujos automatizados + panel de control operativo' }
  ],
  images: [
    { src: '/images/works/auto_banca_dashboard.png', alt: 'Panel de automatización de backoffice' },
    { src: '/images/works/auto_banca_report.png', alt: 'Generador de reportes automáticos' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'El cierre de riesgo de mercado tomaba hasta 6 horas diarias de trabajo manual: descargar datos, cruzarlos en Excel, revisar a ojo y enviar. Propenso a errores, dependiente de personas y sin margen para crecer. Cada minuto de retraso en el cierre tenía costo.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Construí un motor de automatización que orquesta 18 flujos: se conecta a SQL Server y al ERP, aplica la lógica de negocio, genera los reportes y los distribuye automáticamente en horarios programados. Un panel muestra en vivo qué corrió, cuánto demoró y con qué resultado.',
        'Incluí reintentos, validaciones y alertas: si algo falla, el equipo se entera de inmediato en lugar de descubrirlo tarde. Los reportes salen idénticos, sin errores de digitación.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'El cierre pasó de ~6 horas a menos de 1 hora, con 99.6% de ejecuciones exitosas y cero errores manuales desde el despliegue. En conjunto, los flujos liberan alrededor de 320 horas al mes: el equivalente a dos personas a tiempo completo dedicadas a tareas de mayor valor.'
      ]
    }
  ],
  closing:
    'Automatizar lo repetitivo no solo ahorra tiempo: reduce el riesgo operativo y le devuelve horas al equipo. El enfoque es replicable a cualquier proceso de backoffice con reglas claras y fuentes de datos definidas.'
}

const Work = () => <ProjectPage data={data} />
export default Work
