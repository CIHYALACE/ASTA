
import { BookOpenIcon, ClockIcon, UserGroupIcon, BuildingOfficeIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const RenderSubjects = ({ subjects, expandedSubject, setExpandedSubject }) => (
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

  export default RenderSubjects;