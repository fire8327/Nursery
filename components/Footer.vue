<template>
    <footer class="grid-container mt-14">
        <div class="flex flex-col items-center py-5 md:py-8 xl:py-10 gap-5 md:gap-8 xl:gap-10">
            <NuxtLink to="/" class="flex flex-col text-[#869D8B] Goma items-center">
                <span class="text-xs md:text-base xl:text-lg">Детский сад 348</span>
                <span class="text-[6px] md:text-[8px] xl:text-[10px]">Советского района Волгограда</span>
            </NuxtLink>
            <div class="flex items-center max-lg:flex-col gap-2 md:gap-6 xl:gap-9 w-fit font-Nunito text-sm md:text-base xl:text-lg">
                <NuxtLink to="/">Главная</NuxtLink>
                <NuxtLink to="/news">Объявления и Новости</NuxtLink>
                <NuxtLink to="/services">Доп. услуги</NuxtLink>
                <NuxtLink to="/nutrition">Питание</NuxtLink>
                <NuxtLink to="/advance">Наши успехи</NuxtLink>  
                <NuxtLink to="/admin">Админ панель</NuxtLink>  
            </div>
            <div class="w-full h-px bg-[#EEF0F3]"></div>
            <p class="text-sm md:text-lg xl:text-xl font-medium text-center">© 2024. Детский сад №348 Советского района Волгограда</p>
        </div>
    </footer>
</template>