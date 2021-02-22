<template>
  <div id="cliente">
    <h2>Nome: {{cliente.nome}}</h2>
    <p>Email: {{cliente.email}}</p>
    <p>Idade: {{cliente.idade}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props: {
    nome: String,
    email: String,
    idade: Number,
    cliente: Object
  }
}
</script>

<style scoped>
  #cliente{
    background-color: #ccc;
    padding: 2%;
    margin-bottom: 10px;

  }
</style>