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
        <!-- <ClientOnly>
            <div class="w-full h-full bg-white overflow-hidden rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
                <YandexMap :coordinates="[55.726407, 37.399455]" :zoom="17">
                    <YandexMarker :coordinates="[55.726407, 37.399455]" :marker-id="12345">
                        <template #component>
                            <div class="flex flex-col h-fit gap-2">
                                <p class="font-medium text-lg">Офис</p>
                                <p>г. Москва, муниципальный округ Можайский вн.тер.г., ул. Горбунова, д. 2, стр. 3, помещение 55/3</p>
                            </div>
                        </template>
                    </YandexMarker>
                </YandexMap>
            </div>
        </ClientOnly> -->
    </div>
</template>

<script setup>
    /* import { yandexMap, yandexMarker } from 'vue-yandex-maps' */
</script>

<!-- <style>
    .yandex-container {
        height: 400px;
    }
    .yandex-balloon {
        height: 100px;
        width: 275px;
    }
</style> -->