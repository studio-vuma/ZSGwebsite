import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

const COUNTRIES = [
  { name:"Egypt", left:67.39, top:20, note:"Africa's largest Arab economy. Significant luxury consumer base and expanding institutional infrastructure.", side:"left" },
  { name:"Senegal", left:21.78, top:38, note:"West Africa's most stable democracy and a growing hub for creative industries, luxury hospitality, and institutional investment.", side:"right" },
  { name:"Ghana", left:25.8, top:47, note:"Stable democracy with a rapidly growing aspirational middle class. Home to Africa's bean-to-bar chocolate revolution.", side:"right" },
  { name:"Nigeria", left:33.85, top:50, note:"Africa's largest economy. The continent's most active luxury consumer market and a thriving cultural export industry.", side:"right" },
  { name:"Ethiopia", left:64.71, top:45, note:"One of Africa's fastest growing economies. Emerging manufacturing base and significant institutional investment activity.", side:"left" },
  { name:"Rwanda", left:55.32, top:55, note:"Africa's most business-friendly regulatory environment. Strategic hub for East African institutional engagement.", side:"left" },
  { name:"Kenya", left:60.69, top:53, note:"East Africa's commercial capital. Strong tech ecosystem, established luxury hospitality sector, and active investment climate.", side:"left" },
  { name:"Tanzania", left:56.66, top:60, note:"Rich in critical minerals and natural assets. Strong tourism and hospitality sector with significant luxury positioning potential.", side:"left" },
  { name:"Botswana", left:47.94, top:72, note:"World's largest diamond producer by value. Central to ZSG's provenance and precious resources practice area.", side:"right" },
  { name:"South Africa", left:41.23, top:80, note:"Africa's most developed luxury market. Home to established luxury retail, financial institutions, and leading creative industries.", side:"right" },
];

function StatCounter({ target, suffix, prefix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.disconnect();
        const duration = 1800;
        const start = performance.now();
        const update = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * target));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Home() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => { const t = setTimeout(() => setReady(true), 250); return () => clearTimeout(t); }, []);

  return (
    <div className="page-wrap">
      {/* Hero */}
      <div style={{ background: 'var(--navy)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 48px 80px', paddingTop: '80px', position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        <div style={{ maxWidth: '720px', opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(14px)', transition: 'opacity 1s ease .3s, transform 1s ease .3s' }}>
          <div className="lbl">Pan-African Luxury Brand Strategy</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(44px,7vw,90px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.02, letterSpacing: '-1px', margin: '0 0 32px' }}>
            Positioning Africa<br />on its own terms
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,.55)', lineHeight: 1.85, maxWidth: '500px', margin: '0 0 48px' }}>
            Zambezi Strategy Group is a pan-African luxury brand strategy consultancy. We advise African enterprises, governments, and institutions on the strategic architecture that allows African goods, services, and cultural assets to command the recognition they deserve.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => navigate('/capabilities')}>Our Capabilities</button>
            <button className="btn-outline-white" onClick={() => navigate('/perspectives')}>Read Our Thinking</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stats-grid">
          {[
            { n: 15, suffix: '+', label: 'African Markets' },
            { n: 9, suffix: '', label: 'Strategic Sectors' },
            { n: 500, suffix: 'bn+', prefix: 'USD ', label: 'Market Opportunity' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="stat">
                <div className="stat-n"><StatCounter target={s.n} suffix={s.suffix} prefix={s.prefix || ''} /></div>
                <div className="stat-l">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Africa Map */}
      <div style={{ background: 'var(--white)', padding: '80px 48px', borderBottom: '1px solid rgba(14,42,71,.06)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'center' }}>
          <Reveal>
            <div className="lbl">Our Reach</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.2, margin: '0 0 20px' }}>
              Consulting across the African continent
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>
              We work with governments, institutions, corporations, and SMEs across Africa. Any enterprise operating within our nine strategic sectors is a potential partner.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 300, color: 'rgba(14,42,71,.4)', lineHeight: 1.85, fontStyle: 'italic' }}>
              Operating outside a listed market? Reach out directly. We assess every enquiry on its merits regardless of location.
            </p>
          </Reveal>
          <Reveal style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img src="/africa-map.png" alt="Africa outline map" style={{ width: '100%', display: 'block', opacity: 0.7 }} />
              {COUNTRIES.map((c, i) => (
                <div key={c.name} style={{ position: 'absolute', left: `${c.left}%`, top: `${c.top}%`, transform: 'translate(-50%,-50%)', animation: `dotAppear .4s ease ${i * 0.18}s both`, zIndex: 2 }}>
                  <div className="map-dot" tabIndex={0} aria-label={c.name}>
                    <div className="dot-pulse" />
                    <div className="map-tooltip" style={{ position: 'absolute', ...(c.side === 'right' ? { left: '18px' } : { right: '18px' }), top: '50%', transform: 'translateY(-50%)' }}>
                      <div className="tooltip-name">{c.name}</div>
                      <div className="tooltip-note">{c.note}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* About strip */}
      <div style={{ background: 'var(--white)', padding: '96px 48px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
          <Reveal>
            <div className="lbl">What We Do</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.2 }}>
              We work at the level of framework
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.9, marginBottom: '20px' }}>
              Africa's positioning failure in the global luxury economy is not a production problem. It is a framework problem. The codes, standards, and institutional architecture that would allow African goods to be received as what they already are do not yet exist in any formal continental sense.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.9 }}>
              Building that framework, across nine strategic sectors and fifteen markets, is the work of Zambezi Strategy Group.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Perspectives teaser */}
      <div style={{ background: 'var(--navy)', padding: '96px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <div className="lbl">Perspectives</div>
            <button className="btn-outline-gold" onClick={() => navigate('/perspectives')} style={{ marginTop: '8px' }}>
              Read the Latest in Perspectives
            </button>
          </Reveal>
        </div>
      </div>

      <Footer />
    </div>
  );
}
