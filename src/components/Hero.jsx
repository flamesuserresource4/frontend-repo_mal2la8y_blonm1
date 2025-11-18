export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28 bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-32 w-[50rem] h-[50rem] bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-lime-300/80 text-xs mb-4">Mantis Works</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            We craft brave digital brands, products and experiences.
          </h1>
          <p className="text-neutral-300 mt-6 max-w-xl">
            A small studio with a big bite. Strategy, identity, websites and product design for ambitious teams.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-black bg-lime-300 hover:bg-lime-200 transition-colors">See our work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-white/20 hover:border-white/40">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
