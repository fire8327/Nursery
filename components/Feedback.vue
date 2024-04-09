<template>
    <div class="flex items-center max-lg:flex-col gap-7 md:gap-10 xl:gap-20 px-5 md:px-8 xl:px-16 py-10 xl:py-16 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#D4E4DA]">
        <div class="flex flex-col gap-2 lg:hidden">
            <p class="Goma text-[#869D8B] text-2xl">Узнать больше о нашем саде</p>
            <p class="text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время и ответим на все вопросы</p>
        </div>
        <img src="/images/feedback/main.png" alt="" class="rounded-[30px] lg:w-2/5">
        <FormKit @submit="feedback" type="form" form-class="flex flex-col gap-7" :actions="false">
            <div class="flex flex-col gap-5 max-lg:hidden">
                <p class="Goma text-[#869D8B] text-2xl">Узнать больше о нашем саде</p>
                <p class="text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время и ответим на все вопросы</p>
            </div>
            <div class="flex flex-col gap-6 xl:gap-4">
                <FormKit v-model="feedbackForm.name" type="text" name="Имя" validation="required|length:2|alpha" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Имя"/>
                <FormKit v-model="feedbackForm.phone" type="text" name="Телефон" validation="required|length:11" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Телефон"/>
                <FormKit v-model="feedbackForm.age" type="text" name="Возраст ребенка" validation="required|number" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Возраст ребенка"/>
                <FormKit type="checkbox" name="Согласие" validation="accepted" messages-class="text-[#E9556D] Goma text-xs mt-2" wrapper-class="flex items-center gap-4 cursor-pointer" input-class="hidden checkboxInput" icon-class="w-3 h-3 flex opacity-0" decorator-class="bg-white p-1 shrink-0 rounded-[5px] flex items-center justify-center w-5 h-5 checkboxIcon" label="Согласие на обработку персональных данных"/>                
                <FormKit type="submit" input-class="uppercase text-lg md:text-xl xl:text-2xl text-white bg-[#869D8B] rounded-[20px] w-full py-5 font-bold">Оставить заявку</FormKit>
            </div>
        </FormKit>
        <button type="button" @click="message.title = null" class="flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-white fixed top-10 right-10 z-[11] cursor-pointer" :class="message.type ? 'bg-[#869D8B]' : 'bg-[#E9556D]'" v-if="message.title">
            <span>{{message.title}}</span>
            <img src="/images/feedback/close.png" alt="" class="w-3.5 h-3.5">
        </button>	
    </div>
</template>

<script setup>
    /* отправка данных */
    const token = "6958853172:AAFXlcvSqaeM4x4jiApDSxGMKF0uW8JUaWY"
    const chatId = "-4178180856"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    const feedbackForm = ref({
        name: "",
        phone: "",
        age: ""
    })

    let message = ref({
        title: null, 
        type: true
    })

    const feedback = async() =>{
        let msg = "<b>Заявка на обратную связь</b>\n"
        + `<b>Имя:</b> ${feedbackForm.value.name}\n`
        + `<b>Телефон:</b> ${feedbackForm.value.phone}\n`
        + `<b>Возраст ребёнка:</b> ${feedbackForm.value.age}\n`
        const {data, error} = await useFetch(URL,{
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': msg
            },
            method:'post'
        })

        if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
        message.value.title = 'Успешная отправка!', message.value.type = true 
        feedbackForm.value.name = ""
        feedbackForm.value.phone = ""
        feedbackForm.value.age = ""
        setTimeout(() => {
            message.value.title = null
        }, 3000);
    }
</script>

<style>
    .checkboxInput:checked + .checkboxIcon > .formkit-icon {
       opacity: 100;
    }
</style>