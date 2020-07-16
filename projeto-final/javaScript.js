
// O que é variaveis ? 
// A melhor definição de variaveis é que ela pode representar um valor ou um conjunto de valores.
// Exemplo:

var exemplo = 50;
console.log(exemplo)





// O que é constante ?
// Assim como as variaveis as constantes são usadas para armazenar vários tipos de valores a diferença 
// das variaveis é que as constante são inalteraveis.
// Exemplo:

const constate = 50;
//Exemplo se fosse alterar o valor da constante 
constate = 60;





// Estrutura de decisões ?
// São elas If, else, if else, switch, essas estrutura permite executar um entre vários blocos de instruções
// conforme a condição
// Exemplo:

if (exemplo > 60){
    console.log('Esté numero não é menor que 60')
}else{
    console.log('Esté numero é menor que 60')
}




// Estrutura de repetição "Loops" ?
// Estruturas de repetição permitem que um bloco de instruções seja executado, repetidamente ou até mesmo por
// quantidade controlada.
// Exemplo:

for(var i = 0; i < exemplo; i++){
    console.log(i)
}




// O que é escopo ?
// Escopos é contexto delimitante aos quais valores e expressões estão associados. Existe os escopos globais e
// os escopos locais dentro de funções por exemplo.
// Exemplo:

// escopo global
var escopo = 70;

function exemploEscopo(){
    //escopo local podemos também usar o let em vez do var, para que a variavel não escape do escopo.
    var escopoNaFunção = 90;
}




// inputs 
// Serve para entradas de dados vindo do usuario ou outro qualquer meio externo do software. Como promt
// exemplo:

var input = prompt('Digite um numero')




// outputs ?
// Saida  de dados do software para tela ou para outro software por exemplo, em javascript temos por exemplo. 
// Alert, console.log, document.white,
// exemplo:

console.log(input)





// O que é array ?
// É uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa 
// ser identificado.
// exemplo:

var array = ['Professor','Weberson','Rodrigues'];




// O que é Objetos ?
// Um objeto pode ser uma variável, função, ou uma estrutura de dados. E cada elemento no objeto recebe um propriedade
// exemplo:

var objeto = {
    nome:'Gabriel',
    sobrenome:'Carreiro'
}



// camelCase, PascalCase, kibab-case, snake_case ?
// São tipo de escritas, e cada linguagem tem o seu tipo de escrita

// PascalCase Toda palavra nova começa em letra maiúsculas 

// camelCase Primeira letra em  Minúsculas e depois toda palavra nova em maiúsculas 

// kibab-case tudo em Minúsculas separadas por traço    -

// snake_case tudo em Minúsculas separadas por underline _




// Diferença entre caminho absoluto e caminho relativo ?

// Caminho absoluto é caminho completo dentro da maquina exemplo do 
// windows é C:\Users\Gabriel\Documents\Meus Projetos\Aplicações Web\projeto-final-nivelamento\projeto-final

// caminho relativo é ./projeto-final-nivelamento/projeto-final.exercicio.html



// Diferença entre os operadores &&, ||, == e != ?
// São operadores logicos usado nas linguagem de programação 

// && as duas condições precisa ser verdade

// || apenas uma precisa ser verdade

// == Compara o valor das duas condições

// != Verifica se as condições são diferentes 



// O que é EPER, e para que serve ?

// A melhor coisa da vida kkk 
// Entender-planejar-Executar-Revisar
// Devemos aplicar o eper toda vez que encontrarmos qualquer problema. Aplicamos o eper para 
// resolver da melhor maneira possivel



// Explique o que é Pilha e Fila ?
// São estrutura de dados são estruturas ambas. porém seus dados não inserido e removidos de maneiras diferentes

// Pilha: O primeiro que entra é o ultima que sai, uma pilha de livro ou pratos  

// fila: O primeiro que entra é o primeiro que sai, uma fila de banco





// Explique com suas palavras qual a diferença entre html, javascript e css ?

// html não é linguagem de programação, é uma linguagem de marcação de hipertexto

// css é uma linguagem de estilização, para estilizar documentos html

// javascript é uma linguagem de programação interpretada, com uma tipagem fraca 

// Os três juntas formam o pilar de quase tudo na internet 


