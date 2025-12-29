const RenderStatistics = ({ subjects }) => (
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

export default RenderStatistics;