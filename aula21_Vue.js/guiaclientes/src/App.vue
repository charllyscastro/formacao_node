<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="clienteTeste.nome">
    <!-- <Cliente :nome="nome" email="fulano@email.com" idade="23"/> -->
    <Cliente :cliente="clienteTeste"/>
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
      nome: "Fulano",
      clienteTeste: {
        nome: "Ciclano",
        email: "ciclano@email.com",
        idade: 99
      }
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
