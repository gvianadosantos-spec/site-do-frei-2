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