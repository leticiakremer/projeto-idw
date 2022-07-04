$(document).ready(() => {
    $('section').load('pages/home.html')
    $('#menuHome').addClass('active')

    function removeClassMenu() {
        $('#menuHome').removeClass('active')
        $('#menuSobre').removeClass('active')
        $('#menuProdutos').removeClass('active')
        $('#menuContato').removeClass('active')
    }

    $('#menuHome').click(() => {
        $('section').load('pages/home.html')
        removeClassMenu()
        $('#menuHome').addClass('active')
    })

    $('#menuSobre').click(() => {
        $('section').load('pages/sobre.html')
        removeClassMenu()
        $('#menuSobre').addClass('active')
    })


    $('#menuProdutos').click(() => {
        $('section').load('pages/produtos.html')
        removeClassMenu()
        $('#menuProdutos').addClass('active')
    })


    $('#menuContato').click(() => {
        $('section').load('pages/contato.html')
        removeClassMenu()
        $('#menuContato').addClass('active')
    })


})


