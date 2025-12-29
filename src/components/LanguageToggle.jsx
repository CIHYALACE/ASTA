import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function LanguageToggle() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams(); // current language

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath, { replace: true });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300"
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
