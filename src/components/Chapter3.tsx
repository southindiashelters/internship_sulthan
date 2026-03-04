export function Chapter3Page1() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Industry and Company Profile</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </header>
      
      <img src="https://picsum.photos/seed/realestate-company/1200/600" alt="Corporate Building" className="w-full h-[250px] object-cover rounded-sm shadow-lg mb-8 print:hidden" referrerPolicy="no-referrer" />

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">3.1</span> Industry Profile
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Real Estate Industry Overview</h3>
            <p className="mb-4">The real estate industry plays a significant role in the economic development of a country. It contributes substantially to employment generation, infrastructure development, and overall economic growth. The industry includes residential, commercial, retail, and industrial properties, with the residential segment occupying a major share in developing economies like India.</p>
            <p>In recent years, the Indian real estate industry has witnessed rapid growth due to urbanization, population growth, rising income levels, and increased demand for housing. Government initiatives such as housing development schemes, infrastructure investments, and regulatory reforms have further strengthened the industry. The introduction of the Real Estate (Regulation and Development) Act (RERA) has improved transparency, accountability, and customer confidence in the sector.</p>
          </div>

          <div className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg">
            <h3 className="text-xl font-serif text-slate-900 mb-3">Characteristics of the Real Estate Industry</h3>
            <p className="mb-4">The real estate industry has several unique characteristics that differentiate it from other sectors. One of the most important features is the high capital investment involved in property purchases. Buying real estate is a long-term financial commitment, making customers more cautious and analytical in their decision-making process.</p>
            <p>Another key characteristic is the long sales cycle. Customers often take considerable time to evaluate various options based on location, price, amenities, reputation of the builder, and promotional offers. The industry is also highly competitive, with numerous developers offering similar projects, which increases the importance of marketing and sales promotion strategies.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Trends in the Indian Real Estate Industry</h3>
            <p className="mb-4">The Indian real estate industry has evolved significantly with the adoption of modern marketing and construction practices. Digitalization has transformed property promotion through online listings, virtual tours, social media marketing, and real estate portals. Customers increasingly rely on online information before visiting project sites.</p>
            <p>Sustainable construction, smart homes, and integrated townships are emerging trends in the industry. Buyers are now more conscious about quality, lifestyle features, and long-term value. These trends have compelled developers to innovate not only in construction but also in promotional strategies to attract customers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Chapter3Page2() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">3.2</span> Company Profile
        </h2>
        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-sm print:bg-white print:text-slate-900 print:border-2 print:border-slate-900">
            <h3 className="text-2xl font-serif text-amber-500 mb-4 print:text-slate-900">South India Shelters Pvt. Ltd. (S.I.S)</h3>
            <p className="mb-4 font-light text-slate-300 print:text-slate-900">South India Shelters Pvt. Ltd. (S.I.S) is a reputed real estate development company operating primarily in South India. The company is engaged in the development of residential apartments, villas, and plotted developments. Over the years, S.I.S has built a strong presence in the real estate market by focusing on quality construction, timely delivery, and customer satisfaction.</p>
            <p className="font-light text-slate-300 print:text-slate-900">S.I.S aims to provide affordable and value-driven housing solutions that meet the needs of modern homebuyers. The company emphasizes transparency, ethical business practices, and compliance with regulatory standards, which has helped in building trust among customers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-stone-200 p-6 rounded-sm">
              <h3 className="text-xl font-serif text-slate-900 mb-3 text-center">Vision</h3>
              <p className="text-center text-sm">The vision of South India Shelters Pvt. Ltd. is to become a trusted and preferred real estate developer by delivering high-quality residential projects that enhance the lifestyle of customers. The company strives to create sustainable and well-planned living spaces.</p>
            </div>
            <div className="border border-stone-200 p-6 rounded-sm">
              <h3 className="text-xl font-serif text-slate-900 mb-3 text-center">Mission</h3>
              <p className="text-center text-sm">The mission of S.I.S is to offer innovative housing solutions while maintaining quality, affordability, and customer-centric practices. The company focuses on continuous improvement, adoption of modern construction techniques, and effective marketing strategies to achieve its business objectives.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Products and Services Offered by S.I.S</h3>
            <p className="mb-4">South India Shelters Pvt. Ltd. offers a range of residential real estate products including apartments, villas, and plotted developments. The projects are designed to meet the needs of different customer segments, ranging from middle-income to premium buyers.</p>
            <p>In addition to construction and sales, the company provides customer support services related to documentation, site visits, and post-sales assistance. These services help customers throughout the buying process and contribute to a positive customer experience.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Marketing and Sales Promotion Practices at S.I.S</h3>
            <p className="mb-4">Sales promotion plays a vital role in the marketing strategy of South India Shelters Pvt. Ltd. The company uses a combination of traditional and digital promotional techniques to attract potential customers. Promotional activities include advertisements, brochures, site visit campaigns, festive offers, flexible payment schemes, and referral benefits.</p>
            <p>S.I.S also utilizes digital platforms such as social media and real estate portals to reach a wider audience. These promotional strategies are designed to increase customer awareness, generate enquiries, and influence purchase decisions in a competitive market.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Chapter3() {
  return (
    <>
      <Chapter3Page1 />
      <Chapter3Page2 />
    </>
  );
}
