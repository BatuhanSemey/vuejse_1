<template>
    <div class="flex items-center gap-3">
        <svg
            @click="closeDrawer"
            class="rotate-180 transition hover:rotate-0 cursor-pointer"
            width="13"
            height="13"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 7H14.7143"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <h2 class="font-bold text-xl">Корзина</h2>
    </div>
</template>

<script setup>
defineProps({
    closeDrawer: Function
})
</script>
