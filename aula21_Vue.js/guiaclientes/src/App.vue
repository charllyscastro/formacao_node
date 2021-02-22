<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <button v-on:click="show = !show">{{show ? "esconder idade" : "mostrar idade"}}</button>
    <h3>Cadastro</h3>
    <input type="text" placeholder="nome" v-model="nomeField"><br>
    <input type="email" placeholder="email" v-model="emailField"><br>
    <input type="number" placeholder="idade" v-model="idadeField"><br>
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr>
    <div v-for="cliente in clientes" :key="cliente.id">
      <Cliente :cliente="cliente" :showIdade="show"/>
    </div>
  </div>
</template>

<script>
import Cliente from './components/Cliente';
export default {
  name: 'App',
  data(){
    return{
        nomeField: "",
        emailField: "",
        idadeField: 0,
      clientes: [
        { 
          id: 1,
          nome: "Ciclano",
          email: "ciclano@email.com",
          idade: 12
        },
        { 
          id: 2,
          nome: "Fulano",
          email: "fulano@email.com",
          idade: 45
        }
      ],
      show: false
    }
  },
  components: {
    Cliente,
  },
  methods: {
     cadastrarUsuario: function(){  
       this.clientes.push({
        id: Date.now(),
        nome: this.nomeField,
        email: this.emailField,
        idade: this.idadeField
     })
    this.nomeField = "",
    this.emailField = "",
    this.idadeField = 0
    } 
  }
}
</script>
 
<style>

</style>
