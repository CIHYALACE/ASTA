import React, { useState } from 'react';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  LanguageIcon,
  CalculatorIcon,
  BriefcaseIcon,
  BanknotesIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentArrowDownIcon,
  PrinterIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const AdmissionAndRegistration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedDiploma, setExpandedDiploma] = useState(null);
  const [expandedSubject, setExpandedSubject] = useState(null);


  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = `/files/AdmissionRegistration.pdf`;
    a.download = 'AdmissionRegistration.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  // الدبلومات المتاحة
  const diplomas = [
    { id: 1, name: 'سالسل الإعداد والخدمات اللوجستية', mode: ['حضوري', 'عن بعد'], color: 'bg-teal-100 text-teal-800' },
    { id: 2, name: 'ريادة الأعمال', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 3, name: 'التكنولوجيا المالية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 4, name: 'السكرتير القانوني', mode: ['حضوري', 'عن بعد'], color: 'bg-teal-100 text-teal-800' },
    { id: 5, name: 'البرمجة وتطبيقات الأجهزة الذكية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 6, name: 'تقنية السياحة والضيافة (الفندقة)', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 7, name: 'أمن وشبكات الكمبيوتر', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 8, name: 'التسويق الرقمي والتجارة الإلكترونية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 9, name: 'قواعد البيانات وتطوير الويب', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' }
  ];

  // التخصصات والمقررات
  const subjects = [
    { 
      id: 'computer',
      name: 'الحاسب الآلي',
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 14,
      hours: 68,
      instructors: 4,
      classrooms: 4,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'سالسل الإمداد', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'السكرتير القانوني', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'السياحة والفندقة', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مقدمة في تقنية المعلومات', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'أساسيات الشبكات والأمن', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مسارات الوصول إلى الشبكة', credits: 3, hours: 6 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'مقدمة في الحاسب وتكنولوجيا المعلومات', credits: 3, hours: 5 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'أساسيات البرمجة', credits: 3, hours: 5 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'تصميم وتحليل قواعد البيانات', credits: 3, hours: 6 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مبادئ قواعد البيانات', credits: 3, hours: 6 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مقدمة في البرمجة', credits: 3, hours: 5 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'هياكل البيانات والخوارزميات', credits: 3, hours: 5 }
      ]
    },
    { 
      id: 'english',
      name: 'اللغة الإنجليزية',
      icon: <LanguageIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 9,
      hours: 34,
      instructors: 2,
      classrooms: 2,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'سالسل الإمداد', name: 'لغة إنجليزية عامة', credits: 3, hours: 3 },
        { diploma: 'السكرتير القانوني', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'لغة إنجليزية عامة', credits: 3, hours: 3 },
        { diploma: 'السياحة والفندقة', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'business',
      name: 'إدارة الأعمال',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 9,
      hours: 34,
      instructors: 2,
      classrooms: 2,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مبادئ ريادة الأعمال', credits: 3, hours: 4 },
        { diploma: 'ريادة الأعمال', name: 'ريادة الأعمال (2)', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'تقنية السياحة والفندقة', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في إدارة المخاطر المالية', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في التكنولوجيا المالية', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'law',
      name: 'القانون',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 8,
      hours: 22,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'قانون الأعمال', credits: 2, hours: 2 },
        { diploma: 'سالسل الإمداد', name: 'مبادئ القانون التجاري', credits: 3, hours: 3 },
        { diploma: 'سالسل الإمداد', name: 'العقود التجارية وعقود النقل', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'لوائح التكنولوجيا المالية', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'مبادئ القانون', credits: 3, hours: 3 },
        { diploma: 'السكرتير القانوني', name: 'القانون الإداري', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'مبادئ القانون الدولي', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'القانون التجاري', credits: 2, hours: 2 }
      ]
    },
    { 
      id: 'math',
      name: 'الرياضيات',
      icon: <CalculatorIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 5,
      hours: 20,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'السياحة والفندقة', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'رياضيات', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'marketing',
      name: 'التسويق',
      icon: <GlobeAltIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 3,
      hours: 16,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'مقدمة في التسويق الرقمي وبناء الاستراتيجيات', credits: 3, hours: 8 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'تحسين محركات البحث والتسويق عبر المحتوى', credits: 3, hours: 5 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'تحليل البيانات وقياس الأداء', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'accounting',
      name: 'المحاسبة',
      icon: <BanknotesIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مبادئ المحاسبة', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'أساسيات المالية والمحاسبة', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'logistics',
      name: 'اللوجستيات',
      icon: <TruckIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'سالسل الإمداد والخدمات اللوجستية', name: 'مقدمة في الخدمات اللوجستية', credits: 2, hours: 2 },
        { diploma: 'سالسل الإمداد والخدمات اللوجستية', name: 'عمليات سالسل الإمداد والتوريد', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'tourism',
      name: 'السياحة والضيافة',
      icon: <BuildingStorefrontIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'تقنية السياحة والفندقة', name: 'مدخل إلى صناعة السياحة والضيافة', credits: 3, hours: 3 },
        { diploma: 'تقنية السياحة والفندقة', name: 'الصحة والسلامة الفندقية', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'arabic',
      name: 'اللغة العربية',
      icon: <DocumentTextIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 1,
      hours: 2,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'الكتابة الفنية', credits: 2, hours: 2 }
      ]
    }
  ];

  // جدول المحاضرات
  const schedules = [
    {
      day: 'الأحد',
      courses: [
        { subject: 'القانون', time: '3:00-5:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '3:00-5:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'الحاسب الآلي (1)', time: '5:00-7:00 م', room: 'قاعة 4', instructor: 'أ. سامي' },
        { subject: 'اللغة الإنجليزية', time: '3:00-5:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '3:00-5:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الإثنين',
      courses: [
        { subject: 'القانون', time: '5:00-7:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '7:00-9:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'المحاسبة', time: '5:00-7:00 م', room: 'قاعة 2', instructor: 'د. فهد' },
        { subject: 'اللغة الإنجليزية', time: '5:00-7:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '5:00-7:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الثلاثاء',
      courses: [
        { subject: 'القانون', time: '6:00-8:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '6:00-8:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'اللوجستيات', time: '5:00-7:00 م', room: 'قاعة 2', instructor: 'د. عبدالله' },
        { subject: 'السياحة', time: '6:30-8:00 م', room: 'قاعة 1', instructor: 'أ. نورة' },
        { subject: 'الحاسب الآلي (2)', time: '7:00-9:00 م', room: 'قاعة 5', instructor: 'أ. علي' }
      ]
    },
    {
      day: 'الأربعاء',
      courses: [
        { subject: 'القانون', time: '7:00-9:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '7:00-9:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'المحاسبة', time: '9:00-10:00 م', room: 'قاعة 2', instructor: 'د. فهد' },
        { subject: 'اللغة الإنجليزية', time: '7:00-9:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '7:00-9:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الخميس',
      courses: [
        { subject: 'القانون', time: '4:00-6:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '6:00-8:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'اللوجستيات', time: '9:00-10:00 م', room: 'قاعة 2', instructor: 'د. عبدالله' },
        { subject: 'السياحة', time: '8:00-10:00 م', room: 'قاعة 1', instructor: 'أ. نورة' },
        { subject: 'الحاسب الآلي (2)', time: '5:00-7:00 م', room: 'قاعة 5', instructor: 'أ. علي' }
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* إحصائيات عامة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">عدد الدبلومات</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">9</p>
            </div>
            <AcademicCapIcon className="h-12 w-12 text-[#3CBEB3]" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">إجمالي المقررات</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">55</p>
            </div>
            <BookOpenIcon className="h-12 w-12 text-[#3CBEB3]" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">عدد المحاضرين</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">42</p>
            </div>
            <UserGroupIcon className="h-12 w-12 text-[#3CBEB3]" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">ساعات التدريس</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">214</p>
            </div>
            <ClockIcon className="h-12 w-12 text-[#3CBEB3]" />
          </div>
        </div>
      </div>

      {/* قائمة الدبلومات */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">الدبلومات المتاحة - الفصل الدراسي الأول</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {diplomas.map((diploma) => (
            <div
              key={diploma.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-800">{diploma.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${diploma.color}`}>
                  {diploma.mode.join(' / ')}
                </span>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <CalendarIcon className="h-4 w-4 ml-2 text-white" />
                <span>5 أيام أسبوعياً</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* توزيع التخصصات */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">توزيع المقررات حسب التخصص</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setActiveTab('subjects');
                setExpandedSubject(subject.id);
              }}
            >
              <div className={`${subject.color} p-3 rounded-lg inline-flex mb-3 text-white`}>
                {subject.icon}
              </div>
              <h4 className="font-bold text-gray-800">{subject.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{subject.courses} مقرر</p>
              <p className="text-gray-600 text-sm">{subject.hours} ساعة</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      {subjects.map((subject) => (
        <div key={subject.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div 
            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`${subject.color} p-3 rounded-lg ml-4 text-white`}>
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 ml-1 text-white" />
                      {subject.courses} مقرر
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 ml-1 text-white" />
                      {subject.hours} ساعة
                    </span>
                    <span className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 ml-1 text-white" />
                      {subject.instructors} محاضر
                    </span>
                    <span className="flex items-center">
                      <BuildingOfficeIcon className="h-4 w-4 ml-1 text-white" />
                      {subject.classrooms} قاعة
                    </span>
                  </div>
                </div>
              </div>
              {expandedSubject === subject.id ? 
                <ChevronUpIcon className="h-6 w-6 text-white" /> : 
                <ChevronDownIcon className="h-6 w-6 text-white" />
              }
            </div>
          </div>
          
          {expandedSubject === subject.id && (
            <div className="border-t border-gray-200 p-6">
              <h4 className="font-bold text-gray-800 mb-4">تفاصيل المقررات</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">الدبلوم</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">اسم المقرر</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">الساعات المعتمدة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">ساعات الاتصال</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subject.coursesList.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{course.diploma}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.credits}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{course.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* جدول أسبوعي */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">جدول المحاضرات الأسبوعي</h3>
          <div className="space-y-4">
            {schedules.map((daySchedule, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <CalendarIcon className="h-5 w-5 ml-2 text-[#3CBEB3]" />
                  {daySchedule.day}
                </h4>
                <div className="space-y-2">
                  {daySchedule.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#3CBEB3] ml-2"></div>
                        <span className="font-medium">{course.subject}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="ml-4">{course.time}</span>
                        <span className="ml-4">{course.room}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* توزيع القاعات */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">توزيع القاعات التدريبية</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: 'قاعة 1', subjects: ['القانون', 'السياحة'], capacity: '30 مقعد' },
                { number: 'قاعة 2', subjects: ['الرياضيات', 'المحاسبة', 'اللوجستيات'], capacity: '25 مقعد' },
                { number: 'قاعة 3', subjects: ['إدارة الأعمال'], capacity: '35 مقعد' },
                { number: 'قاعة 4', subjects: ['الحاسب الآلي (1)'], capacity: '30 مقعد' },
                { number: 'قاعة 5', subjects: ['الحاسب الآلي (2)'], capacity: '25 مقعد' },
                { number: 'قاعة 6', subjects: ['اللغة الإنجليزية'], capacity: '30 مقعد' }
              ].map((room, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">{room.number}</h4>
                  <p className="text-sm text-gray-600 mb-2">{room.subjects.join('، ')}</p>
                  <p className="text-sm text-gray-500">السعة: {room.capacity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ساعات العمل */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">ساعات العمل اليومية</h3>
            <div className="space-y-3">
              {[
                { subject: 'الحاسب الآلي', hours: '14 ساعة/يوم', instructors: '4 محاضرين' },
                { subject: 'اللغة الإنجليزية', hours: '7 ساعات/يوم', instructors: '2 محاضرين' },
                { subject: 'إدارة الأعمال', hours: '7 ساعات/يوم', instructors: '2 محاضرين' },
                { subject: 'القانون', hours: '4.5 ساعة/يوم', instructors: '1 محاضر' },
                { subject: 'الرياضيات', hours: '4 ساعات/يوم', instructors: '1 محاضر' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">{item.subject}</span>
                  <div className="text-sm text-gray-600">
                    <span>{item.hours}</span>
                    <span className="mr-4">• {item.instructors}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatistics = () => (
    <div className="space-y-8">
      {/* توزيع ساعات الاتصال */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">توزيع ساعات الاتصال حسب التخصص</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded ${subject.color} ml-2`}></div>
                    <span>{subject.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">{subject.hours} ساعة</span>
                    <span className="text-gray-500">({subject.courses} مقرر)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* يمكن إضافة مخطط دائري هنا */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">214</div>
                  <div className="text-gray-600">ساعة إجمالية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* نسب التخصصات */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">نسب التخصصات في المقررات</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'الحاسب الآلي', percentage: '25%', count: 14, color: 'bg-teal-500' },
            { name: 'اللغة الإنجليزية', percentage: '16%', count: 9, color: 'bg-teal-500' },
            { name: 'إدارة الأعمال', percentage: '16%', count: 9, color: 'bg-teal-500' },
            { name: 'القانون', percentage: '15%', count: 8, color: 'bg-teal-500' },
            { name: 'الرياضيات', percentage: '9%', count: 5, color: 'bg-teal-500' },
            { name: 'التسويق', percentage: '5%', count: 3, color: 'bg-teal-500' },
            { name: 'المحاسبة', percentage: '4%', count: 2, color: 'bg-teal-500' },
            { name: 'اللوجستيات', percentage: '4%', count: 2, color: 'bg-teal-500' },
            { name: 'السياحة', percentage: '4%', count: 2, color: 'bg-teal-500' },
            { name: 'اللغة العربية', percentage: '2%', count: 1, color: 'bg-teal-500' }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
              <div className={`h-2 w-full ${item.color} rounded mb-3`}></div>
              <h4 className="font-bold text-gray-800">{item.name}</h4>
              <p className="text-2xl font-bold mt-2">{item.percentage}</p>
              <p className="text-gray-600 text-sm">{item.count} مقرر</p>
            </div>
          ))}
        </div>
      </div>

      {/* ملخص الأرقام */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
          <h4 className="font-bold text-teal-800 mb-4">ساعات المحاضرات النظرية</h4>
          <p className="text-3xl font-bold text-teal-600 mb-2">214 ساعة</p>
          <p className="text-teal-700">من إجمالي ساعات الاتصال</p>
        </div>
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
          <h4 className="font-bold text-teal-800 mb-4">ساعات العملي والتمارين</h4>
          <p className="text-3xl font-bold text-teal-600 mb-2">60 ساعة</p>
          <p className="text-teal-700">ممارسة وتطبيق عملي</p>
        </div>
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
          <h4 className="font-bold text-teal-800 mb-4">متوسط ساعات/مقرر</h4>
          <p className="text-3xl font-bold text-teal-600 mb-2">3.9 ساعة</p>
          <p className="text-teal-700">لكل مقرر دراسي</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="mx-10 px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <div className="bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] p-3 rounded-xl">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  خطة الفصل الدراسي الأول للدبلومات
                </h1>
                <p className="text-gray-600">نظام إدارة المقررات والجداول الدراسية - 5 أيام أسبوعياً</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={handleDownload}>
                <DocumentArrowDownIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="mx-10 px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'overview' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <ChartBarIcon className="h-5 w-5 ml-2" />
              نظرة عامة
            </button>
            <button
              onClick={() => setActiveTab('subjects')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'subjects' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <BookOpenIcon className="h-5 w-5 ml-2" />
              التخصصات والمقررات
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'schedule' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <CalendarIcon className="h-5 w-5 ml-2" />
              الجداول الدراسية
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'statistics' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <DocumentTextIcon className="h-5 w-5 ml-2" />
              الإحصائيات والتقارير
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'subjects' && renderSubjects()}
          {activeTab === 'schedule' && renderSchedule()}
          {activeTab === 'statistics' && renderStatistics()}
        </div>

        {/* Summary Footer */}
        <div className="bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">ملخص الفصل الدراسي الأول</h3>
              <p>9 دبلومات • 55 مقرر • 42 محاضر • 214 ساعة تدريس</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm">أيام أسبوعياً</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm">قاعات تدريب</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">تخصصات أكاديمية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionAndRegistration;