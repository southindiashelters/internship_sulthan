import { CheckSquare } from 'lucide-react';

export function Chapter1Page1() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Introduction</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </header>
      
      <img src="https://picsum.photos/seed/realestate-intro/1200/600" alt="Modern Apartment" className="w-full h-[250px] object-cover rounded-sm shadow-lg mb-8 print:hidden" referrerPolicy="no-referrer" />

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">1.1</span> Background of the Study
        </h2>
        <p className="mb-4">Sales promotion is an important component of the marketing mix that focuses on stimulating customer interest and encouraging quicker purchase decisions. In today’s competitive business environment, organizations cannot rely only on product quality or pricing; they must actively communicate value to customers through effective promotional strategies. This is especially true in the real estate industry, where buying decisions involve high financial investment, long-term commitment, and careful evaluation by customers.</p>
        <p className="mb-4">The Indian real estate sector has witnessed rapid growth due to urbanization, population expansion, infrastructure development, and rising disposable income levels. Cities like Chennai have become major real estate hubs due to employment opportunities, improved connectivity, and increasing demand for housing. As a result, real estate developers face intense competition and must adopt innovative sales promotion techniques to attract and retain customers.</p>
        <p className="mb-4">S.I.S (South India Shelters Pvt. Ltd.) is a prominent real estate developer in Chennai, engaged in the development of residential apartments and plotted developments. Over the years, the company has built a reputation for quality construction, transparent dealings, and customer satisfaction. To promote its projects and enhance sales performance, S.I.S uses various sales promotion techniques such as advertising, special offers, price discounts, digital marketing, site visit arrangements, referral schemes, exhibitions, and customer engagement programs.</p>
        <p>This study aims to analyze the sales promotion techniques adopted by S.I.S and examine their role in influencing customer awareness, interest, and purchasing behavior. By understanding these promotional practices, the study seeks to evaluate how effectively S.I.S positions its projects in the competitive real estate market.</p>
      </section>
    </div>
  );
}

export function Chapter1Page2() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">1.2</span> Need and Significance
        </h2>
        <p className="mb-4">The real estate industry operates in a highly competitive and customer-driven environment. Customers today have access to extensive information through online platforms, social media, and real estate portals, enabling them to compare multiple projects before making a purchase decision. As a result, effective sales promotion has become a crucial tool for real estate companies to differentiate themselves from competitors.</p>
        <p className="mb-4">The need for this study arises from the following factors:</p>
        <ul className="space-y-3 mb-6">
          {[
            "Increasing competition among real estate developers in Chennai.",
            "Changing preferences and expectations of customers.",
            "Growing importance of digital and direct sales promotion techniques.",
            "The necessity to evaluate whether existing promotional strategies are effective."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckSquare className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4">The significance of this study lies in its practical and academic relevance. From a managerial perspective, the study helps S.I.S understand customer perceptions towards its sales promotion techniques and identify areas that require improvement. From an academic perspective, the study contributes to knowledge related to sales promotion practices in the real estate sector and serves as a reference for students and researchers.</p>
        <p className="mb-8">Moreover, the findings of this study can help S.I.S strengthen its marketing strategies, improve customer reach, and enhance overall sales performance, thereby supporting long-term organizational growth.</p>
      </section>

      <section className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">1.3 Statement of the Problem</h2>
        <p className="mb-4">Despite adopting various sales promotion techniques, real estate organizations often face challenges such as low customer conversion rates, delayed purchasing decisions, and high marketing costs. Customers may be aware of promotional activities, but this awareness does not always translate into actual purchases.</p>
        <p className="mb-4">In the case of S.I.S, it becomes necessary to examine whether the sales promotion techniques currently adopted are effective in reaching the target audience and influencing their buying behavior. The problem addressed in this study can be stated as follows:</p>
        <p className="text-xl font-serif text-slate-900 italic my-6">"To assess the effectiveness of sales promotion techniques used by S.I.S and to analyze their impact on customer awareness, preference, and purchase decision-making."</p>
        <p>The study seeks to identify gaps in existing promotional strategies and understand customer responses to various promotional tools used by the organization.</p>
      </section>
    </div>
  );
}

export function Chapter1Page3() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">1.4</span> Objectives of the Study
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 text-white p-6 rounded-sm print:bg-white print:text-slate-900 print:border-2 print:border-slate-900">
            <h3 className="text-xl font-serif text-amber-500 mb-4 print:text-slate-900">Primary Objective</h3>
            <p className="font-light print:text-slate-900">To study and analyze the sales promotion techniques adopted by S.I.S.</p>
          </div>
          <div className="bg-stone-100 p-6 rounded-sm">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Secondary Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">1.</span> To understand the role of sales promotion in the real estate industry.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">2.</span> To identify various promotional tools used by S.I.S.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">3.</span> To assess the level of customer awareness regarding promotional activities.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">4.</span> To analyze customer perception towards different sales promotion techniques.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">5.</span> To evaluate the effectiveness of promotional strategies in influencing purchase decisions.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">6.</span> To identify challenges faced by customers related to promotional practices.</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">7.</span> To provide suitable suggestions for improving the sales promotion strategies of S.I.S.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">1.5</span> Scope of the Study
        </h2>
        <p className="mb-4">The scope of the study is confined to the analysis of sales promotion techniques adopted by S.I.S (South India Shelters Pvt. Ltd.). The study focuses on understanding the promotional methods used to market residential apartments and plotted developments offered by the company.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Study of advertising, digital marketing, offers, discounts, and promotional events.</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Analysis of customer awareness and perception regarding sales promotions.</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Interaction with customers and prospects of S.I.S projects.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">1.6</span> Limitations of the Study
        </h2>
        <div className="bg-stone-50 p-6 rounded-sm border border-stone-200">
          <ol className="space-y-2 list-decimal list-inside marker:text-amber-500 marker:font-bold">
            <li>The study is based on a limited sample size, which may restrict generalization of results.</li>
            <li>Responses collected from respondents may be biased or subjective.</li>
            <li>Time constraints limited detailed analysis of all promotional strategies.</li>
            <li>Confidential information related to marketing expenditure and sales performance was not accessible.</li>
            <li>The study focuses only on S.I.S and does not compare promotional practices with other real estate developers.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default function Chapter1() {
  return (
    <>
      <Chapter1Page1 />
      <Chapter1Page2 />
      <Chapter1Page3 />
    </>
  );
}
