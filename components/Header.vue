<template>
    <header class="w-full grid-container py-6 md:py-8 xl:py-11 font-Nunito relative">
        <div class="flex items-center justify-between gap-6">
            <NuxtLink to="/" class="flex flex-col text-[#869D8B] Goma items-center">
                <span class="text-xs md:text-base xl:text-lg">Детский сад 348</span>
                <span class="text-[6px] md:text-[8px] xl:text-[10px]">Советского района Волгограда</span>
            </NuxtLink>
            <div class="flex items-center gap-6 justify-between">
                <nav class="flex items-center gap-3 xl:gap-10 text-lg max-xl:bg-white max-xl:flex-col max-xl:absolute max-xl:left-0 max-xl:w-full max-xl:pb-5 max-xl:rounded-b-[20px] max-xl:z-[4] max-xl:transition-all max-xl:duration-500" :class="isMenuShow ? 'max-xl:top-full' : 'max-xl:top-0 max-xl:-translate-y-full'">
                    <NuxtLink to="/" class="max-xl:w-full max-xl:px-5 headerLink">Главная</NuxtLink>
                    <NuxtLink to="/a" class="max-xl:w-full max-xl:px-5 headerLink">Объявления и Новости</NuxtLink>
                    <NuxtLink to="/a" class="max-xl:w-full max-xl:px-5 headerLink">Доп. услуги</NuxtLink>
                    <NuxtLink to="/a" class="max-xl:w-full max-xl:px-5 headerLink">Питание</NuxtLink>
                    <NuxtLink to="/a" class="max-xl:w-full max-xl:px-5 headerLink">Наши успехи</NuxtLink>
                </nav>
                <div class="flex items-center gap-2.5 md:gap-3 xl:gap-5">
                    <NuxtLink to="tel:+7(8442)41-81-55">
                        <img src="/images/header/phone.png" alt="">
                    </NuxtLink>
                    <button @click="isFormShow = true" class="font-Raleway font-bold text-white text-xs lg:text-sm py-1.5 xl:py-2.5 px-2.5 xl:px-7 bg-[#869D8B] rounded-[10px]">записаться</button>
                    <button @click="isMenuShow = !isMenuShow" class="flex flex-col justify-between w-[25px] transition-[height] ease-linear duration-100 xl:hidden" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                        <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#869D8B] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                        <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-[#869D8B] rounded-[1px] transition-opacity ease-linear duration-500"></span>
                        <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#869D8B] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="fixed w-full h-screen top-[100px] left-0 bg-black/30 xl:hidden z-[3]" :class="{'hidden' : !isMenuShow}"></div>
        <div class="fixed w-full h-screen top-0 left-0 bg-black/30 flex items-center justify-center px-[15px] sm:px-[20px] z-[5]" :class="{'hidden' : !isFormShow}">
            <FormKit type="form" form-class="flex flex-col gap-5 w-full max-w-[430px] px-5 py-7 relative bg-[#D4E4DA] z-[1] rounded-[30px]" :actions="false">
                <button type="button" @click="isFormShow = false" class="absolute top-7 right-5 xl:right-7">
                    <img src="/images/feedback/close.png" alt="" class="w-5 h-5">
                </button>
                <p class="Goma text-[#869D8B] text-lg xl:text-xl text-center mt-10">Оставьте заявку и мы свяжемся с вами</p>
                <div class="flex flex-col gap-4 mt-2.5">
                    <FormKit type="text" name="Ваше имя" validation="required|length:2|alpha" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Ваше имя"/>
                    <FormKit type="text" name="Телефон" validation="required|length:11" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Телефон"/>
                    <FormKit type="text" name="Email" validation="required|email" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Email"/>
                    <FormKit type="textarea" name="Сообщение" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full h-[110px] resize-none" placeholder="Сообщение"/>
                </div>
                <FormKit type="checkbox" name="Согласие" validation="accepted" messages-class="text-[#E9556D] Goma text-xs mt-2" wrapper-class="flex items-center gap-4 cursor-pointer" input-class="hidden checkboxInput" icon-class="w-3 h-3 flex opacity-0" decorator-class="bg-white p-1 shrink-0 rounded-[5px] flex items-center justify-center w-5 h-5 checkboxIcon" label="Согласие на обработку персональных данных"/>                
                <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-[20px] w-full py-5 font-bold">Оставить заявку</FormKit>
        </FormKit>
        </div>
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)
    const isFormShow = ref(false)
</script>

<style>
    @media only screen and (max-width: 1279px) {
        .headerLink.router-link-active {
            background: #ACCCB3;
            color: white;
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
</style>