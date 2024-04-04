<template>
    <div class="col-span-full w-full max-sm:px-[15px] max-lg:px-[20px] lg:w-[90%] lg:mx-auto">
        <div class="w-full flex px-5 md:px-16 2xl:px-[194px] relative text-white bg-[url(/images/nutrition/bg.png)] py-10 bg-cover lg:bg-right max-lg:text-center min-h-[160px] rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <div class="flex flex-col w-full h-full gap-5 z-[1] max-lg:self-center max-lg:items-center relative">
                <div>
                    <NuxtLink to="/">Главная</NuxtLink>
                    /
                    Питание
                </div>
                <p class="text-4xl md:text-5xl xl:text-6xl Goma">Питание</p>           
                <p class="max-lg:hidden text-lg max-w-[1139px]">«Предлагаем вам детское меню, которое специально разработано с учетом важности правильного питания для растущих организмов.</p>
                <p class="max-lg:hidden text-lg max-w-[1139px]">Питание играет огромную роль в нашей жизни. Оно является источником энергии и питательных веществ, которые помогают нам расти и развиваться. Возможно, вы уже заметили, что, когда вы едите здоровую пищу, ваше тело чувствует себя сильным и полным энергии.</p>
                <p class="max-lg:hidden text-lg max-w-[1139px]">В нашем детском меню мы предлагаем разнообразные и полезные блюда, которые помогут вам быть активными и здоровыми. </p>
            </div>
            <div class="absolute top-0 left-0 h-full w-full bg-black/30"></div>
        </div>
    </div>
    <div class="flex flex-col gap-4 text-sm md:text-base lg:hidden -mt-10">
        <p>«Предлагаем вам детское меню, которое специально разработано с учетом важности правильного питания для растущих организмов.</p>
        <p>Питание играет огромную роль в нашей жизни. Оно является источником энергии и питательных веществ, которые помогают нам расти и развиваться. Возможно, вы уже заметили, что, когда вы едите здоровую пищу, ваше тело чувствует себя сильным и полным энергии.</p>
        <p>Отличное питание - залог здоровья и счастья. Мы надеемся, что наше детское меню поможет вам развиваться, быть сильными и активными. Приятного аппетита!»</p>
    </div>
    <div class="flex flex-col gap-4 md:gap-8 xl:gap-10 -mt-5 md:-mt-10 xl:-mt-14">
        <div class="flex items-center gap-4 md:gap-8 xl:gap-10 max-lg:flex-col">
            <div class="w-full lg:w-[35%] flex flex-col py-10 xl:py-12 px-20 items-center text-center gap-7 xl:gap-9 bg-[#D4E4DA] rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
                <p class="text-lg md:text-xl xl:text-2xl Goma">С 7:00 до 19:00</p>
                <img src="/images/nutrition/clock.png" alt="">
            </div>
            <div class="w-full lg:w-[65%] lg:h-full flex flex-col gap-7 md:gap-14 xl:gap-20 py-10 xl:py-12 px-10 md:px-12 xl:px-16 items-center text-center bg-[#D4E4DA] rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
                <p class="text-lg md:text-xl xl:text-2xl Goma">Длительность дня</p>
                <div class="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-5 xl:gap-6 font-bold text-2xl">
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] flex items-center justify-center">пн</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] flex items-center justify-center">вт</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] flex items-center justify-center">ср</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] flex items-center justify-center">чт</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] flex items-center justify-center">пт</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] bg-[#869D8B] text-white flex items-center justify-center">сб</button>
                    <button class="w-20 h-20 rounded-[20px] border-[3px] border-[#869D8B] bg-[#869D8B] text-white flex items-center justify-center">вс</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>