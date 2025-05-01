// Selecionando elementos do DOM
const form = document.querySelector("form")
const input = document.getElementById("add-item")
const itemsList = document.getElementById("items-list")
const alert = document.getElementById("alert")
const checkboxAlert = document.getElementById("checkbox-alert")

// Escondendo os avisos de alerta
alert.style.display = "none"
checkboxAlert.style.display = "none"

// Adicionando evento de envio de formulário
form.addEventListener("submit", (event) => {
  event.preventDefault() // removendo efeito padrão de recarregar a página

  const itemText = input.value.trim() // pegar o valor do imput e remover epaços do inicio e fim

  if (itemText !== "") { // se o valor do input for diferente de vazio
    addItem(itemText) // cria um novo item o com valor do input
    input.value = "" // limpa o valor do input adicionado
  }
})


