<template>
    <div class="w-full grow flex flex-col gap-8 items-center justify-center" v-if="!isAdminShow">
        <p class="Goma text-[#869D8B] text-2xl">Вход в админ панель</p>
        <FormKit @submit="loginAdmin" type="form" form-class="flex flex-col gap-6 w-1/2" :actions="false">
            <div class="flex flex-col gap-6 xl:gap-4 items-center w-full">
                <FormKit v-model="adminForm.login" type="text" name="Логин" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Логин"/>
                <FormKit v-model="adminForm.password" type="password" name="Пароль" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="••••••"/>                
                <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-full px-4 w-fit mx-auto py-2 font-bold">Вход</FormKit>
            </div>
        </FormKit>
    </div>
    <div class="flex flex-col gap-14 md:gap-20 xl:gap-28 items-center w-full" v-else>
        <div class="flex flex-col gap-4 w-1/2">
            <p class="Goma text-[#869D8B] text-2xl">Добавление фото в слайдер</p>
            <FormKit @submit="sliderForm" type="form" form-class="flex flex-col gap-6 full" :actions="false">
                <div class="flex flex-col gap-6 xl:gap-4 items-center w-full">
                    <FormKit @change="imageToBase" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" type="file" name="Фото" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]"/>                
                    <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-full px-4 w-fit mx-auto py-2 font-bold">Добавить</FormKit>
                </div>
            </FormKit>
        </div>    
        <div class="flex flex-col gap-4 w-1/2">
            <p class="Goma text-[#869D8B] text-2xl">Добавление новостей/объявлений</p>
            <FormKit @submit="newsFormSubmit" type="form" form-class="flex flex-col gap-6 full" :actions="false">
                <div class="flex flex-col gap-6 xl:gap-4 items-center w-full">
                    <FormKit v-model="newsForm.title" type="text" name="Заголовок" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Заголовок"/>
                    <FormKit v-model="newsForm.desc" type="textarea" name="Описание" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Описание"/>
                    <FormKit @change="imageToBase" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" type="file" name="Фото" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]"/>                
                    <FormKit v-model="newsForm.date" type="date" name="Дата" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Дата"/>
                    <FormKit v-model="newsForm.type" type="select" :options="{ news: 'Новости', announcement: 'Объявления'}" name="Тип" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Тип"/>
                    <FormKit v-model="newsForm.group" v-if="newsForm.type == 'announcement'" type="select" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" name="Группа" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Группа"/>
                    <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-full px-4 w-fit mx-auto py-2 font-bold">Добавить</FormKit>
                </div>
            </FormKit>
        </div>    
        <div class="flex flex-col gap-4 w-1/2">
            <p class="Goma text-[#869D8B] text-2xl">Добавление успехов/грамот/творчества</p>
            <FormKit @submit="advanceFormSubmit" type="form" form-class="flex flex-col gap-6 full" :actions="false">
                <div class="flex flex-col gap-6 xl:gap-4 items-center w-full">
                    <FormKit v-model="advanceForm.title" type="text" name="Заголовок" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Заголовок"/>
                    <FormKit v-model="advanceForm.desc" type="textarea" name="Описание" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Описание"/>
                    <FormKit @change="imageToBase" validation="required" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" type="file" name="Фото" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]"/>              
                    <FormKit v-model="advanceForm.type" type="select" :options="['Грамоты', 'Творчество', 'Успехи']" name="Тип" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" outer-class="w-full" input-class="px-6 py-4 bg-white rounded-[20px] w-full border-[1.5px] border-[#869D8B]" placeholder="Тип"/>
                    <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-full px-4 w-fit mx-auto py-2 font-bold">Добавить</FormKit>
                </div>
            </FormKit>
        </div>    
    </div>
    <button type="button" @click="message.title = null" class="flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-white fixed top-10 right-10 z-[11] cursor-pointer" :class="message.type ? 'bg-[#869D8B]' : 'bg-[#E9556D]'" v-if="message.title">
        <span>{{message.title}}</span>
        <img src="/images/feedback/close.png" alt="" class="w-3.5 h-3.5">
    </button>
</template>

<script setup>
    /* показ формы */
    const isAdminShow = ref(true)

    /* данные для входа и оповещение */
    const adminForm = ref({
        login: "",
        password: ""
    })
    let message = ref({
        title: null, 
        type: true
    })

    /* проверка */
    const loginAdmin = () => {
        if (adminForm.value.login == "admin" && adminForm.value.password == "admin") {
            isAdminShow.value = true
            message.value.title = 'Успешный вход!', message.value.type = true 
            setTimeout(() => {
                message.value.title = null
            }, 3000);
            adminForm.value.login = ""
            adminForm.value.password = ""
        } else {
            message.value.title = 'Неверные данные для входа!', message.value.type = false 
            adminForm.value.login = ""
            adminForm.value.password = ""
        }
    }

    /* формы для добавления данных в БД */    
    const supabase = useSupabaseClient() 

    /* добавление фото */
    const imageSlider = ref()
    const imageNews = ref()
    const imageAdvance = ref()
    const imageToBase = (el) => {
        const file = el.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.onloadend = () => {
            imageSlider.value = reader.result
            imageNews.value = reader.result
            imageAdvance.value = reader.result
        }
        reader.readAsDataURL(file)
    }

    /* форма слайдера */
    const sliderForm = async () => {        
        const { data, error } = await supabase
        .from('mainSlider')
        .insert([
            { img: `${imageSlider.value}` },
        ])
        .select()          

        if (data) {
            message.value.title = 'Успешное добавление!', message.value.type = true 
            setTimeout(() => {
                message.value.title = null
            }, 3000) 
            imageSlider.value, imageNews.value, imageAdvance.value = "" 
        }
    }

    /* форма новостей */
    const newsForm = ref({
        title: "",
        desc: "",
        date: "",
        type: "",
        group: 0
    })
    const newsFormSubmit = async () => {     
        const { data, error } = await supabase
        .from('news')
        .insert([
            { 
                title: `${newsForm.value.title}`,
                img: `${imageNews.value}`,
                desc: `${newsForm.value.desc}`,
                date: `${new Date(newsForm.value.date).toLocaleDateString()}`,
                type: `${newsForm.value.type}`,
                group: `${newsForm.value.group}`
            },
        ])
        .select()          

        if (data) {
            message.value.title = 'Успешное добавление!', message.value.type = true 
            setTimeout(() => {
                message.value.title = null
            }, 3000) 
            imageSlider.value, imageNews.value, imageAdvance.value = "" 
            newsForm.value.title = ""
            newsForm.value.desc = ""
            newsForm.value.date = ""
            newsForm.value.type = ""
            newsForm.value.group = 0
        }
    }

    /* форма успехов */
    const advanceForm = ref({
        title: "",
        desc: "",
        type: "",
    })
    const advanceFormSubmit = async () => {     
        const { data, error } = await supabase
        .from('advance')
        .insert([
            { 
                title: `${advanceForm.value.title}`,
                img: `${imageAdvance.value}`,
                desc: `${advanceForm.value.desc}`,
                type: `${advanceForm.value.type}`
            },
        ])
        .select()          

        if (data) {
            message.value.title = 'Успешное добавление!', message.value.type = true 
            setTimeout(() => {
                message.value.title = null
            }, 3000) 
            imageSlider.value, imageNews.value, imageAdvance.value = "" 
            advanceForm.value.title = ""
            advanceForm.value.desc = ""
            advanceForm.value.date = ""
            advanceForm.value.type = ""
        }
    }
</script>

<style>
    .formkit-no-files, .formkit-file-list, .formkit-select-icon  {
        display: none;
    }
</style>
