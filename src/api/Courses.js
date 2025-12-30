import {
  ComputerDesktopIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Courses = [
  {
    id: 1,
    icon: ComputerDesktopIcon,
    title: {
      ar: "ممارس معتمد في الحوسبة السحابية من AWS",
      en: "AWS Certified Cloud Practitioner (Amazon)"
    },
    subtitle: {
      ar: "دورة تدريبية مكثفة وعملية",
      en: "Intensive and practical training course"
    },
    category: {
      ar: "تقنية المعلومات وشبكات الحاسب",
      en: "Information Technology & Computer Networks"
    },
    duration: {
      ar: "3 أيام",
      en: "3 days"
    },
    hours: {
      ar: "18 ساعة",
      en: "18 hours"
    },
    // comment this
    // level: {
    //   ar: "مبتدئ",
    //   en: "Beginner"
    // },
    startDate: "20 يناير 2026",
    endDate: "22 يناير 2026",
    // commen this
    // seats: 20,
    // commen this
    // availableSeats: 8,
    status: {
      ar: "مفتوح للتسجيل",
      en: "Open for Registration"
    },
    price: 6000,
    sponsored:{
      ar: "صندوق تنمية الموارد البشرية (هدف)",
      en: "Human Resources Development Fund (Hadaf)"
    },
    // commen this
    // originalPrice: "2,000 ر.س",
    // commen this
    // discount: "25%",
    // commen this
    // installment: "750 ر.س/شهر",
    // rating: 4.7,
    // reviews: 32,
    // commen this
    // enrolled: 12,
    instructor: {
      name: "Eng.Chaitanya Gaajula",
      title: {
        ar: "مدرب , مستشار ,  سفير معهد DevOps ",
        en: "Trainer / Consultant / DevOps Institute Ambassador"
      },
      experience: {
        ar: "24 سنة",
        en: "24 years"
      },
      image: "https://images.unsplash.com/photo-1634482273093-f3f1abe5a8ac?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: {
        ar: `مختص في بنية وتقنيات تكنولوجيا المعلومات يتمتع بخبرة تتجاوز 24 عامًا في تصميم وتنفيذ وإدارة حلول البنية التحتية المؤسسية، والتحول الرقمي، والحوسبة السحابية. يمتلك أكثر من 8 سنوات خبرة في التدريب التقني في مجالات الذكاء الاصطناعي التوليدي (GenAI)، الذكاء الاصطناعي، تعلم الآلة، AIOps، علم البيانات، Python (NumPy وPandas)، وهندسة البيانات السحابية.
يمتلك خبرة واسعة في منصات AWS وAzure وGoogle Cloud وOracle Cloud، مع تركيز قوي على أمن الحوسبة السحابية، DevOps، Azure DevOps، المنهجيات الرشيقة (Agile)، الحاويات (Docker)، Kubernetes، Terraform، Ansible، وأنظمة Linux. قام بإدارة عملاء وشركات على مستوى عالمي باستخدام حلول سحابية متعددة ومُستضافة.
قدّم العديد من الجلسات وورش العمل التقنية في مجالات الذكاء الاصطناعي، DevOps، الحوسبة السحابية، الأمن السيبراني، أدوات ترحيل مراكز البيانات، وأنظمة Linux. كما شارك في إعداد وثائق التصميم المعماري والتقني لمشاريع ترحيل وتوحيد وتقييم مراكز البيانات، وتولى إدارة مراكز بيانات افتراضية. بالإضافة إلى ذلك، ساهم في إعداد العروض الفنية (RFP / RFI) لمشاريع التحول والبنية التحتية واسعة النطاق.`,
        
        en: `IT Infrastructure Professional with over 24 years of experience delivering enterprise-scale infrastructure, cloud, and migration solutions. Possesses 8+ years of hands-on technical training and delivery experience across GenAI, AI, ML, AIOps, Data Science, Python (NumPy, Pandas), and Cloud Data Engineering. Highly skilled in AWS, Azure, Google Cloud, and Oracle Cloud, with deep expertise in Cloud Security, DevOps, Azure DevOps, Agile methodologies, Containers (Docker), Kubernetes, Terraform, Ansible, and Linux. Has successfully managed global customers using multi-cloud and hosted cloud solutions. An experienced technical presenter who has delivered numerous sessions on AI, DevOps, Cloud Computing, Security, Datacenter Migration, and Linux. Proven track record in designing technical architecture and design documents for Data Center Migration, Consolidation, and Assessments, as well as managing virtual datacenters. Actively contributed to RFP and RFI proposals related to large-scale infrastructure and migration initiatives.`
      }
    },
    description: {
      ar: "شهادة تأسيسية تثبت الفهم الأساسي لمفاهيم السحابة (Cloud Concepts)، خدمات AWS الرئيسية، الأمان والامتثال (Security & Compliance)، نموذج الفوترة والتسعير في AWS. ",
      en: "Foundational AWS certification that validates understanding of AWS cloud fundamentals — core services (compute, storage, networking), cloud economics, security, billing/pricing, architecture basics — suitable for business, managerial, or technical professionals beginning AWS journey."
    },
    overview: {
      ar: "أساسيات AWS - مقدمة في تقنيات الحوسبة السحابية وتطبيقاتها العملية",
      en: "Foundational course introducing AWS cloud concepts, core services, security, and pricing models for beginners."
    },
    objectives: {
      ar: [
        "فهم مفاهيم الحوسبة السحابية",
        "تعرف على خدمات AWS الرئيسية",
        "تطبيق مبادئ الأمان والامتثال",
        "فهم نموذج التسعير في AWS"
      ],
      en: [
        "Understand cloud computing concepts",
        "Learn core AWS services",
        "Apply security and compliance principles",
        "Understand AWS pricing model",
        "Complete hands-on practical projects"
      ]
    },
    targetAudience: {
      ar: "الأفراد في الأدوار التقنية وغير التقنية (المبيعات، التسويق، المالية، الإدارة)، ومديرو المشاريع، وأي شخص جديد على AWS ويرغب في فهم أساسيات المنصة.",
      en: "Beginners in programming, professionals wanting to learn Python basics, and researchers in data and AI fields. No prior programming experience required. Those interested in data science and AI applications. Suitable for beginners with no prior coding experience. Individuals seeking to build foundational programming skills and practical coding abilities."
    },
    // Comment This
    // curriculum: {
    //   ar: [
    //     { semester: "الأسبوع الأول", courses: ["المتغيرات", "العمليات الحسابية", "مقدمة في بايثون"] },
    //     { semester: "الأسبوع الثاني", courses: ["if statements", "for & while loops", "الشروط والحلقات"] },
    //     { semester: "الأسبوع الثالث", courses: ["Functions", "Importing Libraries", "الدوال والمكتبات"] },
    //     { semester: "الأسبوع الرابع", courses: ["مشروع صغير باستخدام بايثون", "مشروع عملي"] }
    //   ],
    //   en: [
    //     { semester: "Week 1", courses: ["Variables", "Arithmetic Operations", "Introduction to Python"] },
    //     { semester: "Week 2", courses: ["if statements", "for & while loops", "Conditions and Loops"] },
    //     { semester: "Week 3", courses: ["Functions", "Importing Libraries", "Functions and Libraries"] },
    //     { semester: "Week 4", courses: ["Small project using Python", "Practical Project"] }
    //   ]
    // },

    requirements: {
      ar: [
        
        "لا يوجد متطلبات مسبقة"
      ],
      en: [
        "No prior requirements"
      ]
    },
    // Comment This One
    // benefits: {
    //   ar: [
    //     "شهادة معتمدة بعد الانتهاء",
    //     "مشروع عملي لتطبيق المهارات",
    //     "دعم من المدرس"
    //   ],
    //   en: [
    //     "Certified certificate upon completion",
    //     "Practical project to apply skills",
    //     "Instructor support"
    //   ]
    // },
    // Comment This
    // schedule: {
    //   ar: {
    //     days: ["السبت", "الأربعاء"],
    //     time: "05:00 مساءً - 07:00 مساءً",
    //     mode: "أونلاين",
    //     location: "منصة التعليم الإلكتروني"
    //   },
    //   en: {
    //     days: ["Saturday", "Wednesday"],
    //     time: "05:00 PM - 07:00 PM",
    //     mode: "Online",
    //     location: "E-learning Platform"
    //   }
    // },

    faqs: {
      ar: [
        { question: "ما هي شروط القبول في الكورس؟", answer: "لا توجد متطلبات مسبقة، فقط رغبة في التعلم" },
        { question: "ما هي مدة الكورس؟", answer: " 3 أيام " },
        { question: "هل يوجد دعم مالي؟", answer: "يمكنك التقسيط على دفعات عن طريق تابي أو تمارا كما تقوم هيئة دعم الموارد البشرية (هدف) بدعم هذه الدورة" },
        { question: "ما هي الشهادات التي سأحصل عليها؟", answer: "شهادة معتمدة عالمية ومن صندوق تنمية الموارد البشرية" },
        { question: "ما هي الوظائف التي يمكنني الاتحاق بها بعد اجتايز الاختبار؟", answer: "Cloud Support Associate, Junior Cloud Support Engineer, Technical Support Specialist, Junior Cloud Engineer" }
      ],
      en: [
        { question: "What are the admission requirements for the course?", answer: "High school diploma and computer with internet connection" },
        { question: "What is the course duration?", answer: "Two months (8 weeks)" },
        { question: "Is financial support available?", answer: "Installment payment in two installments is available" },
        { question: "What certificates will I get?", answer: "Certified certificate from the Academy" },
        { question: "What jobs can I apply for after passing the exam?", answer: "Cloud Support Associate, Junior Cloud Support Engineer, Technical Support Specialist, Junior Cloud Engineer" }
      ]
    },
    skills: {
      ar: ["أساسيات الحوسبة السحابية", "المعرفة بخدمات AWS الأساسية", "أساسيات الأمان وإدارة الصلاحيات ", "إدارة التكاليف والفوترة السحابية", "تصميم وتنفيذ حلول سحابية ", "العمل مع أدوات إدارة المشاريع"],
      en: ["Cloud Computing Fundamentals", "AWS Core Services Awareness", "Cloud Security & IAM Basics", "AWS Billing & Cost Optimization", "Cloud Architecture Principles", "Deployment & Monitoring Awareness"]
    },
    targetJobs: {
      ar: ["مطور برمجيات", "مبرمج بايثون", "محلل برمجيات"],
      en: ["Software Developer", "Python Programmer", "Software Analyst"]
    },
    // Comment This
    // employers: {
    //   ar: ["شركات التقنية", "شركات تطوير البرمجيات", "القطاع الحكومي", "مشاريعك الخاصة"],
    //   en: ["Technology Companies", "Software Development Companies", "Government Sector", "Your Own Projects"]
    // },
    // Comment this
    // exitPoints: {
    //   ar: "يمكن الخروج بعد 4 أسابيع والحصول على شهادة إتمام كورس بايثون الأساسي",
    //   en: "Can exit after 4 weeks and get a certificate of completion for basic Python course"
    // }
  },

  {
    id: 2,
    icon: AcademicCapIcon,
    title: {
      ar: "كورس تطوير واجهات المستخدم UI",
      en: "UI Development Course"
    },
    subtitle: {
      ar: "تعلم تصميم واجهات تطبيقات ومواقع جذابة",
      en: "Learn to design attractive application and website interfaces"
    },
    category: {
      ar: "دورات تصميم",
      en: "Design Courses"
    },
    duration: {
      ar: "1.5 أشهر",
      en: "1.5 months"
    },
    level: {
      ar: "مبتدئ - متوسط",
      en: "Beginner - Intermediate"
    },
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
    targetJobs: {
      ar: ["مصمم UX/UI", "مصمم واجهات مستخدم", "مصمم تجربة مستخدم"],
      en: ["UX/UI Designer", "User Interface Designer", "User Experience Designer"]
    },
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
    targetJobs: {
      ar: ["خبير تسويق رقمي", "خبير تسويق إلكتروني", "مدير حملات"],
      en: ["Digital Marketing Expert", "E-commerce Marketing Specialist", "Campaign Manager"]
    },
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
    targetJobs: {
      ar: ["محلل بيانات", "محلل بيانات أعمال", "أخصائي تقارير"],
      en: ["Data Analyst", "Business Data Analyst", "Reporting Specialist"]
    },
    employers: ["الشركات المالية", "القطاع الحكومي", "شركات التقنية", "الاستشارات"],
    exitPoints: "يمكن الخروج بعد أسبوعين والحصول على شهادة أساسيات Excel"
  }
];

