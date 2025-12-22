  import {CheckBadgeIcon, TagIcon, ClockIcon, ChartBarIcon, CalendarIcon, UserGroupIcon, CurrencyDollarIcon, ArrowLeftIcon} from '@heroicons/react/24/outline';
 
  function ProgramCard ({ program }) {
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

    export default ProgramCard;