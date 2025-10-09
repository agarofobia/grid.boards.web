import React from 'react'

const Item = ({title}) => (
  <div className="relative bg-gray-900/30 rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
    <div className="p-4 text-center">
      <div className="text-sm opacity-80 mb-2">[Type]</div>
      <div className="font-semibold">{title}</div>
    </div>
  </div>
)

export default function Work() {
  const samples = [
    'Pitch — Brand X',
    'Test — Product Y',
    'Campaign — Agency Z',
    'Previs — Spot A',
    'Experiment — Short B',
    'Pilot — Series C'
  ]
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-center mb-4">Our work shows the cinematic craft behind every frame</h2>
      <p className="text-center mb-6">We create storyboards, boardomatics and animatics that help agencies and productions win pitches and plan with precision.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {samples.map((s, i) => <Item key={i} title={s} />)}
      </div>
    </section>
  )
}
