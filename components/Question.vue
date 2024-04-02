<template>
    <div class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] flex flex-col px-5 md:px-8 xl:px-14 py-10 bg-[#F2E4D7] overflow-hidden">
        <div class="flex items-center justify-between">
            <p class="font-bold text-lg xl:text-xl">Вопрос</p>
            <button @click="isQuestionShow = !isQuestionShow" class="transition-all duration-500" :class="{'rotate-180' : isQuestionShow}">
                <img src="/images/questions/arrow.png" alt="">
            </button>
        </div>
        <p class="text-sm md:text-base xl:text-lg transition-all duration-500 overflow-hidden" :class="isQuestionShow ? 'h-fit mt-4' : 'h-0 -translate-y-full'">Соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач! Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности требует определения и уточнения </p>
    </div>
</template>

<script setup>
    const isQuestionShow = ref(false)
</script>