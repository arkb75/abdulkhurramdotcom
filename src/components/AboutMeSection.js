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
        I am a UBC Computer Science student graduating in May 2027 and currently a Software
        Engineer Intern at Shopify. Previously, I built data pipelines for ML and analytics
        workloads at RBC and worked on AI systems and full-stack services at Contello.ai.
        My projects span evidence-grounded AI workflows, data infrastructure, and full-stack
        products. I am interested in new-grad software engineering roles where I can build
        reliable systems and useful developer tools.
      </p>
    </section>
  );
};

export default AboutMeSection;
