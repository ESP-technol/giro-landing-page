/**
 * Giro by ESPtech — marca, ícones, estados e estilos compartilhados.
 */

/* ------------------------------------------------------------------ */
/* Marca                                                               */
/* ------------------------------------------------------------------ */

export const MARK_PATH = 'M786.8 342.2 A232 232 0 1 0 746.8 667.8 L885 505 M700 505 H885 V680'
export const WORDMARK_VIEWBOX = '292 801 676 266'
export const WORDMARK_PATH = 'M602 882.5 L596 884 L589 888 L584 894 L581.5 901.5 L581.5 1032 L584.5 1040 L591 1046.5 L599 1050 L607.5 1050.5 L615 1048.5 L619 1046 L625 1039.5 L628 1031.5 L628 901.5 L626 895 L620 887.5 L610.5 883 Z M765.5 884 L756.5 880.5 L733 881 L718.5 884.5 L700.5 893.5 L692.5 886 L686 883.5 L680 883 L669 886 L660.5 894.5 L658 902.5 L658 1031.5 L661 1040.5 L668.5 1048 L676.5 1051 L687.5 1050.5 L695 1047 L701 1040.5 L704 1032.5 L704 964.5 L707.5 949 L713 939.5 L720 932.5 L727 928 L738.5 924.5 L759.5 923.5 L766.5 920 L771 915.5 L775 906.5 L775 898 L771 889 Z M855 880.5 L839.5 883.5 L822.5 890 L804.5 902 L792.5 914.5 L783.5 928.5 L777 945 L774 960 L774.5 977.5 L778 993 L784 1007 L794.5 1022.5 L808 1035 L823.5 1044 L839.5 1049.5 L855.5 1052 L876 1051.5 L896 1046.5 L911 1039.5 L922.5 1031.5 L935.5 1018.5 L943.5 1007 L952.5 985.5 L955 970 L954.5 953.5 L952.5 943 L944.5 923.5 L934.5 909.5 L920 896.5 L906 888.5 L888 882.5 L875.5 880.5 Z M861 923.5 L874.5 924.5 L880.5 926.5 L891.5 933 L901.5 944.5 L905.5 953.5 L907.5 965 L904 982.5 L896.5 994.5 L885.5 1003.5 L869 1009 L853 1008 L842.5 1003.5 L837.5 1000 L830.5 993 L826.5 987 L821.5 971.5 L821.5 962 L823 954.5 L826.5 946 L831 939.5 L843.5 929 L853 925 Z M600.5 818.5 L590 822.5 L582.5 829.5 L578 839.5 L577.5 849 L580.5 858.5 L588 867 L597 871.5 L609.5 872 L620 868 L627.5 861 L631.5 853 L632.5 842 L628.5 831 L621.5 823.5 L611.5 819 Z M450 814 L429.5 813 L404 816 L382 822.5 L357.5 835.5 L345 845 L325.5 866.5 L313.5 887.5 L305.5 911.5 L303.5 926 L303.5 944 L305.5 960 L311 979.5 L321.5 1000.5 L337 1020 L350.5 1031.5 L375.5 1045.5 L398 1052.5 L422 1055.5 L449.5 1054 L473 1048.5 L497.5 1037.5 L519 1022 L531 1010 L538.5 1000.5 L551 978 L557 958 L558 941 L556 933.5 L550.5 924 L544 918 L537.5 914.5 L529.5 912.5 L440.5 912.5 L430.5 917 L425 923.5 L422.5 930.5 L422.5 938 L426.5 947.5 L433.5 953.5 L440 956 L508 956 L509 957 L507 963.5 L499.5 976.5 L486.5 990.5 L473 1000 L456 1007.5 L441 1011 L422.5 1011.5 L404 1008 L386.5 1000 L377.5 993.5 L363.5 978 L354.5 960 L351.5 947.5 L350.5 932 L352 920 L356.5 905.5 L362 894.5 L369.5 884.5 L384.5 871 L405.5 860.5 L427.5 856.5 L444 857.5 L460 861.5 L472 867 L485.5 876.5 L497.5 880.5 L509 879 L514.5 876 L520.5 869.5 L523 864 L523.5 854 L520 845 L515 839.5 L500.5 830 L483.5 822 L463 816 Z'

