export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="uppercase tracking-widest text-xs text-neutral-400">Mantis Works</p>
          <p className="text-sm">Design studio building brands, products and websites.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
