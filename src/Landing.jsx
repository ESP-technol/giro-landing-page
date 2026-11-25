/**
 * Giro by ESPtech — tela inicial (primeira visita).
 * Recebe os mesmos dados do painel para mostrar o produto ao vivo no herói.
 */
import { useMemo } from 'react'
import {
  BTN_SECONDARY,
  BTN_WHATSAPP,
  FRESH_MS,
  GiroMark,
  GiroWordmark,
  Icon,
  Logo,
  STATUS,
  fmtTimer,
  fmtClock,
} from './ui.jsx'

const WRAP = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'

const WHATSAPP_URL =
  'https://wa.me/5554984248922?text=' +
  encodeURIComponent('Olá! Quero conhecer o Giro e entender como ele pode aumentar o giro de leitos do meu hospital.')

function WhatsAppButton({ children, className = '' }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${BTN_WHATSAPP} ${className}`}>
      <Icon name="chat" className="size-4 shrink-0" />
      {children}
    </a>
  )
}

const PROBLEM = [
  { value: '28%', label: 'das diárias na saúde privada estão em excesso' },
  { value: '80%', label: 'das saídas analisadas no SUS tiveram desperdício de diárias' },
  { value: '78 mil', label: 'leitos ociosos por mês só no setor privado' },
  { value: 'R$ 25 mil', label: 'de custo por leito parado, por mês, sem gerar receita', alert: true },
]

const PILLARS = [
  {
    step: '01',
    icon: 'link',
    title: 'Conecta',
    text: 'Liga a triagem médica à logística de hotelaria em tempo real, a partir do ERP que o hospital já usa.',
    detail: 'Fila, leitos e limpeza na mesma tela',
    tone: 'bg-giro-soft text-giro-strong',
  },
  {
    step: '02',
    icon: 'trend',
    title: 'Prevê',
    text: 'Estima o tempo de permanência logo na admissão e antecipa as altas do dia, antes de o leito ficar livre.',
    detail: 'Altas previstas por hora',
    tone: 'bg-action-soft text-action-strong',
  },
  {
    step: '03',
    icon: 'spark',
    title: 'Sugere',
    text: 'Indica os 3 melhores leitos para cada paciente, por perfil clínico, isolamento e rota de limpeza.',
    detail: 'Com prós, contras e aprovação humana',
    tone: 'bg-lime-soft text-ink',
  },
]

const PIPELINE = [
  { title: 'Sistema existente', text: 'ERP e prontuário do hospital, sem troca de sistema.' },
  { title: 'Exportação dos dados', text: 'Triagem, internações, altas e limpeza.' },
  { title: 'Normalização LGPD', text: 'Dados tratados e anonimizados.' },
  { title: 'IA local', text: 'Modelos rodam no ambiente do hospital.' },
  { title: 'Leitos sugeridos', text: 'Os 3 melhores, com justificativa.' },
  { title: 'Validação humana', text: 'O profissional aprova a alocação.', final: true },
]

const AUDIENCE = [
  { icon: 'queue', title: 'Equipes operacionais', text: 'Administrativo e limpeza ganham previsibilidade e rotas otimizadas, sem retrabalho nem improviso.' },
  { icon: 'shield', title: 'Gestão e governança', text: 'Menos custo fixo por leito e mais capacidade de internação sem novas construções.' },
  { icon: 'building', title: 'Diretoria do hospital', text: 'Indicadores de giro e ocupação em tempo real, e quartos adequados à necessidade de cada paciente.' },
  { icon: 'heart', title: 'Pacientes e acompanhantes', text: 'Alocação mais rápida, menos tempo no corredor e uma internação mais humana desde a entrada.' },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Landing({ beds, queue, now }) {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <LandingNav />
      <main>
        <Hero beds={beds} queue={queue} now={now} />
        <Problem />
        <HowItWorks />
        <Pipeline />
        <Audience />
        <FinalCta />
      </main>
      <LandingFooter />
      <FloatingWhatsApp />
    </div>
  )
}

function LandingNav() {
  const links = [
    ['como-funciona', 'Como funciona'],
    ['integracao', 'Integração'],
    ['para-quem', 'Para quem'],
  ]
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur">
      <div className={`${WRAP} flex h-16 items-center justify-between gap-4`}>
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Seções">
          {links.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToId(id)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-canvas hover:text-ink"
            >
              {label}
            </button>
          ))}
        </nav>
        <WhatsAppButton className="py-2">Fale conosco</WhatsAppButton>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Herói                                                               */
/* ------------------------------------------------------------------ */

function Hero({ beds, queue, now }) {
  return (
    <section className={`${WRAP} grid grid-cols-1 items-center gap-12 pt-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28`}>
      <div className="min-w-0">
        <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-muted">
          <span className="size-2 rounded-full bg-giro" />
          Gestão inteligente de leitos hospitalares
        </p>
        <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tighter text-balance text-ink sm:text-6xl xl:text-7xl">
          Cada leito,
          <br />
          <span className="-mx-[0.08em] box-decoration-clone bg-[linear-gradient(to_top,var(--color-lime)_0.12em,var(--color-lime)_0.52em,transparent_0.52em)] px-[0.08em]">
            no tempo certo.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted">
          Leito parado custa caro e paciente no corredor custa mais ainda. O Giro prevê as altas, organiza a limpeza e sugere o
          leito certo para cada paciente, para o seu hospital <strong className="font-semibold text-ink">internar mais sem construir nada</strong>.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <WhatsAppButton className="px-5 py-3 text-base">Quero o Giro no meu hospital</WhatsAppButton>
          <button type="button" onClick={() => scrollToId('como-funciona')} className={`${BTN_SECONDARY} px-5 py-3 text-base`}>
            Ver como funciona
          </button>
        </div>
        <p className="mt-3 text-sm text-ink-subtle">Fale direto com a equipe ESPtech pelo WhatsApp. Conversa rápida e sem compromisso.</p>
        <ul className="mt-8 flex flex-col gap-2.5 text-sm text-ink-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          {['Integra com o ERP que o hospital já usa', 'Dados tratados sob a LGPD', 'A decisão final é do profissional'].map((text) => (
            <li key={text} className="flex items-center gap-2">
              <Icon name="check" className="size-4 shrink-0 text-giro-strong" />
              {text}
            </li>
          ))}
        </ul>
      </div>
      <HeroVisual beds={beds} queue={queue} now={now} />
    </section>
  )
}

function HeroVisual({ beds, queue, now }) {
  const stats = useMemo(() => {
    const count = (status) => beds.filter((bed) => bed.status === status).length
    return { livre: count('livre'), alta: count('alta') }
  }, [beds])
  const preview = beds.filter((bed) => bed.floor === 1).slice(0, 8)
  const fresh = beds.find((bed) => bed.status === 'livre' && bed.freedAt && now - bed.freedAt < FRESH_MS)
  const urgent = queue[0]

  return (
    <div className="relative isolate flex min-h-[460px] flex-col sm:min-h-[560px] overflow-hidden rounded-[2rem] bg-action px-5 pt-6 sm:px-10 sm:pt-8">
      <GiroMark className="pointer-events-none absolute -top-28 -right-36 h-[34rem] w-[34rem] text-white/15" />

      <div className="relative z-10 mb-6 self-start rounded-full bg-white py-1.5 pr-3.5 pl-2 text-xs font-semibold text-ink shadow-lg">
        {fresh ? (
          <span className="flex items-center gap-2">
            <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold uppercase">Livre agora</span>
            Quarto {fresh.room}, leito {fresh.bed}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime ring-1 ring-ink/40" />
            Atualizado às {fmtClock(now)}
          </span>
        )}
      </div>

      <div className="relative z-10 mx-auto mt-auto w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl" aria-label="Prévia do painel Giro">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <GiroMark className="size-6 text-giro" />
            <GiroWordmark className="h-4 w-auto text-ink" />
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
            <span className="size-2 rounded-full bg-lime ring-1 ring-ink/40" />
            Tempo real
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ['Livres', stats.livre, 'text-giro-strong'],
            ['Na fila', queue.length, 'text-ink'],
            ['Alta hoje', stats.alta, 'text-discharge'],
          ].map(([label, value, tone]) => (
            <div key={label} className="rounded-xl bg-canvas px-3 py-2.5">
              <p className="text-[10px] font-semibold tracking-wider text-ink-muted uppercase">{label}</p>
              <p className={`mt-0.5 text-2xl leading-none font-extrabold tracking-tight tabular-nums ${tone}`}>{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {preview.map((bed) => {
            const meta = STATUS[bed.status]
            const isFresh = fresh && bed.id === fresh.id
            return (
              <div key={bed.id} className={`rounded-md px-1.5 py-2 ${meta.tile} ${isFresh ? 'ring-2 ring-giro' : ''}`}>
                <p className={`font-mono text-[10px] font-semibold ${meta.text}`}>{bed.id}</p>
                <p className="mt-0.5 truncate text-[9px] text-ink-muted">{meta.label}</p>
              </div>
            )
          })}
        </div>

        {urgent && (
          <div className={`mt-3 flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 ${urgent.emergency ? 'bg-alert-soft' : 'bg-canvas'}`}>
            <span className="flex min-w-0 items-center gap-2">
              <span className="font-mono text-xs font-bold">{urgent.id}</span>
              {urgent.emergency && <span className="rounded-full bg-alert px-1.5 py-px text-[10px] font-semibold text-white">Emergência</span>}
            </span>
            <span className={`font-mono text-xs font-semibold tabular-nums ${urgent.emergency ? 'text-alert' : 'text-ink'}`}>
              {fmtTimer(now - urgent.waitingSince)}
            </span>
          </div>
        )}
      </div>

      <div className="relative -mt-10 mx-auto h-24 w-[92%] shrink-0 rounded-t-2xl bg-lime" aria-hidden="true" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Seções                                                              */
/* ------------------------------------------------------------------ */

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.12em] text-action-strong uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{text}</p>}
    </div>
  )
}

function Problem() {
  return (
    <section className="bg-canvas py-20 lg:py-24">
      <div className={WRAP}>
        <SectionHead
          eyebrow="O problema"
          title="Pacientes no corredor e leitos parados, no mesmo hospital, na mesma noite."
          text="Triagem e hotelaria não se falam, a alta é descoberta quando acontece e a limpeza corre atrás. O leito existe, mas não gira."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM.map((item) => (
            <div key={item.value} className="rounded-2xl border border-line bg-white p-6">
              <p className={`text-4xl leading-none font-extrabold tracking-tight tabular-nums sm:text-5xl ${item.alert ? 'text-alert' : 'text-ink'}`}>
                {item.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-ink-subtle">Fontes: estudo DRG Brasil (2019) e estimativas ESPtech.</p>
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-ink p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-lg leading-snug font-bold text-white sm:text-xl">
            Quanto o seu hospital perde com leitos parados? <span className="text-lime">Descubra numa conversa rápida.</span>
          </p>
          <WhatsAppButton className="shrink-0 px-5 py-3 text-base">Falar com um especialista</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-20 lg:py-24">
      <div className={WRAP}>
        <SectionHead
          eyebrow="Como funciona"
          title="Conecta. Prevê. Sugere."
          text="Três etapas que transformam dados clínicos em decisões operacionais, do momento da triagem até o paciente no quarto."
        />
        <ol className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <div className="flex items-center justify-between">
                <span className={`flex size-11 items-center justify-center rounded-xl ${pillar.tone}`}>
                  <Icon name={pillar.icon} className="size-5" />
                </span>
                <span className="font-mono text-sm font-semibold text-ink-subtle">{pillar.step}</span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">{pillar.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{pillar.text}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-ink">{pillar.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pipeline() {
  return (
    <section id="integracao" className="scroll-mt-20 bg-canvas py-20 lg:py-24">
      <div className={WRAP}>
        <SectionHead
          eyebrow="Integração"
          title="Do ERP à recomendação em 6 etapas."
          text="Sem obra e sem trocar de sistema. O Giro lê o que o hospital já registra, trata os dados sob a LGPD e devolve sugestões para a equipe aprovar."
        />
        <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {PIPELINE.map((item, index) => (
            <li
              key={item.title}
              className={`relative flex flex-col rounded-2xl p-5 ${item.final ? 'bg-ink text-white' : 'border border-line bg-white'}`}
            >
              <span className={`font-mono text-xs font-semibold ${item.final ? 'text-lime' : 'text-ink-subtle'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={`mt-3 text-base leading-snug font-bold ${item.final ? 'text-white' : 'text-ink'}`}>{item.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${item.final ? 'text-white/75' : 'text-ink-muted'}`}>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section id="para-quem" className="scroll-mt-20 py-20 lg:py-24">
      <div className={WRAP}>
        <SectionHead
          eyebrow="Para quem"
          title="Cada área do hospital ganha um motivo para o leito girar."
        />
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {AUDIENCE.map((item) => (
            <div key={item.title} className="flex gap-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-action-soft text-action-strong">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-20 pb-20 lg:pb-24">
      <div className={WRAP}>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 lg:py-16">
          <GiroMark className="pointer-events-none absolute -right-24 -bottom-40 h-[28rem] w-[28rem] text-giro/25" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-5xl sm:leading-[1.02]">
              Você fornece o espaço. <span className="text-lime">A gestão a gente resolve.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Sem obra e sem trocar de sistema. Chame a ESPtech no WhatsApp e veja como o Giro pode colocar mais leitos para
              girar no seu hospital.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-lime px-5 py-3 text-base font-semibold text-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                <Icon name="chat" className="size-4" />
                Chamar no WhatsApp
              </a>
              <div className="text-sm text-white/75">
                <p className="font-semibold text-white select-all">esptechnologies@outlook.com</p>
                <p className="select-all">@esp.technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LandingFooter() {
  return (
    <footer className="border-t border-line">
      <div className={`${WRAP} flex flex-col gap-3 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between`}>
        <span className="flex items-center gap-3">
          <Logo />
          <span className="h-5 w-px bg-line" aria-hidden="true" />
          <span>by ESPtech</span>
        </span>
        <span className="text-xs">Giro · Gestão inteligente de leitos · {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}


function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a ESPtech no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-giro-strong text-white shadow-xl transition hover:scale-105 hover:bg-giro-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-giro-strong sm:right-6 sm:bottom-6"
    >
      <Icon name="chat" className="size-6" />
    </a>
  )
}
