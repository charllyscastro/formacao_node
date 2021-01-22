/**
 * 1.Herança
 * 2.Polimorfismo
 * 3.Encapsulamento
 * 4.Abstração*
 * 5.Composição*
 */

 class filme{
   constructor(titulo, ano, sinopse, genero, diretor, duracao){
     this.titulo=titulo;
     this.ano=ano;
     this.sinopse=sinopse;
     this.genero=genero;
     this.diretor=diretor;
     this.duracao=duracao;
     this.atores=[];
   }

   Reproduzir() { 
     console.log('Reproduzindo');
   }
   Pausar(){
    console.log('Pausando');
   }
   Avancar(){
    console.log('Avançando');
   }
   Fechar(){
    console.log('Fechando');
   }
   Ficha(){
     console.log(this.titulo);
     this.Reproduzir();
   }
 }

 var vingadores = new filme("Vingadores 2", 2014, "Luta", "Ação", "Fulano", "2h");
 vingadores.Ficha();

