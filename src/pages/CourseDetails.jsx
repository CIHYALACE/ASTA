import React from "react";
import { useParams } from "react-router-dom";
// Components
import ProgramHeader from "../components/ProgramHeader";
import OverviewSection from "../components/ProgramOverviewSection";
import CurriculumSection from "../components/ProgramCurriculumSection";
import InstructorSection from "../components/ProgramInstructorSection";
import RequirementsSection from "../components/ProgramRequirementsSection";
import ProgramFAQSection from "../components/ProgramFAQSection";
import RelatedProgramsSection from "../components/RelatedProgramsSection";
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
      <ProgramHeader program={course} />
      <OverviewSection program={course} />
      <CurriculumSection program={course} />
      <InstructorSection program={course} />
      <RequirementsSection program={course} />
      <ProgramFAQSection program={course} />
      <RelatedProgramsSection />
      
      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للانطلاق في رحلة التعلم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            سجل الآن واحجز مقعدك في أفضل برنامج تدريبي في {localizedCourse.title}
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