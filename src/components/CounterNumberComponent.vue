<template>
    <div>
        <h2>Счетчик</h2>
        <h3 :style="{ color: countColor }">{{ count }}</h3>
        <button @click="increment">Прибавить 1</button>
        <button @click="decrement">Убавить на 1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    computed: {
        countColor() {
            return this.count < 0 ? 'black' : 'yellow'
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    background-color: aquamarine;
    color: white;
    gap: 10px;
}
</style>