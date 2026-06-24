// const secaoProjetos = document.getElementById('projetos');
const projetosExtras = document.querySelectorAll('.projects__card--hidden');
const btnVerMais = document.getElementById('button-more');
const btnVerMenos = document.getElementById("button-less");
const btnTopo = document.getElementById('back-to-top');
const elementos = document.querySelectorAll('.scroll-animation');

function mostrarProjetos() {
    projetosExtras.forEach(projeto => {
        projeto.classList.add('mostrar-projeto')
    });

    btnVerMais.classList.add('hidden');
    btnVerMenos.classList.remove('hidden');
};

function esconderProjetos() {
    projetosExtras.forEach(projeto => {
        projeto.classList.remove('mostrar-projeto')
    });

    btnVerMais.classList.remove('hidden');
    btnVerMenos.classList.add('hidden');

    // secaoProjetos.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    // });
};

btnVerMais.addEventListener("click", mostrarProjetos);

btnVerMenos.addEventListener("click", esconderProjetos);

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        btnTopo.classList.remove('hidden');
    } else {
        btnTopo.classList.add('hidden');
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(t => {
        if(t.isIntersecting) {
            t.target.classList.add('aparecer');
            observer.unobserve(t.target);
        }
    });
}, {threshold: 0.2});

elementos.forEach(el => observer.observe(el));
