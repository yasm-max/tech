// Seleciona elementos do DOM
const doePixBtn = document.getElementById('doePixBtn'); 
const pixModal = document.getElementById('pixModal');
const closeModal = document.querySelector('.close'); 
const copiarChaveBtn = document.getElementById('copiarChave'); 

// Abre o modal ao clicar no botão "Doe via PIX"
doePixBtn.addEventListener('click', () => {
  // Exibe o modal ao alterar o estilo 'display' para 'block'
  pixModal.style.display = 'block';
});

// Fecha o modal ao clicar no botão "X"
closeModal.addEventListener('click', () => {
  // Esconde o modal ao alterar o estilo 'display' para 'none'
  pixModal.style.display = 'none';
});

// Fecha o modal ao clicar fora da área de conteúdo do modal
window.addEventListener('click', (event) => {
  if (event.target === pixModal) {
    // Esconde o modal
    pixModal.style.display = 'none';
  }
});

// Copia a chave Pix ao clicar no botão "Copiar Chave"
copiarChaveBtn.addEventListener('click', () => {
  const chavePix = '123.456.789-00'; // Define a chave Pix
  // Copia a chave Pix para a área de transferência usando a API Clipboard
  navigator.clipboard.writeText(chavePix).then(() => {
    // Exibe uma mensagem de confirmação ao usuário
    alert('Chave Pix copiada para a área de transferência!');
  }).catch(() => {
    // Mensagem de erro caso a cópia falhe
    alert('Falha ao copiar a chave Pix.');
  });
});