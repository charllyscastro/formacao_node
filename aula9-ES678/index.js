function pegarUsuario(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {nome: "char", idade: 20},
        {nome: "rafa", idade: 10},
        {nome: "fulano", idade: 30}
      ]);
    },3000)
  })
}

async function principal(){
  const usu = await pegarUsuario();
  console.log(usu);
  console.log('ola')
}

principal();

