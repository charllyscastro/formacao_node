<template>
  <div id="cliente">
    <h2>Nome: {{cliente.nome}}</h2>
    <p>Email: {{cliente.email}}</p>
    <p v-if="showIdade">Idade: {{cliente.idade}}</p>
    <p v-else>A idade foi escondida</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props: {
    cliente: Object,
    showIdade: Boolean
  }
}
</script>

<style scoped>
  #cliente{
    background-color: #ccc;
    padding: 2%;
    margin-bottom: 10px;
    height: 168px;
  }
</style>