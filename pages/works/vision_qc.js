import ProjectPage from '../../components/project'

const data = {
  title: 'Visión Computacional para Control de Calidad',
  year: 2025,
  accent: '#14b8a6',
  intro:
    'Sistema de inspección visual en línea para una empresa productora de snacks. Una cámara sobre la faja de producción analiza cada pieza en tiempo real y detecta defectos (quemado, forma, color, sellado) sin detener la línea, reemplazando la inspección manual por muestreo. El resultado: menos merma, menos producto defectuoso llegando al cliente y trazabilidad total de la calidad, turno a turno.',
  metrics: [
    { value: '99.2%', label: 'Precisión del modelo' },
    { value: '−31%', label: 'Reducción de mermas' },
    { value: '12,400/h', label: 'Piezas inspeccionadas' }
  ],
  meta: [
    { label: 'Rol', value: 'AI / Computer Vision Engineer (freelance)' },
    { label: 'Sector', value: 'Alimentos / manufactura de snacks' },
    { label: 'Modalidad', value: '100% remoto · por entregables' },
    {
      label: 'Stack',
      value:
        'Python, FastAPI, PyTorch (YOLO), DINOv2, OpenCV (SIFT/ORB), Docker, cámara industrial'
    },
    { label: 'Entregable', value: 'Modelo entrenado a medida + dashboard de operación en planta' }
  ],
  images: [
    { src: '/images/works/vision_qc_live.png', alt: 'Panel de inspección en vivo' },
    { src: '/images/works/vision_qc_metrics.png', alt: 'Analítica de defectos' }
  ],
  sections: [
    {
      h: 'El problema',
      p: [
        'La inspección se hacía por muestreo manual: lenta, subjetiva y con defectos que se escapaban al cliente. Cada lote rechazado representaba merma y costo. El reto era inspeccionar el 100% de la producción sin frenar la faja ni instalar hardware costoso.'
      ]
    },
    {
      h: 'La solución',
      p: [
        'Entrené un modelo de detección a medida (YOLO afinado con embeddings DINOv2 para casos difíciles) capaz de clasificar cada pieza en milisegundos. El pipeline corre sobre un servicio FastAPI conectado a la cámara de la línea, con una latencia por objeto de ~24 ms.',
        'Cuando una pieza no cumple, el sistema la marca, la registra y alimenta un tablero en vivo que el equipo de planta usa para reaccionar al instante. Todo queda auditado para análisis posterior.'
      ]
    },
    {
      h: 'Impacto medible',
      p: [
        'El escape de defectos al cliente bajó de 2.8% a 0.3%, y las mermas por lote cayeron ~31%. El sistema opera con 99.9% de disponibilidad y la inversión se recuperó en cinco meses (ROI 4.2×), sin una sola detención de línea imputable al sistema.'
      ]
    }
  ],
  closing:
    'Un caso donde la IA aplicada paga sola: mejor calidad, menos merma y decisiones basadas en datos en tiempo real. La misma arquitectura es replicable a otras líneas de producción y tipos de producto.'
}

const Work = () => <ProjectPage data={data} />
export default Work
