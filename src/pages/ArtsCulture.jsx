import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

export default function ArtsCulture() {
  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">ARTS & CULTURE</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">The Student Gallery</h1>
          <p className="text-gray-300 font-body text-xl">Where children's brilliance gets the spotlight it deserves.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>PUBLISHED STORIES</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Little Voices Book Series</h2>
            <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">Stories written by our Creative Quest scholars — published, distributed, and celebrated.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-[3/4] bg-gradient-to-br from-aqua/20 to-aqua/5 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">📖</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-14">
            <SectionLabel>DEBATE & SPEECH</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Loud & Fearless Showcases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-video bg-dark rounded-2xl flex items-center justify-center">
                <span className="text-white font-body text-sm">Video #{i} coming soon</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" onClick={() => window.location.href='/haven-academy'}>
              Enrol Your Child & Watch Their Work Come Alive
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
