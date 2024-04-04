<template>
    <div class="col-span-full w-full px-[15px] sm:px-[20px] lg:w-[90%] lg:mx-auto">
        <div class="w-full bg-[url(/images/hero/bg.png)] px-6 flex flex-col items-center justify-center bg-cover text-center h-[465px] md:h-[660px] xl:[860px] rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <div class="flex flex-col gap-2.5 md:gap-4 xl:gap-6 text-white">
                <p class="text-4xl md:text-5xl xl:text-6xl Goma">Детский сад номер 348!</p>
                <p class="text-lg md:text-xl xl:text-2xl font-semibold lg:w-3/5 lg:mx-auto">Мы рады видеть вас на нашем сайте, где вы сможете получить полную информацию о нашем учебном заведении.</p>
            </div>
        </div>
    </div>
    <div class="flex items-center max-lg:flex-col gap-5 md:gap-9 xl:gap-14 -mt-5 md:-mt-10 xl:-mt-14">
        <div class="flex flex-col gap-7 xl:gap-10 lg:w-[48%]">
            <p class="Goma text-2xl xl:text-3xl"><span class="text-[#869D8B]">Дорогие родители!</span> Приветствуем вас на нашем сайте детского сада номер 348!</p>
            <div class="flex flex-col gap-2 text-sm md:text-base xl:text-lg">
                <p>Мы стремимся создать комфортную и безопасную образовательную среду, где ваш ребенок сможет раскрыть свой потенциал, развить навыки и умения, а также найти настоящих друзей.</p>
                <p>Благодарим вас за доверие и выбор нашего учебного заведения! Мы будем делать все возможное, чтобы ваш ребенок получил самые лучшие воспоминания и уверенно начал свой жизненный путь.»</p>
            </div>
        </div>
        <img src="/images/hero/welcome.png" alt="" class="lg:w-[52%] rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
    </div>
    <Swiper :space-between="20" :loop="true" :modules="[SwiperPagination, SwiperAutoplay]" :pagination="{clickable: true}" :autoplay="{delay: 3500}"       
        :breakpoints="
        {
            320: {
                'slidesPerView': 1
            },
            768: {
                'slidesPerView': 2
            },
            1024: {
                'slidesPerView': 3
            }
        }" class="w-full">
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden" v-for="slide in slides">
            <img :src="slide.img" alt="">
        </SwiperSlide>
    </Swiper>
    <div class="flex flex-col gap-7 xl:gap-7">
        <div class="flex max-lg:flex-col lg:items-center lg:justify-between gap-7">
            <p class="Goma text-2xl xl:text-3xl lg:w-3/5 break-words"><span class="text-[#E9556D]">Дополнительные</span> образовательные услуги</p>
            <NuxtLink to="/services" class="flex items-center gap-4 text-sm md:text-base xl:text-lg">
                <span>Перейти ко всем услугам</span>
                <img src="/images/services/arrow.png" alt="">
            </NuxtLink>
        </div>
        <div class="flex max-lg:flex-col gap-4 md:gap-7 xl:gap-10">
            <div class="flex flex-col gap-7 px-5 md:px-7 xl:px-9 py-10 lg:py-9 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#FED3DA] lg:w-1/2">
                <div class="flex flex-col gap-7 xl:gap-8 lg:py-10 xl:py-14 lg:w-[65%] lg:grow">
                    <p class="text-xl md:text-2xl xl:text-4xl font-bold">Детская гимнастика</p>
                    <p class="text-sm md:text-base xl:text-lg">Улучшение сосредоточенности: гимнастика требует концентрации внимания, умения слушать инструктора и выполнять задания.</p>
                    <NuxtLink to="/services" class="bg-white text-[#E9556D] text-lg font-bold py-4 text-center max-md:w-full md:px-14 rounded-[15px] xl:rounded-[20px] lg:mt-auto">Узнать подробнее</NuxtLink>
                </div>
                <img src="/images/services/gymnastic1.png" alt="" class="rounded-[15px] md:rounded-[25px] xl:rounded-[40px] aspect-video object-cover object-center">
            </div>
            <div class="flex flex-col gap-7 px-5 md:px-7 xl:px-9 py-10 lg:py-9 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#D4E4DA] lg:w-1/2">
                <div class="flex flex-col gap-7 xl:gap-8 lg:py-10 xl:py-14 lg:w-[65%] lg:grow">
                    <p class="text-xl md:text-2xl xl:text-4xl font-bold">Психолог</p>
                    <p class="text-sm md:text-base xl:text-lg">Развитие эмоционального интеллекта: занятия с психологом помогают детям развивать навыки работы с эмоциями, улучшают их эмоциональное состояние и психическое благополучие.</p>
                    <NuxtLink to="/services" class="bg-white text-[#7BA58A] text-lg font-bold py-4 text-center max-md:w-full md:px-14 rounded-[15px] xl:rounded-[20px] lg:mt-auto">Узнать подробнее</NuxtLink>
                </div>
                <img src="/images/services/psych1.jpeg" alt="" class="rounded-[15px] md:rounded-[25px] xl:rounded-[40px] aspect-video object-cover object-center">
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-7">
        <div class="flex max-lg:flex-col lg:items-center lg:justify-between gap-7">
            <p class="Goma text-2xl xl:text-3xl lg:w-2/5">Последние <span class="text-[#E9556D]">новости</span> и <span class="text-[#7BA58A]">объявления</span></p>
            <NuxtLink to="/news" class="flex items-center gap-4 text-sm md:text-base xl:text-lg">
                <span>Перейти ко всем новостям и объявлениями</span>
                <img src="/images/services/arrow.png" alt="">
            </NuxtLink>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7 xl:gap-10">
            <NewsCard v-for="card in cards.reverse().slice(0,3)" v-bind="card"></NewsCard>
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-7">
        <p class="Goma text-2xl xl:text-3xl">Вопрос-ответ</p>
        <div class="flex flex-col gap-4 xl:gap-5">
            <Question v-for="FAQ in FAQs" v-bind="FAQ"></Question>
        </div>
    </div>
    <Feedback></Feedback>
    <Contacts></Contacts>
</template>

<script setup>
    /* получение данных из БД */
    const supabase = useSupabaseClient() 
    const { data:cards, error:errorCards } = await supabase.from('news').select('*').order('id', { ascending: true })

    /* список вопросов */
    const { data:FAQs, error:errorFAQs } = await supabase.from('FAQ').select('*').eq('page', '1')    

    /* фотографии для слайдера */
    const { data:slides, error:errorЫlides } = await supabase.from('mainSlider').select('*')
</script>