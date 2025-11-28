export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
            <img src="/team-working-on-websites-agency.jpg" alt="Our team" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
                We Know Morocco's Hospitality Industry
              </h2>
            </div>

            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                We're a team of web developers and digital marketers who understand the unique challenges facing Riad
                and Hotel owners in Morocco. We've built our expertise specifically around your needs.
              </p>
              <p>
                For over 2 years, we've been helping small to mid-size properties go online and boost their bookings
                through beautiful websites and smart marketing strategies.
              </p>
              <p>
                Our mission is simple: make it effortless for you to compete with larger chains while maintaining the
                authentic charm that makes your property special.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">23+</p>
                <p className="text-sm text-foreground/70">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-foreground/70">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-foreground/70">Months Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
