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
                    <NuxtLink to="/">Start</NuxtLink>
                    <NuxtLink to="/realizacje">Realizacje</NuxtLink>
                    <a href="/#kontakt">Kontakt</a>
                </div>
            </div>
        </div>

        <div class="md:hidden fixed bottom-8 w-full px-4 z-50">
            <div class="border w-full py-3 px-4 bg-neutral-200/60 backdrop-blur-sm rounded-3xl flex justify-center gap-12">
                <NuxtLink to="/#kontakt" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/phone.svg"/>
                </NuxtLink>
                <NuxtLink to="/" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/house.svg"/>
                </NuxtLink>
                <a href="/realizacje" class="px-1 py-1 bg-red-300/50 rounded-xl focus:scale-125 duration-150">
                    <img src="/icons/images.svg"/>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>