//Caixa sessão 11

function expande(event) {
    // Pega o botão que foi clicado
    const button = event.currentTarget;
    
    // Seleciona o elemento <p> mais próximo com a classe 'caixa-expande' do botão
    const caixaExpande = button.closest('.sec11-caixa').querySelector('.caixa-expande');
    
    // Seleciona o contêiner .sec11-caixa que envolve o botão
    const caixa = button.closest('.sec11-caixa');
    
    // Alterna a classe 'visivel' para mostrar ou esconder o conteúdo e mudar o fundo
    caixaExpande.classList.toggle('visivel');
    caixa.classList.toggle('expandido');
    
    // Rotaciona o ícone do botão em 180 graus ao expandir
    const img = button.querySelector('img');
    img.classList.toggle('rotacionado');
  }

  // Adiciona o evento de clique a todos os botões da seção
  document.querySelectorAll('#sec11 button').forEach(button => {
    button.addEventListener('click', expande);
  });

//---------------------------------------------------------------------------------------------
// biblioteca AOS

AOS.init();