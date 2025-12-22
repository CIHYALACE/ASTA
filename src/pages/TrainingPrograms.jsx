import React, { useState } from 'react';
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ClockIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  TagIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import ProgramsHeroSection from '../components/ProgramsHeroSection';

const TrainingProgramsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // بيانات برامج التدريب
  const programs = [
    {
      id: 1,
      title: "بكالوريوس هندسة البرمجيات",
      subtitle: "كلية الهندسة والتكنولوجيا",
      description: "برنامج متكامل يغطي أساسيات هندسة البرمجيات وتطوير التطبيقات الذكية.",
      category: "برامج أكاديمية",
      duration: "4 سنوات",
      level: "مبتدئ إلى متقدم",
      startDate: "15 سبتمبر 2024",
      seats: 50,
      status: "مفتوح للتسجيل",
      icon: ComputerDesktopIcon,
      color: "#202C5B",
      gradient: "from-[#202C5B] to-[#226796]",
      skills: ["تطوير البرمجيات", "هندسة البيانات", "التصميم الهندسي", "إدارة المشاريع"],
      price: "مجاني"
    },
    {
      id: 2,
      title: "شهادة الماجستير في علم البيانات",
      subtitle: "الدراسات العليا",
      description: "برنامج متخصص في تحليل البيانات الضخمة وتطبيقات الذكاء الاصطناعي.",
      category: "برامج متقدمة",
      duration: "سنتان",
      level: "متقدم",
      startDate: "1 أكتوبر 2024",
      seats: 30,
      status: "مفتوح للتسجيل",
      icon: AcademicCapIcon,
      color: "#226796",
      gradient: "from-[#226796] to-[#23A0D0]",
      skills: ["تحليل البيانات", "التعلم الآلي", "هندسة البيانات", "النمذجة التنبؤية"],
      price: "25,000 ر.س"
    },
    {
      id: 3,
      title: "دبلوم تطوير الويب المتقدم",
      subtitle: "التقنية والتطوير",
      description: "تدريب عملي متقدم على أحدث تقنيات تطوير الويب والتطبيقات.",
      category: "برامج تقنية",
      duration: "6 أشهر",
      level: "متوسط",
      startDate: "10 أكتوبر 2024",
      seats: 40,
      status: "مفتوح للتسجيل",
      icon: BookOpenIcon,
      color: "#23A0D0",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
      skills: ["React.js", "Node.js", "قواعد البيانات", "واجهات المستخدم"],
      price: "12,000 ر.س"
    },
    {
      id: 4,
      title: "دورة القيادة الإدارية",
      subtitle: "التنمية البشرية",
      description: "برنامج تطوير المهارات القيادية والإدارية للمستويات الإشرافية.",
      category: "برامج إدارية",
      duration: "3 أشهر",
      level: "متوسط",
      startDate: "5 نوفمبر 2024",
      seats: 25,
      status: "قريبًا",
      icon: UserGroupIcon,
      color: "#30AFC1",
      gradient: "from-[#30AFC1] to-[#3CBEB3]",
      skills: ["القيادة", "التخطيط الاستراتيجي", "إدارة الفرق", "التواصل الفعال"],
      price: "8,000 ر.س"
    },
    {
      id: 5,
      title: "شهادة أمن المعلومات",
      subtitle: "الأمن السيبراني",
      description: "برنامج متخصص في أمن المعلومات والحماية من الاختراقات الإلكترونية.",
      category: "برامج تقنية",
      duration: "8 أشهر",
      level: "متقدم",
      startDate: "20 يناير 2025",
      seats: 35,
      status: "مفتوح للتسجيل",
      icon: ShieldCheckIcon,
      color: "#3CBEB3",
      gradient: "from-[#3CBEB3] to-[#202C5B]",
      skills: ["أمن الشبكات", "اختبار الاختراق", "التشفير", "التحقيق الرقمي"],
      price: "18,000 ر.س"
    },
    {
      id: 6,
      title: "دبلوم التسويق الرقمي",
      subtitle: "التسويق والتطوير",
      description: "برنامج شامل يغطي استراتيجيات التسويق الرقمي وتحليل البيانات التسويقية.",
      category: "برامج إدارية",
      duration: "5 أشهر",
      level: "مبتدئ",
      startDate: "15 ديسمبر 2024",
      seats: 45,
      status: "مكتمل",
      icon: BriefcaseIcon,
      color: "#226796",
      gradient: "from-[#226796] to-[#3CBEB3]",
      skills: ["التسويق عبر السوشيال ميديا", "تحليل البيانات", "تحسين محركات البحث", "إدارة الحملات"],
      price: "10,000 ر.س"
    }
  ];

  const categories = ["all", "برامج أكاديمية", "برامج تقنية", "برامج إدارية", "برامج متقدمة"];

  // تصفية البرامج حسب الفئة ونتيجة البحث
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = filter === 'all' || program.category === filter;
    const matchesSearch = program.title.includes(searchTerm) || 
                         program.description.includes(searchTerm) ||
                         program.subtitle.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const ProgramCard = ({ program }) => {
    const IconComponent = program.icon;
    const statusColors = {
      "مفتوح للتسجيل": "bg-green-100 text-green-800",
      "قريبًا": "bg-yellow-100 text-yellow-800",
      "مكتمل": "bg-red-100 text-red-800"
    };

    return (
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-1">
        {/* المثلثات الزخرفية */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-cyan-50 to-cyan-100 opacity-50 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>
        
        {/* الهيدر مع التدرج اللوني */}
        <div className="relative h-48 bg-[url('/images/Diploma.jpg')] bg-no-repeat bg-cover">
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[80px] border-l-[80px] border-b-cyan-300/20 border-l-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50"></div>

          
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <IconComponent className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              {program.title}
            </h3>
            <p className="text-blue-100 text-center opacity-90">
              {program.subtitle}
            </p>
          </div>
        </div>

        {/* محتوى البطاقة */}
        <div className="p-6 relative z-10">
          {/* البادجات */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${statusColors[program.status]}`}>
              <TagIcon className="h-3 w-3" />
              {program.status}
            </span>
            <span 
              className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1"
              style={{ 
                backgroundColor: `${program.color}15`,
                color: program.color
              }}
            >
              <CheckBadgeIcon className="h-3 w-3" />
              {program.category}
            </span>
          </div>

          {/* الوصف */}
          <p className="text-gray-600 mb-6 leading-relaxed text-right text-sm">
            {program.description}
          </p>

          {/* تفاصيل البرنامج */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
              <ClockIcon className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">{program.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
              <ChartBarIcon className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">{program.level}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
              <CalendarIcon className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">{program.startDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
              <UserGroupIcon className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">{program.seats} مقعد</span>
            </div>
          </div>

          {/* المهارات */}
          <div className="mb-6">
            <h4 className="text-gray-800 font-medium mb-3 text-right text-sm">المهارات المكتسبة:</h4>
            <div className="flex flex-wrap gap-1.5">
              {program.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 text-xs rounded-lg border"
                  style={{ 
                    backgroundColor: `${program.color}10`,
                    color: program.color,
                    borderColor: `${program.color}30`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* السعر وزر التفاصيل */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <CurrencyDollarIcon className="h-5 w-5" style={{ color: program.color }} />
              <span className="text-xl font-bold" style={{ color: program.color }}>
                {program.price}
              </span>
            </div>
            <button 
              className="px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 group-hover:shadow-md"
              style={{ 
                backgroundColor: program.color,
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span className="text-sm">تفاصيل</span>
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <ProgramsHeroSection />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* عنوان الصفحة */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            برامج التدريب والتطوير
          </h1>
          <div className="h-1.5 w-48 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full mb-6"></div>
        </div>

        {/* البحث والتصفية */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* حقل البحث */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="ابحث عن برنامج تدريبي..."
                className="w-full pr-12 pl-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent bg-white text-gray-800 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* عداد النتائج */}
            <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-200">
              <FunnelIcon className="h-5 w-5 text-gray-500" />
              <span className="font-medium">
                عرض <span className="text-[#202C5B]">{filteredPrograms.length}</span> من <span className="text-[#202C5B]">{programs.length}</span> برنامج
              </span>
            </div>
          </div>

          {/* أزرار التصفية */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-[#202C5B] to-[#226796] text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
                }`}
                onClick={() => setFilter(category)}
              >
                <FunnelIcon className="h-4 w-4" />
                {category === 'all' ? 'جميع البرامج' : category}
              </button>
            ))}
          </div>
        </div>

        {/* قائمة بطاقات البرامج */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl mb-6">
              <BookOpenIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              لا توجد برامج تطابق بحثك
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              حاول استخدام مصطلحات بحث مختلفة أو قم بتغيير الفلتر للعثور على البرنامج المناسب
            </p>
            <button 
              className="px-6 py-3 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
            >
              <FunnelIcon className="h-5 w-5" />
              عرض جميع البرامج
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default TrainingProgramsPage;