import { useState } from 'react'
import { sections, expert, caseStudies, FORM_EMAIL } from './data'

const total = sections.reduce((n, s) => n + s.items.length, 0)

function ConsultForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'New AI Recommendation consultation request',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="cta-card">
        <span className="eyebrow">Request received</span>
        <h3>Thank you!</h3>
        <p>We've got your details. Our team will be in touch within one business day.</p>
        <button className="btn" onClick={() => setStatus('idle')}>Send another</button>
      </div>
    )
  }

  return (
    <form className="cta-card" onSubmit={handleSubmit}>
      <span className="eyebrow">Free consultation</span>
      <h3>Is AI recommending your brand?</h3>
      <p>Get a consultation on AI recommendations from the ROI Spectrum team.</p>

      <label>Full name *<input name="name" required /></label>
      <label>Work email *<input name="email" type="email" required /></label>
      <label>Phone<input name="phone" type="tel" /></label>
      <label>Website *<input name="website" placeholder="https://" required /></label>
      <label>What would you like help with?<textarea name="message" rows="3" /></label>

      <button className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get My Consultation'}
      </button>
      {status === 'error' && <p className="error">Something went wrong. Please try again.</p>}
    </form>
  )
}

export default function App() {
  const [checked, setChecked] = useState({})
  const done = Object.values(checked).filter(Boolean).length
  const pct = Math.round((done / total) * 100)

  const toggle = (key) => setChecked((c) => ({ ...c, [key]: !c[key] }))

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a href="https://roispectrum.com/"><img src="./logo.png" alt="ROI Spectrum" className="logo" /></a>
          <a href="#consult" className="btn btn-small">Get Consultation</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <span className="eyebrow light">Answer Engine Optimization</span>
          <h1>2027 AEO Performance Checklist</h1>
          <p>
            When buyers ask AI what to choose, the answer is built from signals across your website,
            third-party coverage, technical setup and reputation. Work through these {total} checks to
            give AI enough credible evidence to recommend you, not just mention you.
          </p>
          <div className="stripes" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <main className="wrap layout">
        <div className="checklist">
          <div className="progress">
            <div className="progress-label">
              <span><strong>{done} of {total}</strong> checks complete</span>
              <span className="pct">{pct}%</span>
            </div>
            <div className="bar"><div style={{ width: `${pct}%` }} /></div>
          </div>

          {sections.map((s, si) => (
            <section key={s.id} className="section">
              <h2><span className="num">{String(si + 1).padStart(2, '0')}</span>{s.title}</h2>
              <p className="note">{s.note}</p>
              <ul>
                {s.items.map((item, i) => {
                  const key = `${s.id}-${i}`
                  return (
                    <li key={key} className={checked[key] ? 'done' : ''}>
                      <label>
                        <input type="checkbox" checked={!!checked[key]} onChange={() => toggle(key)} />
                        <span className="box" />
                        <span className="text">{item}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>

        <aside id="consult" className="sidebar">
          <ConsultForm />
        </aside>
      </main>

      <section className="expert">
        <div className="wrap expert-grid">
          <div className="photo">
            <span className="initials">ZS</span>
            <img
              src={expert.photo}
              alt={expert.name}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div>
            <span className="eyebrow">Meet the expert</span>
            <h2>{expert.name}</h2>
            <p className="role">{expert.role}</p>
            {expert.bio.map((p, i) => <p key={i}>{p}</p>)}
            <div className="links">
              <a href={expert.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={expert.authorPage} target="_blank" rel="noreferrer">Articles on ROI Spectrum ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <div className="wrap">
          <span className="eyebrow">Real results</span>
          <h2>Case Studies</h2>
          <p className="cs-intro">From local service businesses to e-commerce, see how ROI Spectrum turns search and AI visibility into measurable growth.</p>
          <div className="cs-grid">
            {caseStudies.map((cs, i) => (
              <a key={i} className="cs-card" href={cs.url} target="_blank" rel="noreferrer">
                <div className="cs-img">
                  <img src={cs.image} alt={cs.title} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                </div>
                <div className="cs-body">
                  <span className="cs-tag">{cs.tag}</span>
                  <h3>{cs.title}</h3>
                  <p>{cs.summary}</p>
                  <div className="cs-stats">
                    {cs.stats.map((stat, j) => (
                      <div key={j}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <span className="eyebrow light">Why partner with ROI Spectrum</span>
          <h2>Ready to get recommended by AI?</h2>
          <p>
            ROI Spectrum combines technical SEO, content, digital PR and our own AI visibility tools to
            help brands get found in Google, cited in AI answers and chosen by buyers.
          </p>
          <div className="stats">
            <div><strong>$10M+</strong><span>Revenue driven for clients</span></div>
            <div><strong>+823K</strong><span>Organic impressions · e-commerce case study</span></div>
            <div><strong>4</strong><span>Core markets: UK, USA, UAE, Canada</span></div>
          </div>
          <a href="#consult" className="btn">Get a Free AI Recommendation Consultation</a>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 ROI Spectrum LLP</span>
          <a href="https://roispectrum.com/">roispectrum.com</a>
        </div>
      </footer>
    </>
  )
}
