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
          Tu empresa genera datos{' '}
          <span className="hero__headline--green">todos los días.</span>
        </h1>

        <p className="hero__sub">
          ¿Te ayudan a decidir, o solo a saber<br />lo que ya ocurrió?
        </p>

        <div className="hero__actions">
          <a href="#como-funciona" className="btn btn--primary">Ver cómo funciona</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">Solicitar Demo →</a>
        </div>

        <div className="hero__stats">
          {[
            { num: 'CORTEX120', label: 'Motor de análisis IA' },
            { num: 'Tiempo Real', label: 'Visión de tu empresa' },
            { num: '250+', label: 'Herramientas de dirección' },
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
            No es falta de datos.<br />
            <em>Es falta de inteligencia operativa.</em>
          </h2>
        </div>
        <div className="problem__right">
          <p className="problem__body">
            Todas las empresas generan datos: ventas, inventarios, márgenes, clientes, operaciones.
            Sin embargo, la mayoría de esos datos no ayudan a decidir, <strong>solo a reportar lo que ya pasó.</strong>
          </p>
          <p className="problem__body">
            La información crítica termina dispersa entre sistemas y hojas de Excel. Muchas decisiones se toman
            con información incompleta, los problemas se detectan demasiado tarde y las oportunidades pasan desapercibidas.
          </p>
          <div className="problem__pillars">
            {[
              { icon: '⚠', text: 'Decisiones con información incompleta' },
              { icon: '⏱', text: 'Problemas detectados demasiado tarde' },
              { icon: '📉', text: 'Oportunidades que pasan desapercibidas' },
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
          <span className="section-tag">La Solución</span>
          <h2 className="cortex__headline">
            Conoce<br />
            <span className="green-text">CORTEX120</span>
          </h2>
          <p className="cortex__body">
            Nuestro motor de inteligencia empresarial impulsado por los cerebros de IA más avanzados del mundo.
            Integra todos los sistemas de tu empresa y construye dashboards personalizados que detectan desviaciones,
            identifican oportunidades y generan alertas clave — ofreciéndote una visión clara en tiempo real.
          </p>
          <div className="cortex__features">
            {[
              'Integración con ERP, CRM, contabilidad, inventarios',
              'Dashboards construidos a la medida de tu operación',
              'Alertas inteligentes antes de que impacten tu negocio',
              'Comunicación directa con tu IA personalizada',
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
      desc: 'Recibe KPIs, gráficas y alertas inteligentes que te permiten visualizar lo que realmente está ocurriendo en tu empresa — antes de que los problemas impacten tu operación o rentabilidad. Tú y todo tu equipo se pueden comunicar con esta IA personalizada.',
      sources: ['KPIs en vivo', 'Alertas', 'Reportes', 'Chat IA']
    },
  ]

  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <span className="section-tag">Cómo funciona</span>
          <h2 className="how__headline">
            De datos dispersos a<br />
            <span className="green-text">decisiones claras</span>
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
            "En un entorno donde la velocidad de decisión define a los líderes, las empresas que convierten datos en inteligencia son las que toman ventaja."
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
        <span className="section-tag section-tag--light">La claridad para dirigir mejor</span>
        <h2 className="cta__headline">
          Cuando la información es clara,<br />
          <span className="green-text">las decisiones son mejores.</span>
        </h2>
        <p className="cta__sub">
          El futuro deja de ser una sorpresa.
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
      <Platform />
      <CTA />
      <Footer />
    </>
  )
}
