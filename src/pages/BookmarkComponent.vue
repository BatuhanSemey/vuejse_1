<script setup>
import axios from 'axios'
import CardList from '../components/CardsItemsComponent.vue'
import { onMounted, ref } from 'vue'

const items = ref([])

const fetchFavorites = async () => {
    try {
        const { data } = await axios.get('https://d3c39574bbd13030.mokky.dev/sneakers')
        const { data: favorites } = await axios.get('https://d3c39574bbd13030.mokky.dev/favorites')

        const favoritesData = data.filter((item) =>
            favorites.find((fav) => fav.sneakerId === item.id)
        )
        items.value = favoritesData.map((item) => ({
            ...item,
            isFavorite: true,
            favoriteId: favorites.find((fav) => fav.sneakerId === item.id).id
        }))
    } catch (error) {
        console.log(error)
    }
}

onMounted(fetchFavorites)
</script>

<template>
    <section class="flex justify-center flex-wrap">
        <div class="w-11/12 flex items-center gap-4 mt-4 mb-4">
            <router-link to="/">
                <div class="bookmark__icon relative border border-slate-300 rounded-lg">
                    <img class="absolute" src="/public/arrow-left.svg" alt="" />
                </div>
            </router-link>
            <h1 class="text-3xl font-bold">Мои Закладки</h1>
        </div>
        <CardList :items="items" />
    </section>
</template>

<style>
.bookmark__icon {
    width: 35px;
    height: 35px;
}

.bookmark__icon img {
    right: 14px;
    bottom: 10px;
}
.book {
    width: 80%;
}
</style>