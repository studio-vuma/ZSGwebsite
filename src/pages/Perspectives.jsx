import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

export default function Perspectives() {
  const navigate = useNavigate();
  return (
    <div className="page-wrap">
      <div className="page-hdr">
        <div className="page-hdr-inner">
          <div className="lbl">Perspectives</div>
          <h1>Our Thinking</h1>
          <p>Perspectives is where Zambezi Strategy Group publishes its position on the questions that matter most to African enterprise, luxury, and strategic development. These are not summaries of consensus. They are arguments, grounded in research, written to be challenged.</p>
        </div>
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 48px 120px' }}>
        <Reveal>
          <div style={{ borderTop: '2px solid var(--gold)', paddingTop: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
              <div>
                <div className="lbl">June 2026</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '1px', color: 'var(--muted)', marginTop: '4px' }}>Position Paper</div>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,3.2vw,36px)', fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2, margin: '0 0 16px' }}>
                  Writing Luxury From the Ground Up: Why Africa Needs Its Own Theory
                </h2>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, margin: '0 0 28px', maxWidth: '520px' }}>
                  Africa is making the goods. The question is whether the institutional framework exists to say so with authority. This paper examines provenance, the recognition gap, and what it would mean for Africa to write its own luxury codes.
                </p>
                <button className="btn-outline-gold" onClick={() => navigate('/essay')}>Read the Essay</button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ borderTop: '1px solid rgba(14,42,71,.1)', paddingTop: '48px', marginTop: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
              <div className="lbl" style={{ color: 'var(--muted)' }}>Forthcoming</div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 300, color: 'rgba(14,42,71,.35)', lineHeight: 1.85, fontStyle: 'italic' }}>
                Further position papers are in development. ZSG publishes when the argument is ready, not on a schedule.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
