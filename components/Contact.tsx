function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-10 md:px-20">
      <div className="max-w-2xl">
        <p className="text-md font-semibold tracking-widest text-cyan-400 uppercase mb-8">
          Get in Contact
        </p>
        <p className="text-gray-300 text-lg mb-8">
          If something here clicks, I&apos;d like to hear what you&apos;re working on.
        </p>
        <div className="flex gap-3">
          <a
            href="mailto:finley@finleyghosh.com"
            aria-label="Email"
            className="text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg p-3"
          >
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/finleyghosh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg p-3"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
