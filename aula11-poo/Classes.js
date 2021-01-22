class Produto{
  constructor(){
    this.nome='';
    this.preco=0;
    this.material='';
    this.peso=0;
    this.tamanho=0;
  }

  Visualizar(){}
  Comprar(){}
  Adicionar(){}
  Enviar(){}
}

class Encomenda{
  constructor(){
    this.endereco='';
    this.peso=0;
    this.tamanho=0;
    this.material='';
  }
  Pagar(){}
  Adicionar(){}
  Postar(){}
  Enviar(){}
}

class Storie{
  constructor(){
    this.texto='';
    this.horario='';
    this.tamanho=0;
  }
  Publicar(){}
  Excluir(){}
}