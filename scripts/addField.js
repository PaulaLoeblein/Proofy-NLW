// procurar botão para realizar um evento
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// executar ação/evento 
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // limpar os campos (para cada campo)
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // colocar na pag. onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}