export const observeElements = (className) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.25});

  document.querySelectorAll(className).forEach(el => observer.observe(el));
};

/*
export const observeElements = (selector) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log('Checking entry:', entry.target); // Debug log
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once it's visible, we can stop observing it
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1, // Lower threshold so it triggers sooner
    rootMargin: "0px 0px -50px 0px" // Triggers 50px before it enters view
  });

  // Use a tiny timeout to ensure React has finished the DOM paint
  setTimeout(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) console.warn(`No elements found for: ${selector}`);
    elements.forEach(el => observer.observe(el));
  }, 100);
};

*/