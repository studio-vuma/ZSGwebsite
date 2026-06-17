import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

const SECTORS = [
  { n:'01', title:'Critical Materials', body:"Africa holds approximately 30% of the world's critical mineral reserves, including the cobalt, lithium, manganese and rare earths that underpin the global energy transition and advanced manufacturing supply chains. The opportunity is not extraction. It is positioning African nations as the sovereign anchors of the value chains being built around those materials." },
  { n:'02', title:'Diamonds & Precious Resources', body:"Botswana alone is the world's largest diamond producer by value, with diamonds representing approximately 90% of its goods exports. Yet the frameworks through which those stones acquire certification, provenance and price are constructed entirely outside the continent. Closing that gap is one of the most direct value-creation opportunities in the African strategic economy." },
  { n:'03', title:'Agro-Processing', body:"Africa produces some of the world's most distinctive agricultural outputs, from single-origin coffees and cocoas to premium teas, spices and botanicals with genuine terroir. The premium food and beverage market is actively reorganising around origin and provenance. The institutional frameworks to capture that shift at the African source are largely absent." },
  { n:'04', title:'Manufacturing & Industrialisation', body:'The AfCFTA creates the largest free trade area in the world by number of countries. The question for African manufacturers is not whether the market exists. It is whether the sector positioning, standards infrastructure and international partnership architecture exists to compete within it on favourable terms.' },
  { n:'05', title:'Trade & Export Strategy', body:'Intra-African trade remains structurally constrained by documentation complexity, payment friction, corridor opacity and the absence of the commercial infrastructure that makes cross-border trade operationally viable at scale. Building that infrastructure is one of the defining economic priorities of the AfCFTA era.' },
  { n:'06', title:'Infrastructure Corridors', body:'The corridors that connect African markets, road, rail, port and digital, are the physical architecture of the integrated African economy. How those corridors are positioned internationally, financed and operated determines which regions benefit and on what terms.' },
  { n:'07', title:'Tourism & Hospitality', body:"Africa's safari market stood at $16.9 billion in 2023 and is projected to reach $25.2 billion by 2030. Consumer spending on tourism and hospitality across the continent is forecast to reach $261.77 billion by the same year. The experiences Africa offers are categorically superior to many established luxury destinations. The institutional frameworks that would allow them to command comparable recognition are not." },
  { n:'08', title:'Cultural & Creative Industries', body:'The global appetite for African creative output, in music, fashion, film, design and visual art, has never been greater. The economic architecture that would allow the value of that output to accrue at the source, rather than through intermediaries and platforms built elsewhere, is still being constructed. Building that architecture is both a cultural and an economic priority.' },
  { n:'09', title:'Special Economic & Investment Zones', body:'SEZs and investment zones are only as effective as the international positioning that surrounds them. A zone that is not legible to international capital, credibly governed and connected to the right counterparties will underperform regardless of its underlying fundamentals. We work with zone authorities and host governments to build the international positioning that makes SEZs genuinely competitive.' },
];

export default function Sectors() {
  return (
    <div className="page-wrap">
      <div className="page-hdr">
        <div className="page-hdr-inner">
          <div className="lbl">Sectors</div>
          <h1>Nine Sectors</h1>
          <p>Each one represents a category where Africa holds a genuine structural advantage, and where the absence of the right institutional framework is the primary constraint on value realisation.</p>
        </div>
      </div>

      <div className="list-body">
        {SECTORS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <div className="list-item">
              <div className="list-num">{s.n}</div>
              <div>
                <div className="list-title">{s.title}</div>
                <div className="list-body-txt">{s.body}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Footer />
    </div>
  );
}
