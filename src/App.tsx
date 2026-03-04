import { useState } from 'react';
import { Building2, Printer, FileText, X, Download, Loader2, BookOpen, Globe } from 'lucide-react';
import { Chapter1Page1, Chapter1Page2, Chapter1Page3 } from './components/Chapter1';
import { Chapter2Page1, Chapter2Page2, Chapter2Page3 } from './components/Chapter2';
import { Chapter3Page1, Chapter3Page2 } from './components/Chapter3';
import { Chapter4Page1, Chapter4Page2, Chapter4Page3 } from './components/Chapter4';
import { Chapter5Page1, Chapter5Page2, Chapter5Page3, Chapter5Page4 } from './components/Chapter5';
import { Chapter6Page1, Chapter6Page2, Chapter6Page3 } from './components/Chapter6';

export default function App() {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => {
    try {
      if (window.self !== window.top) {
        setShowPrintModal(true);
      } else {
        window.print();
      }
    } catch (e) {
      setShowPrintModal(true);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);

    window.scrollTo(0, 0);

    try {
      const html2canvas = (await import('html2canvas-pro')).default;
      const { jsPDF } = await import('jspdf');
      
      const element = document.getElementById('report-content');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200 // Ensure desktop layout
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const margin = 15;
      const contentWidth = pdfWidth - (margin * 2);
      const contentHeight = pdfHeight - (margin * 2) - 10; // 10mm for footer
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const imgHeightInPdf = (canvasHeight * contentWidth) / canvasWidth;
      
      let heightLeft = imgHeightInPdf;
      let position = 0;
      let page = 1;
      
      const totalPages = Math.ceil(imgHeightInPdf / contentHeight);

      // Page 1
      pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, imgHeightInPdf);
      
      // Cover bottom margin for footer
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, pdfHeight - margin - 10, pdfWidth, margin + 10, 'F');
      
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text(`Page 1 of ${totalPages}`, pdfWidth - margin - 20, pdfHeight - 10);
      pdf.text('Internship Project Report - S.I.S', margin, pdfHeight - 10);
      
      heightLeft -= contentHeight;
      
      // Subsequent pages
      while (heightLeft > 0) {
        position -= contentHeight;
        pdf.addPage();
        
        pdf.addImage(imgData, 'JPEG', margin, margin + position, contentWidth, imgHeightInPdf);
        
        // Cover top margin
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pdfWidth, margin, 'F');
        
        // Cover bottom margin
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, pdfHeight - margin - 10, pdfWidth, margin + 10, 'F');
        
        page++;
        pdf.setFontSize(10);
        pdf.setTextColor(150);
        pdf.text(`Page ${page} of ${totalPages}`, pdfWidth - margin - 20, pdfHeight - 10);
        pdf.text('Internship Project Report - S.I.S', margin, pdfHeight - 10);
        
        heightLeft -= contentHeight;
      }

      pdf.save('Internship_Project_Report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try the Print option instead.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderCover = () => (
    <div className="relative flex flex-col items-center justify-center bg-white h-full min-h-[1130px] print:h-screen">
      <div className="absolute inset-0 z-0 print:hidden overflow-hidden">
        <img 
          src="https://picsum.photos/seed/luxury-real-estate/1920/1080" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto border-8 border-double border-slate-900 p-12 md:p-24 bg-[#ffffffF2] print:bg-white print:border-none print:p-0 w-full md:w-4/5">
        <Building2 className="w-20 h-20 text-amber-500 mx-auto mb-8" />
        <p className="text-amber-600 font-semibold tracking-[0.2em] uppercase text-lg mb-6">Internship Project Report</p>
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">Sales Promotion Techniques <br/>in Real Estate</h1>
        <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
        <p className="text-slate-600 text-xl md:text-2xl font-light mb-16">A comprehensive study on the effectiveness of promotional strategies</p>
        
        <div className="mt-12 text-left inline-block border-t border-slate-200 pt-8">
          <p className="text-slate-500 uppercase tracking-widest text-sm mb-2">Prepared For:</p>
          <p className="text-2xl font-serif text-slate-900">South India Shelters Pvt. Ltd. (S.I.S)</p>
          <p className="text-slate-500 mt-2">Chennai, India</p>
        </div>
      </div>
    </div>
  );

  const renderTOC = () => (
    <div className="max-w-4xl mx-auto bg-white h-full print:py-12">
      <h2 className="text-4xl font-serif text-slate-900 mb-12 text-center">Table of Contents</h2>
      <div className="space-y-6 text-lg font-light text-slate-700 max-w-2xl mx-auto">
        {[
          { id: 1, title: 'Introduction' },
          { id: 2, title: 'Literature Review' },
          { id: 3, title: 'Industry and Company Profile' },
          { id: 4, title: 'Research Methodology' },
          { id: 5, title: 'Data Analysis' },
          { id: 6, title: 'Findings, Suggestions & Conclusion' },
        ].map((chapter) => (
          <div key={chapter.id} className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="flex items-center gap-4">
              <span className="text-amber-500 font-serif font-bold text-xl">{chapter.id}.</span>
              <span>{chapter.title}</span>
            </span>
            <FileText className="w-4 h-4 text-slate-300 print:hidden" />
          </div>
        ))}
      </div>
    </div>
  );

  const pages = [
    { id: 'cover', content: renderCover(), isCover: true },
    { id: 'toc', content: renderTOC(), isCover: false },
    { id: 'ch1-1', content: <Chapter1Page1 />, isCover: false },
    { id: 'ch1-2', content: <Chapter1Page2 />, isCover: false },
    { id: 'ch1-3', content: <Chapter1Page3 />, isCover: false },
    { id: 'ch2-1', content: <Chapter2Page1 />, isCover: false },
    { id: 'ch2-2', content: <Chapter2Page2 />, isCover: false },
    { id: 'ch2-3', content: <Chapter2Page3 />, isCover: false },
    { id: 'ch3-1', content: <Chapter3Page1 />, isCover: false },
    { id: 'ch3-2', content: <Chapter3Page2 />, isCover: false },
    { id: 'ch4-1', content: <Chapter4Page1 />, isCover: false },
    { id: 'ch4-2', content: <Chapter4Page2 />, isCover: false },
    { id: 'ch4-3', content: <Chapter4Page3 />, isCover: false },
    { id: 'ch5-1', content: <Chapter5Page1 />, isCover: false },
    { id: 'ch5-2', content: <Chapter5Page2 />, isCover: false },
    { id: 'ch5-3', content: <Chapter5Page3 />, isCover: false },
    { id: 'ch5-4', content: <Chapter5Page4 />, isCover: false },
    { id: 'ch6-1', content: <Chapter6Page1 />, isCover: false },
    { id: 'ch6-2', content: <Chapter6Page2 />, isCover: false },
    { id: 'ch6-3', content: <Chapter6Page3 />, isCover: false },
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-amber-200 print:bg-white bg-stone-200">
      {/* Top Bar - Hidden in Print */}
      <header className="bg-slate-900 text-white py-4 px-6 md:px-12 flex flex-wrap justify-between items-center gap-4 print:hidden sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <Building2 className="w-7 h-7 text-amber-500" />
          <span className="text-xl font-serif font-bold tracking-widest uppercase">S.I.S</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto">
          <button 
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-[#ffffff1a] hover:bg-[#ffffff33] text-white px-4 py-2 rounded-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            <span className="hidden sm:inline">{isGenerating ? 'Generating...' : 'Download PDF'}</span>
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2 rounded-sm font-bold transition-colors shadow-lg whitespace-nowrap"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print Report</span>
          </button>
        </div>
      </header>

      <div id="report-content" className="py-8 md:py-12 px-4">
        <div className="space-y-12">
          {pages.map((page, index) => (
            <div key={page.id} className="pdf-page-break w-full max-w-[800px] mx-auto bg-white shadow-2xl relative min-h-[1130px] flex flex-col print:shadow-none print:mb-0 print:break-after-page">
              <div className={`flex-grow ${page.isCover ? '' : 'p-10 md:p-16 pb-24'}`}>
                {page.content}
              </div>
              <div className="absolute bottom-8 left-12 right-12 flex justify-between text-sm text-slate-400 font-sans border-t border-slate-100 pt-4 print:hidden">
                <span>Internship Project Report - S.I.S</span>
                <span>Page {index + 1} of {pages.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer - Hidden in Print */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm print:hidden">
        <Building2 className="w-8 h-8 text-amber-500 mx-auto mb-4 opacity-50" />
        <p className="tracking-widest uppercase mb-2">South India Shelters Pvt. Ltd.</p>
        <p>&copy; 2026 Internship Project Report. All rights reserved.</p>
      </footer>

      {/* Print Modal for iFrame */}
      {showPrintModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a99] backdrop-blur-sm px-4 print:hidden">
          <div className="bg-white p-8 rounded-sm shadow-2xl max-w-md w-full relative border-t-4 border-amber-500">
            <button 
              onClick={() => setShowPrintModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-serif text-slate-900 mb-4">Print Restricted</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Because this app is running inside a preview window, direct printing is blocked by your browser's security settings.
            </p>
            <div className="bg-stone-50 p-4 rounded-sm border border-stone-200 mb-6">
              <p className="text-slate-900 font-medium mb-2">How to print with page numbers:</p>
              <ol className="list-decimal list-inside text-slate-600 space-y-2 text-sm">
                <li>Click the <strong>"Open in New Tab"</strong> button (usually an arrow icon <span className="inline-block rotate-45 font-bold">↗</span> in the top right of this preview panel).</li>
                <li>Once opened in a new tab, press <kbd className="bg-white px-2 py-1 rounded border border-stone-300 shadow-sm font-sans text-xs">Ctrl + P</kbd> (or <kbd className="bg-white px-2 py-1 rounded border border-stone-300 shadow-sm font-sans text-xs">Cmd + P</kbd> on Mac).</li>
                <li><strong>Important:</strong> Expand <strong>"More settings"</strong> in the print dialog and check <strong>"Headers and footers"</strong> to ensure page numbers are printed.</li>
              </ol>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => setShowPrintModal(false)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-sm font-bold transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
