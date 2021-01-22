// Envio de email
const enviarEmail = (callback) => {
  setTimeout(() => {
    let deuErro = true;
    if(deuErro == undefined){
      callback();
    }else{
      callback('Email não enviado');
    }
  }, 5000)
}


console.log('Iniciando envio do email');
enviarEmail((err) => {
  if(err){
    console.log(`${err}`)
  }else{
    console.log('Email enviado');
  }
})