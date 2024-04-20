let contador = 0;

let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn_add');
let main = document.getElementById('areaLista')
function addTarefa(){

    let valorInput = input.value; //recolhe o que foi inserido no Input

    //define "se o valor de input NÃO FOR: nada, nulo ou indefinido, faça"
    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)) {  

        ++contador; //aqui ele diz para adicionar mais um número ao contador que define item 1, item 2, etc... ele é usado no id abaixo para adicionar mais um número sempre que uma nova tarefa for adicionada 

        //aqui ele monta a estrutura de uma nova "tarefa" que foi feita anteriormente no HTML mas apagada depois para não deixar nenhuma tarefa pré definida, então aqui após apertar o botão "Adicionar" ele cola essa estrutura de tarefa no "cache" do HTML
        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone">
            <i id="icone_${contador}" onclick="marcarTarefa(${contador})" class="material-symbols-outlined" >radio_button_unchecked</i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="material-symbols-outlined">delete_forever</i></button>
        </div>`;   

        //o ${valorInput} tem o $ para dizer que é um valor ou objeto que será adicionado, e no caso coloquei a variável valorInput que pega o que foi digitado no input para que haja o título com o nome da tarefa

        //aqui o main vem da HTML que insere a nova tarefa, e o "+=" quer dizer "adicionar mais um ao invés de substituir"
        main.innerHTML += novoItem; 
    }


     //aqui diz que o input originalmente tem o valor de " ", ou seja nada, então se for pressionado enter, o valor terá retorno ao original, ou seja, nada
        input.value = "";
        input.focus(); 
}


//o addEventListener, é para adicionar um evento para ele observar, que no caso, é o Keyup, ou seja "fica de olho qundo uma tecla específica for pressionada"
input.addEventListener("keyup", function(event){
    if (event.keyCode ===13) {
        event.preventDefault(); //aqui ele bloqueia que outros comandos padrões do sistema acionem quando pressionar o enter para evitar conflitos.
        btnAdd.click(); //aqui diz que o enter é equivalente a um clique
    }
})
//detalhe que o numero 13, representa a tecla enter do teclado


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
} //aqui ele só remove a div que continha a tarefa, que era marcada pelo ID

function marcarTarefa(id){
    let idDoElemento = "icone_" + id;
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')

    if (classe == "item") {
        document.getElementById(idDoElemento).innerHTML = "check_circle"; //aqui ele altera o ícone de círculo para o círculo checado
        item.classList.add('clicado'); //aqui ele altera a classe do item que entra em contato com o CSS e altera a cor de fundo e coloca a linha no texto

        item.parentNode.appendChild(item) //aqui ele faz com que quando ele é clicado ele vá para o final da lista
    }else{
        document.getElementById(idDoElemento).innerHTML = "radio_button_unchecked"; //aqui ele altera o ícone de círculo para o círculo checado
        item.classList.remove('clicado'); //aqui ele altera a classe do item que entra em contato com o CSS e altera a cor de fundo e coloca a linha no texto
    }

}