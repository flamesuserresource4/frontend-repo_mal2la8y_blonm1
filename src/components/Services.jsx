const services = [
  {
    title: 'Brand Strategy',
    desc: 'Naming, positioning and identity systems that scale.'
  },
  {
    title: 'Digital Products',
    desc: 'Web and mobile apps with crisp UX and strong design systems.'
  },
  {
    title: 'Websites',
    desc: 'Marketing sites that communicate clearly and convert.'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <p className="text-neutral-300 max-w-xl mt-2">Cross-disciplinary partners who simplify complexity and build momentum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="text-neutral-300 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
