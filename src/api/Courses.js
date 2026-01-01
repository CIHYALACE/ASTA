import React from 'react';
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CommandLineIcon,
  BoltIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  BugAntIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import CoursesData from './Courses.json';

// Map icon names to actual icon components
const iconMap = {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CommandLineIcon,
  LightningBoltIcon: BoltIcon,
  BoltIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  BugAntIcon,
  BeakerIcon,
};

// Helper function to deeply localize all bilingual objects
const deepLocalize = (obj, lang = 'ar') => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepLocalize(item, lang));
  }
  
  // If this is a bilingual object, return the localized value
  if (obj.ar || obj.en) {
    return obj[lang] || obj.ar || obj.en || '';
  }
  
  // Otherwise, recursively localize all properties
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = deepLocalize(obj[key], lang);
  });
  
  return result;
};

// Helper function to localize a field
const localizeField = (field, lang = 'ar') => {
  if (typeof field === 'object' && field !== null) {
    // Handle arrays - check if items contain bilingual objects
    if (Array.isArray(field)) {
      return field.map(item => {
        if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
          if (item.ar || item.en) {
            return item[lang] || item.ar || item.en || '';
          }
          // If it's a regular object (like FAQ objects), recursively localize it
          return localizeField(item, lang);
        }
        return item;
      });
    }
    // Handle bilingual objects
    if (field.ar || field.en) {
      return field[lang] || field.ar || field.en || '';
    }
    // Handle regular objects (like FAQ objects with question/answer)
    const result = {};
    Object.keys(field).forEach(key => {
      result[key] = localizeField(field[key], lang);
    });
    return result;
  }
  return field;
};

// Transform Courses.json data to match the expected format
const Courses = CoursesData.map(course => {
  // Create a completely localized course object without using spread operator
  const finalCourse = {
    // Explicitly map every field with localization
    id: course.id,
    icon: iconMap[course.icon] || ComputerDesktopIcon,
    title: localizeField(course.title),
    subtitle: localizeField(course.subtitle),
    category: localizeField(course.category),
    description: localizeField(course.description),
    overview: localizeField(course.overview),
    hours: course.hours,
    startDate: course.startDate?.ar || course.startDate || '',
    endDate: course.endDate?.ar || course.endDate || '',
    duration: localizeField(course.duration),
    status: localizeField(course.status),
    price: course.price,
    sponsore: localizeField(course.sponsore),
    rating: course.rating,
    reviews: course.reviews,
    instructor: course.instructor ? {
      name: course.instructor.name,
      title: localizeField(course.instructor.title),
      experience: localizeField(course.instructor.experience),
      image: course.instructor.image,
      bio: localizeField(course.instructor.bio),
    } : null,
    skills: localizeField(course.skills),
    targetJobs: localizeField(course.targetJobs),
    objectives: localizeField(course.objectives),
    targetAudience: localizeField(course.targetAudience),
    requirements: localizeField(course.requirements),
    admission_requirements: localizeField(course.admission_requirements),
    faqs: localizeField(course.faqs),
  };

  // Final deep scan - check every nested object recursively
  const deepScanAndFix = (obj, path = '') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          // Check array items
          value.forEach((item, index) => {
            if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
              if (item.ar || item.en) {
                console.error(`Bilingual object found in array at ${currentPath}[${index}]`, item);
                value[index] = localizeField(item);
              }
            }
          });
        } else if (value.ar || value.en) {
          console.error(`Bilingual object found at ${currentPath}`, value);
          obj[key] = localizeField(value);
        } else {
          // Recursively check nested objects
          deepScanAndFix(value, currentPath);
        }
      }
    });
  };

  deepScanAndFix(finalCourse);
  
  // Nuclear option: JSON stringify/parse to break any remaining object references
  let cleanCourse = JSON.parse(JSON.stringify(finalCourse));

  // Deep scan for any remaining bilingual objects in nested structures
  const scanForBilingualObjects = (obj, path = '') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
              if (item.ar || item.en) {
                console.error(`BILINGUAL OBJECT IN ARRAY at ${currentPath}[${index}]:`, item);
              }
            }
          });
        } else if (value.ar || value.en) {
          console.error(`BILINGUAL OBJECT at ${currentPath}:`, value);
        } else if (key !== 'icon') { // Skip icon as it's a React component
          scanForBilingualObjects(value, currentPath);
        }
      }
    });
  };

  scanForBilingualObjects(cleanCourse);
  return cleanCourse;
});

// Helper function to get bilingual data
export const getCourseData = (course, lang = 'ar') => {
  // Use the same enhanced localization as the main mapping
  const getLocalizedField = (field, targetLang = lang) => {
    if (typeof field === 'object' && field !== null) {
      // Handle arrays - check if items contain bilingual objects
      if (Array.isArray(field)) {
        return field.map(item => {
          if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
            if (item.ar || item.en) {
              return item[targetLang] || item.ar || item.en || '';
            }
            // If it's a regular object, recursively localize it
            return getLocalizedField(item, targetLang);
          }
          return item;
        });
      }
      // Handle bilingual objects
      if (field.ar || field.en) {
        return field[targetLang] || field.ar || field.en || '';
      }
      // Handle regular objects
      const result = {};
      Object.keys(field).forEach(key => {
        result[key] = getLocalizedField(field[key], targetLang);
      });
      return result;
    }
    return field;
  };

  // Create a localized copy of the course data using enhanced localization
  const localizedCourse = {
    id: course.id,
    icon: course.icon,
    title: getLocalizedField(course.title),
    subtitle: getLocalizedField(course.subtitle),
    category: getLocalizedField(course.category),
    description: getLocalizedField(course.description),
    overview: getLocalizedField(course.overview),
    duration: getLocalizedField(course.duration),
    status: getLocalizedField(course.status),
    sponsore: getLocalizedField(course.sponsore),
    objectives: getLocalizedField(course.objectives),
    requirements: getLocalizedField(course.requirements),
    admission_requirements: getLocalizedField(course.admission_requirements),
    faqs: getLocalizedField(course.faqs),
    skills: getLocalizedField(course.skills),
    targetJobs: getLocalizedField(course.targetJobs),
    targetAudience: getLocalizedField(course.targetAudience),
    instructor: course.instructor ? {
      name: course.instructor.name,
      title: getLocalizedField(course.instructor.title),
      experience: getLocalizedField(course.instructor.experience),
      image: course.instructor.image,
      bio: getLocalizedField(course.instructor.bio),
    } : null,
    startDate: getLocalizedField(course.startDate),
    endDate: getLocalizedField(course.endDate),

    hours: course.hours,
    price: course.price,
    rating: course.rating,
    reviews: course.reviews,
  };

  Object.keys(localizedCourse).forEach(key => {
    const value = localizedCourse[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      if (value.ar || value.en) {
        console.error(`Bilingual object found in getCourseData at ${key}`, value);
        localizedCourse[key] = getLocalizedField(value);
      }
    }
  });

  return JSON.parse(JSON.stringify(localizedCourse));
};

export default Courses;