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
    description: "كورس عملي لتعليم أساسيات بايثون مع تطبيقات عملية لتطوير مهارات البرمجة من الصفر.",
    overview: "كورس عملي لتعليم أساسيات بايثون مع تطبيقات عملية لتطوير مهارات البرمجة من الصفر.",
    objectives: [
      "فهم أساسيات البرمجة",
      "كتابة برامج بسيطة بلغة بايثون",
      "استخدام المتغيرات والحلقات والشروط",
      "تطبيق مشاريع عملية صغيرة"
    ],
    curriculum: [
      { semester: "الأسبوع الأول", courses: ["المتغيرات", "العمليات الحسابية", "مقدمة في بايثون"] },
      { semester: "الأسبوع الثاني", courses: ["if statements", "for & while loops", "الشروط والحلقات"] },
      { semester: "الأسبوع الثالث", courses: ["Functions", "Importing Libraries", "الدوال والمكتبات"] },
      { semester: "الأسبوع الرابع", courses: ["مشروع صغير باستخدام بايثون", "مشروع عملي"] }
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
      { question: "ما هي شروط القبول في الكورس؟", answer: "شهادة الثانوية العامة وجهاز حاسوب مع إتصال إنترنت" },
      { question: "ما هي مدة الكورس؟", answer: "شهرين (8 أسابيع)" },
      { question: "هل يوجد دعم مالي؟", answer: "يتوفر تقسيط على دفعتين" },
      { question: "ما هي الشهادات التي سأحصل عليها؟", answer: "شهادة معتمدة من الأكاديمية" }
    ],
    skills: ["بايثون", "برمجة", "حل المشكلات", "دوال ومكتبات"],
    targetJobs: ["مطور برمجيات", "مبرمج بايثون", "محلل برمجيات"],
    employers: ["شركات التقنية", "شركات تطوير البرمجيات", "القطاع الحكومي", "مشاريعك الخاصة"],
    exitPoints: "يمكن الخروج بعد 4 أسابيع والحصول على شهادة إتمام كورس بايثون الأساسي"
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
    description: "كورس يركز على تصميم واجهات مستخدم جذابة وعملية باستخدام أدوات التصميم الحديثة مثل Figma وAdobe XD.",
    overview: "كورس يركز على تصميم واجهات مستخدم جذابة وعملية باستخدام أدوات التصميم الحديثة مثل Figma وAdobe XD.",
    objectives: [
      "تعلم مبادئ تصميم واجهات المستخدم",
      "إنشاء Wireframes وMockups",
      "فهم تجربة المستخدم UX",
      "تطبيق تصميم عملي لمشروع صغير"
    ],
    curriculum: [
      { semester: "الأسبوع الأول", courses: ["مبادئ UX/UI", "تصميم جذاب وسهل الاستخدام"] },
      { semester: "الأسبوع الثاني", courses: ["Figma", "Adobe XD", "أدوات التصميم"] },
      { semester: "الأسبوع الثالث", courses: ["تصميم تطبيق صغير", "مشروع عملي"] }
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
      { question: "ما هي شروط القبول في الكورس؟", answer: "شهادة الثانوية العامة ومهارات أساسية في الحاسوب" },
      { question: "ما هي مدة الكورس؟", answer: "6 أسابيع" },
      { question: "هل يوجد دعم مالي؟", answer: "يتوفر تقسيط على دفعتين" },
      { question: "ما هي الشهادات التي سأحصل عليها؟", answer: "شهادة معتمدة في تصميم UI/UX" }
    ],
    skills: ["UX", "UI", "Wireframes", "Figma", "Adobe XD"],
    targetJobs: ["مصمم UX/UI", "مصمم واجهات مستخدم", "مصمم تجربة مستخدم"],
    employers: ["شركات التقنية", "وكالات التصميم", "شركات تطوير التطبيقات", "العمل الحر"],
    exitPoints: "يمكن الخروج بعد أسبوعين والحصول على شهادة أساسيات التصميم"
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
    description: "كورس قصير لتعليم أساسيات واستراتيجيات التسويق الرقمي وإدارة الحملات على الإنترنت.",
    overview: "كورس قصير لتعليم أساسيات واستراتيجيات التسويق الرقمي وإدارة الحملات على الإنترنت.",
    objectives: [
      "تعلم استراتيجيات التسويق الرقمي",
      "إدارة الحملات على الإنترنت ووسائل التواصل",
      "تحليل نتائج الحملات وتحسين الأداء"
    ],
    curriculum: [
      { semester: "الأسبوع الأول", courses: ["أساسيات التسويق", "أدوات التسويق", "مقدمة في التسويق الرقمي"] },
      { semester: "الأسبوع الثاني", courses: ["Facebook", "Instagram", "LinkedIn", "وسائل التواصل الاجتماعي"] },
      { semester: "الأسبوع الثالث", courses: ["إطلاق حملة رقمية صغيرة", "مشروع عملي"] }
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
      { question: "ما هي شروط القبول في الكورس؟", answer: "شهادة الثانوية العامة ومعرفة أساسية بالحاسوب" },
      { question: "ما هي مدة الكورس؟", answer: "شهرين (8 أسابيع)" },
      { question: "هل يوجد دعم مالي؟", answer: "يتوفر تقسيط على دفعتين" },
      { question: "ما هي الشهادات التي سأحصل عليها؟", answer: "شهادة معتمدة في التسويق الرقمي" }
    ],
    skills: ["Digital Marketing", "Social Media", "تحليل الحملات", "SEO", "إعلانات Google"],
    targetJobs: ["خبير تسويق رقمي", "خبير تسويق إلكتروني", "مدير حملات"],
    employers: ["شركات التسويق", "الوكالات الإعلانية", "القطاع الخاص", "العمل الحر"],
    exitPoints: "يمكن الخروج بعد 4 أسابيع والحصول على شهادة أساسيات التسويق الرقمي"
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
    description: "كورس قصير لتعلم تقنيات تحليل البيانات باستخدام Excel، يشمل أدوات وتقارير عملية.",
    overview: "كورس قصير لتعلم تقنيات تحليل البيانات باستخدام Excel، يشمل أدوات وتقارير عملية.",
    objectives: [
      "إتقان أدوات Excel الأساسية والمتقدمة",
      "تنظيف البيانات وتحليلها",
      "إنشاء تقارير ولوحات معلومات بصرية"
    ],
    curriculum: [
      { semester: "الأسبوع الأول", courses: ["الصفوف والأعمدة", "الصيغ الأساسية", "مقدمة في Excel"] },
      { semester: "الأسبوع الثاني", courses: ["Pivot Tables", "Charts", "تحليل البيانات"] },
      { semester: "الأسبوع الثالث", courses: ["تحليل بيانات حقيقي وإنشاء تقارير", "مشروع عملي"] }
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
      { question: "ما هي شروط القبول في الكورس؟", answer: "شهادة الثانوية العامة ومعرفة أساسية بالحاسوب" },
      { question: "ما هي مدة الكورس؟", answer: "شهر واحد (4 أسابيع)" },
      { question: "هل يوجد دعم مالي؟", answer: "يتوفر تقسيط على دفعتين" },
      { question: "ما هي الشهادات التي سأحصل عليها؟", answer: "شهادة معتمدة في تحليل البيانات" }
    ],
    skills: ["Excel", "تحليل البيانات", "Charts", "Pivot Tables", "Reporting"],
    targetJobs: ["محلل بيانات", "محلل بيانات أعمال", "أخصائي تقارير"],
    employers: ["الشركات المالية", "القطاع الحكومي", "شركات التقنية", "الاستشارات"],
    exitPoints: "يمكن الخروج بعد أسبوعين والحصول على شهادة أساسيات Excel"
  }
];

export default Courses;