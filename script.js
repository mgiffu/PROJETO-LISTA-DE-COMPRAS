// Selecioanando elementos do DOM
const form = document.querySelector('form'); // utilizado para evento de envio do formulário
const input = document.getElementById('add-item'); // utilizado para a função de de um novo item na lista
const itemsList = document.getElementById("items-list")
const alert = document.getElementById("alert")
const checkboxAlert = document.getElementById("checkbox-alert")

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
function addItem(text) {
  const template = document.getElementById("item-template"); // Obtém o template com a id "item-template"
  const divClone = template.content.cloneNode(true).firstElementChild; // Clona o template e obtém o primeiro elemento filho

  const uniqueId = "item-" + Date.now(); // Gera um id único com base na data e hora atual

  const checkbox = divClone.querySelector("input[type=checkbox]")
  checkbox.id = uniqueId // Define o id do checkbox com o id único
  checkbox.name = uniqueId // Define o nome do checkbox com o id único

  const label = divClone.querySelector("label")
  label.setAttribute("for", uniqueId) // Define o atributo "for" do label com o id único

  divClone.querySelector(".item-text").textContent = text // Define o texto digitado do item com o valor do input

  const removeButton = divClone.querySelector(".remove-button") // Obtém o botão de remoção
  removeButton.addEventListerner("click", () => {
    if (checkbox.checked) {
      divClone.remove() // remove o item
      showRemovalAlert() // mostra alerta de remoção do item
    } else {
      showCheckboxRiqueridAlert() // mostra alerta para marcar o item antes de excluí-lo
    }
  })
}

