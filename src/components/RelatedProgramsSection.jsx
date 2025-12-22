  import { CheckCircleIcon, BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/solid';
  
  function RelatedProgramsSection() {
    const relatedPrograms = [
      { title: "دبلوم الذكاء الاصطناعي", category: "برامج متقدمة", price: "18,000 ر.س", duration: "8 أشهر" },
      { title: "تحليل البيانات باستخدام Python", category: "برامج تقنية", price: "12,000 ر.س", duration: "6 أشهر" },
      { title: "إدارة مشاريع البيانات", category: "برامج إدارية", price: "15,000 ر.س", duration: "5 أشهر" }
    ];

    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-['Noto_Naskh_Arabic'] text-center">
            برامج ذات صلة
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {program.category}
                  </span>
                  <span className="text-gray-500 text-sm">{program.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{program.title}</h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-[#202C5B]">{program.price}</div>
                  <button className="text-[#202C5B] font-medium hover:text-[#1a2448] transition-colors">
                    عرض التفاصيل
                  </button>
                </div>
                
                <button className="w-full py-3 border border-[#202C5B] text-[#202C5B] rounded-xl font-medium hover:bg-[#202C5B] hover:text-white transition-colors">
                  سجل الآن
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
