import React from 'react';
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({threshold: 0, triggerOnce: true});
  return (
<section className="py-16 bg-gray-50">
        <div className="mx-10 px-4 md:px-6">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block px-6 relative py-3">
                    {t("about.title")}
                    <div className="absolute top-1/2 right-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 left-full w-24 h-1 gradient-bg transform -translate-y-1/2 hidden md:block"></div>
                </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                    <div className="space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            {t("about.description1")}
                        </p>
                        <p className="leading-relaxed">
                            {t("about.description2")}
                        </p>
                        <p className="leading-relaxed">
                            {t("about.description3")}
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                <video
                    ref={ref}
                    className={`${inView ? '' : 'opacity-0'} w-full h-full object-cover rounded-2xl transition-all duration-300`}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/Asta_AI.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;