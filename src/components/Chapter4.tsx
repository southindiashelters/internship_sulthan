import { CheckSquare, Database, Users, FileText, BarChart2, ArrowDown } from 'lucide-react';

export function Chapter4Page1() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Research Methodology</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </header>
      
      <img src="https://picsum.photos/seed/realestate-research/1200/600" alt="Research Data" className="w-full h-[200px] object-cover rounded-sm shadow-lg mb-8 print:hidden" referrerPolicy="no-referrer" />

      {/* Visual Flowchart */}
      <div className="my-8 p-6 bg-slate-900 rounded-sm text-white print:bg-white print:text-slate-900 print:border-2 print:border-slate-900 print:break-inside-avoid">
        <h3 className="text-xl font-serif text-amber-500 mb-6 text-center print:text-slate-900">Methodology Flow</h3>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-4 w-full max-w-md bg-[#ffffff1a] p-3 rounded-sm print:bg-stone-50 print:border print:border-stone-200">
            <FileText className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-base">1. Research Design</h4>
              <p className="text-xs text-slate-300 print:text-slate-600">Descriptive Research</p>
            </div>
          </div>
          <ArrowDown className="w-5 h-5 text-amber-500" />
          <div className="flex items-center gap-4 w-full max-w-md bg-[#ffffff1a] p-3 rounded-sm print:bg-stone-50 print:border print:border-stone-200">
            <Database className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-base">2. Data Sources</h4>
              <p className="text-xs text-slate-300 print:text-slate-600">Primary & Secondary Data</p>
            </div>
          </div>
          <ArrowDown className="w-5 h-5 text-amber-500" />
          <div className="flex items-center gap-4 w-full max-w-md bg-[#ffffff1a] p-3 rounded-sm print:bg-stone-50 print:border print:border-stone-200">
            <Users className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-base">3. Sampling</h4>
              <p className="text-xs text-slate-300 print:text-slate-600">Convenience Sampling (n=100)</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">4.1</span> Research Design
        </h2>
        <p className="mb-4">Research design refers to the overall plan and structure adopted for conducting the research study. It provides a framework for collecting, measuring, and analyzing data in order to answer the research questions effectively. A well-defined research design ensures that the study is systematic, logical, and reliable.</p>
        <p>The present study follows a <strong className="text-slate-900 font-semibold">descriptive research design</strong>. Descriptive research is used to describe characteristics of a population or phenomenon being studied. This design is appropriate for the study as it aims to analyze the sales promotion techniques adopted by South India Shelters Pvt. Ltd. and understand customer awareness, perception, and satisfaction related to these techniques.</p>
      </section>
    </div>
  );
}

export function Chapter4Page2() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg print:break-inside-avoid">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">4.2 Hypothesis</h2>
        <p className="mb-4">A hypothesis is a tentative assumption or statement that is tested through research. It establishes a relationship between variables and guides the research process. Hypothesis formulation helps in systematic analysis and interpretation of data.</p>
        <p className="mb-4">For the present study, the following hypotheses have been framed:</p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <CheckSquare className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <span><strong className="text-slate-900 font-semibold">Null Hypothesis (H₀):</strong> Sales promotion techniques adopted by S.I.S do not have a significant impact on customer purchase decisions.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckSquare className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <span><strong className="text-slate-900 font-semibold">Alternative Hypothesis (H₁):</strong> Sales promotion techniques adopted by S.I.S have a significant impact on customer purchase decisions.</span>
          </li>
        </ul>
        <p>These hypotheses are tested using appropriate data analysis techniques to understand the effectiveness of sales promotion strategies.</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">4.3</span> Sources of Data
        </h2>
        <p className="mb-6">Data is the foundation of any research study. The accuracy and reliability of research findings depend on the quality of data collected. The present study uses both <strong className="text-slate-900 font-semibold">primary and secondary data</strong> sources to ensure comprehensive analysis.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6 print:break-inside-avoid">
          <div className="bg-slate-900 text-white p-6 rounded-sm print:bg-white print:text-slate-900 print:border-2 print:border-slate-900">
            <h4 className="text-xl font-serif text-amber-500 mb-4 print:text-slate-900">Primary Data</h4>
            <p className="font-light text-slate-300 print:text-slate-900 text-sm">Primary data refers to data collected for the first time directly from respondents. In this study, primary data was collected from customers of South India Shelters Pvt. Ltd. through a structured questionnaire. The questionnaire was designed to capture information related to customer awareness, perception, satisfaction, and the influence of sales promotion techniques on purchase decisions.</p>
          </div>
          <div className="border border-stone-200 p-6 rounded-sm">
            <h4 className="text-xl font-serif text-slate-900 mb-4">Secondary Data</h4>
            <p className="font-light text-sm">Secondary data refers to data that has already been collected and published by other sources. Secondary data for the study was collected from company records, websites, journals, books, research articles, magazines, and online sources related to sales promotion and real estate marketing. Secondary data helped in understanding the theoretical background and industry trends.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">4.4</span> Population
        </h2>
        <p className="mb-4">Population refers to the total group of individuals or elements relevant to the research study. The population for the present study consists of <strong className="text-slate-900 font-semibold">customers and potential customers of South India Shelters Pvt. Ltd.</strong> who have shown interest in purchasing residential properties offered by the company.</p>
        <p>Since it is not feasible to study the entire population due to time and resource constraints, a sample was selected from the population for the purpose of the study.</p>
      </section>
    </div>
  );
}

