export default function Contact() {
  return (
    <section id="contact" className="py-24 px-10 md:px-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-8">
          Contact
        </p>
        <p className="text-gray-300 text-lg mb-8">
          Want to build something? Get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:finley@finleyghosh.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded px-4 py-2 w-fit"
          >
            finley@finleyghosh.com
          </a>
          <a
            href="https://www.linkedin.com/in/finleyghosh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded px-4 py-2 w-fit"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
