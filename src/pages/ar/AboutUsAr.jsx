import React from "react";
import Layout from "../../shared/Layout";

const AboutUsAr = () => (
  <Layout>
    {/* Page Header */}
    <section className="mb-10" dir="rtl">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">من نحن</h1>
        <p className="text-lg text-gray-600">رحلة التميز في التعليم والتدريب</p>
      </div>
    </section>
    {/* Our Story */}
    <section className="mb-10" dir="rtl">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">رحلتنا</h2>
          <p className="mb-2">أكاديمية أستا للتدريب هي مؤسسة تعليمية رائدة في المملكة العربية السعودية، تأسست بهدف بناء قيادات ريادية من خلال تعليم أكاديمي معتمد من عدة جهات حكومية.</p>
          <p>نحن نؤمن بأن التعليم هو أساس التقدم والازدهار، ونسعى جاهدين لتقديم برامج تدريبية عالية الجودة تلبي احتياجات سوق العمل المتطور.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-building text-8xl text-purple-200"></i>
        </div>
      </div>
    </section>
    {/* Vision & Mission */}
    <section className="mb-10 bg-purple-50 py-8 rounded-xl" dir="rtl">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow">
          <div className="mb-2 text-4xl text-purple-500"><i className="fas fa-eye"></i></div>
          <h3 className="font-bold text-xl mb-2">رؤيتنا</h3>
          <p>أن نكون المؤسسة التعليمية الرائدة في المملكة العربية السعودية والمنطقة، من خلال تقديم برامج تدريبية متميزة تساهم في بناء جيل من القادة المحترفين.</p>
        </div>
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow">
          <div className="mb-2 text-4xl text-purple-500"><i className="fas fa-bullseye"></i></div>
          <h3 className="font-bold text-xl mb-2">مهمتنا</h3>
          <p>بناء قيادات ريادية عبر تعليم أكاديمي معتمد من عدة جهات حكومية، مع التركيز على الجودة والتميز في جميع برامجنا التدريبية.</p>
        </div>
      </div>
    </section>
    {/* Core Values */}
    <section className="mb-10" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">قيمنا الأساسية</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { icon: "fa-star", label: "التميز", desc: "نسعى للتميز في كل ما نقدمه من برامج وخدمات" },
            { icon: "fa-handshake", label: "النزاهة", desc: "نلتزم بأعلى معايير الأخلاقيات والشفافية" },
            { icon: "fa-lightbulb", label: "الابتكار", desc: "نتبنى أحدث التقنيات والمناهج التعليمية" },
            { icon: "fa-users", label: "التركيز على الطالب", desc: "الطالب هو محور اهتمامنا في كل قرار نتخذه" },
            { icon: "fa-globe", label: "المسؤولية المجتمعية", desc: "نساهم في تطوير المجتمع من خلال مبادراتنا" },
            { icon: "fa-trophy", label: "الجودة", desc: "نضمن أعلى معايير الجودة في جميع برامجنا" },
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
    <section className="mb-10 bg-white shadow rounded-xl py-8" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">تاريخنا</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {[
            { year: "2015", label: "التأسيس", desc: "تأسيس أكاديمية أستا للتدريب كمركز تدريبي معتمد", icon: "fa-flag-checkered" },
            { year: "2018", label: "التوسع", desc: "افتتاح فروع جديدة في المنطقة الشرقية والوسطى", icon: "fa-chart-line" },
            { year: "2020", label: "التحول الرقمي", desc: "إطلاق منصة التعليم عن بعد والتحول الرقمي", icon: "fa-laptop-code" },
            { year: "2022", label: "الجوائز", desc: "الحصول على جائزة المسؤولية الاجتماعية للعام الثاني على التوالي", icon: "fa-award" },
            { year: "2025", label: "الآن", desc: "نواصل مسيرتنا في التميز والريادة في التعليم والتدريب", icon: "fa-star" },
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
    <section className="mb-10" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">نظرة عامة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "fa-graduation-cap", value: "13+", label: "برنامج دبلوم معتمد" },
            { icon: "fa-building", value: "10+", label: "فرع في مختلف المناطق" },
            { icon: "fa-users", value: "500+", label: "موظف وموظفة" },
            { icon: "fa-certificate", value: "متعدد", label: "اعتمادات حكومية" },
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

export default AboutUsAr;

