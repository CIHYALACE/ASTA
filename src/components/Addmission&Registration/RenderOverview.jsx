  import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

const RenderOverview = ({ diplomas, subjects, setActiveTab, setExpandedSubject }) => (
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

  export default RenderOverview;