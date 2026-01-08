import React from 'react';

const PillarsSection = () => {
  const pillars = [
    { number: '١', title: 'المعرفة التخصصية', description: 'تقديم أساس متين من المعرفة النظرية في التخصص، مع التركيز على أحدث التطورات والممارسات العالمية في المجال.' },
    { number: '٢', title: 'المهارات التطبيقية', description: 'تدريب عملي مكثف على المهارات الحقيقية المطلوبة في سوق العمل، من خلال مشاريع عملية وحالات دراسية واقعية.' },
    { number: '٣', title: 'الأدوات والتقنيات', description: 'إتقان استخدام أحدث الأدوات والتقنيات في المجال، مع التركيز على الحلول العملية والتطبيقات الواقعية.' },
    { number: '٤', title: 'المهارات الناعمة', description: 'تنمية المهارات الشخصية والإدارية مثل التواصل الفعال، العمل الجماعي، القيادة، وإدارة الوقت.' },
    { number: '٥', title: 'التطوير المهني', description: 'توجيه نحو بناء مسار مهني ناجح، بما في ذلك كتابة السيرة الذاتية، إعداد لمقابلات العمل، والتخطيط للنمو الوظيفي.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-dark_blue to-aqua bg-clip-text text-transparent">
          5 محاور لتدريب احترافي متكامل
        </h2>
        
        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-lg hover:-translate-x-2 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-dark_blue to-aqua text-white rounded-full flex items-center justify-center font-bold text-2xl md:text-3xl flex-shrink-0">
                {pillar.number}
              </div>
              
              <div className="text-center md:text-right md:flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-dark_blue mb-3 md:mb-4">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;