// Helper function to get bilingual data
export const getCourseData = (course, lang = 'ar') => {
  const getLocalizedField = (field) => {
    if (typeof field === 'object' && field !== null) {
      // Handle arrays - don't localize them, return as-is
      if (Array.isArray(field)) {
        return field;
      }
      // Handle bilingual objects
      return field[lang] || field.ar || field.en || '';
    }
    return field;
  };

  return {
    ...course,
    title: getLocalizedField(course.title),
    subtitle: getLocalizedField(course.subtitle),
    category: getLocalizedField(course.category),
    duration: getLocalizedField(course.duration),
    level: getLocalizedField(course.level),
    status: getLocalizedField(course.status),
    description: getLocalizedField(course.description),
    overview: getLocalizedField(course.overview),
    objectives: getLocalizedField(course.objectives),
    curriculum: getLocalizedField(course.curriculum),
    requirements: getLocalizedField(course.requirements),
    benefits: getLocalizedField(course.benefits),
    schedule: typeof course.schedule === 'object' && course.schedule !== null ? (
      (course.schedule.ar || course.schedule.en) ? getLocalizedField(course.schedule) :
      {
        ...course.schedule,
        days: Array.isArray(course.schedule.days) ? course.schedule.days : course.schedule.days,
        time: getLocalizedField(course.schedule.time),
        mode: getLocalizedField(course.schedule.mode),
        location: getLocalizedField(course.schedule.location),
      }
    ) : course.schedule,
    faqs: getLocalizedField(course.faqs),
    skills: getLocalizedField(course.skills),
    targetJobs: getLocalizedField(course.targetJobs),
    employers: getLocalizedField(course.employers),
    exitPoints: getLocalizedField(course.exitPoints),
    instructor: {
      ...course.instructor,
      title: getLocalizedField(course.instructor.title),
      experience: getLocalizedField(course.instructor.experience),
      bio: getLocalizedField(course.instructor.bio),
    }
  };
};

export default Courses;