// ==========================================
// SIMULADOR SIMPLES DE ORÇAMENTO PESSOAL
// ==========================================
 
 
// ---- 1. DADOS INICIAIS ----
 
// Pergunta o nome do usuário (vai ser uma string, ou seja, texto)
var nome = prompt("Qual é o seu nome?");
 
 
// Função auxiliar: fica repetindo o prompt até o usuário digitar um número válido
// (isso é a validação com while que o exercício pede)
function pedirNumero(pergunta) {
  var valor = prompt(pergunta);        // pede o valor
  var numero = Number(valor);          // tenta converter para número
 
  // enquanto não for um número válido, fica pedindo de novo
  while (isNaN(numero) || valor === null || valor.trim() === "") {
    alert("Por favor, digite um número válido!");
    valor = prompt(pergunta);
    numero = Number(valor);
  }
 
  return numero; // devolve o número válido
}
 
 
// Pergunta a renda mensal usando a função acima
var renda = pedirNumero("Qual é a sua renda mensal? (R$)");
 
 
// Pergunta quantas despesas o usuário vai informar
var quantidadeDespesas = pedirNumero("Quantas despesas você vai informar? (mínimo 1, máximo 5)");
 
// Regra: se for menor que 1, usa 1. Se for maior que 5, usa 5.
if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}
 
 
// ---- 2. LANÇAMENTO DE DESPESAS COM FOR ----
 
var totalDespesas = 0; // começa zerado, vai somar cada despesa aqui
 
// o for vai repetir uma vez para cada despesa
for (var i = 1; i <= quantidadeDespesas; i++) {
  var despesa = pedirNumero("Qual o valor da Despesa " + i + "? (R$)");
  totalDespesas = totalDespesas + despesa; // soma no total
}
 
 
// ---- 3. ANÁLISE COM IF / ELSE ----
 
var sobra = renda - totalDespesas; // calcula quanto sobrou
var mensagem = "";                  // vai guardar a mensagem de resultado
 
if (totalDespesas > renda) {
  // gastou mais do que ganhou
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  // ainda tem sobra, agora verifica se é boa ou não
  var trintaPorCento = renda * 0.30; // 30% da renda
 
  if (sobra >= trintaPorCento) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}
 
 
// ---- 4. SAÍDA FINAL ----
 
// Monta o texto do resultado
var resultado =
  "=============================\n" +
  "   RESUMO DO SEU ORÇAMENTO\n" +
  "=============================\n" +
  "Nome: " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  "-----------------------------\n" +
  mensagem;
 
// Mostra no alert (janelinha do navegador)
alert(resultado);
 
// Mostra no console (F12)
console.log(resultado);