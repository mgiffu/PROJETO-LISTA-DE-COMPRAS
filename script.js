// Selecioanando elementos do DOM
const form = document.querySelector('form'); // utilizado para evento de envio do formulário
const input = document.getElementById('add-item'); // utilizado para a função de de um novo item na lista

// Evento de envio de formulário
form.addEventListener("submit", (event) => {
  event.preventDefault() // Previne comportamento padrão de recarregar a página
  const itemValue = input.value.trim() // Obtém o valor do input e remove espaços em branco
  if (itemValue !=="") { // Verfica se o valor do input é vazio
    addItem(itemValue) // Chama a função para adicionar o item na lista
    input.valeu = "" // Limpa o valor do input após andicionar um novo item na lista
  }
}
)

// Função para adicionar um novo item na lista
function addItem(text) {}