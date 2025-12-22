import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Programs from '../api/Programs';
// components
import RegistrationHeader from '../components/RegistrationHeader';
import EmailConfirmationNotice from '../components/EmailConfirmationNotice';
import PersonalInfoSection from '../components/PersonalInfoSection';
import ProgramSelectionSection from '../components/ProgramSelectionSection';
import PaymentSection from '../components/PaymentSection';
import SummarySection from '../components/SummarySection';
import SuccessConfirmation from '../components/SuccessConfirmation';

// prepare EmailJS
emailjs.init("k62cRdPnAvAsP_96b"); // قم باستبدال هذا بالمفتاح العام الخاص بك

const RegistrationPage = ({ programId = 2 }) => {
  // بيانات البرامج المتاحة
  const programs = Programs
  // بيانات الشهادات المتاحة
  const degrees = [
    "ثانوية عامة",
    "دبلوم",
    "بكالوريوس",
    "ماجستير",
    "دكتوراه"
  ];

  // بيانات الخدمات الإضافية
  const additionalServices = [
    { id: 1, name: "كتب ومراجع إضافية", price: 500 },
    { id: 2, name: "جلسات إرشاد مهني", price: 1000 },
    { id: 3, name: "شهادة معتمدة دولياً", price: 1500 },
    { id: 4, name: "متابعة خاصة مع المدرب", price: 2000 }
  ];

  // حالة النموذج
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationalId: '',
    degree: '',
    selectedProgram: programId,
    selectedServices: [],
    emergencyContact: '',
    notes: '',
    agreeToTerms: false,
    paymentMethod: 'full'
  });

  // حالة التحقق
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // معالجة تغيير المدخلات
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // إزالة رسالة الخطأ عند البدء بالكتابة
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
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }
    
    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^05\d{8}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام';
    }
    
    if (!formData.nationalId) {
      newErrors.nationalId = 'رقم الهوية مطلوب';
    } else if (!/^1\d{9}$/.test(formData.nationalId)) {
      newErrors.nationalId = 'رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1';
    }
    
    if (!formData.degree) {
      newErrors.degree = 'الرجاء اختيار المؤهل العلمي';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
    }
    
    return newErrors;
  };

  // دالة إرسال البريد الإلكتروني باستخدام EmailJS
  const sendRegistrationEmail = async (data) => {
    try {
      const templateParams = {
        to_email: 'abdelRahman.youssef@asta.edu.sa',
        to_name: 'عبدالرحمن يوسف',
        from_name: data.fullName,
        from_email: data.email,
        subject: `تسجيل جديد في البرنامج: ${data.programTitle}`,
        message: `تسجيل جديد في البرنامج التدريبي

المعلومات الشخصية:
الاسم الكامل: ${data.fullName}
البريد الإلكتروني: ${data.email}
رقم الجوال: ${data.phone}
رقم الهوية: ${data.nationalId}
المؤهل العلمي: ${data.degree}
جهة اتصال الطوارئ: ${data.emergencyContact || 'غير محدد'}

تفاصيل التسجيل:
البرنامج: ${data.programTitle}
فئة البرنامج: ${data.programCategory}
طريقة الدفع: ${data.paymentMethod === 'full' ? 'دفع كامل' : data.paymentMethod === 'installment' ? 'تقسيط' : 'تحويل بنكي'}

الخدمات الإضافية:
${data.selectedServices.length > 0 
  ? data.selectedServices.map(service => `• ${service.name} - ${service.price}`).join('\n')
  : 'لم يتم اختيار خدمات إضافية'
}

المعلومات المالية:
سعر البرنامج: ${data.programPrice}
مجموع الخدمات الإضافية: ${data.servicesTotal}
المجموع الكلي: ${data.totalAmount}

ملاحظات إضافية:
${data.notes || 'لا توجد ملاحظات'}

تاريخ التسجيل: ${new Date().toLocaleString('ar-SA')}
رقم المرجع: REG-${Date.now()}`,
        reply_to: data.email
      };

      // إرسال البريد باستخدام EmailJS
      const response = await emailjs.send(
        'asta', // قم بتغيير هذا لمعرف الخدمة الخاص بك
        'template_qpi4g3m', // قم بتغيير هذا لقالب البريد الخاص بك
        templateParams
      );

      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('فشل في إرسال البريد الإلكتروني. الرجاء المحاولة مرة أخرى.');
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
      // جمع البيانات لإرسالها
      const selectedProgram = programs.find(p => p.id === formData.selectedProgram);
      const selectedServicesList = additionalServices.filter(service => 
        formData.selectedServices.includes(service.id)
      );
      
      const servicesTotal = selectedServicesList.reduce((sum, service) => sum + service.price, 0);
      const programPrice = selectedProgram.price;
      const totalAmount = programPrice + servicesTotal;
      
      const submissionData = {
        ...formData,
        programTitle: selectedProgram.title,
        programCategory: selectedProgram.category,
        programPrice: programPrice.toLocaleString(),
        selectedServices: selectedServicesList,
        servicesTotal: servicesTotal.toLocaleString(),
        totalAmount: totalAmount.toLocaleString(),
        submissionDate: new Date().toLocaleString('ar-SA'),
        referenceNumber: `REG-${Date.now()}`
      };
      
      // إرسال البيانات إلى البريد الإلكتروني
      await sendRegistrationEmail(submissionData);
      
      // رسالة نجاح
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // إرسال نسخة للمستخدم
      try {
        await emailjs.send(
          'asta',
          'template_8ir9aeh', // قالب تأكيد للمستخدم
          {
            to_email: formData.email,
            to_name: formData.fullName,
            program_name: selectedProgram.title,
            reference_number: submissionData.referenceNumber,
            total_amount: totalAmount.toLocaleString()
          }
        );
      } catch (userEmailError) {
        console.warn('Could not send confirmation to user:', userEmailError);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // حساب المجموع الكلي
  const calculateTotal = () => {
    const program = programs.find(p => p.id === formData.selectedProgram);
    const programPrice = program ? program.price : 0;
    
    const servicesTotal = additionalServices
      .filter(service => formData.selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
    
    return programPrice + servicesTotal;
  };

  // الحصول على البرنامج المحدد
  const selectedProgram = programs.find(p => p.id === formData.selectedProgram);
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <RegistrationHeader selectedProgram={selectedProgram} />
      <EmailConfirmationNotice formData={formData} />
      
      {submitSuccess ? (
        <SuccessConfirmation formData={formData} selectedProgram={selectedProgram} calculateTotal={calculateTotal} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} errors={errors} degrees={degrees} />
                <ProgramSelectionSection programs={programs} formData={formData} handleInputChange={handleInputChange} handleServiceToggle={handleServiceToggle} additionalServices={additionalServices} errors={errors} />
                <PaymentSection formData={formData} handleInputChange={handleInputChange} errors={errors} />
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
};

export default RegistrationPage;