const botaoOk = () => {
    const doneButton = document.createElement('button')

    doneButton.classList.add('check-button')
    doneButton.innerText = 'concluir'

    doneButton.addEventListener('click', concluirTarefa)

    return doneButton
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default botaoOk 