import React from 'react';
import { useTranslation } from "react-i18next";

const VisionMission = ({lang}) => {
    const { t } = useTranslation();
    const isRTL = lang === 'ar';
    
  const cards = [
    {
      icon: 'fas fa-search',
      title: t("visionMission.vision.title"),
      description: t("visionMission.vision.description"),
    },
    {
      icon: 'fas fa-bullseye',
      title: t("visionMission.mission.title"),
      description: t("visionMission.mission.description"),
    },
    {
      icon: 'fas fa-gem',
      title: t("visionMission.values.title"),
      description: t("visionMission.values.description"),
    },
  ];

  return (
    <>
  <section className="py-16 bg-white">
        <div className="mx-10 px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative py-3">
                    {t("visionMission.title")}
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- الرؤية --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 bg-white border-6 border-gradient triangle flex items-center justify-center mx-auto mb-6"
                         style={{
                           borderImage: 'linear-gradient(45deg, #202C5B, #23A0D0) 1'
                         }}>
                        <i className="fas fa-search text-3xl"
                           style={{
                             background: 'linear-gradient(45deg, #202C5B, #23A0D0)',
                             WebkitBackgroundClip: 'text',
                             WebkitTextFillColor: 'transparent',
                             backgroundClip: 'text'
                           }}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        {t("visionMission.vision.title")}
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        {t("visionMission.vision.description")}
                    </p>
                </div>
                
                {/* الرسالة */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 bg-white border-6 border-gradient triangle flex items-center justify-center mx-auto mb-6"
                         style={{
                           borderImage: 'linear-gradient(45deg, #202C5B, #23A0D0) 1'
                         }}>
                        <i className="fas fa-bullseye text-3xl"
                           style={{
                             background: 'linear-gradient(45deg, #202C5B, #23A0D0)',
                             WebkitBackgroundClip: 'text',
                             WebkitTextFillColor: 'transparent',
                             backgroundClip: 'text'
                           }}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        {t("visionMission.mission.title")}
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        {t("visionMission.mission.description")}
                    </p>
                </div>
                
                {/* القيم */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all-custom hover:shadow-2xl hover-lift relative overflow-hidden group animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    <div className="absolute top-0 right-0 w-full h-1 gradient-bg"></div>
                    <div className="w-20 h-20 bg-white border-6 border-gradient triangle flex items-center justify-center mx-auto mb-6"
                         style={{
                           borderImage: 'linear-gradient(45deg, #202C5B, #23A0D0) 1'
                         }}>
                        <i className="fas fa-gem text-3xl"
                           style={{
                             background: 'linear-gradient(45deg, #202C5B, #23A0D0)',
                             WebkitBackgroundClip: 'text',
                             WebkitTextFillColor: 'transparent',
                             backgroundClip: 'text'
                           }}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4 text-center relative pb-3 gradient-text">
                        {t("visionMission.values.title")}
                        <div className="absolute bottom-0 right-1/2 w-12 h-1 gradient-bg transform translate-x-1/2"></div>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                        {t("visionMission.values.description")}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="mx-10 px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative">
                    {t("visionMission.ourValues.title")}
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* قيمة 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">{t("visionMission.ourValues.excellence.title")}</h4>
                        <p className="text-gray-600">{t("visionMission.ourValues.excellence.description")}</p>
                    </div>
                </div>
                
                {/* قيمة 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">{t("visionMission.ourValues.innovation.title")}</h4>
                        <p className="text-gray-600">{t("visionMission.ourValues.innovation.description")}</p>
                    </div>
                </div>
                
                {/* قيمة 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">{t("visionMission.ourValues.commitment.title")}</h4>
                        <p className="text-gray-600">{t("visionMission.ourValues.commitment.description")}</p>
                    </div>
                </div>
                
                {/* قيمة 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">{t("visionMission.ourValues.flexibility.title")}</h4>
                        <p className="text-gray-600">{t("visionMission.ourValues.flexibility.description")}</p>
                    </div>
                </div>
                
                {/* قيمة 5 */}
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all-custom hover:shadow-lg hover-lift-small animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                    <div className="w-12 h-12 gradient-bg text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                    <div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2 gradient-text">{t("visionMission.ourValues.credibility.title")}</h4>
                        <p className="text-gray-600">{t("visionMission.ourValues.credibility.description")}</p>
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
