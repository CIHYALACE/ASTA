import React from "react";
import Layout from "../../shared/Layout";

export default function AboutUsEn(){
  return (
    <Layout>
    {/* Page Header */}
    <section className="mb-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">Who We Are</h1>
        <p className="text-lg text-gray-600">Journey of Excellence in Education and Training</p>
      </div>
    </section>
    {/* Our Story */}
    <section className="mb-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="mb-2">ASTA Training Academy is a leading educational institution in the Kingdom of Saudi Arabia, established with the aim of building entrepreneurial leaders through accredited academic education from several government entities.</p>
          <p>We believe that education is the foundation of progress and prosperity, and we strive to provide high-quality training programs that meet the needs of the evolving job market.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-building text-8xl text-purple-200"></i>
        </div>
      </div>
    </section>
    {/* Vision & Mission */}
    <section className="mb-10 bg-purple-50 py-8 rounded-xl">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow">
          <div className="mb-2 text-4xl text-purple-500"><i className="fas fa-eye"></i></div>
          <h3 className="font-bold text-xl mb-2">Our Vision</h3>
          <p>To be the leading educational institution in the Kingdom of Saudi Arabia and the region, by providing distinguished training programs that contribute to building a generation of professional leaders.</p>
        </div>
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow">
          <div className="mb-2 text-4xl text-purple-500"><i className="fas fa-bullseye"></i></div>
          <h3 className="font-bold text-xl mb-2">Our Mission</h3>
          <p>Building entrepreneurial leaders through accredited academic education from several government entities, with a focus on quality and excellence in all our training programs.</p>
        </div>
      </div>
    </section>
    {/* Core Values */}
    <section className="mb-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { icon: "fa-star", label: "Excellence", desc: "We strive for excellence in everything we offer in programs and services" },
            { icon: "fa-handshake", label: "Integrity", desc: "We adhere to the highest standards of ethics and transparency" },
            { icon: "fa-lightbulb", label: "Innovation", desc: "We adopt the latest technologies and educational curricula" },
            { icon: "fa-users", label: "Student Focus", desc: "The student is the focus of our attention in every decision we make" },
            { icon: "fa-globe", label: "Social Responsibility", desc: "We contribute to community development through our initiatives" },
            { icon: "fa-trophy", label: "Quality", desc: "We ensure the highest quality standards in all our programs" },
          ].map((v, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <i className={`fas ${v.icon} text-3xl mb-2 text-purple-300`}></i>
              <h4 className="font-bold mb-1">{v.label}</h4>
              <p className="text-xs text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* History Timeline */}
    <section className="mb-10 bg-white shadow rounded-xl py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our History</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {[
            { year: "2015", label: "Establishment", desc: "Establishment of ASTA Training Academy as an accredited training center", icon: "fa-flag-checkered" },
            { year: "2018", label: "Expansion", desc: "Opening new branches in the Eastern and Central regions", icon: "fa-chart-line" },
            { year: "2020", label: "Digital Transformation", desc: "Launch of distance learning platform and digital transformation", icon: "fa-laptop-code" },
            { year: "2022", label: "Awards", desc: "Receiving the Social Responsibility Award for the second consecutive year", icon: "fa-award" },
            { year: "2025", label: "Now", desc: "We continue our journey of excellence and leadership in education and training", icon: "fa-star" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl text-purple-400 mb-1"><i className={`fas ${item.icon}`}></i></div>
              <div className="text-lg font-bold mb-1">{item.year}</div>
              <h4 className="font-bold mb-1">{item.label}</h4>
              <p className="text-xs text-gray-600 max-w-[150px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Overview */}
    <section className="mb-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "fa-graduation-cap", value: "13+", label: "Accredited Diploma Programs" },
            { icon: "fa-building", value: "10+", label: "Branches in Various Regions" },
            { icon: "fa-users", value: "500+", label: "Employees" },
            { icon: "fa-certificate", value: "Multiple", label: "Government Accreditations" },
          ].map((item, idx) => (
            <div key={idx} className="bg-purple-50 rounded-xl flex flex-col items-center py-4">
              <i className={`fas ${item.icon} text-2xl text-purple-400 mb-2`}></i>
              <h4 className="text-lg font-bold">{item.value}</h4>
              <p className="text-xs text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
}
