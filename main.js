const form = document.getElementById('form');
const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit',function(e){
    e.preventDefault()
    adicionarContato()
})

function adicionarContato() {
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');


    if (numeros.includes(parseInt(numero.value))) {
        alert(`Número ${numero.value} já adicionado!`)
    } else {
        numeros.push(parseInt(numero.value));
        nomes.push(nome.value);

        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`
        linha += `<td>${numero.value}</td>`
        linha += '</tr>'

        linhas += linha
        
        const tabela = document.querySelector('tbody')
        tabela.innerHTML = linhas;
        
        nome.value = '';
        numero.value = '';
    }
}