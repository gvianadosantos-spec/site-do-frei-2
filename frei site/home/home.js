let slideIndexAtual = 0;
let timerCarrossel;

function mudarSlide(index) {
  const slides = document.querySelectorAll('.parte8-slide');
  const pontos = document.querySelectorAll('.parte8-ponto');

  slides.forEach(slide => slide.classList.remove('parte8-ativo'));
  pontos.forEach(ponto => ponto.classList.remove('parte8-ponto-ativo'));

  slides[index].classList.add('parte8-ativo');
  pontos[index].classList.add('parte8-ponto-ativo');
  
  slideIndexAtual = index;
  reiniciarCarrosselAutomatico();
}

function proximoSlide() {
  const slides = document.querySelectorAll('.parte8-slide');
  slideIndexAtual = (slideIndexAtual + 1) % slides.length;
  mudarSlide(slideIndexAtual);
}

// NOVA FUNÇÃO: VOLTAR SLIDE (Seta Esquerda)
function slideAnterior() {
  const slides = document.querySelectorAll('.parte8-slide');
  // Subtrai 1, e se der negativo, volta pro último slide
  slideIndexAtual = (slideIndexAtual - 1 + slides.length) % slides.length;
  mudarSlide(slideIndexAtual);
}

function reiniciarCarrosselAutomatico() {
  clearInterval(timerCarrossel);
  timerCarrossel = setInterval(proximoSlide, 6000); 
}

reiniciarCarrosselAutomatico();

// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
  const track10 = document.getElementById('track-10');
  const btnEsq10 = document.getElementById('btn-esq-10');
  const btnDir10 = document.getElementById('btn-dir-10');

  // Rola para a esquerda
  btnEsq10.addEventListener('click', () => {
    // Pega a largura do primeiro item para saber o quanto rolar
    const itemWidth = track10.querySelector('.parte10-item').offsetWidth;
    track10.scrollBy({ left: -itemWidth * 2, behavior: 'smooth' });
  });

  // Rola para a direita
  btnDir10.addEventListener('click', () => {
    const itemWidth = track10.querySelector('.parte10-item').offsetWidth;
    track10.scrollBy({ left: itemWidth * 2, behavior: 'smooth' });
  });
});