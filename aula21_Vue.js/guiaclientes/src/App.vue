<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <button v-on:click="show = !show">{{show ? "esconder idade" : "mostrar idade"}}</button>
    <h3>Cadastro</h3>
    <input type="text" placeholder="nome" v-model="nomeField">
    <small id="nome-erro" v-show="deuErro">Nome é inválido</small><br>
    <input type="email" placeholder="email" v-model="emailField"><br>
    <input type="number" placeholder="idade" v-model="idadeField"><br>
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr>
    <div v-for="cliente in orderClientes" :key="cliente.id">
      <Cliente :cliente="cliente" :showIdade="show" @meDelete="deletarUsuario"/>
    </div>
  </div>
</template>

<script>
import Cliente from './components/Cliente';
import _ from 'lodash';
export default {
  name: 'App',
  data(){
    return{
        deuErro: false,
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
       if(this.nomeField == "" || this.nomeField.length < 3){
         this.deuErro = true;
       }else{
         this.clientes.push({
          id: Date.now(),
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField
       })
      this.nomeField = "",
      this.emailField = "",
      this.idadeField = 0,
      this.deuErro = false
       }
    },
    deletarUsuario: function($event){
      const id = $event.idDoCliente;
      const novoArray = this.clientes.filter(cliente => cliente.id != id);
      this.clientes = novoArray;
    }
  },
  computed: {
    orderClientes: function(){
      return _.orderBy(this.clientes,['id'],['desc']);
    }
  }

}
</script>
 
<style>
  #nome-erro{
    color: red;
    padding-left: 10px;
  }
</style>
