import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// import { formData, selectedProgram, calculateTotal } from '../utils/formData';

function SuccessConfirmation () {
    return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          تم إرسال تسجيلك بنجاح! 🎉
        </h1>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-right">
          <h3 className="font-bold text-gray-800 mb-4">تفاصيل التسجيل:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الاسم:</span>
              <span className="font-bold text-gray-800">{formData.fullName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">البرنامج:</span>
              <span className="font-bold text-gray-800">{selectedProgram?.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">البريد الإلكتروني:</span>
              <span className="font-bold text-gray-800">{formData.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">المجموع:</span>
              <span className="font-bold text-[#202C5B]">{calculateTotal().toLocaleString()} ر.س</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">وقت الإرسال:</span>
              <span className="font-bold text-gray-800">{new Date().toLocaleString('ar-SA')}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <EnvelopeIcon className="h-8 w-8 text-[#202C5B]" />
            <h3 className="font-bold text-gray-800">تفاصيل الإرسال:</h3>
          </div>
          <p className="text-gray-600 mb-3">
            تم إرسال بيانات تسجيلك إلى:
          </p>
          <code className="block bg-white p-3 rounded-lg text-[#202C5B] font-bold mb-3">
            abdelRahman.youssef@asta.edu.sa
          </code>
          <p className="text-gray-600">
            وسيصلك نسخة تأكيدية على بريدك: <span className="font-bold">{formData.email}</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-[#202C5B] text-white rounded-xl font-bold hover:bg-[#1a2448] transition-colors"
          >
            تسجيل جديد
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 border-2 border-[#202C5B] text-[#202C5B] rounded-xl font-bold hover:bg-gray-50 transition-colors"
          >
            طباعة التأكيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessConfirmation;