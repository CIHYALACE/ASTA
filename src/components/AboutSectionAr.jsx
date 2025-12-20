import React from 'react';

const AboutSection = () => {
  return (
<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative py-3">
                    من نحن؟
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                    <div className="space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            أكاديمية المهارات التطبيقية ليست مجرد 
                            أكاديمية تدريب؛ نحن مسار مهني تدريبي احترافي 
                            يؤهل الى سوق العمل, ُ صمم ليحول المعرفة 
                            ُ النظرية إلى مهارات عملية مطلوبة ومعتمدة 
                            ومرخصة من المؤسسة العامة للتدريب التقني 
                            والمهني . وتؤمن بأن الاحتراف المهني في العمل 
                            يبدأ بالتدريب، ولذا تبنينا منهجية تطبيقية مرنة 
                            تضمن لك اكتساب الخبرة الحقيقية.
                        </p>
                        <p className="leading-relaxed">
                            أكاديمية المهارات التطبيقية انطلاقة نحو 
                            اكتساب المزيد من المهارات التي تضعك في 
                            صدارة المنافسة.
                        </p>
                        <p className="leading-relaxed">
                            أكاديمية المهارات التطبيقية انطلاقة نحو 
                            اكتساب المزيد من المهارات التي تضعك في 
                            صدارة المنافسة.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="gradient-bg rounded-2xl h-72 md:h-80 flex items-center justify-center text-white text-6xl shadow-xl relative overflow-hidden">
                        <i className="fas fa-graduation-cap"></i>
                        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cpolygon points=%2750,0%20100,100%200,100%27 fill=%27white%27/%3E%3C/svg%3E')] bg-[length:80px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;