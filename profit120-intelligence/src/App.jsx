import { useEffect, useRef, useState } from 'react'
import './App.css'

const WHATSAPP_URL = 'https://wa.me/525515031158'

/* ─── LOGO ─────────────────────────────────────────────────── */
function Logo({ size = 140 }) {
  return (
    <img
      className="logo"
      src="/blanco-verde.png"
      alt="Profit120"
      style={{ width: size }}
    />
  )
}

/* ─── NAV ──────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Logo size={120} />
      <div className="nav__badge">INTELLIGENCE</div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav__cta">Solicitar Demo</a>
    </nav>
  )
}

/* ─── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__noise" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          IA Operativa para PYMEs
        </div>

        <h1 className="hero__headline">
          Tu empresa,{' '}
          <span className="hero__headline--green">inteligente y en acción.</span>
        </h1>

        <p className="hero__sub">
          Dashboards que alertan, agentes que ejecutan<br />y procesos que se automatizaron para siempre.
        </p>

        <div className="hero__actions">
          <a href="#como-funciona" className="btn btn--primary">Ver cómo funciona</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">Solicitar Demo →</a>
        </div>

        <div className="hero__stats">
          {[
            { num: 'CORTEX120', label: 'Tu cerebro empresarial único' },
            { num: 'A Medida', label: 'Todo diseñado para tu empresa' },
            { num: '−80%', label: 'Menos trabajo repetitivo' },
            { num: '24/7', label: 'Operando sin parar' },
          ].map((s, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual">
        <DashboardMockup />
      </div>
    </section>
  )
}

/* ─── DASHBOARD MOCKUP ────────────────────────────────────── */
function DashboardMockup() {
  const dashboards = [
    {
      area: 'MARKETING',
      title: 'Generador de demanda',
      accent: '#5fd1ff',
      layout: 'marketing',
      chartLabel: 'PIPELINE — 8 SEMANAS',
      points: [24, 28, 35, 33, 46, 52, 58, 71],
      leadStats: [
        { label: 'LEADS NUEVOS', val: '128', trend: '+18%' },
        { label: 'SQL RATE', val: '34%', trend: '+6%' },
        { label: 'CAC', val: '$214', trend: '-12%' },
      ],
      channels: [
        { name: 'META ADS', share: '42%', value: '54 leads' },
        { name: 'GOOGLE', share: '31%', value: '39 leads' },
        { name: 'ORGANICO', share: '19%', value: '24 leads' },
      ],
      funnel: [
        { stage: 'VISITAS', value: '12.4K' },
        { stage: 'MQL', value: '486' },
        { stage: 'SQL', value: '164' },
        { stage: 'DEMO', value: '39' },
      ],
      alerts: [
        { msg: 'Campana Meta con ROAS superior a objetivo', type: 'ok' },
        { msg: 'Landing con bajo CTR en segmento industrial', type: 'warn' },
        { msg: 'Google Ads agotando presupuesto antes de las 15:00', type: 'err' },
      ],
    },
    {
      area: 'FINANZAS',
      title: 'Control financiero',
      accent: '#71b248',
      layout: 'finance',
      chartLabel: 'FLUJO DE CAJA — 6 MESES',
      points: [18, 26, 31, 29, 42, 57, 61, 70],
      summary: { label: 'CAJA DISPONIBLE', value: '$1.2M', trend: '+9.1%' },
      cashBuckets: [
        { label: 'COBRANZA SEMANA', value: '$284K' },
        { label: 'PAGO PROVEEDORES', value: '$176K' },
        { label: 'NOMINA', value: '$92K' },
      ],
      financeRows: [
        { label: 'EBITDA', value: '17.8%', trend: '+2.3%', up: true },
        { label: 'CXC > 45D', value: '$184K', trend: '+6.4%', up: false },
        { label: 'RUNWAY', value: '11.4m', trend: '+1.2m', up: true },
        { label: 'BURN RATE', value: '$108K', trend: '-5.1%', up: true },
      ],
      alerts: [
        { msg: 'Cobranza mayorista por arriba del pronostico', type: 'ok' },
        { msg: 'Desviacion de gasto en servicios tercerizados', type: 'warn' },
        { msg: 'Riesgo de liquidez en semana 3 si no entra cobranza', type: 'err' },
      ],
    },
    {
      area: 'RH',
      title: 'Pulse de talento',
      accent: '#f3c44e',
      layout: 'rh',
      chartLabel: 'ENGAGEMENT — 90 DIAS',
      points: [32, 38, 41, 48, 44, 53, 57, 63],
      teamHealth: [
        { team: 'COMERCIAL', score: 78, status: 'ok' },
        { team: 'OPERACIONES', score: 61, status: 'warn' },
        { team: 'ADMIN', score: 84, status: 'ok' },
      ],
      talentSignals: [
        { label: 'ASISTENCIA', value: '97%' },
        { label: 'CAPACITACION', value: '82%' },
        { label: 'PROMOCIONES', value: '6' },
      ],
      hires: [
        { label: 'ROTACION', val: '2.1%', trend: '-0.7%', up: true },
        { label: 'VACANTES', val: '14', trend: '+3', up: false },
        { label: 'TIME TO HIRE', val: '19d', trend: '-4d', up: true },
      ],
      alerts: [
        { msg: 'Equipo comercial con mejora en clima laboral', type: 'ok' },
        { msg: 'Caida de engagement en operaciones nocturnas', type: 'warn' },
        { msg: 'Vacante critica sin cobertura en supervision', type: 'err' },
      ],
    },
    {
      area: 'VENTAS',
      title: 'Ritmo comercial',
      accent: '#8b7bff',
      layout: 'sales',
      chartLabel: 'CIERRES — 10 SEMANAS',
      points: [18, 22, 24, 31, 29, 38, 42, 47],
      kpis: [
        { label: 'VENTAS HOY', val: '$84,200', trend: '+8.3%', up: true },
        { label: 'PIPELINE ACTIVO', val: '$1.1M', trend: '+12%', up: true },
        { label: 'WIN RATE', val: '29%', trend: '+3.1%', up: true },
        { label: 'CICLO PROM.', val: '21d', trend: '-4d', up: true },
      ],
      alerts: [
        { msg: 'Pipeline enterprise con mayor probabilidad de cierre', type: 'ok' },
        { msg: 'Caida de conversion en demos de zona centro', type: 'warn' },
        { msg: 'Oportunidad grande detenida por pricing', type: 'err' },
      ],
    },
    {
      area: 'OPERACIONES',
      title: 'Radar operativo',
      accent: '#ff7b6b',
      layout: 'operations',
      chartLabel: 'EFICIENCIA — 12 TURNOS',
      points: [22, 30, 34, 47, 44, 51, 59, 67],
      stations: [
        { name: 'CORTE', value: '94%', status: 'ok' },
        { name: 'ENSAMBLE', value: '88%', status: 'ok' },
        { name: 'EMPAQUE', value: '71%', status: 'err' },
      ],
      metrics: [
        { label: 'OEE', val: '86%', trend: '+4.2%', up: true },
        { label: 'MERMA', val: '1.8%', trend: '-0.5%', up: true },
        { label: 'OTIF', val: '91%', trend: '-2.1%', up: false },
        { label: 'PAROS', val: '3', trend: '+1', up: false },
      ],
      alerts: [
        { msg: 'Linea 2 recuperando eficiencia por encima del target', type: 'ok' },
        { msg: 'Retraso en surtido para zona norte', type: 'warn' },
        { msg: 'Paro recurrente detectado en empaque final', type: 'err' },
      ],
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % dashboards.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [dashboards.length])

  const activeTool = dashboards[activeIndex]

  return (
    <div className="dashboard">
      <div className="dashboard__bar">
        <span className="dashboard__dot dashboard__dot--red" />
        <span className="dashboard__dot dashboard__dot--yellow" />
        <span className="dashboard__dot dashboard__dot--green" />
        <span className="dashboard__title">CORTEX120 — {activeTool.area}</span>
        <div className="dashboard__switcher">
          {dashboards.map((tool, index) => (
            <button
              key={tool.area}
              type="button"
              className={`dashboard__switch ${index === activeIndex ? 'dashboard__switch--active' : ''}`}
              style={{ '--tool-accent': tool.accent }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver herramienta de ${tool.area.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
      <div className="dashboard__body dashboard__body--slide" key={activeTool.area} style={{ '--tool-accent': activeTool.accent }}>
        <div className="dashboard__hero">
          <div>
            <h3 className="dashboard__headline">{activeTool.title}</h3>
          </div>
          <span className="dashboard__badge">{activeTool.area}</span>
        </div>
        {activeTool.layout === 'marketing' && <MarketingTool tool={activeTool} />}
        {activeTool.layout === 'finance' && <FinanceTool tool={activeTool} />}
        {activeTool.layout === 'rh' && <RhTool tool={activeTool} />}
        {activeTool.layout === 'sales' && <SalesTool tool={activeTool} />}
        {activeTool.layout === 'operations' && <OperationsTool tool={activeTool} />}
      </div>
    </div>
  )
}

function MarketingTool({ tool }) {
  return (
    <div className="tool-layout tool-layout--marketing">
      <div className="lead-panel">
        <div className="lead-panel__stats">
          {tool.leadStats.map((item) => (
            <div key={item.label} className="lead-stat">
              <span className="lead-stat__label">{item.label}</span>
              <span className="lead-stat__value">{item.val}</span>
              <span className="lead-stat__trend">{item.trend}</span>
            </div>
          ))}
        </div>
        <MiniChart label={tool.chartLabel} points={tool.points} accent={tool.accent} />
        <div className="funnel-strip">
          {tool.funnel.map((item) => (
            <div key={item.stage} className="funnel-chip">
              <span>{item.stage}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="channel-panel">
        <span className="alerts__label">FUENTES DE LEADS</span>
        {tool.channels.map((channel) => (
          <div key={channel.name} className="channel-row">
            <div>
              <strong>{channel.name}</strong>
              <span>{channel.value}</span>
            </div>
            <b>{channel.share}</b>
          </div>
        ))}
        <AlertList alerts={tool.alerts} />
      </div>
    </div>
  )
}

function FinanceTool({ tool }) {
  return (
    <div className="tool-layout tool-layout--finance">
      <div className="finance-summary">
        <span className="finance-summary__label">{tool.summary.label}</span>
        <strong className="finance-summary__value">{tool.summary.value}</strong>
        <span className="finance-summary__trend">{tool.summary.trend}</span>
        <MiniChart label={tool.chartLabel} points={tool.points} accent={tool.accent} />
        <div className="cash-buckets">
          {tool.cashBuckets.map((item) => (
            <div key={item.label} className="cash-bucket">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="finance-table">
        <span className="alerts__label">INDICADORES CLAVE</span>
        {tool.financeRows.map((row) => (
          <div key={row.label} className="finance-row">
            <span>{row.label}</span>
            <strong>{row.value}</strong>
            <em className={row.up ? 'finance-row__trend--up' : 'finance-row__trend--down'}>{row.trend}</em>
          </div>
        ))}
        <AlertList alerts={tool.alerts} compact />
      </div>
    </div>
  )
}

function RhTool({ tool }) {
  return (
    <div className="tool-layout tool-layout--rh">
      <div className="health-panel">
        <span className="alerts__label">SALUD POR EQUIPO</span>
        {tool.teamHealth.map((team) => (
          <div key={team.team} className="health-row">
            <span>{team.team}</span>
            <div className="health-row__bar">
              <div className={`health-row__fill health-row__fill--${team.status}`} style={{ width: `${team.score}%` }} />
            </div>
            <strong>{team.score}</strong>
          </div>
        ))}
        <div className="talent-signals">
          {tool.talentSignals.map((signal) => (
            <div key={signal.label} className="talent-signal">
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="hire-panel">
        <div className="hire-panel__cards">
          {tool.hires.map((item) => (
            <div key={item.label} className="hire-card">
              <span className="hire-card__label">{item.label}</span>
              <strong className="hire-card__value">{item.val}</strong>
              <span className={`hire-card__trend ${item.up ? 'hire-card__trend--up' : 'hire-card__trend--down'}`}>{item.trend}</span>
            </div>
          ))}
        </div>
        <AlertList alerts={tool.alerts} />
      </div>
    </div>
  )
}

function SalesTool({ tool }) {
  return (
    <>
      <div className="dashboard__kpis">
        {tool.kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <span className="kpi-card__label">{kpi.label}</span>
            <span className="kpi-card__val">{kpi.val}</span>
            <span className={`kpi-card__trend ${kpi.up ? 'kpi-card__trend--up' : 'kpi-card__trend--down'}`}>
              {kpi.up ? '↑' : '↓'} {kpi.trend}
            </span>
          </div>
        ))}
      </div>
      <div className="dashboard__charts">
        <MiniChart label={tool.chartLabel} points={tool.points} accent={tool.accent} />
        <div className="dashboard__alerts">
          <span className="alerts__label">ALERTAS ACTIVAS</span>
          {tool.alerts.map((alert) => (
            <div key={alert.msg} className={`alert-item alert-item--${alert.type}`}>
              <span className="alert-item__dot" />
              {alert.msg}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function OperationsTool({ tool }) {
  return (
    <div className="tool-layout tool-layout--operations">
      <div className="station-panel">
        <span className="alerts__label">ESTACIONES</span>
        {tool.stations.map((station) => (
          <div key={station.name} className="station-card">
            <span>{station.name}</span>
            <strong>{station.value}</strong>
            <i className={`station-card__status station-card__status--${station.status}`} />
          </div>
        ))}
        <MiniChart label={tool.chartLabel} points={tool.points} accent={tool.accent} />
      </div>
      <div className="ops-metrics">
        {tool.metrics.map((item) => (
          <div key={item.label} className="ops-metric">
            <span className="ops-metric__label">{item.label}</span>
            <strong className="ops-metric__value">{item.val}</strong>
            <span className={`ops-metric__trend ${item.up ? 'ops-metric__trend--up' : 'ops-metric__trend--down'}`}>{item.trend}</span>
          </div>
        ))}
        <AlertList alerts={tool.alerts} compact />
      </div>
    </div>
  )
}

function AlertList({ alerts, compact = false }) {
  return (
    <div className={`dashboard__alerts ${compact ? 'dashboard__alerts--compact' : ''}`}>
      <span className="alerts__label">ALERTAS ACTIVAS</span>
      {alerts.map((alert) => (
        <div key={alert.msg} className={`alert-item alert-item--${alert.type}`}>
          <span className="alert-item__dot" />
          {alert.msg}
        </div>
      ))}
    </div>
  )
}

function MiniChart({ label, points, accent }) {
  const w = 220, h = 80
  const max = Math.max(...points)
  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * w,
    y: h - (p / max) * h * 0.85
  }))
  const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x},${c.y}`).join(' ')
  const area = path + ` L${w},${h} L0,${h} Z`
  return (
    <div className="mini-chart">
      <span className="mini-chart__label">{label}</span>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chartGrad)" />
        <path d={path} stroke={accent} strokeWidth="1.5" fill="none" />
        {coords.map((c, i) => i === coords.length - 1 && (
          <circle key={i} cx={c.x} cy={c.y} r="3" fill={accent} />
        ))}
      </svg>
    </div>
  )
}

/* ─── PROBLEM SECTION ─────────────────────────────────────── */
function Problem() {
  return (
    <section className="problem">
      <div className="problem__inner">
        <div className="problem__left">
          <span className="section-tag">El Problema</span>
          <h2 className="problem__headline">
            Tu empresa tiene<br />datos, personas<br />y procesos.<em><br />Pero no están<br />trabajando juntos.</em>
          </h2>
        </div>
        <div className="problem__right">
          <p className="problem__body">
            La información está dispersa entre sistemas, hojas de cálculo y correos. Tu equipo pasa horas
            en tareas repetitivas que no generan valor. Las decisiones importantes se toman tarde,
            con datos incompletos, <strong>cuando ya es difícil cambiar el rumbo.</strong>
          </p>
          <p className="problem__body">
            No se trata solo de ver mejor — se trata de actuar mejor y más rápido.
            De tener una empresa que detecta lo que pasa, decide con inteligencia y ejecuta sola.
          </p>
          <div className="problem__pillars">
            {[
              { icon: '⚠', text: 'Decisiones tomadas con información incompleta o tardía' },
              { icon: '⏱', text: 'Horas del equipo perdidas en trabajo repetitivo y manual' },
              { icon: '📉', text: 'Oportunidades que se pierden por falta de velocidad de ejecución' },
            ].map((p, i) => (
              <div key={i} className="pillar">
                <span className="pillar__icon">{p.icon}</span>
                <span className="pillar__text">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CORTEX SECTION ──────────────────────────────────────── */
function Cortex() {
  return (
    <section className="cortex" id="como-funciona">
      <div className="cortex__inner">
        <div className="cortex__text">
          <span className="section-tag">La Plataforma</span>
          <h2 className="cortex__headline">
            Tu cerebro<br />
            <span className="green-text">CORTEX120</span>
          </h2>
          <p className="cortex__body">
            El motor central de inteligencia que conecta todos tus sistemas, analiza tu operación en tiempo real
            y alimenta a todos tus agentes y automatizaciones. No es un dashboard genérico —
            es una instancia única construida para tu empresa, que aprende y crece con ella.
          </p>
          <div className="cortex__features">
            {[
              'Conecta ERP, CRM, contabilidad, inventarios y más',
              'Dashboards ejecutivos personalizados para tu operación',
              'Alertas proactivas antes de que impacten tu negocio',
              'Base de inteligencia que alimenta cada agente que construimos',
            ].map((f, i) => (
              <div key={i} className="cortex__feature">
                <span className="cortex__check">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="cortex__diagram">
          <img className="cortex-diagram" src="/vfAsset-1.png" alt="Diagrama de conexiones CORTEX120" />
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Integramos tus datos',
      desc: 'Conectamos las principales fuentes de información de tu empresa — ERP, CRM, contabilidad, inventarios, ventas, bases de datos — para crear una capa unificada de datos. A partir de ahí, diseñamos dashboards estratégicos completamente personalizados para tu operación.',
      sources: ['ERP', 'CRM', 'Contabilidad', 'Inventarios', 'Ventas', 'RRHH']
    },
    {
      num: '02',
      title: 'CORTEX120 lo analiza',
      desc: 'Nuestro motor de inteligencia empresarial procesa la información de tu negocio en tiempo real para identificar patrones, detectar desviaciones y revelar riesgos u oportunidades que normalmente quedan ocultos entre grandes volúmenes de datos.',
      sources: ['Patrones', 'Desviaciones', 'Riesgos', 'Oportunidades']
    },
    {
      num: '03',
      title: 'Obtienes claridad estratégica',
      desc: 'Recibe KPIs, gráficas y alertas inteligentes que te permiten visualizar lo que realmente está ocurriendo en tu empresa — antes de que los problemas impacten tu operación. Tú y tu equipo se comunican directamente con esta IA personalizada.',
      sources: ['KPIs en vivo', 'Alertas', 'Reportes', 'Chat IA']
    },
    {
      num: '04',
      title: 'Agentes y automatizaciones actúan',
      desc: 'Construimos los agentes y flujos de trabajo conectados a tu CORTEX120 para que tu empresa ejecute sola — califica leads, atiende clientes, genera reportes, procesa facturas y más. Tu equipo deja de operar en manual y se enfoca en lo que realmente importa.',
      sources: ['Agentes IA', 'Automatizaciones', 'WhatsApp', 'Email', 'CRM']
    },
  ]

  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <span className="section-tag">Cómo funciona</span>
          <h2 className="how__headline">
            De datos dispersos a<br />
            <span className="green-text">empresa en modo automático</span>
          </h2>
        </div>
        <div className="how__steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step__num">{s.num}</div>
              <div className="step__content">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
                <div className="step__tags">
                  {s.sources.map((src, j) => (
                    <span key={j} className="step__tag">{src}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── AGENTS SECTION ──────────────────────────────────────── */
function Agents() {
  const agents = [
    {
      icon: '🎯',
      name: 'Agente SDR',
      tag: 'Ventas',
      tagline: 'El vendedor que nunca duerme',
      features: ['Califica leads y detecta necesidades en conversación natural', 'Genera propuestas personalizadas en segundos', 'Agenda reuniones y sincroniza tu CRM automáticamente'],
      impact: '10x más leads procesados sin aumentar headcount. Tu equipo solo habla con prospectos calificados — 0 tiempo perdido en leads fríos.',
      accent: '#8b7bff',
    },
    {
      icon: '💬',
      name: 'Agente de Soporte',
      tag: 'Servicio al Cliente',
      tagline: 'Atención sin fricción, sin horarios',
      features: ['Resuelve el 60–80% de casos sin intervención humana', 'Escala los casos complejos con todo el contexto listo', 'Opera en WhatsApp, web, email e Instagram'],
      impact: '60–80% de tickets resueltos sin humano. Respuesta en segundos, no horas. Soporte activo los 365 días del año.',
      accent: '#5fd1ff',
    },
    {
      icon: '👥',
      name: 'Agente de RRHH',
      tag: 'Reclutamiento',
      tagline: 'Del CV a la oferta en minutos',
      features: ['Evalúa candidatos con scoring estructurado por competencias', 'Genera descripciones de puesto y preguntas de entrevista', 'Gestiona el pipeline completo con seguimiento automatizado'],
      impact: 'Hasta 60% menos tiempo operativo en reclutamiento. Posiciones que tomaban semanas, cubiertas en días.',
      accent: '#f3c44e',
    },
    {
      icon: '📊',
      name: 'Agente Financiero',
      tag: 'Finanzas',
      tagline: 'De los datos al insight en 30 segundos',
      features: ['Genera P&L, flujo de caja y balance ejecutivo al instante', 'Detecta anomalías y envía alertas proactivas', 'Se conecta con tu ERP, Excel o Google Sheets'],
      impact: 'Reportes que tomaban 3–5 días se generan en 30 segundos. Cero horas de cierre manual al mes.',
      accent: '#71b248',
    },
    {
      icon: '📣',
      name: 'Agente de Marketing',
      tag: 'Marketing',
      tagline: 'Una agencia de marketing en un agente',
      features: ['Diseña campañas completas con estrategia y copies listos', 'Genera contenido para todas las redes sociales', 'Crea secuencias de email y anuncios pagados'],
      impact: 'El trabajo de una semana de agencia, listo en minutos. Sin costo adicional por campaña, con la voz de tu marca.',
      accent: '#ff7b6b',
    },
    {
      icon: '⚖️',
      name: 'Agente Legal',
      tag: 'Legal',
      tagline: 'Tu abogado disponible las 24 horas',
      features: ['Analiza contratos: identifica riesgos, plazos y cláusulas clave', 'Resume documentos legales extensos en segundos', 'Genera minutas de reunión desde tus notas'],
      impact: 'Hasta 70% menos tiempo en revisión documental. Contratos de 100 páginas analizados en menos de 2 minutos.',
      accent: '#5fd1ff',
    },
  ]

  return (
    <section className="agents" id="agentes">
      <div className="agents__inner">
        <div className="agents__header">
          <span className="section-tag">Agentes de IA</span>
          <h2 className="agents__headline">
            Más allá de los dashboards.<br />
            <span className="green-text">Agentes que actúan por ti.</span>
          </h2>
          <p className="agents__sub">
            Construimos agentes de IA que ejecutan, deciden y operan — entrenados con la información de <em>tu</em> empresa,
            integrados con tus sistemas, diseñados desde cero para tu operación específica.
            No son plantillas: cada uno es único. Y todos se conectan entre sí.
          </p>
        </div>

        <div className="agents__grid">
          {agents.map((agent, i) => (
            <div key={i} className="agent-card" style={{ '--agent-accent': agent.accent }}>
              <div className="agent-card__top">
                <span className="agent-card__icon">{agent.icon}</span>
                <div>
                  <h3 className="agent-card__name">{agent.name}</h3>
                  <span className="agent-card__tag">{agent.tag}</span>
                </div>
              </div>
              <p className="agent-card__tagline">"{agent.tagline}"</p>
              <ul className="agent-card__features">
                {agent.features.map((f, j) => (
                  <li key={j}>
                    <span className="agent-card__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="agent-card__impact">
                <span className="agent-card__impact-label">IMPACTO REAL</span>
                <p className="agent-card__impact-text">{agent.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="agents__brain">
          <div className="agents__brain-icon">🧠</div>
          <div className="agents__brain-text">
            <h4 className="agents__brain-headline">Todo conectado a tu cerebro único: CORTEX120</h4>
            <p className="agents__brain-body">
              CORTEX120 es nuestro motor central de inteligencia. Para cada empresa que trabaja con nosotros,
              construimos una instancia completamente única — entrenada de forma continua con los datos de tu operación,
              tus clientes y tus procesos. Cada agente que desarrollamos se conecta a ese cerebro.
              El resultado es una inteligencia que solo tú tienes, que aprende de tu empresa cada día
              y que ningún competidor puede replicar.
            </p>
          </div>
        </div>

        <div className="agents__custom">
          <div className="agents__custom-content">
            <div>
              <span className="agents__custom-badge">AGENTES PERSONALIZADOS</span>
              <h3 className="agents__custom-headline">¿No ves el agente que necesitas?</h3>
              <p className="agents__custom-body">
                Los ejemplos de arriba son solo ideas de lo que es posible. Diseñamos agentes para cualquier proceso,
                área o industria — si puedes describir cómo funciona, nosotros lo construimos.{' '}
                <strong>No hay proceso demasiado complejo. Todo se puede.</strong>
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Diseñar mi agente →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── AUTOMATIONS SECTION ─────────────────────────────────── */
function Automations() {
  const categories = [
    {
      title: 'Ventas y CRM',
      icon: '💼',
      color: '#5FD1FF',
      items: [
        { name: 'Seguimiento automático de prospectos', impact: '+conversión' },
        { name: 'Generador de propuestas comerciales', impact: 'segundos · cero errores' },
        { name: 'Secuencias de email outbound con IA', impact: '+respuestas' },
        { name: 'Reporte de pipeline semanal', impact: 'visibilidad total' },
      ],
    },
    {
      title: 'Servicio al Cliente',
      icon: '🎧',
      color: '#71B248',
      items: [
        { name: 'Clasificación y enrutamiento de tickets', impact: 'resolución más rápida' },
        { name: 'Notificaciones proactivas de pedido', impact: '+NPS' },
        { name: 'Encuestas post-servicio automáticas', impact: 'detecta riesgo antes' },
        { name: 'Base de conocimiento que aprende sola', impact: 'respuesta siempre correcta' },
      ],
    },
    {
      title: 'Operaciones y Back-Office',
      icon: '⚙️',
      color: '#F59E0B',
      items: [
        { name: 'Procesamiento de facturas y órdenes', impact: 'cero captura manual' },
        { name: 'Agendamiento de reuniones inteligente', impact: 'coordinación automática' },
        { name: 'Alertas de inventario predictivas', impact: 'sin quiebres de stock' },
        { name: 'Dashboard ejecutivo automatizado', impact: 'reporte listo cada semana' },
      ],
    },
    {
      title: 'RRHH y Talento',
      icon: '👤',
      color: '#A78BFA',
      items: [
        { name: 'Onboarding automatizado de nuevos empleados', impact: 'sin carga para RRHH' },
        { name: 'Gestión de vacaciones y ausencias', impact: 'sin hojas de cálculo' },
        { name: 'Seguimiento de desempeño continuo', impact: 'datos en tiempo real' },
        { name: 'Publicación y filtro de vacantes con IA', impact: 'candidatos calificados rápido' },
      ],
    },
  ]

  return (
    <section className="automations" id="automatizaciones">
      <div className="automations__inner">
        <div className="automations__header">
          <span className="section-tag">Automatizaciones de Alto Impacto</span>
          <h2 className="automations__headline">
            Procesos que se ejecutan solos.<br />
            <span className="green-text">Tu equipo enfocado en lo que importa.</span>
          </h2>
          <p className="automations__sub">
            Sin código. Sin mantenimiento. Integrados con tus herramientas desde el primer día.
          </p>
        </div>

        <div className="automations__grid">
          {categories.map((cat, i) => (
            <div key={i} className="auto-block" style={{ '--cat-color': cat.color }}>
              <div className="auto-block__header">
                <span className="auto-block__icon">{cat.icon}</span>
                <span className="auto-block__title">{cat.title}</span>
              </div>
              <ul className="auto-block__list">
                {cat.items.map((item, j) => (
                  <li key={j} className="auto-row">
                    <span className="auto-row__dot" />
                    <span className="auto-row__name">{item.name}</span>
                    <span className="auto-row__impact">{item.impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── INDUSTRY PACKAGES ───────────────────────────────────── */
function IndustryPackages() {
  const packages = [
    {
      icon: '🛍️',
      name: 'Retail y E-commerce',
      items: ['Agente de Soporte 24/7', 'Notificaciones de pedido automáticas', 'Recuperación de carrito abandonado', 'Encuestas CSAT post-compra'],
      accent: '#ff7b6b',
    },
    {
      icon: '🏢',
      name: 'Servicios Profesionales',
      sub: 'Consultoría, Legales, Contabilidad',
      items: ['Agente SDR', 'Revisión y análisis de contratos IA', 'Generador de propuestas comerciales', 'Reporte financiero mensual automático'],
      accent: '#8b7bff',
    },
    {
      icon: '🏭',
      name: 'Manufactura y Distribución',
      items: ['Procesamiento automático de órdenes', 'Alertas de inventario predictivas', 'Soporte a distribuidores 24/7', 'Dashboard operativo semanal'],
      accent: '#f3c44e',
    },
    {
      icon: '💻',
      name: 'SaaS y Tecnología',
      items: ['Agente SDR', 'Soporte técnico IA', 'Onboarding automatizado de nuevos usuarios', 'Análisis de churn y alertas de retención'],
      accent: '#5fd1ff',
    },
    {
      icon: '🏥',
      name: 'Salud y Clínicas',
      items: ['Agendamiento de citas automatizado', 'Recordatorios a pacientes', 'Soporte post-consulta', 'Gestión de documentación clínica básica'],
      accent: '#71b248',
    },
    {
      icon: '🎓',
      name: 'Educación y Capacitación',
      items: ['Agente de admisiones', 'Soporte a estudiantes 24/7', 'Onboarding de nuevos alumnos', 'Seguimiento de progreso y alertas de deserción'],
      accent: '#ff7b6b',
    },
  ]

  return (
    <section className="industries" id="industrias">
      <div className="industries__inner">
        <div className="industries__header">
          <span className="section-tag">Paquetes por Industria</span>
          <h2 className="industries__headline">
            Combinaciones que ya funcionan<br />
            <span className="green-text">en empresas como la tuya</span>
          </h2>
          <p className="industries__sub">
            Agentes y automatizaciones preconfigurados para tu sector. Punto de partida probado, personalizable al 100%.
          </p>
        </div>
        <div className="industries__grid">
          {packages.map((pkg, i) => (
            <div key={i} className="industry-card" style={{ '--pkg-accent': pkg.accent }}>
              <div className="industry-card__header">
                <span className="industry-card__icon">{pkg.icon}</span>
                <div>
                  <h3 className="industry-card__name">{pkg.name}</h3>
                  {pkg.sub && <span className="industry-card__sub">{pkg.sub}</span>}
                </div>
              </div>
              <ul className="industry-card__items">
                {pkg.items.map((item, j) => (
                  <li key={j}>
                    <span className="industry-card__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PLATFORM CALLOUT ────────────────────────────────────── */
function Platform() {
  return (
    <section className="platform">
      <div className="platform__inner">
        <div className="platform__card">
          <div className="platform__badge">Ecosistema completo</div>
          <h2 className="platform__headline">
            Más que inteligencia.<br />
            <span className="green-text">Una plataforma completa.</span>
          </h2>
          <p className="platform__body">
            Además de Intelligence, puedes homologar toda tu información con nuestra plataforma de soluciones empresariales
            <strong> profit120.com</strong>, donde encontrarás más de 250 herramientas de dirección empresarial
            automatizadas, entrenamientos, cursos y networking a nivel LATAM.
          </p>
          <div className="platform__items">
            {[
              { icon: '🧠', title: '250+ Herramientas', sub: 'De dirección empresarial automatizadas' },
              { icon: '🎓', title: 'Entrenamientos y Cursos', sub: 'Formación práctica y aplicable' },
              { icon: '🌐', title: 'Networking LATAM', sub: 'Conecta con empresarios de toda la región' },
            ].map((item, i) => (
              <div key={i} className="platform__item">
                <span className="platform__item-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://profit120.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Explorar profit120.com →
          </a>
        </div>

        <div className="platform__quote">
          <blockquote>
            "Las empresas que ganan no son las que tienen más datos — son las que tienen mejores decisiones, más velocidad de ejecución y menos trabajo manual."
          </blockquote>
          <div className="platform__quote-sig">
            <span className="platform__quote-line" />
            <span>Profit120 Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA SECTION ─────────────────────────────────────────── */
function CTA() {
  return (
    <section className="cta" id="contacto">
      <div className="cta__bg" aria-hidden="true" />
      <div className="cta__inner">
        <span className="section-tag section-tag--light">Inteligencia · Agentes · Automatización</span>
        <h2 className="cta__headline">
          Tu empresa inteligente,<br />
          <span className="green-text">automatizada y en acción.</span>
        </h2>
        <p className="cta__sub">
          Construimos el ecosistema completo para que tu empresa opere a otro nivel.
        </p>
        <div className="cta__actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">Solicitar Demo</a>
          <a href="https://profit120.com/intelligence" target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">
            Conocer más →
          </a>
        </div>
        <p className="cta__contact">
          ¿Preguntas? Escríbenos a <a href="mailto:info@profit120.com">info@profit120.com</a>
        </p>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo size={120} />
          <span className="footer__sub">INTELLIGENCE</span>
          <p className="footer__tagline">La primera plataforma de IA especializada en PYMEs</p>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} Profit120. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Cortex />
      <HowItWorks />
      <Agents />
      <Automations />
      <IndustryPackages />
      <Platform />
      <CTA />
      <Footer />
    </>
  )
}
