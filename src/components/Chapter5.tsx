import { CheckSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ageData = [
  { name: '25-35 years', value: 45 },
  { name: '36-45 years', value: 35 },
  { name: '46-55 years', value: 15 },
  { name: 'Above 55', value: 5 },
];
const COLORS = ['#f59e0b', '#0f172a', '#64748b', '#cbd5e1'];

const awarenessData = [
  { name: 'Digital Marketing', respondents: 55 },
  { name: 'Word of Mouth', respondents: 25 },
  { name: 'Print/Outdoor', respondents: 15 },
  { name: 'Others', respondents: 5 },
];

const effectivenessData = [
  { name: 'Price Discounts', score: 92 },
  { name: 'Flexible Payment', score: 88 },
  { name: 'Site Visits', score: 85 },
  { name: 'Free Amenities', score: 70 },
  { name: 'Digital Promos', score: 65 },
];

export function Chapter5Page1() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Data Analysis</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </header>
      
      <img src="https://picsum.photos/seed/realestate-data/1200/600" alt="Data Analysis" className="w-full h-[200px] object-cover rounded-sm shadow-lg mb-8 print:hidden" referrerPolicy="no-referrer" />

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.1</span> Introduction to Data Analysis
        </h2>
        <p className="mb-4">Data analysis is a crucial stage in any research study, as it helps in converting raw data into meaningful information that supports decision-making. In this study, data analysis is carried out to understand the effectiveness of various sales promotion techniques adopted by S.I.S (South India Shelters Pvt. Ltd.), Chennai, in influencing customer awareness, interest, and purchase decisions in the real estate sector.</p>
        <p>The data collected through structured questionnaires from potential and existing customers were analyzed systematically using appropriate statistical tools. The primary focus of the analysis is to evaluate customer perception, preferences, and satisfaction levels regarding promotional strategies such as advertisements, discounts, offers, site visits, digital marketing, and personal selling methods used by S.I.S.</p>
      </section>

      <section className="bg-stone-50 p-6 border-l-4 border-amber-500 rounded-r-lg print:break-inside-avoid">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">5.2 Profile of Respondents</h2>
        <p className="mb-4">The demographic analysis of respondents helps in understanding the background characteristics of customers who were surveyed. This includes factors such as age, gender, occupation, income level, and purpose of property purchase.</p>
        <p className="mb-4">The majority of respondents belonged to the working professional category, including salaried employees, business owners, and self-employed individuals. Most respondents were in the age group of 25–45 years, which represents the prime home-buying segment. This indicates that S.I.S primarily attracts customers who are financially stable and actively seeking residential investment or ownership.</p>
        
        <div className="mt-6 h-[250px] w-full print:h-[200px]">
          <h3 className="text-center font-serif text-slate-900 mb-2">Age Distribution of Respondents</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <p className="mt-4 text-sm">Income analysis revealed that a significant portion of respondents had medium to high annual income, suggesting that S.I.S projects are perceived as suitable for middle-income and upper-middle-income buyers.</p>
      </section>
    </div>
  );
}

export function Chapter5Page2() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section className="print:break-inside-avoid">
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.3</span> Awareness about S.I.S Projects
        </h2>
        <p className="mb-4">One of the key objectives of this study is to analyze how customers become aware of S.I.S projects. Respondents were asked about the sources through which they first came to know about the company and its residential offerings.</p>
        
        <div className="my-6 h-[250px] w-full bg-white p-4 border border-stone-100 rounded-sm shadow-sm print:shadow-none print:border-slate-300">
          <h3 className="text-center font-serif text-slate-900 mb-4">Sources of Customer Awareness</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={awarenessData}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="respondents" fill="#0f172a" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="mb-4">The analysis shows that <strong className="text-slate-900 font-semibold">digital marketing platforms</strong>, including social media advertisements, real estate websites, and online property portals, play a major role in creating awareness among customers. Traditional promotional methods such as newspaper advertisements and hoardings also contributed significantly, especially among older age groups.</p>
        <p>Word-of-mouth publicity from friends, relatives, and existing customers was another important source of awareness, highlighting the trust and reputation built by S.I.S in the Chennai real estate market.</p>
      </section>

      <section className="print:break-inside-avoid">
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.4</span> Effectiveness of Sales Promotion Techniques
        </h2>
        <p className="mb-4">Sales promotion techniques are short-term incentives designed to encourage immediate interest or purchase. S.I.S uses various promotional tools such as price offers, flexible payment schemes, limited-period discounts, free amenities, and site visit arrangements.</p>
        
        <div className="my-6 h-[250px] w-full bg-stone-50 p-4 rounded-sm print:bg-white print:border print:border-slate-300">
          <h3 className="text-center font-serif text-slate-900 mb-4">Effectiveness Score of Promotional Tools</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={effectivenessData}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
              <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#0f172a', fontWeight: 500}} width={120} />
              <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="score" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="mb-4">The data analysis indicates that <strong className="text-slate-900 font-semibold">price-related offers and flexible payment options</strong> are highly effective in influencing customer decisions. Many respondents stated that attractive offers encouraged them to inquire further or schedule site visits.</p>
        <p>Site visits organized by the sales team were found to be a strong promotional tool, as they helped customers visualize the property, understand the location advantages, and build confidence in the project.</p>
      </section>
    </div>
  );
}

