// Promisse || Promessa
function pegarId(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1000)
  });
}

function pegarEmail(id){
  return new Promise((resolve, reject) => {
    resolve('char@gmail.com');
  });
}

function enviarEmail(corpo, para){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deucerto = false;
      if(deucerto){
        resolve({time: '6s', to: 'char@email.com'});
      }else{
        reject('A promisse foi rejeitada');
      }
    }, 4000) 
  });
}

async function principal(){
  const id = await pegarId();
  const email = await pegarEmail(id);
  enviarEmail("ola",email).then(({time, to}) => {
          console.log(time, to)
        }).catch((err) => {
          console.log(err);
        });
}

principal();

// pegarId().then((id) => {
//   pegarEmail(id).then((email) => {
//     enviarEmail("ola",email).then(({time, to}) => {
//       console.log(time, to)
//     }).catch((err) => {
//       console.log(err);
//     })
//   })
// });