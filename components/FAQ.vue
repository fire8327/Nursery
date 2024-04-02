<template>
    <div class="flex flex-col gap-7 xl:gap-7">
        <p class="Goma text-2xl xl:text-3xl">Вопрос-ответ</p>
        <div class="flex flex-col gap-4 xl:gap-5">
            <Question v-for="n in 5"></Question>
        </div>
    </div>
</template>

<script setup>

</script>