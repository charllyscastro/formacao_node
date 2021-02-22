<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente/>
    <Produto />
    <Produto />
  </div>
</template>

<script>
import Cliente from './components/Cliente';
import Produto from './components/Produto.vue';
export default {
  name: 'App',
  components: {
    Cliente,
    Produto
  }
}
</script>
 
<style>

</style>
