import { CalendarIcon } from '@heroicons/react/24/outline';

const RenderSchedule = ({ schedules }) => (
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

export default RenderSchedule;