import React from 'react';

const ValuesSection = () => {
  const values = [
    { number: '١', title: 'الجودة والتميز', description: 'نلتزم بأعلى معايير الجودة في تصميم وتنفيذ برامجنا التدريبية، ونسعى دائمًا لتحقيق التميز في كل ما نقدمه.' },
    { number: '٢', title: 'الابتكار والتطوير', description: 'نتبنى أحدث الأساليب التعليمية والتقنيات التكنولوجية لضمان مواكبة التطورات المستمرة في سوق العمل.' },
    { number: '٣', title: 'التطبيق العملي', description: 'نركز على الجانب التطبيقي في جميع برامجنا، لأننا نؤمن بأن المهارات الحقيقية تكتسب بالتطبيق والممارسة.' },
    { number: '٤', title: 'الشراكة المجتمعية', description: 'نسعى لبناء شراكات استراتيجية مع القطاعين العام والخاص لتلبية احتياجات سوق العمل الحقيقية.' },
    { number: '٥', title: 'النزاهة والشفافية', description: 'نعمل بشفافية كاملة ونتحلى بأعلى درجات النزاهة في جميع تعاملاتنا ومع جميع شركائنا ومتدربينا.' },
    { number: '٦', title: 'التعلم المستمر', description: 'نشجع ثقافة التعلم المستمر والتطور الشخصي والمهني لدى متدربينا وفرقنا التدريبية على حد سواء.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-dark_blue to-aqua bg-clip-text text-transparent py-3">
          قيمنا
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-dark_blue to-aqua text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                {value.number}
              </div>
              <div>
                <h4 className="text-xl font-bold text-dark_blue mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;