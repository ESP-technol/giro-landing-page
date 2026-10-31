/**
 * Giro by ESPtech — landing institucional (fora do painel de produto).
 * Dados de exemplo só alimentam a prévia do herói.
 */
import { useEffect, useState } from 'react'
import Landing from './Landing.jsx'
import { MIN, SEC } from './ui.jsx'

function seedBeds(now) {
  const b = (room, bed, status, extra = {}) => ({
    id: `${room}-${bed}`,
    room,
    bed,
    floor: Number(room[0]),
    status,
    ...extra,
  })
  return [
    b('101', 'A', 'livre', { freedAt: now - 14 * MIN }),
    b('101', 'B', 'ocupado', { patient: '#1987', cid: 'J18.9' }),
    b('102', 'A', 'ocupado', { patient: '#1990', cid: 'I50.9' }),
    b('102', 'B', 'alta', { patient: '#1979', cid: 'K35.8', dischargeAt: now + 95 * MIN }),
    b('103', 'A', 'limpeza', { cleaningEnds: now + 25 * SEC }),
    b('103', 'B', 'ocupado', { patient: '#1995', cid: 'N39.0' }),
    b('104', 'A', 'reservado', { patient: '#2004', cid: 'R10.4', arriveAt: now + 18 * MIN }),
    b('104', 'B', 'ocupado', { patient: '#1983', cid: 'E11.9' }),
    b('105', 'A', 'livre', { freedAt: now - 50 * SEC }),
    b('105', 'B', 'livre', { freedAt: now - 42 * MIN }),
    b('106', 'A', 'ocupado', { patient: '#1992', cid: 'A41.9' }),
    b('107', 'A', 'alta', { patient: '#1981', cid: 'S72.0', dischargeAt: now + 40 * MIN }),
    b('107', 'B', 'limpeza', { cleaningEnds: now + 80 * SEC }),
    b('108', 'A', 'livre', { freedAt: now - 2 * MIN }),
  ]
}

function seedQueue(now) {
  return [
    {
      id: '#2001',
      emergency: true,
      cid: 'J12.9',
      cidDesc: 'Pneumonia viral não especificada',
      priorities: ['Isolamento'],
      los: '4 a 5 dias',
      origin: 'Pronto-socorro',
      waitingSince: now - (31 * MIN + 12 * SEC),
    },
    {
      id: '#2002',
      emergency: false,
      cid: 'S06.0',
      cidDesc: 'Concussão cerebral',
      priorities: ['Risco de queda'],
      los: '2 a 3 dias',
      origin: 'Pronto-socorro',
      waitingSince: now - (28 * MIN + 40 * SEC),
    },
  ]
}

export default function App() {
  const [now, setNow] = useState(() => Date.now())
  const [beds] = useState(() => seedBeds(Date.now()))
  const [queue] = useState(() => seedQueue(Date.now()))

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <Landing
      beds={beds}
      queue={queue}
      now={now}
      onEnter={() => {
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
    />
  )
}
