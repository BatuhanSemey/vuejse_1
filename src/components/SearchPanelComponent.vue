<template>
    <section class="flex flex-col items-center">
        <div class="w-11/12">
            <div class="mt-8 flex items-center justify-between">
                <h1 class="text-3xl font-bold">Все кроссовки</h1>
                <div class="flex items-center gap-2">
                    <select class="border border-gray-200 outline-none rounded-md py-2 px-2">
                        <option value="">По названию</option>
                        <option value="">По возрастанию</option>
                        <option value="">По убыванию</option>
                    </select>
                    <div class="search flex items-center justify-evenly w-64 h-11 rounded-xl">
                        <img src="/search.svg" alt="" />
                        <input class="outline-none" type="text" placeholder="Поиск..." />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style>
.search {
    border: 1px solid #f3f3f3;
}
</style>