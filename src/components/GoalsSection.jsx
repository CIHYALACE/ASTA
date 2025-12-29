import React from 'react';

const GoalsSection = () => {
  const goals = [
    { icon: 'fas fa-user-graduate', title: 'التأهيل المهني', description: 'إعداد وتأهيل الكوادر المهنية بمعايير عالمية تلبي احتياجات سوق العمل المحلي والدولي.' },
    { icon: 'fas fa-hands-helping', title: 'سد الفجوة', description: 'سد الفجوة بين المخرجات التعليمية ومتطلبات سوق العمل من خلال برامج تدريبية تطبيقية.' },
    { icon: 'fas fa-lightbulb', title: 'تشجيع الابتكار', description: 'تنمية مهارات الابتكار والإبداع وريادة الأعمال لدى المتدربين لتمكينهم من قيادة التغيير.' },
    { icon: 'fas fa-globe', title: 'التعاون الدولي', description: 'إقامة شراكات مع مؤسسات تدريبية عالمية لتبادل الخبرات والارتقاء بجودة البرامج التدريبية.' },
    { icon: 'fas fa-chart-line', title: 'تطوير المسارات', description: 'تطوير مسارات مهنية متكاملة تمكن المتدربين من النمو الوظيفي المستمر والتقدم في مساراتهم.' },
    { icon: 'fas fa-comments', title: 'دعم الخريجين', description: 'توفير نظام دعم متكامل للخريجين يشمل التوجيه الوظيفي وفرص التوظيف والتدريب المستمر.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-dark_blue to-aqua bg-clip-text text-transparent py-3">
          أهداف أكاديمية ASTA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-dark_blue to-aqua"></div>
              
              <i className={`${goal.icon} text-4xl mb-4 bg-gradient-to-r from-dark_blue to-aqua bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}></i>
              
              <h3 className="text-xl font-bold text-dark_blue mb-3">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;