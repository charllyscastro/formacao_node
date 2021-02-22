<template>
  <div id="produto">
    <h2>{{nome}}</h2>
    <input type="text" v-model="nome">
  </div>
</template>

<script>
export default {
  data(){
    return{
      nome: "Ciclano"
    }
  }
}
</script>

<style>
  #produto{
    color: blue;
    width: 100%;
  }
  h2{
    margin-right: 5px;
  }
</style>