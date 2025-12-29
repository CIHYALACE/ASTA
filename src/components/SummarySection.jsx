import { ArrowRightIcon, CheckCircleIcon, EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { getCourseData } from '../api/Courses';
import { getProgramData } from '../api/Programs';

function SummarySection({ selectedProgram, formData, calculateTotal, additionalServices, handleSubmit, submitError, submitSuccess, isSubmitting }) {
  const { lang = 'ar' } = useParams();
  
  const localizedProgram = selectedProgram ? (
    formData.programType === 'course' 
      ? getCourseData(selectedProgram, lang)
      : getProgramData(selectedProgram, lang)
  ) : null;
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 md:p-8shadow-lg mb-8 sticky top-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">ملخص التسجيل</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-600">البرنامج:</span>
          <span className="font-bold text-gray-800 text-left max-w-[200px]">{localizedProgram?.title || 'لم يتم الاختيار'}</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-600">السعر الأساسي:</span>
          <span className="font-bold text-gray-800">
            {selectedProgram?.price ? selectedProgram.price.toLocaleString() : '0'} ر.س
          </span>
        </div>
        
        {formData.selectedServices.length > 0 && (
          <div className="py-2 border-b border-gray-200">
            <span className="text-gray-600 block mb-2">الخدمات الإضافية:</span>
            {additionalServices
              .filter(service => formData.selectedServices.includes(service.id))
              .map(service => (
                <div key={service.id} className="flex justify-between items-center text-sm mb-1">
                  <span className="text-gray-600">{service.name}</span>
                  <span>{service.price.toLocaleString()} ر.س</span>
                </div>
              ))
            }
          </div>
        )}
        
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-600">طريقة الدفع:</span>
          <span className="font-bold text-gray-800">
            {formData.paymentMethod === 'full' ? 'دفع كامل' :
             formData.paymentMethod === 'installment' ? 'تقسيط' : 'تحويل بنكي'}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-xl font-bold text-gray-800">المجموع الكلي:</span>
          <span className="text-2xl font-bold text-[#202C5B]">
            {calculateTotal().toLocaleString()} ر.س
          </span>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <EnvelopeIcon className="h-5 w-5 text-[#202C5B] mt-0.5" />
          <div>
            <p className="text-blue-800 text-sm font-medium mb-1">سيتم إرسال البيانات إلى:</p>
            <code className="text-[#202C5B] text-sm bg-white px-2 py-1 rounded">abdelRahman.youssef@asta.edu.sa</code>
          </div>
        </div>
      </div>
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500 mt-0.5" />
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        </div>
      )}
      
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">تم إرسال تسجيلك بنجاح! ✓</h3>
          <p className="text-green-600 mb-2">
            تم إرسال بياناتك إلى البريد الإلكتروني المخصص.
          </p>
          <p className="text-green-600 text-sm mb-4">
            وسيصلك تأكيد على: <span className="font-bold">{formData.email}</span>
          </p>
        </div>
      ) : (
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>جاري إرسال البيانات...</span>
            </>
          ) : (
            <>
              <span>إرسال البيانات</span>
              <ArrowRightIcon className="h-5 w-5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
 
 export default SummarySection;