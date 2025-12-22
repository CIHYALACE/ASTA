import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

  function ProgramSelectionSection({ programs, formData, handleInputChange, handleServiceToggle, additionalServices, errors }) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <BookOpenIcon className="h-6 w-6 text-green-600" />
          </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">اختيار البرنامج</h2>
          <p className="text-gray-600">اختر البرنامج المناسب لك</p>
        </div>
      </div>
      
      <div className="mb-8">
        <label className="block text-gray-700 mb-4 font-medium">
          البرنامج التدريبي *
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {programs.map(program => (
            <div
              key={program.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                formData.selectedProgram === program.id
                  ? 'border-[#23A0D0] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleInputChange({ 
                target: { name: 'selectedProgram', value: program.id } 
              })}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  formData.selectedProgram === program.id
                    ? 'bg-[#23A0D0] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {formData.selectedProgram === program.id ? (
                    <CheckCircleIcon className="h-5 w-5" />
                  ) : (
                    <BookOpenIcon className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{program.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">{program.category}</span>
                    <span className="font-bold text-[#202C5B]">{program.price.toLocaleString()} ر.س</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {errors.selectedProgram && (
          <p className="text-red-500 text-sm mt-2">{errors.selectedProgram}</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-700 mb-4 font-medium">
          خدمات إضافية (اختياري)
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {additionalServices.map(service => (
            <div
              key={service.id}
              className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                formData.selectedServices.includes(service.id)
                  ? 'border-[#23A0D0] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleServiceToggle(service.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    formData.selectedServices.includes(service.id)
                      ? 'bg-[#23A0D0] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {formData.selectedServices.includes(service.id) ? (
                      <CheckCircleIcon className="h-5 w-5" />
                    ) : (
                      <div className="h-3 w-3 rounded border border-gray-400"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{service.name}</h3>
                    <span className="text-sm text-gray-600">{service.price.toLocaleString()} ر.س</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }

export default ProgramSelectionSection;