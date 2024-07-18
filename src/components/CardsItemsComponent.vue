<script setup>
import Card from './CardItemComponent.vue'

const onClickAdd = () => {
    alert('Добавлено')
}

defineProps({
    items: Array,
    addclickFavorite: Function
})
</script>

<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :image="item.imageUrl"
            :name="item.title"
            :price="item.price"
            :isAdded="item.isAdded"
            :isFavourite="item.isFavourite"
            :onClickAdd="onClickAdd"
            :onclickFavorite="addclickFavorite"
        />
    </div>
</template>

<style>
</style>
