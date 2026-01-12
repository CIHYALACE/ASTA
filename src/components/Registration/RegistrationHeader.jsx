import { DocumentCheckIcon, EnvelopeIcon, CheckCircleIcon, ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function RegistrationHeader({ selectedProgram , lang , t}) {
  const isRTL = lang === 'ar';
  return (
    <div className="relative bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-16">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 border-t-[120px] border-r-[120px] border-t-white border-r-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border-b-[180px] border-l-[180px] border-b-white border-l-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>{isRTL ? 'العودة' : 'Back'}</span>
        </button>
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <DocumentCheckIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{isRTL ? 'تسجيل في البرنامج' : 'Register for the program'}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] to-[#FF9E6D]">
              {t('registration.title.1')}
            </span>
            {t('registration.title.2')}
          </h1>
          
          <p className="text-xl text-blue-100 mb-8">
            {t('registration.subtitle.1')} 
            <span className="font-bold text-[#FFD166]"> {t('registration.subtitle.2')}</span>
          </p>
          
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">{t('registration.security.1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">{t('registration.security.2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">{t('registration.security.3')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationHeader;