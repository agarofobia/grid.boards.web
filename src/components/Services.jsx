import React from 'react'

const Card = ({title, children}) => (
  <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-sm opacity-90">{children}</div>
  </div>
)

export default function Services() {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-center mb-6">What we deliver</h2>
      <p className="text-center max-w-3xl mx-auto mb-8">
        Boards give agencies and productions the clarity to sell ideas, to test scripts in a way that feels closer to the real spot, and to plan productions with precision in timing, budgets and logistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Storyboard">
          A storyboard lays out the key shots of a script. It defines characters, locations, style and brand aesthetics, giving agencies and clients a clear sequence and visual language to align on before production.
        </Card>

        <Card title="Boardomatic">
          A boardomatic takes the storyboard into sequence with voice-over, dialogue, music and sound effects. It allows agencies and clients to experience the script in real time, validating its duration, rhythm and the tone of the commercial.
        </Card>

        <Card title="Animatic">
          An animatic builds on the boardomatic by adding internal movement to each shot. Characters and scenes gain motion, timing becomes precise and the spot takes shape as the closest version to the final execution before production.
        </Card>
      </div>
    </section>
  )
}
