import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  // Data based on AOL footer structure
  const footerData = {
    contactInfo: [
      { icon: 'fa-map-marker-alt', text: 'الرياض، المملكة العربية السعودية' },
      { icon: 'fa-phone', text: '+966 11 234 5678', href: 'tel:+966112345678' },
      { icon: 'fa-envelope', text: 'info@asta.edu.sa', href: 'mailto:info@asta.edu.sa' }
    ],
    
    programs: [
      'دبلوم إدارة الفنادق والمنتجعات السياحية',
      'دبلوم إدارة سلاسل الإمداد والخدمات اللوجستية',
      'برامج تقنية المعلومات',
      'برامج الإدارة والأعمال'
    ],
    
    quickLinks: [
      { label: 'الرئيسية', href: '#' },
      { label: 'عن الأكاديمية', href: '#' },
      { label: 'البرامج التدريبية', href: '#' },
      { label: 'الدورات الاحترافية', href: '#' },
      { label: 'مراكزنا', href: '#' },
      { label: 'أخبارنا', href: '#' },
      { label: 'اتصل بنا', href: '#' }
    ],
    
    socialLinks: [
      { platform: 'twitter', href: '#', icon: 'fa-brands fa-x-twitter', color: 'hover:bg-[#1DA1F2]' },
      { platform: 'linkedin', href: '#', icon: 'fab fa-linkedin', color: 'hover:bg-[#0077B5]' },
      { platform: 'youtube', href: '#', icon: 'fab fa-youtube', color: 'hover:bg-[#FF0000]' },
      { platform: 'instagram', href: '#', icon: 'fab fa-instagram', color: 'hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]' },
      { platform: 'facebook', href: '#', icon: 'fab fa-facebook', color: 'hover:bg-[#3B5998]' }
    ],
    
    partners: [
      { name: 'المؤسسة العامة للتدريب التقني والمهني', logo: '/images/partners/tvtc.svg' },
      { name: 'هيئة تقويم التعليم', logo: '/images/partners/education.svg' },
      { name: 'وزارة التعليم', logo: '/images/partners/education-ministry.svg' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-[#202c5b] to-[#151e3f] text-white pt-12 pb-6">
      {/* Top Section - Main Footer Content */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Logo and Contact Info */}
          <div>
            <div className="mb-8">
              <a href="#" className="no-underline inline-block mb-6">
                <img
                  src="/images/ASTA_Nav_Logo.svg"
                  alt="أكاديمية المهارات التطبيقية"
                  className="w-[250px] h-auto invert brightness-0"
                  width={250}
                  height={60}
                />
              </a>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                نقدم تعليمًا أكاديميًا وتدريبًا تقنيًا معتمدًا لتأهيل الكوادر الوطنية لسوق العمل بما يتوافق مع رؤية المملكة 2030
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                {footerData.contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <i className={`fas ${contact.icon} text-[#23a0d0] mt-1 text-sm`}></i>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm">{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">تابعنا على</h4>
              <div className="flex gap-3">
                {footerData.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ${social.color} transition-all duration-300 hover:-translate-y-1`}
                    aria-label={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* WhatsApp Button */}
            {/* <a
              href="https://wa.me/966112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 px-6 rounded-full font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>تواصل معنا عبر واتساب</span>
            </a> */}
          </div>
          
          {/* Column 2: Programs & Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#23a0d0] after:to-[#3cbeb3]">
                برامجنا
              </h3>
              <ul className="space-y-3">
                {footerData.programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <i className="fas fa-graduation-cap text-xs text-[#23a0d0]"></i>
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#23a0d0] after:to-[#3cbeb3]">
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <i className="fas fa-chevron-left text-xs text-[#23a0d0] group-hover:translate-x-[-2px] transition-transform"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 3: Newsletter & Partners */}
          <div>
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">النشرة الإخبارية</h3>
              <p className="text-gray-300 text-sm mb-4">
                اشترك في نشرتنا الإخبارية لتصلك آخر أخبارنا وعروضنا
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23a0d0] focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#226796] to-[#3cbeb3] text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  اشتراك
                </button>
              </form>
            </div>
            
            {/* Partners
            <div>
              <h4 className="font-semibold mb-4 text-lg">شركاؤنا</h4>
              <div className="flex flex-wrap gap-4">
                {footerData.partners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-24 h-16 flex items-center justify-center bg-white/5 rounded-lg p-2 border border-white/10 hover:border-[#23a0d0]/30 transition-all duration-300"
                    title={partner.name}
                  >
                    <div className="text-center text-xs text-gray-300">{partner.name}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/10 pt-6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} أكاديمية المهارات التطبيقية - جميع الحقوق محفوظة
            </div>
            
            {/* Policies Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                شروط الاستخدام
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                الأسئلة الشائعة
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                دليل المستخدم
              </a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <div className="text-gray-400 text-sm ml-2">طرق الدفع:</div>
              <div className="flex gap-2">
                {['visa', 'mastercard', 'mada', 'apple-pay'].map((method) => (
                  <div
                    key={method}
                    className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-gray-300"
                  >
                    {method === 'visa' && 'VISA'}
                    {method === 'mastercard' && 'MC'}
                    {method === 'mada' && 'مدى'}
                    {method === 'apple-pay' && ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}