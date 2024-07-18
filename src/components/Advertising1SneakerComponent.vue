<template>
    <section class="flex items-center justify-center relative">
        <div class="main__div flex items-center w-11/12 rounded-3xl overflow-hidden h-full">
            <div class="block_content relative flex">
                <img class="logo absolute left-5" src="/adidas.png" alt="" />
                <div class="flex items-center justify-center flex-col px-20 gap-5">
                    <h1 class="text-4xl font-bold"><span>Batuhan</span>, Forever!</h1>
                    <button class="w-44 h-11 text-white">Купить</button>
                </div>
            </div>
            <div>
                <img src="/легушка.png" alt="" />
            </div>
        </div>
        <div class="rec absolute right-9 hover:cursor-pointer">
            <div class="relative bg-white">
                <img class="absolute" src="/arrow-right.svg" alt="" />
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style>
button {
    border-radius: 110px;
    background-color: #a5d364;
}
.main__div {
    background-color: #f4efe9;
}

.block_content {
    height: 300px;
}

span {
    color: #8bb43c;
}

.logo {
    width: 99px;
    height: 40px;
}
.rec div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
.rec img {
    position: absolute;
    top: 11px;
    left: 14px;
}
</style>