import React from 'react';

const VisionMission = () => {
  const cards = [
    {
      icon: 'fas fa-eye',
      title: 'الرؤية',
      description: 'الريادة في التأهيل المهني التطبيقي على المستوى الإقليمي، والتميز في إعداد كوادر مهنية قادرة على المنافسة العالمية والمساهمة في بناء الاقتصاد المعرفي.',
    },
    {
      icon: 'fas fa-bullseye',
      title: 'الرسالة',
      description: 'توفير بيئة تعليمية تطبيقية مبتكرة تلبي احتياجات سوق العمل المتغيرة، من خلال برامج تدريبية احترافية تدمج بين النظرية والتطبيق، وتطور المهارات القيادية والإبداعية للمتدربين.',
    },
    {
      icon: 'fas fa-heart',
      title: 'القيم',
      description: 'التميز المهني، الابتكار، النزاهة، العمل الجماعي، المسؤولية المجتمعية، والالتزام بجودة المخرجات. هذه القيم تشكل الأساس الذي تقوم عليه جميع برامجنا وأنشطتنا.',
    },
  ];

  return (
    <>
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative py-3">
                    الرؤية والرسالة والقيم
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- الرؤية --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 gradient-bg triangle flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-eye text-3xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        الرؤية
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        أكاديمية المهارات التطبيقية انطلاقة نحو 
                        اكتساب المزيد من المهارات التي تضعك في 
                        صدارة المنافسة.
                    </p>
                </div>
                
                {/* الرسالة */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 gradient-bg triangle flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-bullseye text-3xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        الرسالة
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        أكاديمية المهارات التطبيقية انطلاقة نحو 
                        اكتساب المزيد من المهارات التي تضعك في 
                        صدارة المنافسة.
                    </p>
                </div>
                
                {/* القيم */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 gradient-bg triangle flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-heart text-3xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        القيم
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        الابتكار، التميز، المصداقية، الالتزام، المرونة.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative">
                    قيمنا
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* قيمة 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">١</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">التميز </h4>
                        <p className="text-gray-600">نلتزم بأعلى معايير الجودة في تصميم وتنفيذ برامجنا التدريبية، ونسعى دائمًا لتحقيق التميز في كل ما نقدمه.</p>
                    </div>
                </div>
                
                {/* قيمة 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">٢</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">الابتكار </h4>
                        <p className="text-gray-600">نتبنى أحدث الأساليب التعليمية والتقنيات التكنولوجية لضمان مواكبة التطورات المستمرة في سوق العمل.</p>
                    </div>
                </div>
                
                {/* قيمة 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">٣</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text"> الالتزام</h4>
                        <p className="text-gray-600">نركز على الجانب التطبيقي في جميع برامجنا، لأننا نؤمن بأن المهارات الحقيقية تكتسب بالتطبيق والممارسة.</p>
                    </div>
                </div>
                
                {/* قيمة 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">٤</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">المرونة </h4>
                        <p className="text-gray-600">نسعى لبناء شراكات استراتيجية مع القطاعين العام والخاص لتلبية احتياجات سوق العمل الحقيقية.</p>
                    </div>
                </div>
                
                {/* قيمة 5 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">٥</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text"> المصداقية</h4>
                        <p className="text-gray-600">نعمل بالشفافية  في جميع تعاملاتنا ومع جميع شركائنا ومتدربينا، ونسعى دائمًا لتحقيق درجات النزاهة.</p>
                    </div>
                </div>
                
                {/* قيمة 6 */}
                {/* <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">٦</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2">التعلم المستمر</h4>
                        <p className="text-gray-600">نشجع ثقافة التعلم المستمر والتطور الشخصي والمهني لدى متدربينا وفرقنا التدريبية على حد سواء.</p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </>

  );
};

export default VisionMission;
