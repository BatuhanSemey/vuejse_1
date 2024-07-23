<script setup>
</script>

<template>
    <section class="flex justify-center">
        <div class="w-11/12 flex items-center gap-4 mt-4 mb-4">
            <router-link to="/">
                <div class="bookmark__icon relative border border-slate-300 rounded-lg">
                    <img class="absolute" src="/public/arrow-left.svg" alt="" />
                </div>
            </router-link>
            <h1 class="text-3xl font-bold">Мои Закладки</h1>
        </div>
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