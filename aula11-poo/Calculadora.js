class Calculadora{
  static Somar(a, b){ //Metodos estáticos
    console.log(a+b);
  }
  static Subtrair(a, b){
    console.log(a-b);
  }
}

Calculadora.Somar(10,20);
Calculadora.Subtrair(40,20);