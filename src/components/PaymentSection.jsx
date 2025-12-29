  import { ShieldCheckIcon } from '@heroicons/react/24/outline';
  
  function PaymentSection({ formData, handleInputChange, errors }) {
    return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">الدفع والتفاصيل</h2>
          <p className="text-gray-600">اختر طريقة الدفع واكتب أي ملاحظات إضافية</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-gray-700 mb-4 font-medium">
            طريقة الدفع
          </label>
          <div className="space-y-4">
            {[
              { id: 'full', label: 'دفع كامل', desc: 'خصم 5% عند الدفع الكامل' },
              { id: 'installment', label: 'تقسيط', desc: 'دفع على 12 شهر بدون فوائد' },
              { id: 'bank', label: 'تحويل بنكي', desc: 'خصم إضافي 2% للتحويل البنكي' }
            ].map(method => (
              <div
                key={method.id}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === method.id
                    ? 'border-[#23A0D0] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleInputChange({ 
                  target: { name: 'paymentMethod', value: method.id } 
                })}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    formData.paymentMethod === method.id
                      ? 'border-[#23A0D0] bg-[#23A0D0]'
                      : 'border-gray-300'
                  }`}>
                    {formData.paymentMethod === method.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{method.label}</h3>
                    <p className="text-sm text-gray-600">{method.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-4 font-medium">
            ملاحظات إضافية
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full h-40 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent resize-none"
            placeholder="أي ملاحظات أو متطلبات خاصة تريد إضافتها..."
          ></textarea>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="w-5 h-5 rounded border-gray-300 text-[#23A0D0] focus:ring-[#23A0D0]"
          />
          <label htmlFor="agreeToTerms" className="text-gray-700">
            أوافق على الشروط والأحكام وسياسة الخصوصية *
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-2">{errors.agreeToTerms}</p>
        )}
      </div>
    </div>
  );
}

export default PaymentSection;