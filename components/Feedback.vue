<template>
    <div class="flex items-center max-lg:flex-col gap-7 md:gap-10 xl:gap-20 px-5 md:px-8 xl:px-16 py-10 xl:py-16 rounded-[30px] md:rounded-[45px] xl:rounded-[60px] bg-[#D4E4DA]">
        <div class="flex flex-col gap-2 lg:hidden">
            <p class="Goma text-[#869D8B] text-2xl">Узнать больше о наших садах</p>
            <p class="text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время и ответим на все вопросы</p>
        </div>
        <img src="/images/feedback/main.png" alt="" class="rounded-[30px] lg:w-2/5">
        <FormKit type="form" form-class="flex flex-col gap-7" :actions="false" messages-class="text-[#E9556D] Goma text-xs mt-2">
            <div class="flex flex-col gap-5 max-lg:hidden">
                <p class="Goma text-[#869D8B] text-2xl">Узнать больше о наших садах</p>
                <p class="text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время и ответим на все вопросы</p>
            </div>
            <div class="flex flex-col gap-6 xl:gap-4">
                <FormKit type="text" name="Имя" validation="required|length:2|alpha" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Имя"/>
                <FormKit type="text" name="Телефон" validation="required|length:11" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Телефон"/>
                <FormKit type="text" name="Возраст ребенка" validation="required|number" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 xl:px-7 bg-white rounded-[20px] w-full" placeholder="Возраст ребенка"/>
                <FormKit type="checkbox" name="Согласие" validation="accepted" messages-class="text-[#E9556D] Goma text-xs mt-2" wrapper-class="flex items-center gap-4 cursor-pointer" input-class="hidden checkboxInput" icon-class="w-3 h-3 flex opacity-0" decorator-class="bg-white p-1 shrink-0 rounded-[5px] flex items-center justify-center w-5 h-5 checkboxIcon" label="Согласие на обработку персональных данных"/>                
                <FormKit type="submit" input-class="uppercase text-lg md:text-xl xl:text-2xl text-white bg-[#869D8B] rounded-[20px] w-full py-5 font-bold">Оставить заявку</FormKit>
            </div>
        </FormKit>
    </div>
</template>

<script setup>

</script>

<style>
    .checkboxInput:checked + .checkboxIcon > .formkit-icon {
       opacity: 100;
    }
</style>