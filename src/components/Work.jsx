const projects = [
  {
    title: 'Otter Analytics',
    desc: 'Brand identity and SaaS product design for AI-driven insights platform.',
    tags: ['Brand', 'Product', 'Website']
  },
  {
    title: 'Yarrow',
    desc: 'Ecommerce brand system and storefront for sustainable skincare.',
    tags: ['Identity', 'Ecommerce']
  },
  {
    title: 'Hinterland',
    desc: 'Web app for planning backcountry trips with friends and guides.',
    tags: ['Product', 'Web App']
  },
  {
    title: 'Tandem',
    desc: 'Marketing site + design system for collaborative meeting tool.',
    tags: ['Website', 'System']
  }
]

function Tag({ children }) {
  return <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">{children}</span>
}

export default function Work() {
  return (
    <section id="work" className="bg-neutral-950 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <a href="#" className="text-sm text-neutral-300 hover:text-white">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition-all">
              <div className="aspect-[4/3] rounded-xl bg-[linear-gradient(135deg,rgba(163,230,53,0.15),rgba(52,211,153,0.15))] mb-4 border border-white/10 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
