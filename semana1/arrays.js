const name = ["Ana", "Alicia", "Betina"];
// JOIN
console.log(name.join(" * ")); // separa com asteriscos

console.log(name); // exibe todo o array

// POP
let UltimoNome = name.pop(); // remove o último elemento do array e o retorna
console.log(UltimoNome);

console.log(name); // exibe o array atualizado

// PUSH
name.push("Carla"); // adiciona um novo elemento ao final do array
console.log(name); // exibe o array atualizado

// SHIFT
const shifted = name.shift(); // remove o primeiro elemento do array e o retorna
console.log(shifted);
console.log(name);

console.log("Laço de repetição");
while ((i = name.shift()) !== undefined) {
  console.log(i);
}

let nameS = ["Ana", "Alicia", "Betina", "Carlos"];
//remove 0 elementos a partir do índice 2, e insere "Tiago"
let removed = name.splice(2, 0, "Tiago");
//name é ["Ana", "Alicia", "Tiago" , "Betina", "Carlos"]
console.log(nameS);

/* A ideia central é simples:
splice() remove, adiciona ou substitui elementos dentro de um array em uma posição específica.

// A estrutura geral é esta:

array.splice(inicio, quantidadeRemover, elemento1, elemento2, ...) */

let numeros = [10, 20, 30, 40, 50];

numeros.splice(2, 2);

console.log(numeros);

// A função splice() pode ser usada para adicionar elementos sem remover nenhum, basta definir a quantidade de elementos a remover como 0:
let frutas = ["maçã", "banana", "laranja"];

frutas.splice(1, 0, "uva");

console.log(frutas);

//Aqui está o truque poderoso: remover e inserir ao mesmo tempo.

let cores = ["azul", "verde", "vermelho"];

cores.splice(1, 1, "amarelo");

console.log(cores);