export function Chapter5Page3() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section className="bg-slate-900 text-white p-8 rounded-sm print:bg-white print:text-slate-900 print:border-2 print:border-slate-900 print:break-inside-avoid">
        <h2 className="text-2xl font-serif text-amber-500 mb-4 print:text-slate-900">5.5 Role of Advertising in Purchase Decision</h2>
        <p className="mb-4 font-light text-slate-300 print:text-slate-900">Advertising plays a vital role in shaping customer perception in the real estate industry. The study analyzed customer opinions on various advertising media used by S.I.S.</p>
        <p className="mb-4 font-light text-slate-300 print:text-slate-900">Respondents expressed that advertisements helped them understand key project details such as location, pricing, amenities, and project highlights. Online advertisements were perceived as informative and convenient, while print media advertisements were considered reliable and credible.</p>
        <p className="font-light text-slate-300 print:text-slate-900">Many respondents agreed that consistent advertising by S.I.S creates a positive brand image and enhances trust, which is essential in high-value purchases like real estate.</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.6</span> Customer Satisfaction towards Promotional Strategies
        </h2>
        <p className="mb-4">Customer satisfaction with promotional activities was evaluated to assess how well S.I.S meets customer expectations. The majority of respondents expressed satisfaction with the clarity of information provided during promotional campaigns.</p>
        <p className="mb-4">Customers appreciated the transparency in pricing details, prompt responses from sales executives, and professional handling of inquiries. Promotional messages were generally considered clear, relevant, and persuasive.</p>
        <p>However, a few respondents suggested that more detailed project comparisons and virtual tours could further enhance the promotional experience.</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.7</span> Influence of Sales Executives and Personal Selling
        </h2>
        <p className="mb-4">Personal selling is one of the most important promotional tools in the real estate sector. The role of sales executives of S.I.S was analyzed based on customer feedback.</p>
        <p className="mb-4">The analysis revealed that knowledgeable and courteous sales executives significantly influenced customer confidence and trust. Respondents stated that clear explanation of legal documents, payment schedules, and project timelines helped them make informed decisions.</p>
        <p>Personal interaction during site visits and follow-up calls played a crucial role in converting inquiries into bookings, proving the effectiveness of personal selling techniques adopted by S.I.S.</p>
      </section>
    </div>
  );
}

export function Chapter5Page4() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg print:break-inside-avoid">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">5.8 Customer Preference for Promotional Channels</h2>
        <p className="mb-4">Customers were asked to indicate their preferred promotional channels. The analysis shows that most respondents preferred a <strong className="text-slate-900 font-semibold">combination of digital marketing and personal interaction</strong>.</p>
        <p>While online platforms were preferred for initial information gathering, customers relied heavily on direct interaction with sales executives before making final decisions. This highlights the importance of an integrated promotional strategy.</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">5.9</span> Overall Analysis and Interpretation
        </h2>
        <p className="mb-4">The overall data analysis indicates that S.I.S effectively uses a mix of traditional and modern sales promotion techniques to attract customers. Digital marketing has emerged as a powerful awareness-building tool, while personal selling and site visits remain critical for conversion.</p>
        <p>Sales promotions such as discounts, flexible payment options, and limited-period offers successfully create interest and urgency among potential buyers. Strong customer satisfaction levels indicate that promotional strategies are aligned with customer expectations.</p>
      </section>
    </div>
  );
}

export default function Chapter5() {
  return (
    <>
      <Chapter5Page1 />
      <Chapter5Page2 />
      <Chapter5Page3 />
      <Chapter5Page4 />
    </>
  );
}
