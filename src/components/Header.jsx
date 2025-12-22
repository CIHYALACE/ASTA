"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";


export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [diplomasDropdown, setDiplomasDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [studnetServicesDropdown, setStudentServicesDropdown] = useState(false);
  // const router = useRouter();
  const location = useLocation();
  const pathname = location.pathname;
  const diplomasRef = useRef(null);
  const aboutRef = useRef(null);
  const courses = useRef(null);

  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();


  const switchLang = (newLang) => {
    const newPath = location.pathname.replace(
      `/${lang}`,
      `/${newLang}`
    );
    navigate(newPath);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements[0].value);
    router.replace(`/search?q=${e.currentTarget.elements[0].value}`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (diplomasRef.current && !diplomasRef.current.contains(event.target)) {
        setDiplomasDropdown(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (courses.current && !courses.current.contains(event.target)) {
        setCoursesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // the Navbar
    <nav className="w-full sticky top-0 z-30 border-b-2 gradient-border">
      {/* Top Bar */}
       <div className="header-top hidden md:block bg-gradient-to-r from-[#202c5b] via-[#23a0d0] to-[#3cbeb3] py-3">
          <div className="container max-w-[1300px] mx-auto px-2">
            <div className="header-top-content flex justify-between items-center gap-5 text-sm">
              <div className="contact-info flex gap-5">
                <a
                  href="tel:+966112345678"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <i className="fas fa-phone"></i>
                  <span>966112345678+</span>
                </a>
                <a
                  href="mailto:info@asta.edu.sa"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <i className="fas fa-envelope"></i>
                  <span>info@asta.edu.sa</span>
                </a>
                <a
                  href="#"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{t("footer.address")}</span>
                </a>
              </div>
              <div className="social-links flex gap-4">
                <a
                  href="#"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* Main Nav */}
      <div className="md:hidden bg-white md:pt-8! pt-[8px]">
        <div className="md:w-[1400px] mx-auto px-2">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Semi Header */}
            <div className="py-2! container">
              <div className="flex items-center justify-between">
                {/* Mobile Logo - Right side */}
                <div className="flex-shrink-0">
                  <a href={`/${lang}/`}>
                    <img
                      src="/svgs/ASTA_Nav_Logo.svg"
                      alt="ASTA Logo"
                      width={63}
                      height={17}
                      // priority
                      className="h-auto"
                    />
                  </a>
                </div>

                {/* Mobile menu button and search - Left side */}
                <div className="flex items-center gap-3 relative">
                  {/* Mobile menu button */}
                  <svg
                    className="w-6 h-6 text-[#23A0D0] cursor-pointer"
                    onClick={() => setOpen(true)}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          {/* Desktop Menu */}
          <div className="bg-white">
          <div className=" w-[1400px] mx-auto px-2">
          <div className="hidden sm:flex justify-between items-center py-3 border-gray-200 bg-white top-0">
            <div className="flex-shrink-0">
              <a href={`/${lang}/`}>
                <img
                  src="/svgs/ASTA_Nav_Logo.svg"
                  alt="ASTA Logo"
                  width={152}
                  height={42}
                  className="h-auto md:w-[120px] lg:w-[152px] md:mx-8"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href={`/${lang}/`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[12px] py-[6px] font-medium hover:text-[#4fd1c5] duration-300 transition-colors !leading-[1.25] " +
                  (pathname === `/${lang}/`
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                }
              >
                الرئيسية
              </a>
              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* Diplomas dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setCoursesDropdown(!coursesDropdown);
                    setDiplomasDropdown(false);
                    setAboutDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                  }
                >
                   الدورات الإحترافية
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      coursesDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {coursesDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/courses`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        جميع الدورات الاحترافية
                      </a>
                      {/* map for every dimploma */}
                      {/* diplomas.map((diploma) => (
                        <a
                          key={diploma.id}
                          href={`/Diplomas/${diploma.id}`}>
                          {diploma.name}
                        </a>
                      )) */}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* Student services dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setStudentServicesDropdown(!studnetServicesDropdown);
                    setDiplomasDropdown(false);
                    setCoursesDropdown(false);
                    setAboutDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                   خدمات الطلاب
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      studnetServicesDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {studnetServicesDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/student-services`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        جميع الخدمات 
                      </a>
                      {/* map for every dimploma */}
                      {/* diplomas.map((diploma) => (
                        <a
                          key={diploma.id}
                          href={`/Diplomas/${diploma.id}`}>
                          {diploma.name}
                        </a>
                      )) */}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* Diplomas dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setDiplomasDropdown(!diplomasDropdown);
                    setCoursesDropdown(false);
                    setAboutDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                   البرامج التدريبية
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      diplomasDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {diplomasDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/programs`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        جميع البرامج التدريبية
                      </a>
                      {/* map for every dimploma */}
                      {/* diplomas.map((diploma) => (
                        <a
                          key={diploma.id}
                          href={`/Diplomas/${diploma.id}`}>
                          {diploma.name}
                        </a>
                      )) */}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* About dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setAboutDropdown(!aboutDropdown);
                    setDiplomasDropdown(false);
                    setCoursesDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (pathname.startsWith("/about-us-ar")
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                  من نحن
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      aboutDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/about-us-ar`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        عن الأكاديمية
                      </a>
                      <a
                        href={`/${lang}/Team`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        فريق العمل
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        اتصل بنا
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* registeration */}
                <a
                href={`/${lang}/registration`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[12px] py-[6px] font-medium hover:text-[#4fd1c5] duration-300 transition-colors !leading-[1.25] " +
                  (pathname === `/${lang}/registration`
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                }
              >
                التسجيل
              </a>
            </div>
            <div>
              <button onClick={() => router.push("/")} className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300">
                فحص الشهادة
              </button>
              {/* <button onClick={() => router.push("/en")} className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300">
                 EN
              </button> */}
              <LanguageToggle />
            </div>
          </div>
          </div>
          </div>
          {/* Mobile menu overlay */}

      <div
        className={
          "fixed! inset-0! z-50! md:hidden! min-h-screen duration-500 " +
          (open ? "w-full" : "w-0")
        }
      >
        <div
          className={
            "fixed! inset-0! bg-black/50! min-h-screen " +
            (open ? "w-full" : "w-0")
          }
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={
            "fixed! flex flex-col inset-y-0 w-80! min-h-screen bg-[#EEEEEE]! duration-300 " +
            (open ? "right-0" : "right-0 transform translate-x-[100%]")
          }
        >
          {/* Mobile menu header */}
          <div className="p-3! space-y-3! flex flex-col grow">
            {/* Menu items */}
            <div className="space-y-2!">
              <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                <div className="flex! items-center! gap-3!">
                  <img
                    src="/icons/Vector.svg "
                    alt="courses"
                    className="w-4! h-4!"
                  />
                  <a
                    href={`/${lang}/Courses`}
                    className="text-black! font-medium! text-lg!"
                  >
                    {"الدورات"}
                  </a>
                </div>
              </div>
              <div
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/Degrees");
                  setOpen(false);
                }}
              >
                <div className="flex! items-center! gap-3!">
                  <img src="/icons/1.svg" alt="paths" className="w-4! h-4!" />
                  <span className="text-black! font-medium! text-lg!">
                    المسارات المهنية
                  </span>
                </div>
              </div>

              <div
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/Trainers");
                  setOpen(false);
                }}
              >
                <div className="flex! items-center! gap-3!">
                  <img
                    src="/icons/2.svg"
                    alt="trainers"
                    className="w-4! h-4!"
                  />
                  <span className="text-black! font-medium! text-lg!">
                    المدربين
                  </span>
                </div>
              </div>


              <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                <div className="flex! items-center! gap-3!">
                  <img src="/icons/4.svg" alt="about" className="w-4! h-4!" />
                  <span className="text-black! font-medium! text-lg!">
                    من نحن
                  </span>
                </div>
              </div>

              <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                <div className="flex! items-center! gap-3!">
                  <img
                    src="/icons/5.svg"
                    alt="language"
                    className="w-4! h-4!"
                  />
                  <span className="text-black! font-medium! text-lg!">
                    تغيير اللغة
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-auto p-3! text-center!">
              <div className="text-black! font-medium! mb-3! text-lg!">
                أكاديمية المهارات التطبيقية للتدريب
              </div>
              <div className="flex! justify-center! gap-3!">
                <a href="mailto:info@ASTA.EDU.SA">
                  <img src="/icons/7.svg" alt="email" className="w-6! h-6!" />
                </a>
                <a href="https://wa.me/+996558919492" target="_blank">
                  <img
                    src="/icons/6.svg"
                    alt="whatsapp"
                    className="w-6! h-6!"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
