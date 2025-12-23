import { useState } from 'react';
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
// Components
import ProgramCard from '../components/ProgramCard.jsx';
import ProgramsHeroSection from '../components/ProgramsHeroSection';
// data
import Programs from '../api/Programs';

const TrainingProgramsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // بيانات برامج التدريب
  const programs = Programs;

  const categories = ["all", "برامج أكاديمية", "برامج تقنية", "برامج إدارية", "برامج متقدمة"];

  // تصفية البرامج حسب الفئة ونتيجة البحث
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = filter === 'all' || program.category === filter;
    const matchesSearch = (program.title && program.title.includes(searchTerm)) || 
                         (program.description && program.description.includes(searchTerm)) ||
                         (program.subtitle && program.subtitle.includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

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