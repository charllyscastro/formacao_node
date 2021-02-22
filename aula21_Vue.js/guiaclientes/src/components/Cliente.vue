<template>
  <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
    <h2>Nome: {{cliente.nome}}</h2>
    <p>Email: {{cliente.email | processarEmail}}</p>
    <p v-if="showIdade">Idade: {{cliente.idade}}</p>
    <p v-else>A idade foi escondida</p>
    <button @click="mudaCor">mudar cor</button>
    <button @click="emitirEventoDelete">Deletar</button>
    <h4>Id processado: {{idProcessado}}</h4>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isPremium: false
    }
  },
  props: {
    cliente: Object,
    showIdade: Boolean,
  },
  methods: {
    mudaCor: function(){
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete: function(){
      this.$emit("meDelete", {idDoCliente: this.cliente.id ,component: this});
    }
  },
  filters: {
    processarEmail: function(value){
      return `Vuejs ${value.toUpperCase()}`; 
    }
  },
  computed: {
    idProcessado: function(){
      return (this.cliente.email + this.cliente.nome).toUpperCase();
    }
  }
}
</script>

<style scoped>
  .cliente{
    background-color: #ccc;
    padding: 2%;
    margin-bottom: 10px;
    height: 200px;
  }
  .cliente-premium{
    background-color: rgb(207, 62, 62);
    color: white;
    padding: 2%;
    margin-bottom: 10px;
    height: 200px;
  }
</style>