import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from '../shared/SharedLayout';
import AboutUsEn from '../components/AboutUsEn';
import AccreditationsEn from '../components/AccreditationsEn';
import BoardMembersEn from '../components/BoardMembersEn';
import ContactEn from '../components/ContactEn';
import ProgramsEn from '../components/ProgramsEn';
import RegistrationEn from '../components/RegistrationEn';
import '../style/App.css';
import HomeAr from '../pages/ar/HomeAr';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeAr />} />
          <Route path="/about-us-en" element={<AboutUsEn />} />
          <Route path="/accreditations-en" element={<AccreditationsEn />} />
          <Route path="/board-members-en" element={<BoardMembersEn />} />
          <Route path="/contact-en" element={<ContactEn />} />
          <Route path="/programs-en" element={<ProgramsEn />} />
          <Route path="/registration-en" element={<RegistrationEn />} />
        </Route>
      </Routes>
  );
}