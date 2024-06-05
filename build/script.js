
/***** Beginning Of  Script for Greybox *****/

    // This is the target element
    const targetElement1 = document.querySelector('.hero');

    // setup the intersection observer
    const observer1 = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // add the css class that triggers the animation
               targetElement1.classList.add('animate__animated', 'animate__fadeInLeft');
               
               // stop observing once the animation is triggered
               observer1.unobserve(entry.target);
           }
       });
    }, { threshold: 0.5}); // adjust the threshhold as needed
    
    // start observing the target element
    observer1.observe(targetElement1);
   
/***** End Of Script for Greybox *****/