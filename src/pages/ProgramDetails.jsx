import React from "react";
// Components
import ProgramHeader from "../components/ProgramDetails/ProgramHeader";
import OverviewSection from "../components/ProgramDetails/OverviewSection";
import CurriculumSection from "../components/ProgramDetails/CurriculumSection";
import InstructorSection from "../components/ProgramDetails/InstructorSection";
import RequirementsSection from "../components/ProgramDetails/RequirementsSection";
import RelatedProgramsSection from "../components/ProgramDetails/RelatedProgramsSection";
import ProgramFAQSection from "../components/ProgramDetails/ProgramFAQSection";

const ProgramDetailsPage = () => {
  const program = {
    id: 2,
    title: "شهادة الماجستير في علم البيانات",
    subtitle: "برنامج متقدم في تحليل البيانات والذكاء الاصطناعي",
    category: "برامج متقدمة",
    duration: "سنتان",
    level: "متقدم",
    startDate: "1 أكتوبر 2024",
    endDate: "30 سبتمبر 2026",
    seats: 30,
    availableSeats: 12,
    status: "مفتوح للتسجيل",
    price: "25,000 ر.س",
    originalPrice: "30,000 ر.س",
    discount: "17%",
    installment: "1,250 ر.س/شهرياً",
    rating: 4.8,
    reviews: 124,
    enrolled: 18,
    
    instructor: {
      name: "د. أحمد السعدون",
      title: "أستاذ مساعد في علم البيانات",
      experience: "12 سنة",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      bio: "خبير في تحليل البيانات الضخمة وتطبيقات الذكاء الاصطناعي، حاصل على دكتوراه في علوم الحاسب من جامعة ستانفورد."
    },
    
    overview: "برنامج ماجستير متخصص في علم البيانات مصمم لتأهيل المحترفين في مجال تحليل البيانات الضخمة وتطبيقات الذكاء الاصطناعي. يركز البرنامج على الجانب التطبيقي مع دراسة نظرية متعمقة.",
    
    objectives: [
      "تطوير مهارات تحليل البيانات الضخمة باستخدام أحدث الأدوات",
      "تعلم بناء نماذج التعلم الآلي والتعلّم العميق",
      "إتقان تقنيات معالجة اللغة الطبيعية والرؤية الحاسوبية",
      "تطوير مهارات عرض وتقديم نتائج التحليل",
      "فهم الجوانب الأخلاقية والقانونية في علم البيانات"
    ],
    
    curriculum: [
      { week: 1, title: "مقدمة في علم البيانات", topics: ["مفاهيم أساسية", "أدوات التحليل"], hours: 20 },
      { week: 2, title: "الإحصاء والاحتمالات", topics: ["التحليل الإحصائي", "نظرية الاحتمالات"], hours: 25 },
      { week: 3, title: "برمجة بايثون للبيانات", topics: ["NumPy", "Pandas", "Matplotlib"], hours: 30 },
      { week: 4, title: "معالجة البيانات", topics: ["تنظيف البيانات", "تحويل البيانات"], hours: 25 },
      { week: 5, title: "التعلم الآلي", topics: ["الخوارزميات الأساسية", "تقييم النماذج"], hours: 35 },
      { week: 6, title: "التعلم العميق", topics: ["الشبكات العصبية", "TensorFlow"], hours: 40 }
    ],
    
    requirements: [
      "شهادة بكالوريوس في تخصص ذي صلة",
      "خبرة لا تقل عن سنتين في مجال البرمجة",
      "إجادة اللغة الإنجليزية",
      "اجتياز اختبار القبول",
      "مقابلة شخصية"
    ],
    
    benefits: [
      "شهادة معتمدة من الجهات الدولية",
      "دعم وظيفي وتوجيه مهني",
      "وصول مدى الحياة للمحتوى",
      "مشروع تخرج عملي",
      "شبكة علاقات مع محترفين"
    ],
    
    schedule: {
      days: ["السبت", "الاثنين", "الأربعاء"],
      time: "06:00 مساءً - 09:00 مساءً",
      mode: "أونلاين مع جلسات حضورية",
      location: "مقر المركز + منصة التعليم الإلكتروني"
    },
    
    faqs: [
      { question: "هل البرنامج معتمد؟", answer: "نعم، البرنامج معتمد من عدة جهات دولية ومحلية." },
      { question: "هل يمكنني الدفع بالتقسيط؟", answer: "نعم، نوفر خيارات تقسيط مرنة تصل إلى 24 شهراً." },
      { question: "ماذا أحتاج للانضمام؟", answer: "جهاز كمبيوتر وإتصال إنترنت وسنوات خبرة في البرمجة." }
    ]
  };
  
  return (
    <div dir="rtl">
      <ProgramHeader program={program} />
      <OverviewSection program={program} />
      <CurriculumSection program={program} />
      <InstructorSection program={program} />
      <RequirementsSection program={program} />
      <ProgramFAQSection program={program} />
      <RelatedProgramsSection />
      
      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للانطلاق في رحلة التعلم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            سجل الآن واحجز مقعدك في أفضل برنامج تدريبي في علم البيانات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#FFD166] to-[#FF9E6D] text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
              سجل الآن واحصل على خصم إضافي
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsPage;