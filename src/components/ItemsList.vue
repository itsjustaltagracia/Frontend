<template>
  <div>
    <h2>Items</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.description }}
      </li>
    </ul>

    <h3>Crear Item</h3>
    <input v-model="newItem.name" placeholder="Nombre" />
    <input v-model="newItem.description" placeholder="Descripción" />
    <button @click="crearItem">Crear</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemsList', // ¡Nombre correcto de múltiples palabras!
  data() {
    return {
      items: [],
      newItem: { name: '', description: '' }
    };
  },
  methods: {
    async fetchItems() {
      try {
        const res = await axios.get('http://localhost:3000/api/items');
        this.items = res.data;
      } catch (error) {
        console.error('Error al obtener items:', error);
      }
    },
    async crearItem() {
      if (!this.newItem.name) return;
      try {
        await axios.post('http://localhost:3000/api/items', this.newItem);
        this.newItem.name = '';
        this.newItem.description = '';
        this.fetchItems();
      } catch (error) {
        console.error('Error al crear item:', error);
      }
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

input {
  margin: 5px;
}

button {
  margin: 5px;
  padding: 5px 10px;
}
</style>
