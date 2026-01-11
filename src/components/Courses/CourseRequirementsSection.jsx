import { CheckCircleIcon, BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import { getCourseData } from '../../api/Courses';

function RequirementsSection({ course }) {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedCourse = getCourseData(course, lang);
  const requirements = Array.isArray(localizedCourse?.requirements)
    ? localizedCourse.requirements
    : [];
  const benefits = Array.isArray(localizedCourse?.benefits)
    ? localizedCourse.benefits
    : [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 ${isRTL ? 'border-r-4 border-[#30AFC1] pr-4' : 'border-l-4 border-[#30AFC1] pl-4'}`}>
              {isRTL ? 'متطلبات القبول' : 'Requirements'}
            </h2>
            
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#30AFC1] text-white flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 ${isRTL ? 'border-r-4 border-[#3CBEB3] pr-4' : 'border-l-4 border-[#3CBEB3] pl-4'}`}>
              {isRTL ? 'مزايا البرنامج' : 'Program Benefits'}
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircleIcon className="h-6 w-6 text-[#3CBEB3] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-[#30AFC1] to-[#3CBEB3] rounded-2xl p-6 text-white">
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <BuildingOfficeIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">{isRTL ? 'دعم التوظيف' : 'Employment Support'}</h3>
              </div>
              <p className="mb-4">{isRTL ? 'نوفر لك دعم كامل في إعداد السيرة الذاتية، التدريب على المقابلات الشخصية، وتوصيلك بشركات رائدة في المجال.' : 'We offer you full support in preparing your resume, training for personal interviews, and connecting you with leading companies in the field.'}</p>
              <button className="flex items-center gap-2 text-white hover:text-gray-100">
                <PhoneIcon className="h-5 w-5" />
                <span>{isRTL ? 'تواصل مع مستشار التوظيف' : 'Contact employment advisor'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;