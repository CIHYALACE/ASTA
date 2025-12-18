import React from 'react';

const DestinationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-dark_blue to-aqua text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpolygon points='50,0 100,100 0,100' fill='white'/%3E%3C/svg%3E')] bg-[length:120px]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              وجهتك، أيًا كان طموحك
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                في أكاديمية المهارات التطبيقية، نؤمن بأن كل فرد لديه طموحات فريدة ومسار مهني خاص. سواء كنت تسعى للترقية في وظيفتك الحالية، أو تغيير مسارك المهني تمامًا، أو بدء مشروعك الخاص، أو حتى دخول سوق العمل لأول مرة - نحن هنا لنساعدك في الوصول إلى وجهتك.
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                برامجنا المصممة بعناية وخبرتنا الواسعة في التدريب والتأهيل تضمن لك الوصول إلى أهدافك المهنية بثقة وكفاءة. انضم إلينا اليوم وابدأ رحلتك نحو النجاح المهني.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;