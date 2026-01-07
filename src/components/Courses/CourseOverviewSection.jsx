import React from "react";

const CourseOverviewSection = ({ course }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          نظرة عامة على الدورة
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                عن الدورة
              </h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                {course.overview ? (
                  <div dangerouslySetInnerHTML={{ __html: course.overview }} />
                ) : (
                  <p>{course.description}</p>
                )}
              </div>
              
              {course.skills && Array.isArray(course.skills) && (
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">
                    المهارات التي ستكتسبها
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.skills.map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                معلومات الدورة
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">تاريخ البدء</span>
                  <span className="font-medium text-gray-900">{course.startDate}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">تاريخ الانتهاء</span>
                  <span className="font-medium text-gray-900">{course.endDate}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">المدة</span>
                  <span className="font-medium text-gray-900">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">الساعات</span>
                  <span className="font-medium text-gray-900">{course.hours} ساعة</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">المستوى</span>
                  <span className="font-medium text-gray-900">{course.level}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">السعر</span>
                  <span className="font-bold text-xl text-blue-600">{course.price} ريال</span>
                </div>
              </div>
            </div>
            
            {course.targetJobs && Array.isArray(course.targetJobs) && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  الوظائف المستهدفة
                </h3>
                <div className="space-y-3">
                  {course.targetJobs.map((job, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{job}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
