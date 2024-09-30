import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSkills } from '../redux/actions';

const AboutMeSection = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref to a variable

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset activeSkills when About Me section is in view
          dispatch(setActiveSkills([]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [dispatch]); // No need to include sectionRef in dependencies

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-700">
        As a Computer Science student at the University of British Columbia, I am passionate
        about leveraging my technical skills to solve real-world problems. With a strong
        foundation in software development and hands-on experience in various projects, I am
        eager to contribute to innovative teams and learn from industry professionals. I am
        actively seeking internship opportunities where I can apply my knowledge in software
        engineering and grow my expertise in developing efficient, scalable solutions.
      </p>
    </section>
  );
};

export default AboutMeSection;