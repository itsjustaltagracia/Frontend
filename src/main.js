import { createApp } from 'vue'
// ✅ RUTA CORREGIDA: Apunta a la carpeta 'components'
import ItemsList from './components/ItemsList.vue' 

// Si aún tienes el import de App.vue, debes comentarlo o borrarlo:
// import App from './App.vue' 

// ✅ Monta ItemsList.vue como componente raíz
createApp(ItemsList).mount('#app')