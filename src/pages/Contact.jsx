import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="page-wrap">
      <div className="page-hdr">
        <div className="page-hdr-inner">
          <div className="lbl">Contact</div>
          <h1>Enquiries</h1>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 48px 120px' }}>
        <Reveal>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.9, maxWidth: '460px', marginBottom: '56px' }}>
            Engagements are accepted by enquiry only. If you are interested in working with Zambezi Strategy Group, please reach out directly.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          {[
            { label: 'Email', val: 'office@zambezistrategy.com', href: 'mailto:office@zambezistrategy.com' },
            { label: 'Social', val: '@zsgafrica', href: 'https://twitter.com/zsgafrica' },
          ].map(item => (
            <div key={item.label} style={{ borderTop: '1px solid rgba(14,42,71,.1)', padding: '28px 0' }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</div>
              <a href={item.href} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2.8vw,26px)', fontWeight: 300, color: 'var(--navy)', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--navy)'}>
                {item.val}
              </a>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(14,42,71,.1)', padding: '28px 0' }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>Brand Line</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(15px,2vw,20px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--navy)' }}>
              ZSG Links. Traceability. Reliability. Connectivity.
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
