<template>
    <div class="col-span-full w-full max-sm:px-[15px] max-lg:px-[20px] lg:w-[90%] lg:mx-auto">
        <div class="w-full flex px-4 md:px-16 2xl:px-[194px] relative text-white bg-[url(/images/news/bg-mobile.png)] lg:bg-[url(/images/news/bg-desktop.png)] py-10 bg-cover lg:bg-right max-lg:text-center min-h-[205px] md:min-h-[375px] xl:min-h-[560px] rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <div class="flex flex-col w-full h-full gap-5 z-[1] max-lg:self-center max-lg:items-center relative">
                <div class="flex items-center gap-1">
                    <NuxtLink to="/">Главная</NuxtLink>
                    <p>/</p>
                    <p>Объявления и Новости</p>
                </div>
                <p class="text-4xl md:text-5xl xl:text-6xl Goma max-w-[690px]">Объявления и новости</p>           
                <p class="max-lg:hidden text-lg max-w-[907px]">Дорогие родители! Мы рады приветствовать вас на странице объявлений нашего детского садика. Здесь вы можете найти все самые актуальные и важные новости, касающиеся группы вашего ребенка. Мы призываем вас посещать этот раздел регулярно и следить за обновлениями.</p>
                <p class="max-lg:hidden text-lg max-w-[907px]">Здесь мы регулярно делаем объявления о предстоящих мероприятиях, таких как праздники, конкурсы, профилактические мероприятия и о многих других вещах касающихся ваших деток. Также мы делаем публикации о важных изменениях в расписании, дополнительных занятиях и других важных событиях. Быть в курсе всех этих новостей — это идеальный способ быть активным участником жизни нашего детского садика, а также дать своему ребенку все возможности для развития и успеха.</p>
                <p class="max-lg:hidden text-lg max-w-[907px]">Наша цель заключается в том, чтобы у вас была максимальная информация и понимание того, что происходит в группе вашего ребенка. Это поможет вам быть более связанными с воспитателями, а также внести свой вклад в образовательный процесс. Ведь ваша поддержка и активное участие — это то, что важно для успеха каждого ребенка.</p>
            </div>
            <div class="absolute top-0 left-0 h-full w-full bg-black/30"></div>
        </div>
    </div>
    <div class="flex flex-col gap-4 text-sm md:text-base lg:hidden -mt-10">
        <p>Дорогие родители! Мы рады приветствовать вас на странице объявлений нашего детского садика. Здесь вы можете найти все самые актуальные и важные новости, касающиеся группы вашего ребенка. Мы призываем вас посещать этот раздел регулярно и следить за обновлениями.</p>
        <p>Здесь мы регулярно делаем объявления о предстоящих мероприятиях, таких как праздники, конкурсы, профилактические мероприятия и о многих других вещах касающихся ваших деток. Также мы делаем публикации о важных изменениях в расписании, дополнительных занятиях и других важных событиях. Быть в курсе всех этих новостей — это идеальный способ быть активным участником жизни нашего детского садика, а также дать своему ребенку все возможности для развития и успеха.</p>
        <p>Наша цель заключается в том, чтобы у вас была максимальная информация и понимание того, что происходит в группе вашего ребенка. Это поможет вам быть более связанными с воспитателями, а также внести свой вклад в образовательный процесс. Ведь ваша поддержка и активное участие — это то, что важно для успеха каждого ребенка.</p>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10 -mt-5 md:-mt-10 xl:-mt-14">
        <p class="Goma text-2xl xl:text-3xl text-[#E9556D]">Новости</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10">
            <NewsCard v-for="tiding in tidingss" v-bind="tiding"></NewsCard>
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-10 -mt-5 md:-mt-10 xl:-mt-14">
        <p class="Goma text-2xl xl:text-3xl text-[#869D8B]">объявления</p>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-5">
            <button @click="filterGroup(n)" class="rounded-[20px] py-4 w-full text-center text-lg md:text-xl xl:text-2xl text-[#869D8B] border border-[#869D8B]" v-for="n in 12">Группа {{ n }}</button>
        </div>
        <!-- <button class="" @click="addDB">Добавить в бд</button> -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10">
            <NewsCard v-for="announcement in announce" v-bind="announcement"></NewsCard>
        </div>
    </div>
</template>

<script setup>
    const supabase = useSupabaseClient() 
    const { data:tidings, error:errorTidings } = await supabase.from('news').select('*').eq('type','news')
    const { data:announcements, error:errorAnnouncements } = await supabase.from('news').select('*').eq('type','announcement')
    const announce = ref()
    announce.value = announcements.filter(el => {
        return el.group == 1
    })

    const filterGroup = (number) => {
        announce.value = announcements
        announce.value = announcements.filter(el => {
            return el.group == number
        })
    }
    /* const minDate = 1700162951394
    const maxDate = 1712162930098
    const addDB = async () => {     
        for (let index = 1; index < 7; index++) { 
            const { data, error } = await supabase
            .from('news')
            .insert([
                {
                    date: `${new Date(Math.floor(Math.random() * (maxDate - minDate) + minDate)).toLocaleDateString()}`,
                    type: 'announcement', 
                    title: 'Важное сообщение!', 
                    desc: 'Пожалуйста, не отправляйте больных детей в садик. Это способствует сохранению общего здоровья детей и предотвращению распространения инфекций.', 
                    group: `${Math.floor(Math.random() * (12 - 1) + 1)}`},
            ])
            .select()   
        }   
    } */
</script>