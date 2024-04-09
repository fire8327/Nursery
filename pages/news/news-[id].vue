<template>
    <div class="flex flex-col gap-7 xl:gap-10">
        <div class="flex flex-col gap-5 max-lg:items-center max-lg:text-center">
            <div>
                <NuxtLink to="/">Главная</NuxtLink>
                /
                <NuxtLink to="/news">Объявления и Новости</NuxtLink>
                /
                {{ card[0].title }}
            </div>
            <p class="text-2xl md:text-4xl xl:text-6xl Goma text-[#869D8B] break-words">{{ card[0].title }}</p>   
        </div>
        <p class="text-sm md:text-base xl:text-lg">{{ card[0].desc }}</p>
        <img :src="card[0].img" alt="" class="rounded-xl">
        <p class="text-sm text-[#B7B7B7]">Дата публикации - {{ card[0].date }}</p>
    </div>
    <Feedback></Feedback>
    <Contacts></Contacts>
</template>

<script setup>
    /* получение данных из БД */
    const route = useRoute()
    const supabase = useSupabaseClient() 
    const { data:card, error:errorCard } = await supabase.from('news').select('*').eq('id',`${route.params.id}`)
</script>