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

// Adicionando a função para criar novo item na lista
function addItem(text) {
  const template = document.getElementById("item-template") // variável para selecionar o template
  const itemDiv = template.content.cloneNode(true).firstElementChild // variável para clonar o template

  // Gerar id único para cada clone (novo item da lista)
  const uniqueId = "item-" + Date.now() //gerando o id único atraves da data atual

  // Aplicando o ID único para o checkbox (id e name) e o label (for)
  const checkbox = itemDiv.querySelector('input[type="checkbox"]') // selecionando o input do tipo checkbox dentro do item colonado
  checkbox.id = uniqueId //definindo a id do input do clone com o id único gerado
  checkbox.name = uniqueId //definindo o name do input do clone com o id único gerado

  const label = itemDiv.querySelector("label")
  label.setAttribute("for", uniqueId) //definindo o for do label do clone com o id único gerado

  // Adiconar o texto do item
  itemDiv.querySelector(".item-text").textContent = text

  // Adicionando evento de clique no botão de remover item
  const removeButton = itemDiv.querySelector(".remove-button")
  removeButton.addEventListener("click", () => {
    const checkbox = itemDiv.querySelector('input[type="checkbox"]')
    // Criando condição para exclusão do item
    if (checkbox.checked) {
      itemDiv.remove()
      showRemovalAlert()
    } else {
      showCheckboxRequiredAlert()
    }
  })

  // Adicionando o item na lista
  itemsList.insertBefore(itemDiv, alert)
}

// Adicionando função para o checkboxAlert
function showCheckboxRequiredAlert() {
  checkboxAlert.style.display = "flex"

  setTimeout(() => {
    checkboxAlert.style.display = "none"
  }, 3000)
}

// Adicionando função para o alert
function showRemovalAlert() {
  alert.style.display = "flex"

  setTimeout(() => {
    alert.style.display = "none"
  }, 3000)
}

// Adicionando evento para fechar os alertas manualmente
const closeAlertButtons = document.querySelectorAll(".close-alert")
closeAlertButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Encontrar o alerta pai deste botão
    const parentAlert = this.closest('div[id$="alert"]')
    if (parentAlert) {
      parentAlert.style.display = "none"
    }
  })
})


