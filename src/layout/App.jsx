import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from '../shared/SharedLayout';
// Pages
import HomeAr from '../pages/HomeAr';
import AboutUsAr from '../pages/AboutUsAr';
import TrainingPrograms from '../pages/TrainingPrograms';
import Courses from '../pages/Courses';
import Registeration from '../pages/Registeration';
import StudentServices from '../pages/StudentServices';
import TermsAndConditions from '../pages/Terms&Conditions';
// Styles
import '../style/App.css';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/ar" />} />

        <Route path="/:lang" element={<SharedLayout />}>
          <Route index element={<HomeAr />} />
          <Route path="about-us-ar" element={<AboutUsAr />} />
          <Route path="programs" element={<TrainingPrograms />} />
          <Route path="courses" element={<Courses />} />
          <Route path="registration" element={<Registeration />} />
          <Route path="student-services" element={<StudentServices />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
  );
}