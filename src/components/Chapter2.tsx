export function Chapter2Page1() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Literature Review</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </header>
      
      <img src="https://picsum.photos/seed/realestate-literature/1200/600" alt="Architectural Plans" className="w-full h-[250px] object-cover rounded-sm shadow-lg mb-8 print:hidden" referrerPolicy="no-referrer" />

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">2.1</span> Review of Literature
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.1 Meaning and Concept of Sales Promotion</h3>
            <p className="mb-4">Sales promotion has been widely discussed in marketing literature as an important element of the promotional mix. It refers to short-term incentives and techniques used by organizations to stimulate customer interest and encourage immediate purchase. Unlike advertising, which focuses on creating long-term brand awareness, sales promotion aims to generate quick responses from potential customers by offering additional value.</p>
            <p>Marketing scholars such as Kotler and Keller describe sales promotion as a set of tools that include price discounts, special offers, rebates, contests, and value-added benefits. Literature emphasizes that sales promotion is particularly useful in competitive markets where customers are exposed to multiple alternatives with similar features and pricing.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.2 Importance of Sales Promotion in Marketing Strategy</h3>
            <p className="mb-4">Several studies highlight the importance of sales promotion as a strategic marketing tool. Researchers argue that sales promotion helps organizations increase sales volume, attract new customers, and retain existing customers. It plays a significant role in creating awareness about products and services and encouraging trial purchases.</p>
            <p>Literature also suggests that sales promotion supports other promotional tools such as advertising and personal selling. When used effectively, it strengthens marketing communication and enhances customer response. Sales promotion is considered an effective method to overcome customer hesitation, especially in high-value purchases.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Chapter2Page2() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <div className="space-y-8">
          <div className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg">
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.3 Impact of Sales Promotion on Consumer Buying Behaviour</h3>
            <p className="mb-4">Consumer behavior researchers have extensively studied the influence of sales promotion on purchase decisions. Studies indicate that promotional incentives create a sense of urgency and perceived savings, which positively affect buying intention. Customers often feel motivated to purchase when they believe they are receiving additional benefits or financial advantages.</p>
            <p>Literature points out that sales promotion reduces perceived risk and increases customer confidence. This is especially relevant in industries where purchase decisions involve emotional and financial considerations. Promotional offers help customers justify their purchase decisions by highlighting value and affordability.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.4 Sales Promotion Techniques in the Real Estate Sector</h3>
            <p className="mb-4">The real estate industry presents unique challenges due to high investment value, long decision-making periods, and intense competition. Researchers emphasize that traditional marketing methods alone are insufficient to influence property buyers. As a result, real estate developers adopt various sales promotion techniques to attract customers.</p>
            <p>Studies identify commonly used real estate promotion techniques such as price discounts, festive offers, flexible payment schemes, referral benefits, and waiver of additional charges. Literature reveals that these promotional strategies help reduce financial burden and encourage quicker decision-making among buyers.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.5 Role of Advertising and Digital Media</h3>
            <p className="mb-4">Advertising and digital media play a supportive role in enhancing the effectiveness of sales promotion. Researchers note that promotional schemes achieve greater impact when communicated through multiple channels such as newspapers, brochures, hoardings, websites, and social media platforms.</p>
            <p>Digital marketing has gained prominence in recent years, with studies highlighting its effectiveness in reaching a wider audience at a lower cost. Online promotions, social media advertisements, and virtual property tours help improve customer engagement and increase enquiry levels.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Chapter2Page3() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.6 Sales Promotion and Customer Satisfaction</h3>
            <p className="mb-4">Several studies examine the relationship between sales promotion and customer satisfaction. Researchers argue that well-designed promotional schemes enhance perceived value and improve overall customer experience. When customers feel that promotional offers are fair and beneficial, their satisfaction levels increase.</p>
            <p>Literature also highlights that satisfied customers are more likely to recommend the brand to others, leading to positive word-of-mouth promotion. In the real estate sector, customer satisfaction gained through effective sales promotion contributes to long-term brand loyalty and reputation.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">2.1.7 Ethical Considerations in Sales Promotion</h3>
            <p className="mb-4">Ethical practices in sales promotion have been emphasized by many researchers. Transparency, honesty, and compliance with regulatory norms are essential for maintaining customer trust. Literature warns that misleading or exaggerated promotional claims can result in dissatisfaction and loss of credibility.</p>
            <p>Researchers suggest that ethical sales promotion practices strengthen customer relationships and ensure sustainable business growth. In the long run, ethical promotions contribute to brand reliability and customer confidence.</p>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-sm print:bg-white print:text-slate-900 print:border-2 print:border-slate-900 mt-8">
            <h3 className="text-xl font-serif text-amber-500 mb-3 print:text-slate-900">2.1.8 Summary of Literature Review</h3>
            <p className="mb-4 font-light text-slate-300 print:text-slate-900">The review of literature reveals that sales promotion is a powerful marketing tool that significantly influences consumer behavior and purchase decisions. Previous studies establish that effective sales promotion techniques increase customer awareness, reduce purchase hesitation, and improve sales performance. The literature also highlights the importance of integrating sales promotion with advertising, digital marketing, and personal selling.</p>
            <p className="font-light text-slate-300 print:text-slate-900">These theoretical insights provide a strong foundation for the present study on sales promotion techniques adopted by S.I.S (South India Shelters Pvt. Ltd.) and help in evaluating their effectiveness in the competitive real estate market.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Chapter2() {
  return (
    <>
      <Chapter2Page1 />
      <Chapter2Page2 />
      <Chapter2Page3 />
    </>
  );
}
