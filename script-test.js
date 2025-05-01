// Função para mostrar alerta de checkbox não marcado
function showCheckboxRequiredAlert() {
  // Mostrar o alerta
  checkboxAlert.style.display = 'flex';
  
  // Esconder o alerta após 3 segundos
  setTimeout(function() {
    checkboxAlert.style.display = 'none';
  }, 3000);
}// Selecionar elementos do DOM
const form = document.querySelector('form');
const input = document.getElementById('add-item');
const itemsList = document.getElementById('items-list');
const alert = document.getElementById('alert');
const checkboxAlert = document.getElementById('checkbox-alert');

// Inicialmente esconder os alertas
alert.style.display = 'none';
checkboxAlert.style.display = 'none';

// Adicionar evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Impedir comportamento padrão de recarregar a página
  event.preventDefault();
  
  // Obter valor do input
  const itemText = input.value.trim();
  
  // Verificar se o input não está vazio
  if (itemText !== '') {
    // Criar novo item
    addItem(itemText);
    
    // Limpar o input após adicionar
    input.value = '';
  }
});

// Função para adicionar um novo item à lista
function addItem(text) {
  // Clonar o template
  const template = document.getElementById('item-template');
  const itemDiv = template.content.cloneNode(true).firstElementChild;
  
  // Gerar ID único para o checkbox
  const uniqueId = 'item-' + Date.now();
  
  // Configurar os elementos
  const checkbox = itemDiv.querySelector('input[type="checkbox"]');
  checkbox.id = uniqueId;
  checkbox.name = uniqueId;
  
  const label = itemDiv.querySelector('label');
  label.setAttribute('for', uniqueId);
  
  // Adicionar o texto do item
  itemDiv.querySelector('.item-text').textContent = text;
  
  // Adicionar evento de clique ao botão de remover
  const removeButton = itemDiv.querySelector('.remove-button');
  removeButton.addEventListener('click', function() {
    // Verificar se o checkbox está marcado
    const checkbox = itemDiv.querySelector('input[type="checkbox"]');
    
    if (checkbox.checked) {
      // Remover o item
      itemDiv.remove();
      
      // Mostrar alerta de remoção
      showRemovalAlert();
    } else {
      // Alertar o usuário que precisa marcar o item primeiro
      showCheckboxRequiredAlert();
    }
  });
  
  // Adicionar o novo item à lista (antes do alerta)
  itemsList.insertBefore(itemDiv, alert);
}

