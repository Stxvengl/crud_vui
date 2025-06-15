<template>
  <div class="container">
    <aside class="sidebar">
      <h2 class="title">Clientes</h2>
      <nav class="tabs-nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="selectTab(tab.id)"
          :class="['tab-button', { active: activeTab === tab.id }]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </aside>

    <main class="main-content">
      <section class="tab-content">
    <component :is="getActiveComponent()" />

      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RegistroInformacion from './components/CRUD/RegistroInformacion.vue'
import Clientes from './components/CRUD/Clientes.vue'

const Tab2 = {
  template: '<div>Contenido simple Tab 2</div>'
}

const tabs = ref([
  { id: "tab1", label: "Clientes", content: RegistroInformacion },
   { id: "tab2", label: "Nuevo Cliente", content: Clientes },
])

const activeTab = ref("tab1")

function selectTab(id) {
  activeTab.value = id
}
function getActiveComponent() {
  const tab = tabs.value.find(t => t.id === activeTab.value)
  return tab ? tab.content : null
}

</script>

<style scoped>
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
}

/* Sidebar vertical */
.sidebar {
  width: 220px;
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  width: 100%;
  text-align: left;
}

.tabs-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
}

.tab-button {
  padding: 0.75rem 1rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: 500;
  border-left: 4px solid transparent;
  color: #555;
  text-align: left;
  transition: border-color 0.3s, font-weight 0.3s, color 0.3s;
  width: 100%;
}

.tab-button:hover {
  color: #42b883;
}

.tab-button.active {
  border-left-color: #42b883;
  font-weight: 700;
  color: #42b883;
}

/* Contenido principal */
.main-content {
  flex-grow: 1;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
}

.tab-content {
  color: #444;
  font-size: 1rem;
  min-height: 100%;
}
</style>
