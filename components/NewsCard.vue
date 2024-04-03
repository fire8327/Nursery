<template>
    <NuxtLink v-if="props.type == 'news'" :to="`news/news-${props.id}`" class="flex flex-col gap-5">
        <img :src="props.img" alt="" class="rounded-[30px] xl:rounded-[40px] object-cover object-top aspect-square border border-[#869D8B]/30">
        <span class="font-bold text-lg md:text-xl xl:text-2xl text-[#869D8B]">{{ props.title }}</span>
        <span class="text-sm md:text-base xl:text-lg">{{ props?.desc?.substring(0, 150) }}...</span>
        <span class="text-sm text-[#B7B7B7] -mt-3">{{ props.date }}</span>
    </NuxtLink>
    <div v-else class="flex flex-col gap-5">
        <span class="font-bold text-lg md:text-xl xl:text-2xl text-[#869D8B]">{{ props.title }}</span>
        <span class="text-sm md:text-base xl:text-lg">{{ props.desc }}</span>
        <span class="text-sm text-[#B7B7B7] -mt-3">{{ props.date }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: String,
        type: String,
        img: String,
        title: String,
        desc: String,
        date: String
    })
</script>