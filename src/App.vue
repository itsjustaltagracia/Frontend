<template>
  <div id="app">
    <h1>Gestión de Ítems</h1>
    <ItemsList />
  </div>
</template>

<script>
import ItemsList from './components/ItemsList.vue';
// Nota: Eliminamos la referencia a 'HelloWorld' ya que no se usa en el template final.

export default {
  name: 'App',
  components: {
    // Componente necesario para mostrar la lista de ítems
    ItemsList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>