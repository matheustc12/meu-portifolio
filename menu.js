// Seleção de elementos
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFechar = document.querySelector('.menu-mobile .btn-fechar');
let menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');

// Abrir menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

// Fechar menu
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
}

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Botão "Voltar ao topo"
let btnTopo = document.createElement('div');
btnTopo.id = 'btn-topo';
btnTopo.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar/ocultar botão topo com scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita reload da página
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if(response.ok) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar. Tente novamente.');
        }
    });
});