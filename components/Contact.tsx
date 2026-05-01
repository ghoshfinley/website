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
    <section id="contact" className="py-16 px-10 md:px-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-8">
          Contact
        </p>
        <p className="text-gray-300 text-lg mb-8">
          I am at my best in the <strong className="font-bold text-white">0 to 1 phase of something novel, creative solutions and making the end result something people actually want to use.</strong>
        </p>
        <p className="text-gray-300 text-lg mb-8">If that sounds like where you are, get in touch.</p>
        <div className="flex gap-3">
          <a
            href="mailto:finley@finleyghosh.com"
            className="flex items-center gap-2.5 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg px-4 py-3 text-sm font-medium"
          >
            <MailIcon />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/finleyghosh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg px-4 py-3 text-sm font-medium"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
