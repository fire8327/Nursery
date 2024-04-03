<template>
    <div class="flex flex-col gap-7 xl:gap-10">
        <div class="flex flex-col gap-5 max-lg:items-center max-lg:text-center">
            <div class="flex items-center gap-1">
                <NuxtLink to="/">Главная</NuxtLink>
                <p>/</p>
                <NuxtLink to="/news">Объявления и Новости</NuxtLink>
                <p>/</p>
                <p>{{ card[0].title }}</p>
            </div>
            <p class="text-4xl md:text-5xl xl:text-6xl Goma text-[#869D8B]">{{ card[0].title }}</p>   
        </div>
        <p class="text-sm md:text-base xl:text-lg">{{ card[0].desc }}</p>
        <img :src="card[0].img" alt="" class="rounded-xl">
        <p class="text-sm text-[#B7B7B7]">Дата публикации - {{ card[0].date }}</p>
    </div>
    <Feedback></Feedback>
    <Contacts></Contacts>
</template>

<script setup>
    const route = useRoute()
    const supabase = useSupabaseClient() 
    const { data:card, error:errorCard } = await supabase.from('news').select('*').eq('id',`${route.params.id}`)
</script>