class Pilha {
    constructor() {
      this.pilha = [];
    }
  
    push(item) {
      this.pilha.push(item);
    }
  
    pop() {
      if (!this.vazia()) {
        return this.pilha.pop();
      } else {
        return null;
      }
    }
  
    vazia() {
      return this.pilha.length === 0;
    }
  }
  
  function expressaoValida(expressao) {
    const pilha = new Pilha();
  
    for (let i = 0; i < expressao.length; i++) {
      const caractere = expressao[i];
      if (caractere === '(') {
        pilha.push(caractere);
      } else if (caractere === ')') {
        if (pilha.pop() === null) {
          return false;
        }
      }
    }
  
    return pilha.vazia();
  }
  
  function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  
  function clean() {
    document.getElementById('resultado').innerHTML = "";
  }
  
  function adicionar(num1, num2) {
    return num1 + num2;
  }
  
  function subtrair(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  function dividir(num1, num2) {
    return num1 / num2;
  }
  
  function calcular() {
    const expressao = document.getElementById('resultado').innerHTML;
  
    if (!expressaoValida(expressao)) {
      alert('Expressão inválida!');
      return;
    }
  
    const expressaoSemX = expressao.replace(/x/g, '*');
    const resultadoFinal = eval(expressaoSemX);
  
    document.getElementById('resultado').innerHTML = resultadoFinal;
  }
  