const secaoProjetos = document.getElementById('projetos');
const projetosExtras = document.querySelectorAll('.projeto-extra');
const btnVerMais = document.getElementById('btn-ver-mais');
const btnVerMenos = document.getElementById("btn-ver-menos");
const btnTopo = document.getElementById('btn-topo');
const elementos = document.querySelectorAll('.animacao-scroll');

function mostrarProjetos() {
    projetosExtras.forEach(projeto => {
        projeto.classList.add('mostrar-projeto')
    });

    btnVerMais.classList.add('esconder');
    btnVerMenos.classList.remove('esconder');
};

function esconderProjetos() {
    projetosExtras.forEach(projeto => {
        projeto.classList.remove('mostrar-projeto')
    });

    btnVerMais.classList.remove('esconder');
    btnVerMenos.classList.add('esconder');

    secaoProjetos.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

btnVerMais.addEventListener("click", mostrarProjetos);

btnVerMenos.addEventListener("click", esconderProjetos);

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        btnTopo.classList.remove('esconder');
    } else {
        btnTopo.classList.add('esconder');
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
