<template>
    <div class="flex flex-col gap-7 xl:gap-10">
        <p class="Goma text-2xl xl:text-3xl text-[#869D8B]">Контакты</p>    
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-9 xl:gap-12 w-full text-lg md:text-xl xl:text-2xl font-Nunito">
            <div class="flex items-start gap-4 xl:gap-5 h-fit">
                <img src="/images/contacts/1.png" alt="" class="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
                <p class="self-center">г. Волгоград, Советский район, ул.Казахская, 40</p>
            </div>
            <div class="flex items-start gap-4 xl:gap-5 h-fit">
                <img src="/images/contacts/2.png" alt="" class="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
                <div class="flex flex-col gap-3">
                    <NuxtLink to="tel:+7 (8442) 41-81-55">+7 (8442) 41-81-55 (приемная)</NuxtLink>
                    <NuxtLink to="tel:+7 (8442) 41-00-17">+7 (8442) 41-00-17 (заведующий МОУ Детским садом № 348)</NuxtLink>
                </div>
            </div>
            <div class="flex items-start gap-4 xl:gap-5 h-fit">
                <img src="/images/contacts/3.png" alt="" class="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
                <NuxtLink to="mailto:dou348@volgadmin.ru" class="self-center">dou348@volgadmin.ru</NuxtLink>
            </div>
            <div class="flex items-start gap-4 xl:gap-5 h-fit">
                <img src="/images/contacts/4.png" alt="" class="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
                <div class="flex flex-col gap-3">
                    <p><span class="font-bold text-[#869D8B]">Работчие дни:</span> пн-пт с 7.00 - 19.00 часов, </p>
                    <p><span class="font-bold text-[#869D8B]">Выходные дни:</span> суббота, воскресенье, праздничные дни. </p>
                    <p><span class="font-bold text-[#869D8B]">Часы приема граждан:</span> еженедельно по средам с 16.00 до 19.00 часов</p>
                </div>
            </div>
        </div>
        <div class="w-full overflow-hidden rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab426ac83db4767ddf192988a216929b5ae8a3641f4e35363219cb91b1493f103&amp;source=constructor" width="100%" height="425" frameborder="0"></iframe>
        </div>
    </div>
</template>