export default function About() {
  return (
    <section id="about" className="py-16 px-10 md:px-20">
      <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-8">
        About Me
      </p>
      <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
        <p>
          I work at the junction of software and product development. My belief is that great
          software is just good software in the hands of someone with vision. Models can write
          code. <strong className="font-bold text-white">The hard part is knowing what to build and why.</strong>
        </p>
        <p>
          I don&apos;t do well just taking tickets. I like to own from end to end and will usually
          end up giving it a name and dreaming of where I could take it in the future.
        </p>
        <p>
          I chase novel technologies and am a firm believer in software as a tool for positive
          change. Most at home in places where the work is technically serious and the mission
          actually means something.
        </p>
        <p className="font-bold text-white">
        I am particularly interested in early stage companies where the product is the thing,
        not support for the thing. If that is you, let&apos;s talk.
      </p>
      </div>
    </section>
  )
}
