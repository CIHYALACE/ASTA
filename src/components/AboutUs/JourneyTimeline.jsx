import React from 'react';

const JourneyTimeline = () => {
  const timelineItems = [
    {
      year: '٢٠١٥',
      icon: 'fas fa-seedling',
      title: 'بداية الرحلة',
      description: 'تأسيس الأكاديمية بمبادرة من خمسة خبراء في التعليم والتدريب المهني. بدأت برامجنا الأولى بتدريب ٣٠ متدربًا في مجال تطوير الويب والتسويق الرقمي.',
    },
    {
      year: '٢٠١٧',
      icon: 'fas fa-rocket',
      title: 'التوسع والتخصص',
      description: 'إطلاق أول برامج التخصص المهني المتقدمة. توسيع القاعدة التدريبية لتشمل ٨ تخصصات مهنية جديدة.',
    },
    {
      year: '٢٠١٩',
      icon: 'fas fa-network-wired',
      title: 'التحول الرقمي والشراكات',
      description: 'إطلاق المنصة التعليمية الإلكترونية بالكامل. عقد شراكات استراتيجية مع ١٢ شركة رائدة.',
    },
    {
      year: '٢٠٢١',
      icon: 'fas fa-award',
      title: 'الجودة والاعتماد',
      description: 'حصول الأكاديمية على اعتماد دولي من مجلس التدريب الأوروبي. فوزنا بجائزة التميز في التعليم المهني.',
    },
    {
      year: '٢٠٢٣',
      icon: 'fas fa-globe',
      title: 'الريادة والتأثير',
      description: 'توسيع نطاق العمل ليشمل ٤ دول عربية. تخطي حاجز ١٠٠٠٠ متدرب تخرجوا من برامجنا.',
    },
    {
      year: '٢٠٢٤',
      icon: 'fas fa-bullseye',
      title: 'الطموحات المستقبلية',
      description: 'الاستعداد لإطلاق برامج الذكاء الاصطناعي والتعلم الآلي. التخطيط لافتتاح فروع جديدة.',
    },
  ];

  return (
 <section className="py-16 bg-white">
        <div className="mx-10 px-4 md:px-6">
            <div className="text-center mb-10 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 py-3 relative">
                    أكاديميـــــة المهارات التطبيقية
رحلــة متكاملة لـ التأهيل المهني

                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            {/* <!-- Timeline --> */}
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute right-1/2 top-0 bottom-0 w-1 timeline-line transform translate-x-1/2 hidden md:block"></div>
                
                {/* <!-- 2015 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 gradient-border transition-all-custom hover:shadow-2xl hover-lift gradient-border animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white  shadow-lg flex items-center justify-center z-10 border-4 gradient-border">
                                <i className="fas fa-seedling text-2xl gradient-text"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">بداية الرحلة</h3>
                            <p className="text-gray-600 leading-relaxed">
                            رحلتك مع أكاديمية المهارات التطبيقية لا تبدأ وتنتهي بدورة واحدة، بل هي مسار متدرج يرافقك 
                            خطوة بخطوة نحو مستقبل مهني واعد. تبدأ أولى محطاتك بدورات احترافية قصيرة مدعومة من 
                            صندوق الموارد البشرية (هدف)، تمنحك شهادات مهنية معتمدة تفتح لك أبواب العمل بثقة.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

                {/* <!-- 2017 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="hidden md:flex w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 gradient-border transition-all-custom hover:shadow-2xl hover-lift gradient-border animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <div className="absolute -left-9 md:-left-10 top-8 w-16 h-16 bg-white  shadow-lg flex items-center justify-center z-10 border-4 gradient-border">
                                <i className="fas fa-rocket text-2xl gradient-text"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">البرامج الاحترافية </h3>
                            <p className="text-gray-600 leading-relaxed">
                            ومن هناك تنتقل إلى مرحلة متقدمة عبر برامج الدبلوم، حيث تجمع بين التخصص أكاديمي والشهادة 
                            هناك تنتقل إلى مرحلة متقدمة عبر برامج الدبلوم، حيث تجمع بين التخصص أكاديمي والشهادة 
                            المهنية، لتحصل على تأهيل مزدوج يعزز مكانتك ويمنحك ميزة تنافسية قوية .
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
                            <h3 className="text-2xl font-bold text-dark-blue mb-4 gradient-text">البكالوريوس  </h3>
                            <p className="text-gray-600 leading-relaxed">
                                لكن الرحلة لا تتوقف عند هذا الحد؛ فأكاديمية تتيح لك مواصلة مسيرتك التعليمية نحو 
                                البكالوريوس، عبر شراكتها الاستراتيجية مع جامعة العلوم التطبيقية الخاصة بالمملكة الأردنية
                                الهاشمية، لتصل إلى أعلى درجات التميز في تخصصات مطلوبة من خلال رحلة تضمن لك النمو 
                                المستمر من دورة احترافية تؤهلك لاجتياز الاختبار المهني لتوائم حسب تخصصك إلى دبلوم 
                                متوسط، ليساعدك للحصول على درجة البكالوريوس .
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