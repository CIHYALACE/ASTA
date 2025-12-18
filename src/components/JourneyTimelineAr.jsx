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
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative">
                    رحلة التأسيس والتطور
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
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-seedling text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠١٥</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">بداية الرحلة</h3>
                            <p className="text-gray-600 leading-relaxed">
                                تأسيس الأكاديمية بمبادرة من خمسة خبراء في التعليم والتدريب المهني. بدأت برامجنا الأولى بتدريب ٣٠ متدربًا في مجال تطوير الويب والتسويق الرقمي. شعارنا كان "التعليم التطبيقي طريق التميز".
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

                {/* <!-- 2017 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="hidden md:flex w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <div className="absolute -left-9 md:-left-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-rocket text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠١٧</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">التوسع والتخصص</h3>
                            <p className="text-gray-600 leading-relaxed">
                                إطلاق أول برامج التخصص المهني المتقدمة. توسيع القاعدة التدريبية لتشمل ٨ تخصصات مهنية جديدة. تخرج الدفعة الأولى من المدربين المعتمدين لدى الأكاديمية.
                            </p>
                        </div>
                    </div>
                    {/* <div className="hidden md:flex w-1/2"></div> */}
                </div>

                {/* <!-- 2019 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-network-wired text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠١٩</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">التحول الرقمي والشراكات</h3>
                            <p className="text-gray-600 leading-relaxed">
                                إطلاق المنصة التعليمية الإلكترونية بالكامل. عقد شراكات استراتيجية مع ١٢ شركة رائدة في القطاعين العام والخاص. تجاوز عدد المتدربين ٢٠٠٠ متدرب بنهاية العام.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

                {/* <!-- 2021 --> */}
                <div className="flex mb-16 timeline-item relative">
                  <div className="hidden md:flex w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style= {{animationDelay: '0.4s'}}>
                            <div className="absolute -left-9 md:-left-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-award text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠٢١</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">الجودة والاعتماد</h3>
                            <p className="text-gray-600 leading-relaxed">
                                حصول الأكاديمية على اعتماد دولي من مجلس التدريب الأوروبي. فوزنا بجائزة التميز في التعليم المهني على مستوى الوطن العربي. إطلاق برامج التعلم الهجين بنجاح كبير.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- 2023 --> */}
                <div className="flex mb-16 timeline-item relative">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                            <div className="absolute -right-9 md:-right-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-globe text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠٢٣</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">الريادة والتأثير</h3>
                            <p className="text-gray-600 leading-relaxed">
                                توسيع نطاق العمل ليشمل ٤ دول عربية. تخطي حاجز ١٠٠٠٠ متدرب تخرجوا من برامجنا. إطلاق مبادرة "مليون شاب مهني" بالتعاون مع مؤسسات حكومية.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex w-1/2"></div>
                </div>

                {/* <!-- 2024 --> */}
                <div className="flex timeline-item relative">
                  <div className="hidden md:flex w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-10">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-gradient transition-all-custom hover:shadow-2xl hover-lift border-gradient animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                            <div className="absolute -left-9 md:-left-10 top-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gradient">
                                <i className="fas fa-bullseye text-2xl gradient-text"></i>
                            </div>
                            <div className="font-bold text-xl mb-2 gradient-text">٢٠٢٤</div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-4">الطموحات المستقبلية</h3>
                            <p className="text-gray-600 leading-relaxed">
                                الاستعداد لإطلاق برامج الذكاء الاصطناعي والتعلم الآلي. التخطيط لافتتاح فروع جديدة في ثلاث دول إضافية. تطوير نظام تعلم مخصص باستخدام الذكاء الاصطناعي.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default JourneyTimeline;