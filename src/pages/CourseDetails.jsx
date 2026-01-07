import React from "react";
import { useParams } from "react-router-dom";
// Components
import CourseHeader from "../components/CourseHeader";
import CourseOverviewSection from "../components/CourseOverviewSection";
import CourseInstructorSection from "../components/CourseInstructorSection";
import CourseRequirementsSection from "../components/CourseRequirementsSection";
import CourseFAQSection from "../components/CourseFAQSection";
import RelatedCoursesSection from "../components/RelatedCoursesSection";
// data
import Courses, { getCourseData } from "../api/Courses";
const CourseDetails = () => {
  const { id, lang = 'ar' } = useParams();  
  const parsedId = parseInt(id);
  const course = Courses[parsedId - 1]; 
  const localizedCourse = getCourseData(course, lang);
  if (!course || isNaN(parsedId) || parsedId < 1 || parsedId > Courses.length) {
    return <div>Course not found</div>;
  }
  
  return (
    <div dir="rtl">
      <CourseHeader course={course} />
      <CourseOverviewSection course={course} />
      <CourseInstructorSection course={course} />
      <CourseRequirementsSection course={course} />
      <CourseFAQSection course={course} />
      <RelatedCoursesSection currentCourseId={id} />
      
      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للانطلاق في رحلة التعلم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            سجل الآن واحجز مقعدك في أفضل دورة تدريبية في {localizedCourse.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
              سجل الآن واحجز مقعدك   
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;