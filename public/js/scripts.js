function confirmacaoUsuario(event, form) {
    event.preventDefault()
    var decisao =  confirm("Você deseja continuar com a operação?")

    if (decisao) {
        form.submit()
    } 
}
