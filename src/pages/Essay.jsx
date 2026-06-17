import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const SOURCES = [
  { n:1, t:"Middle East and Africa Luxury Goods Market Report, Mordor Intelligence, 2025.", u:"https://www.mordorintelligence.com/industry-reports/middle-east-and-africa-luxury-goods-market" },
  { n:2, t:"African Luxury Brands Redefined, CNBC Africa, April 2025.", u:"https://www.cnbcafrica.com/media/6370918439112/african-luxury-brands-redefined/" },
  { n:3, t:"2025 Brand Africa 100: Top Brands in Africa Report, GeoPoll, May 2025.", u:"https://www.geopoll.com/blog/2025-brand-africa-100/" },
  { n:4, t:"Africa's Best Brands 25 Ranked, African Business, June 2025.", u:"https://african.business/2025/06/long-reads/africas-best-brands-25-ranked-global-brands-still-dominate-africa" },
  { n:5, t:"Jean-Noel Kapferer, in conversation with Areni Global, August 2025.", u:"https://areni.global/the-luxury-strategies-in-conversation-with-jean-noel-kapferer/" },
  { n:6, t:"G7 Announces Botswana as Second Verification Node for Rough Diamonds, National Jeweler.", u:"https://nationaljeweler.com/articles/13447-g7-announces-botswana-as-second-verification-node-for-rough-diamonds" },
  { n:7, t:"Botswana Diamonds, Edward Fleming Jewellery.", u:"https://www.edwardflemingjewellery.com/botswana-diamonds" },
  { n:8, t:"Botswana Diamonds, Edward Fleming Jewellery.", u:"https://www.edwardflemingjewellery.com/botswana-diamonds" },
  { n:9, t:"Green Star Certification for Botswana Diamonds, Trends n Africa.", u:"https://trendsnafrica.com/green-star-certification-and-designation-for-diamonds-from-botswana/" },
  { n:10, t:"How Artist Esther Mahlangu Fuses Tribal Tradition, AnOther Magazine, April 2024.", u:"https://www.anothermag.com/art-photography/15533/how-esther-mahlangu-fused-indigeneity-and-modernism-to-break-new-boundaries" },
  { n:11, t:"Esther Mahlangu and the Global Revolution of Ndebele Art, MoMAA, May 2025.", u:"https://momaa.org/esther-mahlangu-and-the-global-revolution-of-ndebele-art/" },
  { n:12, t:"Beyond the Wall: Esther Mahlangu and Ndebele Culture, Art Africa Magazine, October 2024.", u:"https://artafricamagazine.org/beyond-the-wall-esther-mahlangu-and-ndebele-culture-between-tradition-and-contemporaneity/" },
  { n:13, t:"MaXhosa Africa production and market data, Your Luxury Africa.", u:"https://yourluxury.africa/art-culture/maxhosa-african-space-travel-organization-where-luxury-bangs-loudly-not-quietly/" },
  { n:14, t:"Laduma Ngxokolo quote, Your Luxury Africa.", u:"https://yourluxury.africa/art-culture/maxhosa-african-space-travel-organization-where-luxury-bangs-loudly-not-quietly/" },
  { n:15, t:"Luxury's DNA: A Systematic Review of Brand Attributes and Transfer Strategies, ResearchGate, 2026.", u:"https://www.researchgate.net/publication/400250709" },
];

function Sup({ n }) {
  const src = SOURCES.find(s => s.n === n);
  return <sup><a href={src?.u} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontSize: '.65em', textDecoration: 'none' }}>{n}</a></sup>;
}

function SectionRule({ label }) {
  return (
    <div className="section-rule">
      <span>{label}</span>
    </div>
  );
}

function PullQuote({ text }) {
  return (
    <div className="pull-quote">
      <p>"{text}"</p>
    </div>
  );
}

