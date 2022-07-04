$(document).ready(() => {
    function limparErros() {
        $("#validacao-nome").text("")
        $("#validacao-email").text("")
        $("#validacao-telefone").text("")
        $("#validacao-assunto").text("")
    }

    function limparCampos() {
        $("#nome-input").val("")
        $("#email-input").val("")
        $("#telefone-input").val("")
        $("#assunto-input").val("")
    }

    $('#enviar-form-button').click(function () {
        limparErros()
        var temErros = false

        if ($("#nome-input").val() == "") {
            $("#validacao-nome").text(" Campo nome é obrigatório.")
            temErros = true
        }

        if ($("#email-input").val() == "") {
            $("#validacao-email").text(" Campo email é obrigatório.")
            temErros = true

        }

        if ($("#telefone-input").val() == "") {
            $("#validacao-telefone").text(" Campo telefone é obrigatório.")
            temErros = true
        }

        if ($("#assunto-input").val() == "") {
            $("#validacao-assunto").text(" Campo assunto é obrigatório.")
            temErros = true
        }

        if (!temErros) {
            alert("O contato foi enviado!")
            limparCampos()
        }
    });

})

