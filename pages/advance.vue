<template>
    <div class="col-span-full w-full max-sm:px-[15px] max-lg:px-[20px] lg:w-[90%] lg:mx-auto">
        <div class="w-full flex px-5 md:px-16 2xl:px-[194px] relative text-white bg-[url(/images/advance/bg-mobile.png)] lg:bg-[url(/images/advance/bg-desktop.png)] py-10 bg-cover lg:bg-right max-lg:text-center min-h-[205px] rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <div class="flex flex-col w-full h-full gap-5 z-[1] max-lg:self-center max-lg:items-center relative">
                <div>
                    <NuxtLink to="/">Главная</NuxtLink>
                    /
                    Наши успехи
                </div>
                <p class="text-4xl md:text-5xl xl:text-6xl Goma">Наши успехи</p>                 
                <p class="max-lg:hidden text-lg max-w-[1026px]">Добро пожаловать на страницу достижений детей в нашем детском саду!</p>
                <p class="max-lg:hidden text-lg max-w-[1026px]">В нашем детском саду мы гордимся каждым ребенком и всеми их достижениями. У нас создана атмосфера, которая позволяет каждому ребенку раскрыть свой потенциал и добиться успехов в разных областях.</p>
                <p class="max-lg:hidden text-lg max-w-[1026px]">Наши дети активно развиваются и учатся новому, по маленьким шажочкам, но каждый такой шаг — это огромный успех их труда. </p>
                <p class="max-lg:hidden text-lg max-w-[1026px]">На этой странице мы будем публиковать достижения наших детей, чтобы поделиться радостью и гордостью с вами. Вы сможете увидеть фотографии о наших конкурсах и достижениях. Мы уверены, что вас порадуют успехи наших талантливых и трудолюбивых детей!</p>
                <p class="max-lg:hidden text-lg max-w-[1026px]">Приходите на нашу страницу достижений чаще, чтобы быть в курсе всех наших новостей и успехов! Мы рады делиться радостью и достижениями наших маленьких звездочек с вами!</p>
            </div>
            <div class="absolute top-0 left-0 h-full w-full bg-black/30"></div>
        </div>
    </div>
    <div class="flex flex-col gap-4 text-sm md:text-base lg:hidden -mt-10">
        <p>Добро пожаловать на страницу достижений детей в нашем детском саду!</p>
        <p>В нашем детском саду мы гордимся каждым ребенком и всеми их достижениями. У нас создана атмосфера, которая позволяет каждому ребенку раскрыть свой потенциал и добиться успехов в разных областях.</p>
        <p>Наши дети активно развиваются и учатся новому, по маленьким шажочкам, но каждый такой шаг — это огромный успех их труда. </p>
        <p>На этой странице мы будем публиковать достижения наших детей, чтобы поделиться радостью и гордостью с вами. Вы сможете увидеть фотографии о наших конкурсах и достижениях. Мы уверены, что вас порадуют успехи наших талантливых и трудолюбивых детей!</p>
        <p>Приходите на нашу страницу достижений чаще, чтобы быть в курсе всех наших новостей и успехов! Мы рады делиться радостью и достижениями наших маленьких звездочек с вами!</p>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10">
        <p class="Goma text-2xl xl:text-3xl text-[#869D8B]">Грамоты</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-[#869D8B] text-lg md:text-xl xl:text-2xl font-bold text-center">
            <div class="flex flex-col gap-5 items-center" v-for="dimplom in dimploma">
                <img :src="dimplom.img" alt="" class="rounded-xl">
                <p>{{ dimplom.title }}</p>
            </div>  
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10 text-[#B89574] font-bold">
        <p class="Goma text-2xl xl:text-3xl">Наше творчество</p>
        <Swiper :space-between="20" :loop="true" :modules="[SwiperAutoplay]" :autoplay="{delay: 3500}"       
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
            <SwiperSlide class="!flex flex-col gap-5 items-center text-center" v-for="creative in creativity">
                <img :src="creative.img" alt="" class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
                <p class="text-lg md:text-xl xl:text-2xl">{{ creative.title }}</p>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10">
        <p class="Goma text-2xl xl:text-3xl text-[#E9556D]">Наши успехи</p>
        <Swiper :space-between="20" :loop="true" :modules="[SwiperAutoplay]" :autoplay="{delay: 3500}"       
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
            <SwiperSlide class="!flex flex-col gap-5 items-center text-center text-lg md:text-xl xl:text-2xl" v-for="s in success">
                <img :src="s.img" alt="" class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
                <p class="font-bold text-[#E9556D]">{{ s.title }}</p>
                <p>{{ s.desc }}</p>
            </SwiperSlide>
        </Swiper>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-lg md:text-xl xl:text-2xl text-center">
            <div class="flex flex-col gap-5 items-center">
            </div>      
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10">
        <p class="Goma text-2xl xl:text-3xl">Вопрос-ответ</p>
        <div class="flex flex-col gap-4 xl:gap-5">
            <Question v-for="FAQ in FAQs" v-bind="FAQ"></Question>
        </div>
    </div>
    <Feedback></Feedback>
    <Contacts></Contacts>
</template>

<script setup>
    /* список вопросов */
    const supabase = useSupabaseClient() 
    const { data:FAQs, error:errorFAQs } = await supabase.from('FAQ').select('*').eq('page', '5')
    
    /* запрос к БД */
    const { data, error } = await supabase.from('advance').select('*')
    /* грамоты */
    const dimploma = ref()
    dimploma.value = data.filter(el => {
        return el.type == "Грамоты" 
    })
    /* творчество */
    const creativity = ref()
    creativity.value = data.filter(el => {
        return el.type == "Творчество" 
    })
    /* успехи */
    const success = ref()
    success.value = data.filter(el => {
        return el.type == "Успехи" 
    })
</script>
