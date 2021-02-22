<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="clienteTeste.nome">
    <button v-on:click="show = !show">{{show ? "esconder idade" : "mostrar idade"}}</button>
    <button v-on:click="premium = !premium">Eh premium</button>
    <Cliente :cliente="clienteTeste" :showIdade="show" :showPremium="premium"/>
    <!-- <Produto /> -->
  </div>
</template>

<script>
import Cliente from './components/Cliente';
// import Produto from './components/Produto.vue';
export default {
  name: 'App',
  data(){
    return{
      clienteTeste: {
        nome: "Ciclano",
        email: "ciclano@email.com",
        idade: 99
      },
      show: false,
      premium: false
    }
  },
  components: {
    Cliente,
    // Produto
  }
}
</script>
 
<style>

</style>
