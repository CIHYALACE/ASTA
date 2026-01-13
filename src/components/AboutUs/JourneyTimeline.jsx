import React from 'react';

const JourneyTimeline = ({lang}) => {
    const isRTL = lang === 'ar';
  return (
 <section className="py-16 bg-white">
        <div className="mx-10 px-4 md:px-6">
            <div className="text-center mb-10 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 py-3 relative" dir={isRTL ? 'rtl' : 'ltr'}>
                    {isRTL ? "أكاديميـــــة المهارات التطبيقية" : "Academy of Applied Skills"}
                    {isRTL ? "رحلــة متكاملة لـ التأهيل المهني" : "Comprehensive Journey for Professional Development"}

                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            {/* <!-- Timeline --> */}
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute right-1/2 top-0 bottom-0 w-1 timeline-line transform translate-x-1/2 hidden md:block"></div>
                <div className="flex mb-16 timeline-item relative">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 gradient-border transition-all-custom hover:shadow-2xl hover-lift gradient-border animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white  shadow-lg flex items-center justify-center z-10 border-4 gradient-border">
                                <i className={lang === 'ar' ? "fas fa-seedling text-2xl gradient-text" : "fas fa-seedling text-2xl gradient-text"}></i>
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">{isRTL ? "بداية الرحلة" : "Start of the Journey"}</h3>
                            <p className="text-gray-600 leading-relaxed">
                            {isRTL ? `رحلتك مع أكاديمية المهارات التطبيقية لا تبدأ وتنتهي بدورة واحدة، بل هي مسار متدرج يرافقك 
                            خطوة بخطوة نحو مستقبل مهني واعد. تبدأ أولى محطاتك بدورات احترافية قصيرة مدعومة من 
                            صندوق الموارد البشرية (هدف)، تمنحك شهادات مهنية معتمدة تفتح لك أبواب العمل بثقة.`
                            :`Your journey with Academy of Applied Skills doesn't begin and end with one course,
                             but it is a progressive path that accompanies you step by step towards a professional future.
                              Your first stages begin with professional courses, supported by the Human Resources Fund (Goal),
                               giving you professional certificates that open doors to employment with confidence.`}
                           
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

                <div className="flex mb-16 timeline-item relative">
                    <div className="hidden md:flex w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 gradient-border transition-all-custom hover:shadow-2xl hover-lift gradient-border animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <div className="absolute -left-9 md:-left-10 top-8 w-16 h-16 bg-white  shadow-lg flex items-center justify-center z-10 border-4 gradient-border">
                                <i className="fas fa-rocket text-2xl gradient-text"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">{isRTL ? "البرامج الاحترافية" : "Professional Programs"}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {isRTL ? `من هناك تنتقل إلى مرحلة متقدمة عبر برامج الدبلوم، حيث تجمع بين التخصص أكاديمي والشهادة 
                                المهنية، لتحصل على تأهيل مزدوج يعزز مكانتك ويمنحك ميزة تنافسية قوية .` 
                                : `From there, you move to an advanced stage through diploma programs, where it combines academic specialization with the certificate,
                                 giving you a dual training that enhances your position and provides you with a competitive advantage.`}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- 2019 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 gradient-border transition-all-custom hover:shadow-2xl hover-lift gradient-border animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white  shadow-lg flex items-center justify-center z-10 border-4 gradient-border">
                                <i className="fas fa-network-wired text-2xl gradient-text"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">{isRTL ? "البكالوريوس" : "Bachelor's Degree"}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {isRTL ? `لكن الرحلة لا تتوقف عند هذا الحد؛ فأكاديمية تتيح لك مواصلة مسيرتك التعليمية نحو 
                                البكالوريوس، عبر شراكتها الاستراتيجية مع جامعة العلوم التطبيقية الخاصة بالمملكة الأردنية
                                الهاشمية، لتصل إلى أعلى درجات التميز في تخصصات مطلوبة من خلال رحلة تضمن لك النمو 
                                المستمر من دورة احترافية تؤهلك لاجتياز الاختبار المهني لتوائم حسب تخصصك إلى دبلوم 
                                متوسط، ليساعدك للحصول على درجة البكالوريوس .` : `But the journey doesn't stop at this point; Academy allows you to continue your educational journey towards 
                                a bachelor's degree, through its strategic partnership with the Applied Sciences University 
                                of Jordan, to reach the highest levels of excellence in required fields through a journey 
                                that ensures your continuous growth from a professional course that prepares you to pass 
                                the professional exam for your field to an average diploma, helping you obtain a bachelor's degree.`}
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default JourneyTimeline;