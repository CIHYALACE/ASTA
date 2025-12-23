import {
  ComputerDesktopIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Courses = [
  {
    id: 1,
    icon: ComputerDesktopIcon,
    title: "كورس بايثون للمبتدئين",
    subtitle: "تعلم أساسيات لغة البرمجة بايثون",
    category: "دورات برمجة",
    duration: "2 أشهر",
    level: "مبتدئ",
    startDate: "1 يناير 2025",
    endDate: "28 فبراير 2025",
    seats: 20,
    availableSeats: 8,
    status: "مفتوح للتسجيل",
    price: 1500,
    originalPrice: "2,000 ر.س",
    discount: "25%",
    installment: "750 ر.س/شهر",
    rating: 4.7,
    reviews: 32,
    enrolled: 12,
    instructor: {
      name: "م. يوسف سالم",
      title: "مطور بايثون",
      experience: "5 سنوات",
      image: "https://images.unsplash.com/photo-1634482273093-f3f1abe5a8ac?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصص في تطوير البرامج باستخدام بايثون ولديه خبرة في تعليم المبتدئين."
    },
    overview: "كورس عملي لتعليم أساسيات بايثون مع تطبيقات عملية لتطوير مهارات البرمجة من الصفر.",
    objectives: [
      "فهم أساسيات البرمجة",
      "كتابة برامج بسيطة بلغة بايثون",
      "استخدام المتغيرات والحلقات والشروط",
      "تطبيق مشاريع عملية صغيرة"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في بايثون", topics: ["المتغيرات", "العمليات الحسابية"], hours: 10 },
      { week: 2, title: "الشروط والحلقات", topics: ["if statements", "for & while loops"], hours: 12 },
      { week: 3, title: "الدوال والمكتبات", topics: ["Functions", "Importing Libraries"], hours: 15 },
      { week: 4, title: "مشروع عملي", topics: ["مشروع صغير باستخدام بايثون"], hours: 15 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "جهاز حاسوب وإتصال إنترنت"
    ],
    benefits: [
      "شهادة معتمدة بعد الانتهاء",
      "مشروع عملي لتطبيق المهارات",
      "دعم من المدرس"
    ],
    schedule: {
      days: ["السبت", "الأربعاء"],
      time: "05:00 مساءً - 07:00 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل الكورس عملي؟", answer: "نعم، يتضمن مشاريع عملية لتطبيق المهارات." },
      { question: "هل مناسب للمبتدئين؟", answer: "نعم، الكورس مخصص للمبتدئين تماماً." }
    ],
    skills: ["بايثون", "برمجة", "حل المشكلات", "دوال ومكتبات"],
    targetdJobs: ["مطور برمجيات", "مبرمج"]
  },

  {
    id: 2,
    icon: AcademicCapIcon,
    title: "كورس تطوير واجهات المستخدم UI",
    subtitle: "تعلم تصميم واجهات تطبيقات ومواقع جذابة",
    category: "دورات تصميم",
    duration: "1.5 أشهر",
    level: "مبتدئ - متوسط",
    startDate: "10 فبراير 2025",
    endDate: "25 مارس 2025",
    seats: 15,
    availableSeats: 5,
    status: "مفتوح للتسجيل",
    price: 1800,
    originalPrice: "2,200 ر.س",
    discount: "18%",
    installment: "900 ر.س/شهر",
    rating: 4.5,
    reviews: 25,
    enrolled: 10,
    instructor: {
      name: "م. نورة سعيد",
      title: "مصممة UX/UI",
      experience: "6 سنوات",
      image: "https://images.unsplash.com/photo-1667842502725-6ca73ffdbce8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصصة في تصميم واجهات وتجربة المستخدم، عملت على مشاريع تطبيقات ومواقع مختلفة."
    },
    overview: "كورس يركز على تصميم واجهات مستخدم جذابة وعملية باستخدام أدوات التصميم الحديثة مثل Figma وAdobe XD.",
    objectives: [
      "تعلم مبادئ تصميم واجهات المستخدم",
      "إنشاء Wireframes وMockups",
      "فهم تجربة المستخدم UX",
      "تطبيق تصميم عملي لمشروع صغير"
    ],
    curriculum: [
      { week: 1, title: "مبادئ UX/UI", topics: ["تصميم جذاب وسهل الاستخدام"], hours: 10 },
      { week: 2, title: "أدوات التصميم", topics: ["Figma", "Adobe XD"], hours: 12 },
      { week: 3, title: "مشروع عملي", topics: ["تصميم تطبيق صغير"], hours: 15 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "مهارات أساسية في الحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشروع عملي صغير",
      "تطوير مهارات التصميم"
    ],
    schedule: {
      days: ["الاثنين", "الخميس"],
      time: "06:00 مساءً - 08:00 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل الكورس عملي؟", answer: "نعم، يتضمن مشروع عملي." },
      { question: "هل الكورس للمبتدئين؟", answer: "نعم، مناسب للمبتدئين." }
    ],
    skills: ["UX", "UI", "Wireframes", "Figma", "Adobe XD"],
    targetdJobs: ["مصمم UX/UI", "مصمم UI/UX"]
  },

  {
    id: 3,
    icon: ComputerDesktopIcon,
    title: "كورس التسويق الرقمي",
    subtitle: "استراتيجيات التسويق على الإنترنت ووسائل التواصل",
    category: "دورات تسويق",
    duration: "2 أشهر",
    level: "مبتدئ - متوسط",
    startDate: "5 مارس 2025",
    endDate: "5 مايو 2025",
    seats: 20,
    availableSeats: 7,
    status: "مفتوح للتسجيل",
    price: 1600,
    originalPrice: "2,000 ر.س",
    discount: "20%",
    installment: "800 ر.س/شهر",
    rating: 4.6,
    reviews: 30,
    enrolled: 13,
    instructor: {
      name: "م. أيمن الكردي",
      title: "خبير تسويق رقمي",
      experience: "7 سنوات",
      image: "https://images.unsplash.com/photo-1634482273093-f3f1abe5a8ac?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصص في التسويق عبر الإنترنت ووسائل التواصل الاجتماعي، مع خبرة في إدارة الحملات الناجحة."
    },
    overview: "كورس قصير لتعليم أساسيات واستراتيجيات التسويق الرقمي وإدارة الحملات على الإنترنت.",
    objectives: [
      "تعلم استراتيجيات التسويق الرقمي",
      "إدارة الحملات على الإنترنت ووسائل التواصل",
      "تحليل نتائج الحملات وتحسين الأداء"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في التسويق الرقمي", topics: ["أساسيات التسويق", "أدوات التسويق"], hours: 10 },
      { week: 2, title: "وسائل التواصل الاجتماعي", topics: ["Facebook", "Instagram", "LinkedIn"], hours: 15 },
      { week: 3, title: "مشروع عملي", topics: ["إطلاق حملة رقمية صغيرة"], hours: 15 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "معرفة أساسية بالحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشروع عملي قصير",
      "تطوير مهارات تسويقية"
    ],
    schedule: {
      days: ["السبت", "الثلاثاء"],
      time: "05:30 مساءً - 08:30 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل الكورس مناسب للمبتدئين؟", answer: "نعم، مناسب لجميع المستويات." },
      { question: "هل يوجد مشروع عملي؟", answer: "نعم، يوجد مشروع عملي صغير." }
    ],
    skills: ["Digital Marketing", "Social Media", "تحليل الحملات", "SEO", "إعلانات Google"],
    targetdJobs: ["خبير تسويق رقمي", "خبير تسويق إلكتروني"]
  },

  {
    id: 4,
    icon: AcademicCapIcon,
    title: "كورس تحليل البيانات باستخدام Excel",
    subtitle: "تعلم استخراج وتحليل البيانات باستخدام Excel",
    category: "دورات تحليل البيانات",
    duration: "1 شهر",
    level: "مبتدئ",
    startDate: "1 أبريل 2025",
    endDate: "30 أبريل 2025",
    seats: 15,
    availableSeats: 6,
    status: "مفتوح للتسجيل",
    price: 1200,
    originalPrice: "1,500 ر.س",
    discount: "20%",
    installment: "600 ر.س/شهر",
    rating: 4.5,
    reviews: 22,
    enrolled: 9,
    instructor: {
      name: "م. ريم فؤاد",
      title: "محللة بيانات",
      experience: "6 سنوات",
      image: "https://images.unsplash.com/photo-1667842502725-6ca73ffdbce8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصصة في تحليل البيانات باستخدام Excel وPower BI، قامت بتدريب العديد من الطلاب والشركات."
    },
    overview: "كورس قصير لتعلم تقنيات تحليل البيانات باستخدام Excel، يشمل أدوات وتقارير عملية.",
    objectives: [
      "إتقان أدوات Excel الأساسية والمتقدمة",
      "تنظيف البيانات وتحليلها",
      "إنشاء تقارير ولوحات معلومات بصرية"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في Excel", topics: ["الصفوف والأعمدة", "الصيغ الأساسية"], hours: 8 },
      { week: 2, title: "تحليل البيانات", topics: ["Pivot Tables", "Charts"], hours: 10 },
      { week: 3, title: "مشروع عملي", topics: ["تحليل بيانات حقيقي وإنشاء تقارير"], hours: 12 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "معرفة أساسية بالحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشروع عملي قصير",
      "تطوير مهارات Excel"
    ],
    schedule: {
      days: ["الأحد", "الأربعاء"],
      time: "06:00 مساءً - 08:00 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل الكورس عملي؟", answer: "نعم، يتضمن مشروع عملي صغير." },
      { question: "هل أحتاج خبرة سابقة؟", answer: "لا، الكورس مناسب للمبتدئين." }
    ],
    skills: ["Excel", "تحليل البيانات", "Charts", "Pivot Tables", "Reporting"],
    targetdJobs: ["محلل بيانات", "محلل بيانات"]
  }
];

export default Courses;