class Leitor{
  ler(nome){
    console.log(`Lendo arquivo ${nome}`);
  }
}

class Escritor{
  escrever(nome){
    console.log('Escrevendo arquivo');
  }
}

class Criador{
  criar(local, nome){
    console.log(`Criando o arquivo ${nome} em ${local}`);
  }
}

class Deletor{
  deletar(arquivo){
    console.log(`Deletando arquivo ${arquivo}`);
  }
}


class ManipuladorDeArquivo{
  constructor(nome){
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.deletor = new Deletor(); 
  }
}

const manipulador = new ManipuladorDeArquivo();
manipulador.leitor.ler("arquivo.txt");
manipulador.criador.criar('/public', 'leu.txt');