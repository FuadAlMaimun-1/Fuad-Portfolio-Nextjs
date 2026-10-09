import React, { useEffect, useState } from "react";
const About = () => {
  const [, setIsVisible] = useState(false);
  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    </>
  );
};
export default About;