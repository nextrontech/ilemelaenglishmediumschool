document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate');

    const options = {
        root: null, 
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});
