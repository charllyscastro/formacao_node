const fs = require('fs');
/**
 * Leitura de arquivo
 * fs.readFile('./texto.txt',{encoding: 'utf-8'}, (erro, dados) => {

  if(erro){
    console.log('Ocorreu um erro');
  }else{
    console.log(dados);
  }
});
 */
/**
 * Escrita de arquivo
 * fs.writeFile('./texto.txt','Dados do arquivo', (err) => {
  if(err){
    console.log('Deu erro!');
  }
 });
 */

 /**
  * Leitor/Escritor de JSON
  *  function modificaUsuario(nome, curso, categoria){
  fs.readFile('./usu.json',{encoding: 'utf-8'}, (erro, dados) => {
    if(erro){
      console.log('Ocorreu um erro');
    }else{
      const novoUsu = JSON.parse(dados);
      novoUsu.nome = nome;
      novoUsu.curso = curso;
      novoUsu.categoria = categoria;

      fs.writeFile('./usu.json', JSON.stringify(novoUsu), (err) => {
        if(err){
          console.log('Ocorreu um erro');
        }
      });
    }
  });
 }

 modificaUsuario("Ciclano", "Aprendendo PHP", "PHP");
  */
