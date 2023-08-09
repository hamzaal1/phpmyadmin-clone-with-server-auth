<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Aside from './components/Aside.vue'
</script>

<template>
  <main
    id="page-container"
    class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
  >
    <Aside v-if="$route.name !=='home'" />
    <RouterView />
  </main>
</template>

<style scoped>
</style>
