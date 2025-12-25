import { useParams, useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate()
    const {lang} = useParams();
    return (
        <section className="relative min-h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">
            <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/Asta_AI.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10"
                    style={{ background: "linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(44, 122, 123, 0.6) 100%)" }}
                />
            </div>
            <div className="relative z-10 text-center w-full">
                <div className="container">
                    <h1 className="text-6xl font-bold text-white mb-5 text-shadow-lg animate-fadeInUp">
                        أكاديمية المهارات التطبيقية
                    </h1>
                    <p className="text-2xl mb-10 text-gray-300 animate-fadeInUp animation-delay-200">
                        طريقك إلى الإحتراف المهني
                    </p>
                    <div className="flex gap-5 justify-center animate-fadeInUp animation-delay-400">
                        <a href="/files/profile.pdf" download="أكاديمية_المهارات_التطبيقية_الملف_التعريفي.pdf" className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300 inline-block">
                            <i className="fas fa-download"></i> الملف التعريفي
                        </a>
                        <button onClick={() => navigate(`/${lang}/registration`)} className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-black bg-white lg:text-[16px] sm:text-[14px] font-bold focus:outline-none! shadow-md! transition! hover:bg-gradient-to-r! hover:from-[#23A0D0]! hover:to-68% hover:to-[#3CBEB3] hover:text-white! !leading-[1.25] duration-300">التسجيل</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;