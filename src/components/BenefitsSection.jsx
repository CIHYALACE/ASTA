import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'fas fa-certificate',
      title: 'شهادات معتمدة',
      items: [
        'شهادات معترف بها محليًا ودوليًا',
        'اعتماد من جهات مهنية متخصصة',
        'شهادات رقمية يمكن التحقق منها',
        'توثيق للمهارات المكتسبة',
      ],
    },
    {
      icon: 'fas fa-chalkbod-teacher',
      title: 'مدربون خبراء',
      items: [
        'مدربون من أصحاب الخبرة العملية',
        'خبراء في مجالات تخصصهم',
        'مهارات تدريبية متقدمة',
        'دعم مستمر من المدربين',
      ],
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'منصة تعليمية متطورة',
      items: [
        'منصة تعليمية تفاعلية',
        'محتوى متاح على مدار الساعة',
        'أدوات تعليمية مبتكرة',
        'تجربة تعلم شخصية',
      ],
    },
    {
      icon: 'fas fa-briefcase',
      title: 'فرص وظيفية',
      items: [
        'شراكات مع شركات رائدة',
        'معارض توظيف حصرية',
        'توجيه وظيفي متخصص',
        'فرص تدريب عملي',
      ],
    },
    {
      icon: 'fas fa-users',
      title: 'مجتمع مهني',
      items: [
        'انضمام إلى شبكة خريجين',
        'فعاليات وورش عمل دورية',
        'فرص للتواصل المهني',
        'دعم الأقران والمجتمع',
      ],
    },
    {
      icon: 'fas fa-handshake',
      title: 'مرونة في التعلم',
      items: [
        'برامج تعلم مرنة',
        'جدول زمني متناسب مع احتياجاتك',
        'خيارات تعلم متنوعة',
        'دعم تعلم ذاتي',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-dk_blue to-aqua bg-clip-text text-transpent">
          مميزات الانضمام إلى عالم ASTA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-dk_blue to-aqua text-white p-6 flex items-center gap-4">
                <i className={`${benefit.icon} text-2xl`}></i>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 pr-6">
                  {benefit.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-gray-600 relative before:absolute before:-right-6 before:text-aqua before:font-bold before:content-['✓']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;