export function Chapter4Page3() {
  return (
    <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">4.5</span> Sample Design
        </h2>
        <p className="mb-4">Sample design refers to the method used for selecting a representative subset of the population. A proper sample design ensures that the findings of the study are reliable and can be generalized to a certain extent.</p>
        <p className="mb-6">The sample for the present study was selected based on accessibility and willingness of respondents to participate. Customers who had interacted with the sales team or visited project sites of S.I.S were included in the sample.</p>
        
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">4.5.1 Sampling Method</h3>
            <p className="mb-4">The study adopted the <strong className="text-slate-900 font-semibold">convenience sampling method</strong>. Convenience sampling is a non-probability sampling technique where respondents are selected based on ease of access and availability. This method was chosen due to limited time and practical constraints.</p>
            <p>Although convenience sampling may have certain limitations, it is widely used in descriptive studies and provides useful insights into customer behavior and perception.</p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">4.5.2 Sample Size</h3>
            <p className="mb-4">The sample size selected for the study consists of <strong className="text-slate-900 font-semibold">100 respondents</strong>. The sample size was considered adequate to understand customer perception regarding sales promotion techniques adopted by S.I.S.</p>
            <p>A manageable sample size helped in effective data collection and analysis within the stipulated time period.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 flex items-center gap-4">
          <span className="text-amber-500 text-3xl md:text-4xl">4.6</span> Method of Data Collection
        </h2>
        <p className="mb-4">Data collection refers to the process of gathering information required for the research study. In the present study, data was collected primarily through a <strong className="text-slate-900 font-semibold">structured questionnaire</strong>.</p>
        <p className="mb-4">The questionnaire included both close-ended and multiple-choice questions related to:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Awareness of sales promotion techniques</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Sources of information about promotional offers</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Customer satisfaction with promotional strategies</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Influence of sales promotion on purchase decision</li>
        </ul>
        <p>The questionnaire was administered directly to respondents to ensure clarity and accuracy of responses.</p>
      </section>

      <section className="bg-stone-50 p-8 border-l-4 border-amber-500 rounded-r-lg print:break-inside-avoid">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">4.7 Data Analysis Techniques</h2>
        <p className="mb-4">Data analysis involves organizing, interpreting, and summarizing the collected data to derive meaningful conclusions. The data collected through questionnaires was classified, tabulated, and analyzed using appropriate statistical tools.</p>
        <p className="mb-4">The following techniques were used for data analysis:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Percentage analysis</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Tabulation</li>
          <li className="flex items-start gap-3"><CheckSquare className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Graphical representation using charts and diagrams</li>
        </ul>
        <p>Percentage analysis was used to simplify data interpretation and understand customer responses clearly. Graphs and tables were used to present data in an easily understandable manner, helping in effective comparison and analysis.</p>
      </section>
    </div>
  );
}

export default function Chapter4() {
  return (
    <>
      <Chapter4Page1 />
      <Chapter4Page2 />
      <Chapter4Page3 />
    </>
  );
}
