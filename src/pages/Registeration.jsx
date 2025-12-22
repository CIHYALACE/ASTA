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

// تهيئة EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // قم باستبدال هذا بالمفتاح العام الخاص بك

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
        message: `
          <h2>تسجيل جديد في البرنامج التدريبي</h2>
          <hr>
          <h3>المعلومات الشخصية:</h3>
          <p><strong>الاسم الكامل:</strong> ${data.fullName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${data.email}</p>
          <p><strong>رقم الجوال:</strong> ${data.phone}</p>
          <p><strong>رقم الهوية:</strong> ${data.nationalId}</p>
          <p><strong>المؤهل العلمي:</strong> ${data.degree}</p>
          <p><strong>جهة اتصال الطوارئ:</strong> ${data.emergencyContact || 'غير محدد'}</p>
          
          <h3>تفاصيل التسجيل:</h3>
          <p><strong>البرنامج:</strong> ${data.programTitle}</p>
          <p><strong>فئة البرنامج:</strong> ${data.programCategory}</p>
          <p><strong>طريقة الدفع:</strong> ${data.paymentMethod === 'full' ? 'دفع كامل' : data.paymentMethod === 'installment' ? 'تقسيط' : 'تحويل بنكي'}</p>
          
          <h3>الخدمات الإضافية:</h3>
          ${data.selectedServices.length > 0 
            ? data.selectedServices.map(service => `<p>• ${service.name} - ${service.price} ر.س</p>`).join('')
            : '<p>لم يتم اختيار خدمات إضافية</p>'
          }
          
          <h3>المعلومات المالية:</h3>
          <p><strong>سعر البرنامج:</strong> ${data.programPrice} ر.س</p>
          <p><strong>مجموع الخدمات الإضافية:</strong> ${data.servicesTotal} ر.س</p>
          <p><strong>المجموع الكلي:</strong> <strong style="color: #202C5B; font-size: 1.2em;">${data.totalAmount} ر.س</strong></p>
          
          <h3>ملاحظات إضافية:</h3>
          <p>${data.notes || 'لا توجد ملاحظات'}</p>
          
          <hr>
          <p><strong>تاريخ التسجيل:</strong> ${new Date().toLocaleString('ar-SA')}</p>
          <p><strong>رقم المرجع:</strong> REG-${Date.now()}</p>
        `,
        reply_to: data.email
      };

      // إرسال البريد باستخدام EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // قم بتغيير هذا لمعرف الخدمة الخاص بك
        'YOUR_TEMPLATE_ID', // قم بتغيير هذا لقالب البريد الخاص بك
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
          'YOUR_SERVICE_ID',
          'USER_CONFIRMATION_TEMPLATE_ID', // قالب تأكيد للمستخدم
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
        <SuccessConfirmation />
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