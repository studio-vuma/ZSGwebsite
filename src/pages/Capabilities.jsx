import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

const CAPS = [
  { n: '01', title: 'Sector Positioning', body: 'Most African sectors are undervalued not because the underlying assets are weak, but because the frameworks through which global markets assign recognition have been built elsewhere. We work with governments and institutions to build the positioning architecture that changes that, translating geological, agricultural, cultural and ecological endowment into the language through which international capital, luxury operators and strategic partners assign value.' },
  { n: '02', title: 'Partnership Architecture', body: 'The relationships that move sectors forward are rarely transactional. They require careful structural design, matching the right counterparties, sequencing engagement correctly, and building the institutional credibility that makes those relationships durable. We design the partnership frameworks that connect African governments and sector bodies with international operators, investors and institutions on terms that reflect the value being brought to the table.' },
  { n: '03', title: 'Transformation Strategy', body: 'Sectors do not transform by accident. They transform because someone builds a framework that moves them from where they are toward where the market is going. We design those frameworks, working across the full arc from sector audit and gap analysis through to international market entry strategy, certification pathway design and long-horizon positioning roadmaps.' },
  { n: '04', title: 'Market Interface', body: 'How a sector presents itself internationally determines how it is received. We support governments and institutions with the external articulation of their sector ambitions, from investment proposition design and international roadshow preparation through to the institutional documentation, briefing materials and engagement strategies that allow African sectors to be taken seriously in the rooms that matter.' },
];

export default function Capabilities() {
  const navigate = useNavigate();
  return (
    <div className="page-wrap">
      <div className="page-hdr">
        <div className="page-hdr-inner">
          <div className="lbl">Capabilities</div>
          <h1>Four Practice Areas</h1>
          <p>ZSG operates across four practice areas. Each addresses a distinct dimension of how sectors, materials and territories move from latent potential into recognised international value.</p>
        </div>
      </div>

      <div className="list-body">
        {CAPS.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.07}>
            <div className="list-item">
              <div className="list-num">{c.n}</div>
              <div>
                <div className="list-title">{c.title}</div>
                <div className="list-body-txt">{c.body}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 48px 100px' }}>
        <Reveal>
          <div style={{ background: 'var(--navy)', padding: '52px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '36px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 300, color: 'var(--white)', marginBottom: '6px' }}>Work with ZSG</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,.4)', letterSpacing: '1px' }}>Engagements are accepted by enquiry only</div>
            </div>
            <button className="btn-outline-gold" onClick={() => navigate('/contact')}>Get in Touch</button>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
