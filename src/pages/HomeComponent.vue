<template>
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
    <Cards :items="items" @addFavorite="addFavorite" :clickInDrawer="addInDrawer" />
</template>

<script setup>
import { onMounted, ref, watch, provide } from 'vue'
import axios from 'axios'
import Cards from '../components/CardsItemsComponent.vue'
import Advertising from '../components/Advertising1SneakerComponent.vue'

const items = ref([])
const sortBy = ref('')
const searchText = ref('')

const fetchItems = async (params = {}) => {
    try {
        const { data } = await axios.get('https://d3c39574bbd13030.mokky.dev/sneakers', { params })
        items.value = data.map((obj) => ({
            ...obj,
            isAdded: false,
            isFavorite: false
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
            return favorite ? { ...item, isFavorite: true, favoriteId: favorite.id } : item
        })
    } catch (error) {
        console.error(error)
    }
}

const addFavorite = async (item) => {
    try {
        if (!item.isFavorite) {
            const obj = { sneakerId: item.id }
            const { data } = await axios.post('https://d3c39574bbd13030.mokky.dev/favorites', obj)
            item.isFavorite = true
            item.favoriteId = data.id
            console.log(item)
        } else {
            await axios.delete(`https://d3c39574bbd13030.mokky.dev/favorites/${item.favoriteId}`)
            item.isFavorite = false
        }
    } catch (error) {
        console.log(error)
    }
}

const addInDrawer = async (id) => {
    console.log(id)
    const updateItems = await Promise.all(
        items.value.map(async (item) => {
            if (item.id === id) {
                const { data } = await axios.get(`https://d3c39574bbd13030.mokky.dev/drawer`)
                const drawerSneaker = data.find((drawerS) => drawerS.sneakerId === item.id)

                if (item.isAdded) {
                    await axios.delete(
                        `https://d3c39574bbd13030.mokky.dev/drawer/${drawerSneaker.id}`
                    )
                } else {
                    const obj = { sneakerId: item.id }
                    await axios.post(`https://d3c39574bbd13030.mokky.dev/drawer`, obj)
                    alert('Добавлено')
                }

                return {
                    ...item,
                    isAdded: !item.isAdded
                }
            }
            return item
        })
    )
    items.value = updateItems
}

provide('addInDrawer', addInDrawer)

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