export function GiroMark({ className = '' }) {
  return (
    <svg
      viewBox="316 196 625 577"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="95"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={MARK_PATH} />
    </svg>
  )
}

export function GiroWordmark({ className = '' }) {
  return (
    <svg viewBox={WORDMARK_VIEWBOX} className={className} fill="currentColor" role="img" aria-label="Giro">
      <path d={WORDMARK_PATH} fillRule="evenodd" />
    </svg>
  )
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <GiroMark className="h-8 w-8 text-giro" />
      <GiroWordmark className="h-[22px] w-auto text-ink" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Ícones (traço 1.75, estilo Lucide)                                  */
/* ------------------------------------------------------------------ */

export const ICONS = {
  dashboard: (
    <>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </>
  ),
  queue: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  map: (
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  spark: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />,
  arrow: (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  minus: <path d="M5 12h14" />,
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  trend: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 6-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  building: (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </>
  ),
  heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
}

export function Icon({ name, className = 'size-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Estados, formatação e estilos base                                  */
/* ------------------------------------------------------------------ */

export const STATUS = {
  livre: { label: 'Livre', tile: 'bg-giro-soft', text: 'text-giro-strong', dot: 'bg-giro', chip: 'bg-giro-soft text-giro-strong' },
  reservado: { label: 'Reservado', tile: 'bg-reserved-soft', text: 'text-reserved', dot: 'bg-reserved-dot', chip: 'bg-reserved-soft text-reserved' },
  ocupado: { label: 'Ocupado', tile: 'bg-action-soft', text: 'text-action-strong', dot: 'bg-action', chip: 'bg-action-soft text-action-strong' },
  alta: { label: 'Alta hoje', tile: 'bg-discharge-soft', text: 'text-discharge', dot: 'bg-discharge-dot', chip: 'bg-discharge-soft text-discharge' },
  limpeza: { label: 'Em limpeza', tile: 'bg-cleaning-soft', text: 'text-cleaning', dot: 'bg-cleaning-dot', chip: 'bg-cleaning-soft text-cleaning' },
}
export const STATUS_ORDER = ['livre', 'reservado', 'ocupado', 'alta', 'limpeza']

export const SEC = 1000
export const MIN = 60 * SEC
export const FRESH_MS = 3 * MIN // "Livre agora": liberado nos últimos 3 minutos
export const NEAR_STATION = ['101', '102', '103', '201', '202']
export const ROOM_TAGS = { '106': 'Isolamento', '108': 'Individual', '205': 'Individual' }

export const pad = (n) => String(n).padStart(2, '0')
export function fmtTimer(ms) {
  const s = Math.max(0, Math.floor(ms / SEC))
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`
}
export function fmtCountdown(ms) {
  const s = Math.max(0, Math.ceil(ms / SEC))
  return `${Math.floor(s / 60)}:${pad(s % 60)}`
}
export function fmtAgo(ms) {
  const m = Math.floor(ms / MIN)
  if (m < 1) return 'agora'
  if (m < 60) return `há ${m} min`
  return `há ${Math.floor(m / 60)} h ${m % 60} min`
}
export function fmtIn(ms) {
  const m = Math.max(1, Math.round(ms / MIN))
  return m < 60 ? `em ${m} min` : `em ${Math.floor(m / 60)} h ${m % 60} min`
}
export const fmtHour = (ts) => new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
export const fmtClock = (ts) => new Date(ts).toLocaleTimeString('pt-BR')

export const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-action px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-action-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action disabled:cursor-not-allowed disabled:opacity-40'
export const BTN_WHATSAPP =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-giro-strong px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-giro-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-giro-strong'
export const BTN_PRIMARY_SM =
  'inline-flex items-center justify-center gap-1.5 rounded-lg bg-action px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-action-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action'
export const BTN_SECONDARY =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action'
export const LINK =
  'inline-flex items-center gap-1 rounded text-sm font-semibold text-action-strong hover:text-action focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action'
export const CARD = 'rounded-2xl border border-line bg-white'

