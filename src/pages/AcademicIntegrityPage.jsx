import React, { useState } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  UserGroupIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  VideoCameraIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  ShareIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  CogIcon,
  WifiIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import standardsData from '../api/Standarts';

const StandardsPage = () => {
  const [activeStandard, setActiveStandard] = useState('attendance');
  const [isBookmarked, setIsBookmarked] = useState({});
  const standardsdata = standardsData;

  const activeData = standardsdata[activeStandard] || {};

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (activeData && activeData.pdf) {
      const a = document.createElement('a');
      a.href = activeData.pdf;
      a.download = activeData.pdf.split('/').pop();
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Fallback to text download if no PDF is available
      const content = document.getElementById('standard-content').innerText;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${activeData.title}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: activeData.title,
        text: activeData.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط إلى الحافظة');
    }
  };

  const toggleBookmark = (standardId) => {
    setIsBookmarked(prev => ({
      ...prev,
      [standardId]: !prev[standardId]
    }));
  };

  const renderContentSection = (section, index) => {
    if (!activeData || !activeData.color) return null;
    
    return (
      <div key={index} className="border-b border-gray-200 pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div className={`p-2 rounded-lg ${activeData.color.replace('bg-', 'bg-').replace('-600', '-100')} ml-3`}>
            {section.icon && <section.icon className="h-6 w-6" />}
          </div>
          {section.title}
        </h3>
        
        {section.subtitle && (
          <p className="text-gray-700 mb-4 font-medium">{section.subtitle}</p>
        )}
        
        {section.content && (
          <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
        )}

        {section.points && Array.isArray(section.points) && (
          <div className="space-y-4">
            {section.points.map((point, idx) => {
              if (typeof point === 'string') {
                return (
                  <div key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                );
              } else if (point.category) {
                return (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">{point.category}</h4>
                    <ul className="space-y-2 mr-4">
                      {point.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 ml-2 mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    );
  };

  const renderStandardContent = () => {
    if (!activeData || !activeData.content) return null;

    return (
      <div id="standard-content" className="bg-white rounded-2xl shadow-lg p-8">
        {/* Introduction */}
        {activeData.content.introduction && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-r-4 border-blue-500 p-6 rounded-xl mb-8">
            <p className="text-lg text-gray-800 leading-relaxed">{activeData.content.introduction}</p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-8">
          {activeData.content.sections.map((section, index) => (
            <div key={index}>
              {renderContentSection(section, index)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-['Noto_Sans_Arabic']" dir="rtl">
      {/* Header */}
      {activeData && activeData.color && (
        <header className="bg-white shadow-lg">
          <div className="mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeftIcon className="h-6 w-6" />
                </button>
                <div className={`${activeData.color} p-3 rounded-xl`}>
                  <activeData.icon className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">{activeData.number}</span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {activeData.title}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* <button
                  onClick={() => toggleBookmark(activeStandard)}
                  className={`p-3 rounded-lg ${isBookmarked[activeStandard] ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <BookmarkIcon className={`h-5 w-5 ${isBookmarked[activeStandard] ? 'fill-current' : ''}`} />
                </button> */}
                <button
                  onClick={handleShare}
                  className="p-3 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <ShareIcon className="h-5 w-5" />
                </button>
                {/* <button
                  onClick={handlePrint}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <PrinterIcon className="h-5 w-5" />
                </button> */}
                <button
                  onClick={handleDownload}
                  className="p-3 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">جميع المعايير</h2>
              
              <nav className="space-y-3 mb-8">
                {Object.values(standardsData).map((standard) => (
                  <button
                    key={standard.id}
                    onClick={() => setActiveStandard(standard.id)}
                    className={`w-full text-right p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      activeStandard === standard.id
                        ? `${standard.color.replace('bg-', 'bg-').replace('-600', '-50')} border-r-4 ${standard.color}`
                        : 'hover:bg-gray-50 hover:border-r-4 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${standard.color.replace('bg-', 'bg-').replace('-600', '-100')} ml-4`}>
                        <standard.icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <h3 className="font-semibold text-gray-800">{standard.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{standard.number}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isBookmarked[standard.id] && (
                        <BookmarkIcon className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      {activeStandard === standard.id && (
                        <div className={`w-2 h-2 rounded-full ${standard.color}`}></div>
                      )}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {renderStandardContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StandardsPage;