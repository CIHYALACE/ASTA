export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="main-header bg-white shadow-lg sticky top-0 z-50">
        {/* Top Bar */}
        <div className="header-top bg-gradient-to-r from-[#202c5b] via-[#226796,#23a0d0,#30afc1] to-[#3cbeb3] py-2.5">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="header-top-content flex justify-between items-center gap-5 text-sm flex-row-reverse">
              <div className="contact-info flex gap-5 flex-row-reverse">
                <a href="tel:+966112345678" className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <i className="fas fa-phone"></i>
                  <span>+966 11 234 5678</span>
                </a>
                <a href="mailto:info@asta.edu.sa" className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <i className="fas fa-envelope"></i>
                  <span>info@asta.edu.sa</span>
                </a>
                <a href="#" className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>الرياض، المملكة العربية السعودية</span>
                </a>
              </div>
              <div className="social-links flex gap-4">
                <a href="#" className="text-white text-lg hover:-translate-y-0.5 transition-transform">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white text-lg hover:-translate-y-0.5 transition-transform">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-white text-lg hover:-translate-y-0.5 transition-transform">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-white text-lg hover:-translate-y-0.5 transition-transform">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-nav">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="nav-content flex justify-between items-center flex-row-reverse">
              <a href="#" className="logo no-underline flex items-center gap-4">
                <img
                  src="https://asta.edu.sa/web/image/1974-d6bb0d21/Untitled-2%20copy.svg"
                  alt="أكاديمية المهارات التطبيقية"
                  className="w-[420px] max-w-full h-auto"
                />
              </a>

              <button className="mobile-menu-btn hidden bg-transparent border-none text-2xl text-[#202c5b] cursor-pointer p-1" id="mobileMenuBtn">
                <i className="fas fa-bars"></i>
              </button>

              <ul className="nav-links flex list-none gap-6 flex-row-reverse" id="navLinks">
                <li>
                  <a href="#" className="active no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    عن الأكاديمية
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    البرامج التدريبية
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    الدورات الاحترافية
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    التسجيل
                  </a>
                </li>
                <li>
                  <a href="#" className="no-underline text-[#202c5b] font-semibold text-lg relative py-2 px-1.5 whitespace-nowrap transition-all hover:text-[#23a0d0] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#202c5b] after:via-[#226796,#23a0d0,#30afc1] after:to-[#3cbeb3] after:transition-width">
                    خدمات الطلاب
                  </a>
                </li>
              </ul>

              <div className="nav-buttons flex gap-3">
                <a href="#" className="btn btn-primary bg-gradient-to-r from-[#202c5b] via-[#226796,#23a0d0,#30afc1] to-[#3cbeb3] text-white no-rounded py-2 px-5 rounded-full font-semibold no-underline transition-all inline-flex items-center gap-2 text-md whitespace-nowrap hover:-translate-y-1 hover:shadow-lg">
                  <i className="fas fa-certificate"></i>
                  التحقق من الشهادة
                </a>
              </div>

              <div className="nav-buttons">
                <a href="#" className="btn btn-primary bg-gradient-to-r from-[#202c5b] via-[#226796,#23a0d0,#30afc1] to-[#3cbeb3] text-white no-rounded py-2 px-3 mx-1 rounded-md font-semibold no-underline transition-all inline-flex items-center gap-2 text-md whitespace-nowrap hover:-translate-y-1 hover:shadow-lg">
                  EN
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}