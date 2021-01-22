class Dado{
  constructor(faces){
    this.faces=faces;
  }
  Rolar(){
    console.log(parseInt(Math.random() * (this.faces - 0) + 0))
  }
}

const d6 = new Dado(6);
d6.Rolar();