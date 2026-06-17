import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="page-wrap">
      <div className="page-hdr">
        <div className="page-hdr-inner">
          <div className="lbl">About</div>
          <h1>What We Are Building</h1>
          <p>Zambezi Strategy Group exists because Africa's positioning failure in the global luxury economy is not a production problem. It is a framework problem. We are building the frameworks, standards, and institutional architecture that change that.</p>
        </div>
      </div>

      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '72px 48px 120px' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', marginBottom: '72px' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 300, color: '#333', lineHeight: 2 }}>
              Our goal is to make African provenance a recognised mark of quality. To build the certification frameworks, brand standards, and institutional language that allow African goods to be received by the world at the price and prestige they already deserve. We work with African enterprises, governments, and institutions across nine strategic sectors.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 300, color: '#333', lineHeight: 2 }}>
              We believe the next generation of globally recognised luxury brands will be African. Our role is to build the strategic architecture that makes that possible, and to ensure that when those brands arrive, the frameworks exist to receive them correctly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ borderTop: '1px solid rgba(14,42,71,.12)', paddingTop: '56px', marginBottom: '72px' }}>
            <div className="lbl">Who We Work With</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginTop: '20px', marginBottom: '24px' }}>
              {['African Governments','Regional Institutions','SMEs','Corporations','Luxury Enterprises','International Partners'].map(r => (
                <div key={r} style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)', borderLeft: '2px solid var(--gold)', paddingLeft: '12px', paddingTop: '3px', paddingBottom: '3px' }}>{r}</div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, maxWidth: '560px' }}>
              We consult across the entire African continent. Any enterprise, institution, or government operating within our nine strategic sectors is a potential partner. For organisations based outside our primary markets, reach out directly and we will assess how we can support you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ background: 'var(--stone)', padding: '44px', borderLeft: '3px solid var(--gold)' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px,2.2vw,23px)', fontWeight: 400, fontStyle: 'italic', color: 'var(--navy)', lineHeight: 1.7 }}>
              "Africa has always had the assets. The question is who writes the brief."
            </p>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