export default function Essay() {
  const navigate = useNavigate();
  return (
    <div className="page-wrap">
      {/* Back bar */}
      <div style={{ background: 'var(--navy)', padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '56px', zIndex: 50, borderBottom: '1px solid rgba(200,161,90,.18)' }}>
        <button onClick={() => navigate('/perspectives')} style={{ background: 'none', border: 'none', fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', cursor: 'pointer', transition: 'color .2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}>
          ← Back to Perspectives
        </button>
      </div>

      {/* Essay header */}
      <div className="essay-hdr">
        <div className="essay-hdr-inner">
          <div className="lbl">Perspectives — June 2026</div>
          <h1>Writing Luxury From the Ground Up: Why Africa Needs Its Own Theory</h1>
          <div className="byline">By Zinzile, Founder and CEO, Zambezi Strategy Group</div>
        </div>
      </div>

      {/* Essay body */}
      <div className="essay-body">

        <figure style={{ margin: '0 0 52px', padding: 0 }}>
          <img src="/johannesburg.jpg" alt="Johannesburg skyline at sunset" style={{ width: '100%', display: 'block', maxHeight: '480px', objectFit: 'cover', objectPosition: 'center' }} />
          <figcaption style={{ marginTop: '12px', fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--muted)', lineHeight: 1.6, borderLeft: '2px solid var(--gold)', paddingLeft: '12px' }}>
            Johannesburg, South Africa. Africa's most developed luxury market.
          </figcaption>
        </figure>

        <p>Africa's luxury brand market is being refined.</p>
        <p>Across the continent, countries are making a deliberate shift: moving away from upstream roles in product development, which consisted of supplying and extracting raw materials, and toward downstream processing, where many African companies are finishing goods in-house rather than exporting the raw material for someone else to complete. With that shift comes the first real conditions for provenance: the idea that an object carries the full story of its origin, from the ground it came from to the hands that finished it.</p>
        <p>However, production is not positioning.</p>
        <p>There is a question that African business will have to answer. Not what luxury looks like on this continent, but what it means here. What is its logic? What are its codes? And how does the discerning buyer interpret the luxury brand and receive the luxury offering?</p>
        <p className="italic-navy">The absence is costing the continent more than most people have calculated.</p>

        <SectionRule label="The Current Market" />

        <p>The discerning buyer exists on the continent. Africa's luxury goods market is growing at 10.57 percent annually,<Sup n={1} /> outpacing global averages and defying the slowdowns that generally affect luxury consumption in leading luxury consumer countries such as China and the United States. The continent's aspirational consumer base is young and digitally connected, actively seeking their own luxury experiences, products, and culture of luxury product offerings. This is a market that is open to luxury good development and luxury good patronage.</p>
        <p>Yet African designers capture less than ten percent of market share on their own continent.<Sup n={2} /> The share of African brands in the Brand Africa 100 most admired rankings has fallen to a historic low of eleven percent in 2025, down from twenty-five percent a decade ago.<Sup n={3} /> The brands filling that space are owned by European luxury conglomerate houses. Louis Vuitton, Chanel, and Gucci rank among the most admired luxury brands by African and Gen Z consumers.<Sup n={4} /> European houses are answering the question of what luxury means to the African discerning buyer, delivering the global recognition and cultural authority that African brands have not yet claimed for themselves.</p>
        <p>Given that many African companies now see their products from the beginning of the process through to the end, demonstrating the provenance and trustworthiness of an exceptional offering, this is not a production problem. It is a lack of framework.</p>
        <p>The codes that would allow an African luxury product to be received, interpreted, and valued on its own terms do not yet exist in any systematic or institutional sense. And without those codes, the finished product, however well made, enters a market that does not know where or how to place it.</p>

        <PullQuote text="This is not a production problem. It is a lack of framework." />

        <SectionRule label="The Wrong Map" />

        <p>The frameworks African brands are reaching for when they take a finished product to market were written for a completely different origin story. European luxury theory refers to centuries of guild traditions, inherited hierarchies of craft, and consumer cultures with ideas of what refinement looks and feels like, according to practices and customs built over generations. It describes a world in which luxury is a rarity discovered somewhere else and arrives as a finished object for only a few fortunate consumers, and is marketed as such. The consumer is not meant to picture the farm, the mine, or the artisan. The origin is mystified. The consumer idealises the name and the finished product. Distance from the place of making is part of the value proposition.</p>
        <p>However, that logic does not transfer.</p>
        <p>When an African brand applies those codes to an African product, it is not entering the luxury market. It is auditioning for it on someone else's terms. The product is assessed against a standard it was never designed to meet, by a framework that was never designed to receive it. As Jean-Noel Kapferer, the foremost academic authority on luxury brand strategy, has argued: luxury is not something which simply is. It is something you create.<Sup n={5} /> But the creation requires a framework that fits the product, the origin, and the consumer it is speaking to. A framework borrowed from a different history, a different geography, and a completely different cultural logic will produce a different result.</p>
        <p>This is the root of the recognition gap. It is not that African products lack quality or that the goods are not good enough. It is that the system being used to present them was not built to say what African products are.</p>

        <SectionRule label="The Provenance Paradox" />

        <p>Consider the diamond industry. Botswana is the world's largest diamond producer by value.<Sup n={6} /> Six of the ten biggest rough diamonds ever found came from Botswana.<Sup n={7} /> And yet the body whose certification determines whether a Botswana diamond is considered legitimate, graded correctly, and valued accordingly is the Gemological Institute of America, a California-based institution founded in 1931.<Sup n={8} /></p>

        <figure style={{ margin: '48px 0', padding: 0 }}>
          <img src="/botswana-diamond.jpg" alt="Botswana diamond held by former president Mokgweetsi Masisi" style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '520px' }} />
          <figcaption style={{ marginTop: '12px', fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--muted)', lineHeight: 1.6, borderLeft: '2px solid var(--gold)', paddingLeft: '12px' }}>
            Botswana's former president, Mokgweetsi Masisi, inspects Debswana's find.<br />
            <span style={{ color: '#aaa' }}>Photograph: Monirul Bhuiyan/AFP/Getty Images</span>
          </figcaption>
        </figure>

        <p>The GIA is an American institute certifying African minerals and setting the precedent of what is deemed quality. Which begs the question: how does an institution on foreign soil validate products extracted from native land, and then provide that native land with a certificate of its own origin?</p>
        <p>Botswana's Okavango Diamond Company, a government-owned entity whose employees are entirely Batswana, has begun working with the GIA to issue Diamond Origin Reports and has introduced its own Green Star provenance programme.<Sup n={9} /> That is meaningful progress. But the certification authority still sits elsewhere. The name that confers value on a Botswana diamond is not a Botswana name.</p>
        <p>The stone comes from Botswana. The people who mine it, sort it, and trade it are Batswana. The provenance begins here. It ends here. And yet the institution that says what it is worth is based six thousand miles away.</p>
        <p>Social media, digital traceability, and global information access have flattened the information hierarchy that made this arrangement seem natural. We are all receiving the same information at the same time. The argument that a Botswana certification body could not carry the same authority as a California one is no longer credible. It is a hangover from a different era. And it is costing the continent the premium its provenance should command.</p>

        <PullQuote text="The provenance begins here. It ends here. And yet the institution that says what it is worth is based six thousand miles away." />

        <SectionRule label="The Cultural Value Is African. The Institutional Structure Is Not." />

        <p>Esther Mahlangu is one of the most internationally recognised African artists alive. Born in 1935 in Mpumalanga, South Africa, she has spent her life preserving and advancing the geometric visual language of the Ndebele people, painting freehand from memory and tradition, using chicken feathers as brushes, without rulers or stencils.<Sup n={10} /> In 1991, she became the first woman and the first African artist to participate in the BMW Art Car Project.<Sup n={11} /> She has since collaborated with Rolls-Royce, Belvedere Vodka, and British Airways, and exhibited at the Venice Biennale and MoMA.<Sup n={12} /></p>
        <p>Her work is undeniably luxury. It is received as luxury by every global institution and brand that has commissioned it. And yet the luxury category that benefits most from her cultural authority is not an African one. It is BMW. It is Belvedere. The Ndebele visual language, one of the most distinctive and technically demanding artistic traditions on the continent, has been celebrated by the world's most prestigious luxury brands without generating a recognised African luxury category around it.</p>
        <p>MaXhosa Africa, founded by Laduma Ngxokolo in 2011, built its entire identity around Xhosa cultural heritage: beadwork patterns, initiation symbolism, and the specific colour language of a defined tradition. Every product is designed and produced in South Africa. Even when outsourcing manufacturing to Asia would have significantly reduced costs, the founder refused. The brand's deepest consumer traction is not in a foreign fashion capital. Durban is its second largest market.<Sup n={13} /> That is an African brand measured by African demand, produced on African soil, rooted in an African cultural logic that needed no external validation to generate genuine value.</p>
        <p>Ngxokolo has said it plainly: "The phrase emerging African luxury must be a thing of the past."<Sup n={14} /> It is not emerging. It is here. The question is whether the institutional framework exists to say so with authority.</p>
        <p>The difference between these two stories is not talent or quality. It is authorship. Until Africa builds the institutional architecture that allows Ndebele art, Xhosa knitwear, Botswana diamonds, and Ghanaian chocolate to be received as expressions of a defined and self-authored African luxury category, the cultural value will continue to be exported alongside the raw material, and the premium will continue to accrue elsewhere.</p>

        <SectionRule label="Writing the Right Framework" />

        <p>If European luxury sells distance, African luxury sells proximity. Proximity to source. Proximity to land. Proximity to the hands that made the object and the culture that gave it meaning. That is not a lesser value proposition. In the global luxury market of 2026, it is arguably a stronger one.</p>
        <p>The discerning buyer increasingly wants to know what happened to an object before it arrived in their hands. Not as a moral exercise but as a quality signal. Where was this grown? Who worked it? What process did it go through and where? The theory and practice of transparent traceability, documented material origins and production processes, is now an established marker of legitimate luxury, particularly for younger affluent consumers for whom provenance functions as a signal of sophistication.<Sup n={15} /> This is the direction the entire global luxury market is moving. If Africa builds provenance transparency into its luxury DNA now, before it is required of it, it does not play catch-up. It will lead in how luxury items build trust and authenticity with the discerning consumer.</p>
        <p>The raw material for that leadership is already here. Cowhide leatherwork across traditional dress in southern and eastern Africa. Kente weaving traditions in Ghana with regional variation as distinct as any fine textile tradition that currently commands an international premium. Hand-carved woodwork, botanical dyes, and woven materials whose methods are as technically demanding as any craft tradition the global luxury market currently recognises. These are not cultural curiosities. They are the foundation of a luxury category that has not yet been formally constituted.</p>
        <p>Luxury is not something which simply is. It is something you create.<Sup n={5} /> The same applies to provenance as a recognised category. Africa has products of extraordinary quality and origin. What it requires now is the system of meaning: the standards body, the certification framework, the education infrastructure, and the strategic language that allows those products to be received by the world as what they already are.</p>
        <p className="italic-navy-bold">That system will not be borrowed. It will be authored here, from this ground, on Africa's own terms.</p>

        <SectionRule label="The Argument in Full" />

        <p>African luxury brands are not failing to reach their full international recognition because the goods are not good enough. They are failing because the framework used to take them to market was not written for them. Applying European luxury codes to African goods produces a fundamental mismatch between product and positioning. The consumer does not know how to receive the object because nobody has told them what it means, in its own language, on its own terms.</p>
        <p>The correction is not to make African luxury more European. It is to make it more precisely African. To build the provenance frameworks, the certification standards, the brand education, and the institutional architecture that allows African origin to function as the luxury signal it already is in material terms.</p>
        <p>The brands that will define African luxury for the next generation are already producing. What they need is the framework, the institutional backing, and the strategic language to stand behind what they have already made.</p>
        <p>That framework does not yet exist in any formal, continental sense.</p>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px,2.2vw,23px)', fontStyle: 'italic', color: 'var(--navy)' }}>
          Building it is, in part, what Zambezi Strategy Group is here for.
        </p>

        {/* Sources */}
        <div style={{ marginTop: '72px', borderTop: '1px solid rgba(14,42,71,.12)', paddingTop: '36px' }}>
          <div className="sources-hdr">Sources</div>
          {SOURCES.map(s => (
            <div key={s.n} className="source-row">
              <span className="source-num">{s.n}.</span>
              <a href={s.u} target="_blank" rel="noopener noreferrer">{s.t}</a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(14,42,71,.08)', paddingTop: '28px', fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>
          Zambezi Strategy Group advises African enterprises, governments, and institutions on luxury brand development, African market positioning, and premium brand strategy.
        </div>

        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(14,42,71,.06)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', color: '#bbb', lineHeight: 1.9 }}>
            Topics: African luxury brand strategy &middot; Pan-African luxury consultancy &middot; Luxury brand management Africa &middot; African provenance &middot; Botswana diamonds &middot; Debswana &middot; GIA certification Africa &middot; MaXhosa Africa &middot; Ndebele art &middot; Esther Mahlangu &middot; African luxury market &middot; AfCFTA strategy consulting &middot; Zambezi Strategy Group
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
