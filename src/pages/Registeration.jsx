import { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// api
import Programs, { getProgramData } from '../api/Programs';
import Courses, { getCourseData } from '../api/Courses';
// components
import RegistrationHeader from '../components/Registration/RegistrationHeader';
import PersonalInfoSection from '../components/Registration/PersonalInfoSection';
import ProgramTypeSelector from '../components/Registration/ProgramTypeSelector';
import ProgramSelectionSection from '../components/Registration/ProgramSelectionSection';
import DiplomaSpecificSection from '../components/Registration/DiplomaSpecificSection';
import PaymentSection from '../components/Registration/PaymentSection';
import SummarySection from '../components/Registration/SummarySection';
import SuccessConfirmation from '../components/Registration/SuccessConfirmation';

// prepare EmailJS
emailjs.init("k62cRdPnAvAsP_96b");

const RegistrationPage = () => {
  const { programId, lang } = useParams();
  const { t } = useTranslation();
  const programs = Programs;
  const courses = Courses;
  // بيانات الشهادات المتاحة
  const degrees = {
    ar: [
    "ثانوية عامة",
    "دبلوم",
    "بكالوريوس",
    "ماجستير",
    "دكتوراه"
  ],
  en: [
    "High School",
    "Diploma",
    "Bachelor",
    "Master",
    "PhD"
  ]
  };

  // بيانات الخدمات الإضافية
  const additionalServices = [
    { id: 1, name: {ar: "كتب ومراجع إضافية", en: "Additional Books and References"}, price: "" },
    { id: 2, name: {ar: "جلسات إرشاد تدريبي مهني احترافي", en: "Professional Training Guidance Sessions"}, price: "" },
    { id: 3, name: {ar: "شهادة معتمدة دولياً", en: "Internationally Recognized Certificate"}, price: "" },
    { id: 4, name: {ar: "متابعة خاصة مع المدرب", en: "Personal Follow-up with the Trainer"}, price: "" },
    { id: 5, name: {ar: "إستشاراة للحصول على الدورة", en: "Consultation for Obtaining the Course"}, price: "" },
    { id: 6, name: {ar: "حساب مجاني لمحتوى الدورة على منصة Cursera", en: "Free Account for Course Content on Coursera Platform"}, price: "" }
  ];

  // حالة النموذج - initialize with first course by default
  const [formData, setFormData] = useState({
    programType: 'course',
    fullName: '',
    email: '',
    phone: '',
    nationalId: '',
    degree: '',
    selectedProgram: courses.length > 0 ? courses[0].id : 1,
    selectedServices: [],
    emergencyContact: '',
    notes: '',
    agreeToTerms: false,
    paymentMethod: 'full',
    // Diploma specific fields
    priorExperience: '',
    careerGoals: '',
    studySchedule: '',
    financialSupport: ''
  });

  // حالة التحقق
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // معالجة تغيير نوع البرنامج
  const handleProgramTypeChange = (type) => {
    const initialProgram = type === 'course' 
      ? (courses.length > 0 ? courses[0].id : 1)
      : (programs.length > 0 ? programs[0].id : 1);
    
    setFormData(prev => ({
      ...prev,
      programType: type,
      selectedProgram: initialProgram,
      selectedServices: [],
      priorExperience: '',
      careerGoals: '',
      studySchedule: '',
      financialSupport: ''
    }));
    setErrors({});
    setSubmitError('');
  };

  // معالجة تغيير المدخلات
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  // معالجة اختيار الخدمات الإضافية
  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const services = [...prev.selectedServices];
      const index = services.indexOf(serviceId);
      
      if (index > -1) {
        services.splice(index, 1);
      } else {
        services.push(serviceId);
      }
      
      return { ...prev, selectedServices: services };
    });
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'ar' ? 'الاسم الكامل مطلوب' : 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = lang === 'ar' ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : 'Full name must be at least 3 characters';
    }
    
    if (!formData.email) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }
    
    if (!formData.phone) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!/^05\d{8}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام' : 'Phone number must start with 05 and be 10 digits';
    }
    
    if (!formData.nationalId) {
      newErrors.nationalId = lang === 'ar' ? 'رقم الهوية مطلوب' : 'National ID is required';
    } else if (!/^[12]\d{9}$/.test(formData.nationalId)) {
      newErrors.nationalId = lang === 'ar' ? 'رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1 أو 2' : 'National ID must be 10 digits starting with 1 or 2';
    }
    
    if (!formData.degree) {
      newErrors.degree = lang === 'ar' ? 'الرجاء اختيار المؤهل العلمي' : 'Please select your educational degree';
    }

    // Diploma specific validation
    if (formData.programType === 'diploma') {
      if (!formData.priorExperience) {
        newErrors.priorExperience = lang === 'ar' ? 'الرجاء تحديد خبرتك السابقة' : 'Please select your prior experience';
      }
      if (!formData.careerGoals.trim()) {
        newErrors.careerGoals = lang === 'ar' ? 'الرجاء شرح أهدافك المهنية' : 'Please explain your career goals';
      }
      if (!formData.studySchedule) {
        newErrors.studySchedule = lang === 'ar' ? 'الرجاء اختيار الجدول الدراسي المفضل' : 'Please select your preferred study schedule';
      }
      if (!formData.financialSupport) {
        newErrors.financialSupport = lang === 'ar' ? 'الرجاء تحديد احتياجاتك المالية' : 'Please select your financial support needs';
      }
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = lang === 'ar' ? 'يجب الموافقة على الشروط والأحكام' : 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  // دالة إرسال البريد الإلكتروني
  const sendRegistrationEmail = async (data) => {
    try {
      const programList = formData.programType === 'course' ? courses : programs;
      const selectedProgram = programList.find(p => p.id == formData.selectedProgram);
      
      // Safety check - if no program found, throw error
      if (!selectedProgram) {
        throw new Error(lang === 'ar' ? 'البرنامج المحدد غير موجود' : 'Selected program not found');
      }
      
      const localizedProgram = formData.programType === 'course' 
        ? getCourseData(selectedProgram, 'ar')
        : getProgramData(selectedProgram, 'ar');
      
      let diplomaInfo = '';
      if (formData.programType === 'diploma') {
        diplomaInfo = `
معلومات الدبلوم:
الخبرة السابقة: ${data.priorExperience}
أهداف الوظيفة: ${data.careerGoals}
الجدول الدراسي المفضل: ${data.studySchedule}
الدعم المالي: ${data.financialSupport}
`;
      }

      const templateParams = {
        to_email: 'abdelRahman.youssef@asta.edu.sa',
        to_name: 'عبدالرحمن يوسف',
        from_name: data.fullName,
        from_email: data.email,
        subject: `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة'}: ${localizedProgram.title}`,
        message: `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج الدبلوم' : 'الدورة'}

المعلومات الشخصية:
الاسم الكامل: ${data.fullName}
البريد الإلكتروني: ${data.email}
رقم الجوال: ${data.phone}
رقم الهوية: ${data.nationalId}
المؤهل العلمي: ${data.degree}
جهة اتصال الطوارئ: ${data.emergencyContact || 'غير محدد'}

تفاصيل التسجيل:
نوع البرنامج: ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة احترافية'}
البرنامج: ${localizedProgram.title}
الفئة: ${localizedProgram.category}
طريقة الدفع: ${data.paymentMethod === 'full' ? 'دفع كامل' : data.paymentMethod === 'installment' ? 'تقسيط' : 'تحويل بنكي'}

${diplomaInfo}

الخدمات الإضافية:
${data.selectedServices.length > 0 
  ? data.selectedServices.map(service => `• ${service.name[lang] || service.name.ar || service.name.en} - ${service.price}`).join('\n')
  : 'لم يتم اختيار خدمات إضافية'
}

المعلومات المالية:
سعر البرنامج: ${data.programPrice}
مجموع الخدمات الإضافية: ${data.servicesTotal}
المجموع الكلي: ${data.totalAmount}

ملاحظات إضافية:
${data.notes || 'لا توجد ملاحظات'}

تاريخ التسجيل: ${data.submissionDate}
رقم المرجع: ${data.referenceNumber}`,
      reply_to: data.email
    };

    const response = await emailjs.send(
      'asta',
      'template_qpi4g3m',
      templateParams
    );

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(lang === 'ar' ? 'فشل في إرسال البريد الإلكتروني. الرجاء المحاولة مرة أخرى.' : 'Failed to send email. Please try again.');
  }
};

// معالجة إرسال النموذج
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  setIsSubmitting(true);
  setSubmitError('');
  
  try {
    const programList = formData.programType === 'course' ? courses : programs;
    const selectedProgram = programList.find(p => p.id == formData.selectedProgram);
    
    // Safety check - if no program found, throw error
    if (!selectedProgram) {
      console.log('Debug - formData.selectedProgram:', formData.selectedProgram);
      console.log('Debug - programList:', programList.map(p => ({ id: p.id, title: p.title })));
      throw new Error(lang === 'ar' ? 'البرنامج المحدد غير موجود' : 'Selected program not found');
    }
    
    const localizedProgram = formData.programType === 'course' 
      ? getCourseData(selectedProgram, 'ar')
      : getProgramData(selectedProgram, 'ar');
    const selectedServicesList = additionalServices.filter(service => 
      formData.selectedServices.includes(service.id)
    );
    
    // Format selected services for email display
    const selectedServicesText = selectedServicesList
      .map(service => `${service.name[lang] || service.name.ar || service.name.en}`)
      .join(', ');
    
    const servicesTotal = selectedServicesList.reduce(
      (sum, service) => sum + (Number(service.price) || 0),
      0
    );
    const programPrice = Number(selectedProgram.price) || 0;
    const totalAmount = programPrice + servicesTotal;
    
    const submissionData = {
      ...formData,
      programTitle: localizedProgram.title,
      programCategory: localizedProgram.category,
      programPrice: programPrice.toLocaleString(),
      selectedServices: selectedServicesList,
      servicesTotal: servicesTotal.toLocaleString(),
      totalAmount: totalAmount.toLocaleString(),
      submissionDate: new Date().toLocaleString('ar-SA'),
      referenceNumber: `REG-${Date.now()}`
    };
    
    await sendRegistrationEmail(submissionData);
    
    setSubmitSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    try {
      await emailjs.send(
        'asta',
        'template_8ir9aeh',
        {
          to_email: formData.email,
          to_name: formData.fullName,
          program_name: localizedProgram.title,
          selected_services: selectedServicesText,
          reference_number: submissionData.referenceNumber,
          total_amount: totalAmount.toLocaleString()
        }
      );
    } catch (userEmailError) {
      console.warn('Could not send confirmation to user:', userEmailError);
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitError(error.message || (lang === 'ar' ? 'حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.' : 'An error occurred while submitting the form. Please try again.'));
  } finally {
    setIsSubmitting(false);
  }
};

// حساب المجموع الكلي
const calculateTotal = () => {
  const programList = formData.programType === 'course' ? courses : programs;
  const program = programList.find(p => parseInt(p.id) === parseInt(formData.selectedProgram));
  const programPrice = program ? (Number(program.price) || 0) : 0;
  
  const servicesTotal = additionalServices
    .filter(service => formData.selectedServices.includes(service.id))
    .reduce((sum, service) => sum + (Number(service.price) || 0), 0);
  
  return programPrice + servicesTotal;
};

// الحصول على البرنامج المحدد
const programList = formData.programType === 'course' ? courses : programs;
const localizedProgramList = useMemo(() => 
  programList.map(p => {
    const localizedData = formData.programType === 'course' 
      ? getCourseData(p, lang) 
      : getProgramData(p, lang);
    return {
      ...p,
      ...localizedData
    };
  }),
  [formData.programType, programList, lang]
);
const selectedProgram = useMemo(() => 
  programList.find(p => parseInt(p.id) === parseInt(formData.selectedProgram)),
  [formData.selectedProgram, formData.programType, programList]
);

return (
  <div className="bg-gray-50 min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <RegistrationHeader selectedProgram={selectedProgram} lang={lang} t={t}/>
    {/* <EmailConfirmationNotice formData={formData} /> */}
    
    {submitSuccess ? (
      <SuccessConfirmation formData={formData} selectedProgram={selectedProgram} calculateTotal={calculateTotal} lang={lang}/>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="max-w-7xl mx-auto px-1 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProgramTypeSelector programType={formData.programType} handleProgramTypeChange={handleProgramTypeChange} lang={lang} t={t}/>
              <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} errors={errors} degrees={degrees} lang={lang} t={t}/>
              <ProgramSelectionSection 
                programs={localizedProgramList} 
                formData={formData} 
                handleInputChange={handleInputChange} 
                handleServiceToggle={handleServiceToggle} 
                additionalServices={additionalServices} 
                errors={errors}
                programType={formData.programType}
                lang={lang}
              />
              {formData.programType === 'diploma' && (
                <DiplomaSpecificSection formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang}/>
              )}
              <PaymentSection formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang}/>
            </div>
            
            <div className="lg:col-span-1">
              <SummarySection selectedProgram={selectedProgram} formData={formData} calculateTotal={calculateTotal} additionalServices={additionalServices} handleSubmit={handleSubmit} submitError={submitError} submitSuccess={submitSuccess} isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      </form>
    )}
  </div>
);
}

export default RegistrationPage;