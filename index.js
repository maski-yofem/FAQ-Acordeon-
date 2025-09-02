const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach(function(item){
    item.addEventListener("click", function(){
        // Verifica se o item clicado já tem a classe 'ativo'
        const jaEstaAtivo = item.classList.contains('ativo');
        
        // Se o item clicado já está ativo, remove a classe para fechá-lo
        if (jaEstaAtivo) {
            item.classList.remove('ativo');
        } else {
            // Se o item clicado não está ativo, adiciona a classe para abri-lo
            item.classList.add('ativo');
        }
    })
})