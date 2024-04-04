<template>
     <div class="col-span-full w-full max-sm:px-[15px] max-lg:px-[20px] lg:w-[90%] lg:mx-auto">
        <div class="w-full flex px-5 md:px-16 2xl:px-[194px] relative text-white bg-[url(/images/services/bg-mobile.png)] lg:bg-[url(/images/services/bg-desktop.png)] py-10 bg-cover lg:bg-right max-lg:text-center min-h-[300px] rounded-[30px] md:rounded-[45px] xl:rounded-[60px] overflow-hidden">
            <div class="flex flex-col w-full h-full gap-5 z-[1] max-lg:self-center max-lg:items-center relative">
                <div>
                    <NuxtLink to="/">Главная</NuxtLink>
                    /
                    Дополнительные образовательные услуги
                </div>
                <p class="text-4xl md:text-5xl xl:text-6xl Goma max-w-[1297px] hyphens-auto md:hyphens-none">Дополни&shy;тельные образова&shy;тельные услуги</p>           
                <p class="max-lg:hidden text-lg max-w-[1139px]">Мы предлагаем групповые занятия, которые включают в себя различные упражнения на растяжку, укрепление мышц, улучшение осанки, а также развитие баланса и гибкости.</p>
            </div>
            <div class="absolute top-0 left-0 h-full w-full bg-black/30"></div>
        </div>
    </div>
    <p class="text-sm md:text-base lg:hidden -mt-10">Мы предлагаем групповые занятия, которые включают в себя различные упражнения на растяжку, укрепление мышц, улучшение осанки, а также развитие баланса и гибкости.</p>
    <div class="flex flex-col gap-12 lg:gap-16 xl:gap-20">
        <div class="flex flex-col bg-[#F2E4D7] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#B89574]">Детская гимнастика</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие физических навыков:</span> дети улучшают свою физическую форму, силу, гибкость и выносливость.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие координации движений:</span> занятия помогают развивать точность и согласованность движений</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие осанки:</span> правильные позы и упражнения способствуют формированию правильной осанки у детей.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#B89574] font-semibold">Улучшение сосредоточенности:</span> гимнастика требует концентрации внимания, умения слушать инструктора и выполнять задания.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#B89574] font-semibold">Социализация:</span> в групповых занятиях дети учатся работать в команде, сотрудничать и общаться друг с другом.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/gymnastic1.png" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/gymnastic2.png" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 1 час. <br>
                    <span class="font-semibold">Стоимость:</span> 250₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#B89574] text-white" @click="isServicesFormShow = true, selectService('Детская гимнастика')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#D4E4DA] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#869D8B]">Йога</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#869D8B] font-semibold">Повышение гибкости и силы:</span> йога помогает детям улучшить свою физическую форму, развивает мышцы и общую выносливость.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#869D8B] font-semibold">Улучшение психического благополучия:</span> занятия йогой способствуют снижению стресса, улучшают настроение и способствуют концентрации.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#869D8B] font-semibold">Развитие координации и равновесия:</span> упражнения йоги помогают детям развивать точность движений и улучшать равновесие.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#869D8B] font-semibold">Повышение самосознания:</span> йога способствует осознанности своего тела и состояния, помогает детям лучше понимать себя и свои эмоции.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#869D8B] font-semibold">Усиление взаимодействия со своими соучениками:</span> занятия йогой в группе способствуют развитию социальных навыков, сотрудничеству и взаимодействию.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/yoga1.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/yoga2.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 1 час. <br>
                    <span class="font-semibold">Стоимость:</span> 300₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#869D8B] text-white" @click="isServicesFormShow = true, selectService('Йога')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#FED3DA] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#E9556D]">Математика</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#E9556D] font-semibold">Развитие логического мышления:</span> занятия математикой помогают детям развивать аналитическое мышление и способности к решению задач.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#E9556D] font-semibold">Улучшение математической грамотности:</span> занятия направлены на улучшение знания и понимание основных математических понятий и операций.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#E9556D] font-semibold">Развитие умения решать проблемы:</span> математика помогает детям научиться анализировать и решать сложные задачи, развивает их творческое мышление.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#E9556D] font-semibold">Развитие навыков работы с числами:</span> занятия направлены на улучшение навыков счета, работы с числами и основных математических операций.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#E9556D] font-semibold">Подготовка к успеху в школе:</span> занятия математикой помогают детям развивать навыки, необходимые для успешного обучения в школе.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/math1.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/math2.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 1 час. <br>
                    <span class="font-semibold">Стоимость:</span> 300₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#E9556D] text-white" @click="isServicesFormShow = true, selectService('Математика')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#F2E4D7] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#B89574]">Развитие речи</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#B89574] font-semibold">Улучшение артикуляции и дикции:</span> занятия помогают детям развивать правильное произношение звуков и четкую артикуляцию.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#B89574] font-semibold">Расширение словарного запаса:</span> занятия направлены на развитие словарного запаса, улучшение понимания и использования различных слов и выражений.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие навыков чтения и письма:</span> занятия способствуют развитию навыков чтения и улучшению письменной речи.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#B89574] font-semibold">Повышение коммуникативных навыков:</span> занятия помогают детям развивать способность выражать свои мысли и эмоции, улучшают их коммуникативные навыки.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие слухового и пространственного восприятия:</span> занятия способствуют развитию способности слышать и анализировать звуки, а также пониманию пространственных отношений.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/speech1.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/speech2.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 45 минут. <br>
                    <span class="font-semibold">Стоимость:</span> 200₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#B89574] text-white" @click="isServicesFormShow = true, selectService('Развитие речи')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#D4E4DA] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#869D8B]">Рисование</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#869D8B] font-semibold">Развитие творческого мышления:</span> занятия по рисованию помогают детям развивать фантазию и творчество, улучшают их способность к самовыражению.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#869D8B] font-semibold">Развитие мелкой моторики:</span> занятия способствуют развитию мелкой моторики, улучшению навыков рисования и рукописи.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#869D8B] font-semibold">Развитие навыков наблюдения:</span> занятия направлены на развитие способности наблюдать и передавать на бумаге окружающий мир.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#869D8B] font-semibold">Улучшение концентрации и внимания:</span> занятия по рисованию требуют сосредоточенности и внимания, что помогает детям развивать эти навыки.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#869D8B] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#869D8B] font-semibold">Развитие эстетического восприятия:</span> занятия помогают детям улучшать свое эстетическое восприятие и развивать чувство красоты.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/draw1.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/draw2.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 1 час. <br>
                    <span class="font-semibold">Стоимость:</span> 250₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#869D8B] text-white" @click="isServicesFormShow = true, selectService('Рисование')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#FED3DA] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#E9556D]">Логопед</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#E9556D] font-semibold">Улучшение речи:</span> занятия с логопедом направлены на улучшение произношения звуков и развитие речи у детей.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#E9556D] font-semibold">Развитие слуха:</span> занятия способствуют развитию аудиального восприятия, что помогает детям лучше слышать и различать звуки речи.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#E9556D] font-semibold">Улучшение понимания речи:</span> занятия помогают детям лучше понимать и интерпретировать речь других людей.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#E9556D] font-semibold">Развитие словесного выражения:</span> занятия направлены на развитие навыков выражать свои мысли и эмоции словами.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#E9556D] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#E9556D] font-semibold">Повышение самооценки:</span> занятия с логопедом помогают детям преодолевать проблемы речи, что ведет к повышению их самооценки и уверенности.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/logoped1.jpeg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/logoped2.jpg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 45 минут. <br>
                    <span class="font-semibold">Стоимость:</span> 300₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#E9556D] text-white" @click="isServicesFormShow = true, selectService('Логопед')">Записаться</button>
            </div>
        </div>
        <div class="flex flex-col bg-[#F2E4D7] gap-7 md:gap-10 xl:gap-12 py-10 xl:py-12 px-5 md:px-14 xl:px-20 rounded-[30px] md:rounded-[45px] xl:rounded-[60px]">
            <p class="text-2xl md:text-3xl xl:text-4xl Goma text-[#B89574]">Психолог</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-9 xl:gap-x-20 text-lg">
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">1</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие эмоционального интеллекта:</span> занятия с психологом помогают детям развивать навыки работы с эмоциями, улучшают их эмоциональное состояние и психическое благополучие.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">2</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие навыков коммуникации:</span> занятия способствуют развитию навыков общения, улучшают способность слушать и быть внимательным к другим.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">3</p>
                    <p><span class="text-[#B89574] font-semibold">Развитие навыков решения проблем:</span> занятия помогают детям развивать навыки анализа и решения проблем, что способствует их развитию и самостоятельности.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">4</p>
                    <p><span class="text-[#B89574] font-semibold">Повышение самосознания и самопонимания:</span> занятия с психологом помогают детям лучше понимать и себя, и других людей.</p>
                </div>
                <div class="flex gap-5">
                    <p class="rounded-full w-11 h-11 bg-[#B89574] text-white flex items-center justify-center shrink-0">5</p>
                    <p><span class="text-[#B89574] font-semibold">Улучшение умения управлять своими эмоциями:</span> занятия способствуют развитию навыков управления эмоциями и стрессовыми ситуациями.</p>
                </div>
            </div>
            <div class="flex items-center gap-4 xl:gap-7 max-lg:flex-col">
                <img src="/images/services/psych1.jpeg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">
                <img src="/images/services/psych2.jpeg" alt="" class="lg:w-1/2 rounded-[30px] object-cover aspect-video">   
            </div>
            <div class="flex max-md:flex-col md:items-center md:justify-between gap-7">
                <p>
                    <span class="font-semibold">Время занятий:</span> 1 час. <br>
                    <span class="font-semibold">Стоимость:</span> 400₽ одно занятие.
                </p>
                <button class="w-full py-4 md:w-[275px] rounded-[20px] bg-[#B89574] text-white" @click="isServicesFormShow = true, selectService('Психолог')">Записаться</button>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-7 xl:gap-7">
        <p class="Goma text-2xl xl:text-3xl">Вопрос-ответ</p>
        <div class="flex flex-col gap-4 xl:gap-5">
            <Question v-for="FAQ in FAQs" v-bind="FAQ"></Question>
        </div>
    </div>
    <Feedback></Feedback>
    <Contacts></Contacts>
    <div class="fixed w-full h-screen bg-black/30 top-0 left-0 z-[5] flex items-center justify-center px-[15px] sm:px-[20px]" :class="{'hidden' : !isServicesFormShow}">
        <FormKit type="form" form-class="flex flex-col gap-5 w-full max-w-[430px] px-5 py-7 relative bg-[#D4E4DA] z-[1] rounded-[30px]" :actions="false">
            <button type="button" @click="isServicesFormShow = false" class="absolute top-7 right-5 xl:right-7">
                <img src="/images/feedback/close.png" alt="" class="w-5 h-5">
            </button>
            <p class="Goma text-[#869D8B] text-lg xl:text-xl text-center mt-10">Выбор дополнительных образовательных услуг</p>
            <div class="flex flex-col gap-4 mt-2.5">
                <FormKit v-model="servicesForm.name" type="text" name="Ваше имя" validation="required|length:2|alpha" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Ваше имя"/>
                <FormKit v-model="servicesForm.phone" type="text" name="Телефон" validation="required|length:11" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Телефон"/>
                <FormKit v-model="servicesForm.email" type="text" name="Email" validation="required|email" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Email"/>
                <FormKit v-model="servicesForm.service" type="select" name="Выбранная услуга" :options="['Детская гимнастика','Йога','Математика','Развитие речи','Рисование','Логопед','Психолог']" validation="required" messages-class="text-[#E9556D] Goma text-xs mt-2" input-class="p-5 bg-white rounded-[20px] w-full" placeholder="Выбранная услуга"/>
            </div>
            <FormKit type="checkbox" name="Согласие" validation="accepted" messages-class="text-[#E9556D] Goma text-xs mt-2" wrapper-class="flex items-center gap-4 cursor-pointer" input-class="hidden checkboxInput" icon-class="w-3 h-3 flex opacity-0" decorator-class="bg-white p-1 shrink-0 rounded-[5px] flex items-center justify-center w-5 h-5 checkboxIcon" label="Согласие на обработку персональных данных"/>                
            <FormKit type="submit" input-class="uppercase text-lg text-white bg-[#869D8B] rounded-[20px] w-full py-5 font-bold">Записаться</FormKit>
        </FormKit>
    </div>
</template>

<script setup>
    /* список вопросов */
    const supabase = useSupabaseClient() 
    const { data:FAQs, error:errorFAQs } = await supabase.from('FAQ').select('*').eq('page', '4')

    /* показ формы и создание полей */
    const isServicesFormShow = ref(false)
    const servicesForm = ref({
        name: "",
        phone: "",
        email: "",
        service: ""
    })

    /* выбор услуги */
    const selectService = (service) => {
        servicesForm.value.service = service
    }
</script>

<style>
    select ~ .formkit-select-icon {
        display: none;
    }
</style>