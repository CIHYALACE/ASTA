import {
  ComputerDesktopIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Programs = [
  {
    id: 1,
    icon: ComputerDesktopIcon,
    title: "دبلوم تصميم واجهات المستخدم UX/UI",
    subtitle: "برنامج شامل لتصميم واجهات وتجربة المستخدم",
    category: "دبلومات تطبيقية",
    duration: "6 أشهر",
    level: "مبتدئ - متوسط",
    startDate: "1 يناير 2025",
    endDate: "30 يونيو 2025",
    seats: 25,
    availableSeats: 10,
    status: "مفتوح للتسجيل",
    price: 8000,
    originalPrice: "10,000 ر.س",
    discount: "20%",
    installment: "1,333 ر.س/شهرياً",
    rating: 4.6,
    reviews: 42,
    enrolled: 15,
    instructor: {
      name: "م. سارة علي",
      title: "خبيرة UX/UI",
      experience: "8 سنوات",
      image: "https://images.unsplash.com/photo-1667842502725-6ca73ffdbce8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصصة في تصميم تجربة المستخدم وواجهات التطبيقات والمواقع، عملت مع عدة شركات تقنية محلية وعالمية."
    },
    overview: "برنامج دبلوم يركز على تعليم تصميم واجهات المستخدم وتجربة المستخدم بشكل عملي ونظري لتأهيل الطلاب للعمل في مشاريع تصميم حقيقية.",
    objectives: [
      "إتقان أساسيات تصميم تجربة المستخدم UX",
      "تصميم واجهات تطبيقات ومواقع جذابة",
      "التعرف على أدوات التصميم الحديثة مثل Figma وAdobe XD",
      "تطوير مهارات تحليل سلوك المستخدم",
      "القدرة على تقديم مشاريع تصميم متكاملة"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في UX/UI", topics: ["مفاهيم أساسية", "أدوات التصميم"], hours: 15 },
      { week: 2, title: "تصميم واجهات المستخدم", topics: ["Wireframes", "Mockups"], hours: 20 },
      { week: 3, title: "تحليل سلوك المستخدم", topics: ["User Research", "Personas"], hours: 25 },
      { week: 4, title: "التصميم التفاعلي", topics: ["Prototyping", "Animation"], hours: 25 },
      { week: 5, title: "مشروع عملي", topics: ["تطبيق تصميم كامل", "عرض المشروع"], hours: 30 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "مهارات أساسية في الحاسوب",
      "رغبة في تعلم التصميم"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشروع عملي في نهاية الدورة",
      "فرص توظيف في شركات تقنية"
    ],
    schedule: {
      days: ["السبت", "الثلاثاء", "الخميس"],
      time: "05:00 مساءً - 08:00 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل البرنامج معتمد؟", answer: "نعم، معتمد من الأكاديمية الدولية للتصميم." },
      { question: "هل يوجد تدريب عملي؟", answer: "نعم، يوجد مشروع عملي في نهاية البرنامج." }
    ],
    skills: ["تصميم UX", "تصميم UI", "تحليل المستخدم", "Figma", "Adobe XD"],
    targetdJobs: ["مصمم UX/UI", "مصمم UI/UX"]
  },

  {
    id: 2,
    icon: AcademicCapIcon,
    title: "دبلوم تطوير المواقع Web Development",
    subtitle: "برنامج لتعلم تطوير المواقع والتطبيقات",
    category: "دبلومات تطبيقية",
    duration: "9 أشهر",
    level: "مبتدئ - متوسط",
    startDate: "15 فبراير 2025",
    endDate: "15 نوفمبر 2025",
    seats: 30,
    availableSeats: 20,
    status: "مفتوح للتسجيل",
    price: 9000,
    originalPrice: "11,000 ر.س",
    discount: "18%",
    installment: "1,000 ر.س/شهرياً",
    rating: 4.7,
    reviews: 50,
    enrolled: 10,
    instructor: {
      name: "م. خالد محمود",
      title: "مطوّر ويب",
      experience: "10 سنوات",
      image: "https://images.unsplash.com/photo-1634482273093-f3f1abe5a8ac?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصص في تطوير المواقع والتطبيقات باستخدام HTML, CSS, JavaScript، وReact."
    },
    overview: "دبلوم شامل لتعليم تطوير المواقع من الصفر وحتى بناء تطبيقات تفاعلية باستخدام أحدث التقنيات.",
    objectives: [
      "تعلم HTML وCSS وJavaScript",
      "إنشاء مواقع تفاعلية باستخدام React",
      "فهم أسس قواعد البيانات وربطها بالتطبيقات",
      "تطوير تطبيقات ويب متكاملة"
    ],
    curriculum: [
      { week: 1, title: "أساسيات تطوير الويب", topics: ["HTML", "CSS"], hours: 20 },
      { week: 2, title: "JavaScript للمبتدئين", topics: ["DOM", "Events"], hours: 25 },
      { week: 3, title: "React للمبتدئين", topics: ["Components", "Props", "State"], hours: 30 },
      { week: 4, title: "قواعد البيانات", topics: ["MySQL", "Firebase"], hours: 20 },
      { week: 5, title: "مشروع ويب كامل", topics: ["تطوير تطبيق ويب عملي"], hours: 35 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "معرفة أساسية بالحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشاريع عملية حقيقية",
      "توجيه وظيفي"
    ],
    schedule: {
      days: ["الأحد", "الثلاثاء", "الخميس"],
      time: "06:00 مساءً - 09:00 مساءً",
      mode: "أونلاين مع جلسات مباشرة",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل البرنامج عملي؟", answer: "نعم، يحتوي على مشاريع عملية وتطبيقات حقيقية." },
      { question: "هل يوجد شهادات بعد الانتهاء؟", answer: "نعم، ستحصل على شهادة معتمدة بعد اجتياز البرنامج." }
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Web Development"],
    targetdJobs: ["مطور ويب", "مطور ويب"]
  },

  {
    id: 3,
    icon: ComputerDesktopIcon,
    title: "دبلوم تحليل البيانات Data Analysis",
    subtitle: "تعلم تقنيات تحليل البيانات واتخاذ القرارات",
    category: "دبلومات تطبيقية",
    duration: "6 أشهر",
    level: "متوسط",
    startDate: "1 مارس 2025",
    endDate: "31 أغسطس 2025",
    seats: 20,
    availableSeats: 5,
    status: "مفتوح للتسجيل",
    price: 8500,
    originalPrice: "10,000 ر.س",
    discount: "15%",
    installment: "1,416 ر.س/شهرياً",
    rating: 4.5,
    reviews: 35,
    enrolled: 15,
    instructor: {
      name: "م. ليلى جمال",
      title: "محللة بيانات",
      experience: "7 سنوات",
      image: "https://images.unsplash.com/photo-1667842502725-6ca73ffdbce8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصصة في تحليل البيانات باستخدام Python وExcel وPower BI مع خبرة في تحليل الأعمال."
    },
    overview: "برنامج دبلوم يعلّم مهارات تحليل البيانات باستخدام أدوات حديثة لتقديم رؤى واضحة واتخاذ قرارات مبنية على البيانات.",
    objectives: [
      "إتقان Excel وPower BI وPython لتحليل البيانات",
      "تعلم استخراج البيانات وتنظيفها",
      "تحليل البيانات واتخاذ قرارات مدعومة بالأرقام",
      "عرض البيانات بطريقة بصرية"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في تحليل البيانات", topics: ["مفاهيم أساسية", "أدوات التحليل"], hours: 15 },
      { week: 2, title: "تحليل البيانات باستخدام Excel", topics: ["الجداول المحورية", "الرسوم البيانية"], hours: 20 },
      { week: 3, title: "Python للبيانات", topics: ["Pandas", "NumPy"], hours: 25 },
      { week: 4, title: "Power BI", topics: ["إنشاء لوحات معلومات", "تحليل البيانات"], hours: 25 },
      { week: 5, title: "مشروع عملي", topics: ["تحليل بيانات واقعي", "تقديم النتائج"], hours: 30 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "معرفة أساسية بالحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشاريع عملية",
      "تطوير مهارات تحليلية"
    ],
    schedule: {
      days: ["السبت", "الأحد", "الأربعاء"],
      time: "05:30 مساءً - 08:30 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل البرنامج عملي؟", answer: "نعم، يحتوي على مشاريع عملية لتحليل البيانات." },
      { question: "هل أحتاج خبرة سابقة؟", answer: "لا، البرنامج مناسب للمبتدئين." }
    ],
    skills: ["تحليل البيانات", "Python", "Excel", "Power BI", "تصوير البيانات"],
    targetdJobs: ["محلل بيانات", "محلل بيانات"]
  },

  {
    id: 4,
    icon: AcademicCapIcon,
    title: "دبلوم التسويق الرقمي Digital Marketing",
    subtitle: "تعلم التسويق الرقمي ووسائل التواصل الاجتماعي",
    category: "دبلومات تطبيقية",
    duration: "5 أشهر",
    level: "مبتدئ",
    startDate: "1 أبريل 2025",
    endDate: "31 أغسطس 2025",
    seats: 25,
    availableSeats: 12,
    status: "مفتوح للتسجيل",
    price: 7000,
    originalPrice: "8,000 ر.س",
    discount: "12%",
    installment: "1,400 ر.س/شهرياً",
    rating: 4.4,
    reviews: 28,
    enrolled: 13,
    instructor: {
      name: "م. أحمد عبد الله",
      title: "خبير تسويق رقمي",
      experience: "9 سنوات",
      image: "https://images.unsplash.com/photo-1634482273093-f3f1abe5a8ac?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "متخصص في التسويق عبر الإنترنت ووسائل التواصل الاجتماعي، قام بإدارة حملات ناجحة لشركات كبيرة ومتوسطة."
    },
    overview: "دبلوم لتعليم أساسيات واستراتيجيات التسويق الرقمي وكيفية إدارة الحملات التسويقية على الإنترنت ووسائل التواصل الاجتماعي.",
    objectives: [
      "تعلم استراتيجيات التسويق الرقمي",
      "إدارة الحملات الإعلانية على الإنترنت",
      "تحليل نتائج الحملات وتحسينها",
      "زيادة الوصول والمبيعات عبر التسويق الرقمي"
    ],
    curriculum: [
      { week: 1, title: "مقدمة في التسويق الرقمي", topics: ["مفاهيم التسويق", "أدوات التسويق الرقمي"], hours: 15 },
      { week: 2, title: "التسويق عبر وسائل التواصل الاجتماعي", topics: ["Facebook", "Instagram", "LinkedIn"], hours: 20 },
      { week: 3, title: "تحليل البيانات التسويقية", topics: ["Google Analytics", "تقارير الحملات"], hours: 20 },
      { week: 4, title: "استراتيجيات المحتوى", topics: ["كتابة المحتوى", "إستراتيجية النشر"], hours: 20 },
      { week: 5, title: "مشروع عملي", topics: ["إطلاق حملة تسويقية", "تحليل النتائج"], hours: 25 }
    ],
    requirements: [
      "شهادة الثانوية العامة",
      "معرفة أساسية بالحاسوب"
    ],
    benefits: [
      "شهادة معتمدة",
      "مشروع عملي",
      "تطوير مهارات تسويقية"
    ],
    schedule: {
      days: ["الاثنين", "الأربعاء", "الجمعة"],
      time: "06:00 مساءً - 09:00 مساءً",
      mode: "أونلاين",
      location: "منصة التعليم الإلكتروني"
    },
    faqs: [
      { question: "هل البرنامج مناسب للمبتدئين؟", answer: "نعم، البرنامج مناسب لجميع المستويات." },
      { question: "هل يوجد تدريب عملي؟", answer: "نعم، يوجد مشروع عملي في نهاية الدبلوم." }
    ],
    skills: ["التسويق الرقمي", "Social Media", "تحليل الحملات", "إعلانات Google", "استراتيجيات المحتوى"],
    targetdJobs: ["خبير تسويق رقمي", "خبير تسويق رقمي"]
  }
];

export default Programs;