  import { CheckCircleIcon } from '@heroicons/react/24/outline';
  
  function OverviewSection({ program }) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-r-4 border-[#202C5B] pr-4">
            نظرة عامة
          </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {program.overview}
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">أهداف البرنامج</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-[#23A0D0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">معلومات البرنامج</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">المدة</span>
                  <span className="font-bold text-gray-800">{program.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">المستوى</span>
                  <span className="font-bold text-gray-800">{program.level}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">أيام الدراسة</span>
                  <span className="font-bold text-gray-800">{program.schedule.days.join('، ')}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">التوقيت</span>
                  <span className="font-bold text-gray-800">{program.schedule.time}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">نظام الدراسة</span>
                  <span className="font-bold text-gray-800">{program.schedule.mode}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-[#202C5B] text-white py-3 rounded-xl font-bold hover:bg-[#1a2448] transition-colors">
                تحميل المنهج الكامل
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
  
  export default OverviewSection;