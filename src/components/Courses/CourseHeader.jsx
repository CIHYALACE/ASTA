import React from "react";

const CourseHeader = ({ course }) => {
  return (
    <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {course.icon && <course.icon className="w-6 h-6" />}
              </div>
              <span className="text-blue-200 font-medium">{course.category}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {course.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-blue-200 text-sm mb-1">المدة</div>
                <div className="font-semibold">{course.duration}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">الساعات</div>
                <div className="font-semibold">{course.hours} ساعة</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">المستوى</div>
                <div className="font-semibold">{course.level}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">السعر</div>
                <div className="font-semibold">{course.price} ريال</div>
              </div>
            </div>
          </div>
          <div className="relative">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            ) : (
              <div className="rounded-2xl shadow-2xl w-full h-64 bg-gray-300 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
