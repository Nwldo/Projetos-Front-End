// configurar evento de rolagem (scroll)
// addEventListener --> guarda o evento que foi executado pelo usuário
// o # é usado para fazer referência ao id do elemento / se for classe coloca-se um ponto
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    // adcionando uma classe ao header (a clase ainda não existe será adicionado usando javaScript)
    //toogle --> se a classe existe remova-a, se não adicione
    header.classList.toggle('rolagem',window.scrollY > 0)
})

/*
window.scrollY --> a classe rolagem seja adicionada sempre que a janela estiver
uma rolagem no eioxo y (vertical) e que a posição da rolagem seja maior que 0, ou seja,
se a rolgem for pelo menor 1 será aplicada a efeito que quero.

Depois é só criar a classe rolagem no css

*/
