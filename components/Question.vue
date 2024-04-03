<template>
    <div class="rounded-[30px] md:rounded-[45px] xl:rounded-[60px] flex flex-col px-5 md:px-8 xl:px-14 py-10 bg-[#F2E4D7] overflow-hidden">
        <button @click="isQuestionShow = !isQuestionShow" class="flex items-center justify-between">
            <span class="font-bold text-lg xl:text-xl">{{ props.question }}</span>
            <img src="/images/questions/arrow.png" alt="" class="transition-all duration-500" :class="{'rotate-180' : isQuestionShow}">
        </button>
        <p class="text-sm md:text-base xl:text-lg transition-all duration-500 overflow-hidden" :class="isQuestionShow ? 'h-fit mt-4' : 'h-0 -translate-y-full'">{{ props.answer }}</p>
    </div>
</template>

<script setup>
    /* показ вопроса */
    const isQuestionShow = ref(false)

    /* пропсы для подгрузки данных */
    const props = defineProps({
        question: String,
        answer: String
    }) 
</script>