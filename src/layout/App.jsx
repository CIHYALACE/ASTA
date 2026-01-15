import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from '../shared/SharedLayout';

// Pages
const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const TrainingPrograms = React.lazy(() => import('../pages/TrainingPrograms'));
const ProgramDetails = React.lazy(() => import('../pages/ProgramDetails'));
const Courses = React.lazy(() => import('../pages/Courses'));
const CourseDetails = React.lazy(() => import('../pages/CourseDetails'));
const CategoryPage = React.lazy(() => import('../pages/CategoryPage'));
const Registeration = React.lazy(() => import('../pages/Registeration'));
const StudentServices = React.lazy(() => import('../pages/StudentServices'));
const TermsAndConditions = React.lazy(() => import('../pages/Terms&Conditions'));
const AcademicIntegrityPage = React.lazy(() => import('../pages/AcademicIntegrityPage'));
const AdmissionAndRegistration = React.lazy(() => import('../pages/AdmissionAndRegistration'));

// Styles
import '../style/App.css';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/ar" />} />

        <Route path="/:lang" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="academic-integrity" element={<AcademicIntegrityPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="programs" element={<TrainingPrograms />} />
          <Route path="programs/:id" element={<ProgramDetails />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="categories/:categoryId" element={<CategoryPage />} />
          <Route path="registration" element={<Registeration />} />
          <Route path="student-services" element={<StudentServices />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="admission&registration" element={<AdmissionAndRegistration />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
