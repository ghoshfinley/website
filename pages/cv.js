import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRef, useEffect, useState } from 'react'

export default function CV() {
  const cvRef = useRef(null)
  const [html2pdf, setHtml2pdf] = useState(null)

  useEffect(() => {
    // Only import on client side
    import('html2pdf.js').then((module) => {
      setHtml2pdf(() => module.default)
    })
  }, [])

  const downloadPDF = async () => {
    if (!html2pdf) return
    
    const element = cvRef.current
    const opt = {
      margin: 0.5,
      filename: 'Finley_Ghosh_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    }
    html2pdf().set(opt).from(element).save()
  }

  return (
    <div className="container">
      <Head>
        <title>CV - Finley Ghosh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={downloadPDF} className="download-button">
          Download PDF
        </button>

        <div ref={cvRef} className="cv-content">
          <section className="cv-header">
            <h1>Finley Ghosh</h1>
            <div className="contact-info">
              <span>+61 428 802 626</span>
              <span className="divider">|</span>
              <span>finley@finleyghosh.com</span>
            </div>
          </section>

          <section className="cv-section">
            <h2>Summary</h2>
            <p>
              Product-focused Full-Stack Engineer passionate about owning software end-to-end, collaborating closely with stakeholders, and iteratively improving products to create meaningful user impact.
            </p>
          </section>

          <section className="cv-section">
            <h2>Experience</h2>

            <div className="cv-entry">
              <div className="entry-header">
                <h3>Macquarie Group</h3>
                <span className="date">Jun 2022 - Present</span>
              </div>
              <p className="position">Executive (formerly Senior Associate)</p>
              <ul>
                <li>Modernised a trading system with Next.js frontend and JWT-secured Java APIs, allowing the introduction of more sophisticated workflows to reduce manual work by &gt;2 hours each week.</li>
                <li>Spearheaded a SingleSPA platform onboarding 15+ applications across four countries, making it possible for teams to spin up secure full-stack apps in hours instead of weeks.</li>
                <li>Owned end-to-end delivery of a React/TypeScript + Go market data platform, partnering with quant analysts to understand user needs and iteratively improve the product, then promoting its use across the team.</li>
                <li>Took on Product Owner responsibilities for fixed income and currency systems, balancing urgent business needs with long-term roadmaps and driving measurable workflow improvements.</li>
                <li>Designed a fully dockerised React + Python reporting suite for portfolio managers, standardising 30+ recurring queries and improving decision-making speed through interactive tables and visualised insights.</li>
                <li>Implemented automated testing using JUnit, CI/CD pipelines, and monitoring, improving release reliability and iteration velocity.</li>
              </ul>
            </div>

            <div className="cv-entry">
              <div className="entry-header">
                <h3>Payreq</h3>
                <span className="date">Feb 2021 - Jun 2022</span>
              </div>
              <p className="position">Software Engineer</p>
              <ul>
                <li>Directed end-to-end development of a loan provisioning platform, translating stakeholder requirements into an MVP that automated credit reviews, contract generation, and repayments.</li>
                <li>Built an internationalised React + PostgreSQL app automating repetitive support tasks, reducing task time by 20% to save support engineers significant time each week and improving overall workflow efficiency.</li>
                <li>Championed testing, reusable tooling, and code-review practices, increasing developer velocity and reducing production defects.</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2>Additional Experience</h2>

            <div className="cv-entry">
              <div className="entry-header">
                <h3>SpringUp Software</h3>
                <span className="date">Feb 2023 - Present</span>
              </div>
              <p className="position">Co-Founder &amp; Engineer</p>
              <ul>
                <li>Co-founded a boutique software company delivering custom apps for large clients, taking full ownership of product vision and technical execution.</li>
                <li>Extended an existing CRM with Go + HTMX, rapidly prototyping and shipping major quality of life fixes.</li>
                <li>Managed live deployments and maintained &gt;99.9% uptime while keeping infrastructure costs low through VPS-based deployments.</li>
                <li>Experimented with AI prototypes for scraping and analysing ski rental pricing data, turning insights into potential product features.</li>
                <li>Collaborated in a partnership balancing technical trade-offs with product priorities to iteratively deliver value.</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <strong>Frontend:</strong> React, TypeScript / Javascript, Next.js, HTMX
              </div>
              <div className="skill-category">
                <strong>Backend:</strong> Go, Python, Java, Node.js
              </div>
              <div className="skill-category">
                <strong>Databases:</strong> PostgreSQL, SQL Server, SQLite, Redshift
              </div>
              <div className="skill-category">
                <strong>Cloud &amp; Infra:</strong> AWS, GCP, Docker, CI/CD, IaC, Splunk
              </div>
              <div className="skill-category">
                <strong>Practices:</strong> OAuth2/JWT auth, Automated testing &amp; CI/CD, Domain-driven design, REST API design
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            <div className="cv-entry">
              <div className="entry-header">
                <h3>University of New South Wales</h3>
              </div>
              <p className="position">Bachelor of Computer Science, Bachelor of Commerce (Finance)</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .download-button {
          background-color: #000;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 30px;
        }

        .download-button:hover {
          background-color: #333;
        }

        .cv-content {
          max-width: 8.5in;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.4;
          font-size: 11px;
        }

        .cv-header {
          text-align: center;
          margin-bottom: 15px;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
        }

        .cv-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .contact-info {
          font-size: 10px;
          margin-top: 5px;
          letter-spacing: 0.3px;
        }

        .contact-info .divider {
          margin: 0 8px;
        }

        .cv-section {
          margin-bottom: 12px;
        }

        .cv-section h2 {
          font-size: 13px;
          font-weight: 700;
          margin: 8px 0 6px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #000;
          padding-bottom: 3px;
        }

        .cv-entry {
          margin-bottom: 8px;
        }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .cv-entry h3 {
          margin: 0;
          font-size: 12px;
          font-weight: 700;
        }

        .date {
          font-size: 10px;
          color: #555;
          white-space: nowrap;
          margin-left: 10px;
        }

        .position {
          margin: 2px 0 4px 0;
          font-style: italic;
          font-size: 10px;
          font-weight: 600;
          color: #444;
        }

        .cv-entry ul {
          margin: 4px 0;
          padding-left: 20px;
          list-style-type: disc;
        }

        .cv-entry li {
          margin-bottom: 3px;
          text-align: justify;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
        }

        .skill-category {
          font-size: 10px;
          line-height: 1.3;
        }

        @media print {
          .download-button {
            display: none;
          }

          .cv-content {
            max-width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </div>
  )
}
