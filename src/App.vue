<script setup>
import Header from './components/HeaderComponent.vue'
import Drawer from './components/DrawerComponent.vue'
import { ref } from 'vue'

const isVisible = ref(false)

const openDrawer = () => {
    isVisible.value = true
}

const closeDrawer = () => {
    isVisible.value = false
}
</script>

<template>
    <div class="main w-4/5 m-auto h-screen bg-white rounded-xl shadow-xl mt-14">
        <Header :openDrawer="openDrawer" />
        <Drawer :isVisible="isVisible" :closeDrawer="closeDrawer" />
        <router-view></router-view>
    </div>
</template>

<style scoped>
.main {
    height: 100%;
}
.search {
    border: 1px solid #f3f3f3;
}
</style>