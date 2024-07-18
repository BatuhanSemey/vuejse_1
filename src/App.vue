<script setup>
import Header from './components/HeaderComponent.vue'
import Advertising from './components/Advertising1SneakerComponent.vue'
import Cards from './components/CardsItemsComponent.vue'
import Drawer from './components/DrawerComponent.vue'
import axios from 'axios'

import { onMounted, ref, watch, provide } from 'vue'

const isVisible = ref(false)

const openDrawer = () => {
    isVisible.value = true
}

const closeDrawer = () => {
    isVisible.value = false
}

const items = ref([])
const sortBy = ref('')
const searchText = ref('')

const fetchItems = async (params = {}) => {
    try {
        const { data } = await axios.get('https://d3c39574bbd13030.mokky.dev/sneakers', { params })
        items.value = data.map((obj) => ({
            ...obj,
            isAdded: false,
            isFavourite: false
        }))
    } catch (error) {
        console.error(error)
    }
}

const fetchFavourites = async () => {
    try {
        const { data: favorites } = await axios.get('https://d3c39574bbd13030.mokky.dev/favorites')
        items.value = items.value.map((item) => {
            const favorite = favorites.find((fav) => fav.sneakerId === item.id)
            return favorite ? { ...item, isFavourite: true } : item
        })
    } catch (error) {
        console.error(error)
    }
}

const postFavorite = async (id) => {
    const updatedItems = await Promise.all(
        items.value.map(async (item) => {
            if (item.id === id) {
                const { data } = await axios.get(`https://d3c39574bbd13030.mokky.dev/favorites`)
                const favorite = data.find((fav) => fav.sneakerId === item.id)

                if (item.isFavourite) {
                    await axios.delete(
                        `https://d3c39574bbd13030.mokky.dev/favorites/${favorite.id}`
                    )
                } else {
                    const obj = { sneakerId: item.id }
                    await axios.post(`https://d3c39574bbd13030.mokky.dev/favorites`, obj)
                }

                return {
                    ...item,
                    isFavourite: !item.isFavourite
                }
            }
            return item
        })
    )

    items.value = updatedItems
}

provide('postFavorite', postFavorite)

onMounted(async () => {
    await fetchItems()
    await fetchFavourites()
})

watch(sortBy, async () => {
    await fetchItems({ sortBy: sortBy.value })
})

watch(searchText, async () => {
    await fetchItems({ title: searchText.value })
})

const getSort = (event) => {
    sortBy.value = event.target.value
}

const getSearch = (event) => {
    searchText.value = event.target.value
}
</script>

<template>
    <div class="main w-4/5 m-auto h-screen bg-white rounded-xl shadow-xl mt-14">
        <Header :openDrawer="openDrawer" />
        <Advertising />
        <section class="flex flex-col items-center">
            <div class="w-11/12">
                <div class="mt-8 flex items-center justify-between">
                    <h1 class="text-3xl font-bold">Все кроссовки</h1>
                    <div class="flex items-center gap-2">
                        <select
                            @change="getSort"
                            class="border border-gray-200 outline-none rounded-md py-2 px-2"
                        >
                            <option value="name">По названию</option>
                            <option value="price">По возрастанию</option>
                            <option value="-price">По убыванию</option>
                        </select>
                        <div class="search flex items-center justify-evenly w-64 h-11 rounded-xl">
                            <img src="/search.svg" alt="" />
                            <input
                                @change="getSearch"
                                class="outline-none"
                                type="text"
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Cards :items="items" :addclickFavorite="postFavorite" />
        <Drawer :isVisible="isVisible" :closeDrawer="closeDrawer" />
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