<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="clienteTeste.nome">
    <button v-on:click="show = !show">{{show ? "esconder idade" : "mostrar idade"}}</button>
    <Cliente :cliente="clienteTeste" :showIdade="show"/>

    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>{{index +1 }}</p>
      <Cliente :cliente="cliente" :showIdade="show"/>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
    </div>
  </div>
</template>

<script>
import Cliente from './components/Cliente';
export default {
  name: 'App',
  data(){
    return{
      clienteTeste: {
        nome: "Ciclano",
        email: "ciclano@email.com",
        idade: 99
      },
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
        },
        { 
          id: 3,
          nome: "Beltrano",
          email: "beltrano@email.com",
          idade: 23
        }
      ],
      show: false
    }
  },
  components: {
    Cliente,
  }
}
</script>
 
<style>

</style>
