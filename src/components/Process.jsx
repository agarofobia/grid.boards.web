import React from 'react'

const Step = ({day, title, children}) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold">{day}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm opacity-90">{children}</p>
    </div>
  </div>
)

export default function Process() {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-center mb-6">Fast without losing craft</h2>
      <p className="text-center max-w-3xl mx-auto mb-8">From first visuals to a full animatic, the entire process can be completed in about 5 working days.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Step day="1" title="Brief & Script">Brief us with your script and references, or schedule a quick call.</Step>
        <Step day="2" title="First Visuals (24h)">Receive first visuals with characters and locations, so style and tone are approved before moving forward.</Step>
        <Step day="3" title="Storyboard (48h)">Get the full storyboard with every shot completed, ready for your review and feedback.</Step>
        <Step day="4" title="Boardomatic (72h)">See your storyboard in sequence with voice-over, dialogue, music and sound, bringing the script to life in real time.</Step>
        <Step day="5" title="Animatic">Watch the boardomatic evolve into an animatic, adding motion and refined timing. The closest version to the final spot, delivered within 2 more days.</Step>
      </div>

      <p className="text-sm opacity-80 mt-6">Note: Timelines are based on a 30-second script and may vary depending on length, complexity and feedback rounds.</p>
    </section>
  )
}
