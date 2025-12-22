import { ChevronRightIcon } from '@heroicons/react/24/outline';

  function FAQSection({ program }) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            الأسئلة الشائعة
          </h2>
        
        <div className="space-y-4">
          {program.faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button className="w-full text-right p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500 transform rotate-180" />
              </button>
              <div className="p-6 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">لديك سؤال آخر؟</p>
          <button className="px-8 py-3 border-2 border-[#202C5B] text-[#202C5B] rounded-xl font-bold hover:bg-[#202C5B] hover:text-white transition-all duration-300">
            تواصل معنا
          </button>
        </div>
      </div>
    </section>
  );
  }
  
  export default FAQSection;