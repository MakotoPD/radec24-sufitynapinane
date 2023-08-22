<template>
    <div>
        <div class="h-16 md:h-24 border-b px-14 lg:px-24 relative">
            <div class="md:w-fit h-full flex justify-center items-center">
                <NuxtLink to="/">
                    <nuxt-img src="/img/logo.png" alt="RADEC24" class="h-5" />
                </NuxtLink>
            </div>
            <div class="hidden md:block desktopmenu absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="flex gap-5 justify-center items-center">
                    <NuxtLink to="/" class="hover:text-red-600 duration-150">Start</NuxtLink>
                    <NuxtLink to="/realizacje" class="hover:text-red-600 duration-150">Realizacje</NuxtLink>
                    <a href="/#kontakt" class="hover:text-red-600 duration-150">Kontakt</a>
                    <div class="relative" @mouseenter="mouseover()" @mouseleave="mouseleave()">
                        <p class="cursor-default flex items-center">O sufitach <img class="arrow-down duration-150" src="/icons/caret-down.svg" alt="\/"></p>
                        <div class="niema hidden druation-150 bg-white absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-[16rem] py-4 px-4 rounded-lg">
                            <NuxtLink to="/czym-jest-sufit" class="hover:text-red-600 duration-150" >Czym jest sufit napinany?</NuxtLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="md:hidden fixed bottom-8 w-full px-4 z-50">
            
            <div class="relative border w-full py-3 px-4 bg-neutral-200/60 backdrop-blur-sm rounded-3xl flex justify-center gap-12">
                <NuxtLink to="/#kontakt" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/phone.svg"/>
                </NuxtLink>
                <NuxtLink to="/" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/house.svg"/>
                </NuxtLink>
                <a href="/realizacje" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/images.svg"/>
                </a>
                <button @click="opensumbenuMobile()" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/waves.svg"/>
                </button>
               
            </div>
            <div class="oSufitach hidden absolute -top-2 right-3 -translate-y-full ">
                    <div class="relative px-8 py-4 border bg-neutral-200/60 backdrop-blur-sm rounded-3xl ">
                        <NuxtLink to="/czym-jest-sufit" @click="opensumbenuMobile()" class="text-red-500/90 font-semibold duration-150" >Czym jest sufit napinany?</NuxtLink>
                        <hr class="border-red-500/50 my-3"/>
                        <NuxtLink to="/konserwacja" @click="opensumbenuMobile()" class="text-red-500/90 font-semibold duration-150" >Konserwacja</NuxtLink>
                    </div>

                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
let mouseover = () => {
    let niema = document.querySelector('.niema');
    niema?.classList.remove('hidden');
    document?.querySelector('.arrow-down')?.classList.add('rotate-180');
}

let mouseleave = () => {
    let niema = document.querySelector('.niema');
    niema?.classList.add('hidden');
    document?.querySelector('.arrow-down')?.classList.remove('rotate-180');
}

let opensumbenuMobile = () => {
    let oSufitach = document.querySelector('.oSufitach');
    oSufitach?.classList.toggle('hidden');
}
</script>

<style>

</style>