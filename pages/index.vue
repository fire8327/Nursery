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
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service1.jpg" alt="">
        </SwiperSlide>
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service2.jpg" alt="">
        </SwiperSlide>
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service3.jpg" alt="">
        </SwiperSlide>
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service4.jpg" alt="">
        </SwiperSlide>
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service5.jpg" alt="">
        </SwiperSlide>
        <SwiperSlide class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <img src="/images/services/service6.jpg" alt="">
        </SwiperSlide>
    </Swiper>
    <div class="flex flex-col gap-7 xl:gap-7">
        <div class="flex max-lg:flex-col lg:items-center lg:justify-between gap-7">
            <p class="Goma text-2xl xl:text-3xl lg:w-3/5 break-words"><span class="text-[#E9556D]">Дополнительные</span> образовательные услуги</p>
            <NuxtLink to="/" class="flex items-center gap-4 text-sm md:text-base xl:text-lg">
                <span>Перейти ко всем услугам</span>
                <img src="/images/services/arrow.png" alt="">
            </NuxtLink>
        </div>
        <div class="flex max-md:flex-col gap-4 md:gap-7 xl:gap-10">
            <div class="flex max-lg:flex-col gap-7 px-5 md:px-7 xl:px-9 py-10 lg:py-9 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#FED3DA]">
                <div class="flex flex-col gap-7 xl:gap-8 lg:py-10 xl:py-14 lg:w-[65%] lg:grow">
                    <p class="text-xl md:text-2xl xl:text-4xl font-bold">Дополнительные образовательные услуги</p>
                    <p class="text-sm md:text-base xl:text-lg">8 сентября мы отмечаем свой сказочный день рождения. Спасибо всем, кто разделил с нами этот праздник.</p>
                    <button class="bg-white text-[#E9556D] text-lg font-bold py-4 text-center max-md:w-full md:px-14 rounded-[15px] xl:rounded-[20px] lg:mt-auto">Узнать подробнее</button>
                </div>
                <img src="/images/services/1.png" alt="" class="rounded-[15px] md:rounded-[25px] xl:rounded-[40px] lg:w-[35%] max-lg:aspect-video max-lg:object-cover max-lg:object-center">
            </div>
            <div class="flex max-lg:flex-col gap-7 px-5 md:px-7 xl:px-9 py-10 lg:py-9 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#D4E4DA]">
                <div class="flex flex-col gap-7 xl:gap-8 lg:py-10 xl:py-14 lg:w-[65%] lg:grow">
                    <p class="text-xl md:text-2xl xl:text-4xl font-bold">Дополнительные образовательные услуги</p>
                    <p class="text-sm md:text-base xl:text-lg">8 сентября мы отмечаем свой сказочный день рождения. Спасибо всем, кто разделил с нами этот праздник.</p>
                    <button class="bg-white text-[#7BA58A] text-lg font-bold py-4 text-center max-md:w-full md:px-14 rounded-[15px] xl:rounded-[20px] lg:mt-auto">Узнать подробнее</button>
                </div>
                <img src="/images/services/2.png" alt="" class="rounded-[15px] md:rounded-[25px] xl:rounded-[40px] lg:w-[35%] max-lg:aspect-video max-lg:object-cover max-lg:object-center">
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
    /* список вопросов */
    const FAQs = [
        {
            question: "Какие игры и игрушки наиболее подходят для детей?",
            answer: "Рекомендуется выбирать игры, которые способствуют развитию моторики, координации и логического мышления. Это могут быть конструкторы, головоломки, игры с пазлами, мягкие игрушки для развития тактильных ощущений. Также важно предоставить ребенку доступ к книгам и рисованию, чтобы развивать его творческие навыки."
        },
        {
            question: "Как организовать у малыша режим дня?",
            answer: "Для этого возраста важно установить стабильный режим дня, который включает время для игр, еды, сна и обучения. Рекомендуется составить расписание, чтобы дети знали, что ожидать. Важно также предоставлять им время на самостоятельные игры и развитие своих интересов."
        },
        {
            question: "Как помочь детям развивать речь?",
            answer: "Разговаривайте с ребенком много, задавайте ему вопросы и поддерживайте диалог. Читайте книги вместе, рассказывайте сказки и показывайте картинки. Важно также играть в слова и учить новые слова в повседневной жизни. Позволяйте ребенку выражать свои мысли и идеи, а также активно слушайте его."
        },
        {
            question: "Как развивать социальные навыки у ребенка?",
            answer: "Предоставляйте ребенку возможность играть с другими детьми, например, в детском саду или на игровой площадке. Учите его правилам взаимодействия, как делиться игрушками и уважать пространство других. Учите своего ребенка эмоциям и эмпатии, помогайте ему понимать и выражать свои чувства, а также проявлять заботу о других."
        },
        {
            question: "Как развивать физическую активность у детей?",
            answer: "Предоставьте ребенку возможность заниматься спортом и физическими упражнениями, такими как прыжки, бег, мячи, велосипеды и игры на свежем воздухе. Поощряйте его активность и учите правилам безопасности во время игр."
        },
        {
            question: "Как развивать самостоятельность у ребенка?",
            answer: "Учите ребенка самому одеваться, мыться и одевать игрушки или куклы. Предоставляйте ему возможность делать выборы и принимать небольшие решения самостоятельно. Также поощряйте его при самостоятельном выполнении задач и давайте положительные оценки."
        }
    ]

    /* получение данных из БД */
    const supabase = useSupabaseClient() 
    const { data:cards, error:errorCards } = await supabase.from('news').select('*').order('id', { ascending: true })
</script>