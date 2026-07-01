import ProjectPage from '../../components/project'

const data = {
  title: 'Software de Compliance y Trazabilidad Regulatoria',
  year: 2023,
  accent: '#8b5cf6',
  intro:
    'Sistema de trazabilidad y cumplimiento para una empresa de un sector altamente regulado en Estados Unidos, donde cada movimiento de inventario debe reportarse al regulador estatal. El software registra la trazabilidad completa (seed-to-sale), sincroniza automáticamente con las plataformas oficiales de trazabilidad (tipo METRC / BioTrack) y deja una bitácora de auditoría inmutable. Cero rechazos del regulador desde el despliegue.',
  metrics: [
    { value: '100%', label: 'Reportes a tiempo' },
    { value: '0', label: 'Rechazos del regulador' },
    { value: '18,420', label: 'Lotes trazados' }
  ],
  meta: [
    { label: 'Rol', value: 'Software Engineer · Compliance (freelance)' },
    { label: 'Sector', value: 'Sector regulado (EE.UU.)' },
    { label: 'Modalidad', value: '100% remoto · cliente internacional (inglés)' },
    {
      label: 'Stack',
      value: 'C# .NET, SQL Server, APIs de trazabilidad (METRC / BioTrack), webhooks, auditoría'
    },
    { label: 'Entregable', value: 'Panel de compliance + trazabilidad seed-to-sale + exportables' }
  ],
  images: [
    { src: '/images/works/compliance_dashboard.png', alt: 'Panel de compliance' },
    { src: '/images/works/compliance_audit.png', alt: 'Auditoría y trazabilidad de lotes' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'En un sector regulado, un reporte tardío o inconsistente con el regulador puede significar multas o la pérdida de la licencia. El registro manual hacia las plataformas estatales era lento, repetitivo y arriesgado: un error de tipeo tenía consecuencias reales.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Desarrollé un sistema que traza cada lote a lo largo de todo su ciclo de vida y sincroniza los movimientos automáticamente con las plataformas oficiales de trazabilidad mediante sus APIs y webhooks. Cada acción queda en una bitácora inmutable, con usuario, fecha y detalle.',
        'El panel muestra el estado de cumplimiento, reportes enviados, licencias y vencimientos, con alertas anticipadas. Todo es exportable (PDF firmado, CSV, API) para cualquier auditoría del regulador.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'El 100% de los reportes salió a tiempo y no hubo un solo rechazo del regulador desde el despliegue, con más de 18,000 lotes trazados de extremo a extremo. La empresa pasó de un proceso manual y riesgoso a un cumplimiento automático y auditable.'
      ]
    }
  ],
  closing:
    'En entornos regulados, el software correcto es la diferencia entre operar tranquilo o arriesgar la licencia. La experiencia en compliance internacional y trazabilidad seed-to-sale es directamente aplicable a otros sectores con requisitos regulatorios estrictos.'
}

const Work = () => <ProjectPage data={data} />
export default Work
