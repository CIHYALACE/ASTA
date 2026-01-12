import { BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function ProgramTypeSelector({ programType, handleProgramTypeChange , t, lang}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <BookOpenIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{t('registration.programSelection.title')}</h2>
          <p className="text-gray-600">{t('registration.programSelection.description')}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Course Option */}
        <button
          type="button"
          onClick={() => handleProgramTypeChange('course')}
          className={`p-6 rounded-xl border-2 transition-all duration-300 text-right ${
            programType === 'course'
              ? 'border-[#23A0D0] bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${
              programType === 'course' ? 'bg-[#23A0D0]' : 'bg-gray-100'
            }`}>
              <BookOpenIcon className={`h-6 w-6 ${
                programType === 'course' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
            <div>
              <h3 className="text-start text-lg font-bold text-gray-800 mb-2">{t('header.nav.courses')}</h3>
              <p className="text-gray-600 text-sm">
                {t('courses.selection.description')}
              </p>
              {/* <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  1-3 أشهر
                </span>
              </div> */}
            </div>
          </div>
        </button>

        {/* Diploma Option */}
        <button
          type="button"
          onClick={() => handleProgramTypeChange('diploma')}
          className={`p-6 rounded-xl border-2 transition-all duration-300 text-right ${
            programType === 'diploma'
              ? 'border-[#23A0D0] bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${
              programType === 'diploma' ? 'bg-[#23A0D0]' : 'bg-gray-100'
            }`}>
              <AcademicCapIcon className={`h-6 w-6 ${
                programType === 'diploma' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t('header.nav.diplomas')}</h3>
              <p className="text-gray-600 text-sm">
                {t('diplomas.selection.description')}
              </p>
              {/* <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  6-24 شهر
                </span>
              </div> */}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProgramTypeSelector;
