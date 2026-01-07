import React from "react";

const CourseInstructorSection = ({ course }) => {
  if (!course.instructor) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          مدرب الدورة
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                {course.instructor.image ? (
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.instructor.name}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  {course.instructor.title}
                </p>
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                    {course.instructor.experience}
                  </span>
                </div>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p>{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInstructorSection;
