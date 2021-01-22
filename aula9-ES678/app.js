// VAR => Global, local
// LET => Global, Local e bloco

const user = {
  nome: "guia",
  end: "Rua tabajaras"
}

const users = [user];

const usuario = users.find(user => user.nome == "guia");
console.log(usuario)