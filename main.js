$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);

        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).hide();
        $(novoItem).fadeIn(1000);
        $('#tarefa').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).addClass('risca-tarefa');
    })

    $('#botao-limpar').click(function(){
        $('li').hide();
    })
})
