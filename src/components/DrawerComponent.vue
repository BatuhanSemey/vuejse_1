<template>
    <div v-if="isVisible" class="fixed z-10 top-0 left-0 w-full h-full bg-black opacity-70"></div>
    <div v-if="isVisible" class="fixed z-20 top-0 right-0 bg-white w-96 h-full p-10">
        <HeaderCart v-if="items.length > 0" :closeDrawer="closeDrawer" />
        <div v-if="items.length > 0" class="grid gap-3 mt-3">
            <BasketSneakers
                v-for="item in items"
                :key="item.id"
                :image="item.imageUrl"
                :name="item.title"
                :price="item.price"
            />
        </div>
        <nullItems :closeDrawer="closeDrawer" v-else />
    </div>
</template>

<script setup>
import HeaderCart from './HeaderCart.vue'
import BasketSneakers from './BasketSneakersComponent.vue'
import nullItems from './nullDrawerItemsComponent.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'

const items = ref([])

const fetchDrawerComponents = async () => {
    try {
        const { data } = await axios.get('https://d3c39574bbd13030.mokky.dev/sneakers')
        const { data: drawers } = await axios.get('https://d3c39574bbd13030.mokky.dev/drawer')

        const drawersData = data.filter((item) =>
            drawers.find((draw) => draw.sneakerId === item.id)
        )
        items.value = drawersData
    } catch (error) {
        console.log(error)
    }
}

onMounted(fetchDrawerComponents)

const props = defineProps({
    isVisible: Boolean,
    closeDrawer: Function
})

watch(
    () => props.isVisible,
    (newVal) => {
        if (newVal) {
            fetchDrawerComponents()
        }
    }
)

// const emit = defineEmits(['update:totalPrice'])

// watch(
//     () => allPrice.value,
//     (newVal) => {
//         emit('update:totalPrice', newVal)
//     }
// )
</script>

<style>
</style>