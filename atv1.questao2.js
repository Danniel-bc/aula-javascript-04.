function questao2()

var salario_atual = parseFloat(prompt("Digite o salário atual do colaborador:"));
var reajuste;

if (salario_atual <= 280.00) {
  reajuste = salario_atual * 0.2;
} else if (salario_atual <= 700.00) {
  reajuste = salario_atual * 0.15; 
} else if (salario_atual <= 1500.00) {
  reajuste = salario_atual * 0.1;
} else {
  reajuste = salario_atual * 0.05;
}

var novo_salario = salario_atual + reajuste;

console.log("Salário atual: R$ " + salario_atual.toFixed(2));
console.log("Reajuste: R$ " + reajuste.toFixed(2));
console.log("Novo salário: R$ " + novo_salario.toFixed(2));