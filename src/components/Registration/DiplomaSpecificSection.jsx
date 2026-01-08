import { BookmarkIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function DiplomaSpecificSection({ formData, handleInputChange, errors }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <AcademicCapIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">معلومات الدبلوم الإضافية</h2>
          <p className="text-gray-600">الرجاء ملء المعلومات الخاصة ببرنامج الدبلوم</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Prior Experience */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            هل لديك خبرة سابقة في المجال؟ *
          </label>
          <div className="relative">
            <select
              name="priorExperience"
              value={formData.priorExperience || ''}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.priorExperience ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
            >
              <option value="">اختر من فضلك</option>
              <option value="none">لا توجد خبرة</option>
              <option value="less-than-1">أقل من سنة</option>
              <option value="1-3">1-3 سنوات</option>
              <option value="more-than-3">أكثر من 3 سنوات</option>
            </select>
          </div>
          {errors.priorExperience && (
            <p className="text-red-500 text-sm mt-2">{errors.priorExperience}</p>
          )}
        </div>

        {/* Career Goals */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            أهدافك المهنية *
          </label>
          <div className="relative">
            <textarea
              name="careerGoals"
              value={formData.careerGoals || ''}
              onChange={handleInputChange}
              className={`w-full pr-4 pl-4 py-3.5 rounded-xl border ${
                errors.careerGoals ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder="اشرح أهدافك المهنية..."
              rows="4"
            />
          </div>
          {errors.careerGoals && (
            <p className="text-red-500 text-sm mt-2">{errors.careerGoals}</p>
          )}
        </div>

        {/* Preferred Study Schedule */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            الجدول الدراسي المفضل *
          </label>
          <div className="space-y-2">
            {[
              { value: 'fulltime', label: 'دوام كامل' },
              { value: 'parttime', label: 'دوام جزئي' },
              { value: 'weekend', label: 'أيام نهاية الأسبوع' }
            ].map(option => (
              <label key={option.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="studySchedule"
                  value={option.value}
                  checked={formData.studySchedule === option.value}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.studySchedule && (
            <p className="text-red-500 text-sm mt-2">{errors.studySchedule}</p>
          )}
        </div>

        {/* Financial Support */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            هل تحتاج إلى دعم مالي؟ *
          </label>
          <div className="relative">
            <select
              name="financialSupport"
              value={formData.financialSupport || ''}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.financialSupport ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
            >
              <option value="">اختر من فضلك</option>
              <option value="no">لا أحتاج دعم مالي</option>
              <option value="partial">دعم جزئي</option>
              <option value="full">دعم كامل</option>
              <option value="scholarship">منحة دراسية</option>
            </select>
          </div>
          {errors.financialSupport && (
            <p className="text-red-500 text-sm mt-2">{errors.financialSupport}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiplomaSpecificSection;
