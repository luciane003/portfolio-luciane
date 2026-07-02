const projectsExtras = document.querySelectorAll('.projects__card--hidden');
const btnShowMore = document.getElementById('button-more');
const btnShowLess = document.getElementById("button-less");
const btnBackToTop = document.getElementById('back-to-top');
const scrollElements = document.querySelectorAll('.scroll-animation');

function showProjects() {
    projectsExtras.forEach(project => {
        project.classList.add('show-project')
    });

    btnShowMore.classList.add('hidden');
    btnShowLess.classList.remove('hidden');
};

function hideProjects() {
    projectsExtras.forEach(project => {
        project.classList.remove('show-project')
    });

    btnShowMore.classList.remove('hidden');
    btnShowLess.classList.add('hidden');
};

btnShowMore.addEventListener("click", showProjects);

btnShowLess.addEventListener("click", hideProjects);

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        btnBackToTop.classList.remove('hidden');
    } else {
        btnBackToTop.classList.add('hidden');
    }
});

btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2});

scrollElements.forEach(el => observer.observe(el));
