import { ClockIcon, ChevronRightIcon, DocumentTextIcon, TrophyIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { getCourseData } from '../api/Courses';

function CurriculumSection({ program }) {
  const { lang } = useParams();
  
  // Get localized program data
  const localizedProgram = getCourseData(program, lang);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800  border-r-4 border-[#226796] pr-4">
            المنهج الدراسي
          </h2>
          <div className="flex items-center gap-2 text-[#226796]">
            <ClockIcon className="h-5 w-5" />
            <span className="font-bold">180 ساعة تدريبية</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {localizedProgram.curriculum.map((semester, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white px-4 py-1 rounded-full">
                  {semester.semester}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <ClockIcon className="h-4 w-4" />
                  <span className="text-sm">{semester.courses ? semester.courses.length : 0} مواد</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{semester.semester}</h3>
              
              <div className="space-y-2">
                {semester.courses && semester.courses.map((course, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ChevronRightIcon className="h-4 w-4 text-[#23A0D0]" />
                    <span className="text-gray-600">{course}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">فيديو</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">تمارين</span>
                </div>
                <button className="text-[#226796] font-medium hover:text-[#1a4d7a] transition-colors">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                <VideoCameraIcon className="h-8 w-8 text-[#226796]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">محاضرات </h4>
              <p className="text-gray-600 text-sm">80+ ساعة تدريبية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                <DocumentTextIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">تمارين عملية</h4>
              <p className="text-gray-600 text-sm">50+ تمرين تطبيقي</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <TrophyIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">مشروع تخرج</h4>
              <p className="text-gray-600 text-sm">مشروع متكامل تحت الإشراف</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };

  export default CurriculumSection;