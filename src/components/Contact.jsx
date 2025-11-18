import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-black text-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Start a project</h2>
          <p className="text-neutral-300 mt-2">Tell us a few details and we’ll get back quickly.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          </div>
          <input placeholder="Company" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          <textarea required placeholder="What are you building?" rows="5" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          <button type="submit" className="rounded-full px-5 py-2.5 text-sm font-medium text-black bg-lime-300 hover:bg-lime-200">Send</button>
          {sent && <p className="text-sm text-lime-300">Thanks — we’ll be in touch soon.</p>}
        </form>
      </div>
    </section>
  )
}
