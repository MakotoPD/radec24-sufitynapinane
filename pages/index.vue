<template>
    <div class="py-12 px-3">
        <div class="mb-24 md:flex justify-between">
            <div class="md:w-full md:flex flex-col items-end justify-center">
                <div class="md:pr-44">
                    <div class="mb-4">
                        <div class="rounded-full flex gap-3 bg-whitered w-fit pr-4 overflow-hidden">
                            <div class="pl-4 pr-3 bg-red-600 flex justify-center items-center">
                                <img class="animate-[wiggle_.4s_ease-in-out_infinite]" src="/icons/bell-ringing.svg" alt="bell">
                            </div>
                            <div class="py-1">
                                <p class="roboto font-bold">Bądź szybszy niż sąsiad</p>
                            </div>
                        </div>
                    </div>
                    <div class="pl-4 mb-36">
                        <h1 class="font-bold text-6xl md:text-7xl text-gray-800">Idealny <br/>
                            <span class="roboto text-red-500">Sufit</span> w 
                            <br/> Jeden dzień
                        </h1>
                    </div>
                </div>
                
                
            </div>
            
            <div class="md:w-full px-9 relative">
                <img class="absolute left-1/2 -top-6 -translate-y-1/2 md:-left-12 md:-bottom-0 md:top-auto md:translate-y-0 md:-translate-x-full md:-scale-x-100 md:-rotate-90" src="/icons/arrow-spin.png" alt="arrow">
                <div class="absolute left-0 bg-white rounded-xl shadow-xl py-4 px-8 w-fit text-center">
                    <div class="absolute -right-2 -top-2 p-1 rounded-full bg-red-500">
                        <img src="/icons/star.svg" alt="">
                    </div>
                    <p class="text-gray-800 font-bold text-xl">Wysoka <br/> jakość</p>
                </div>
                <nuxt-img class="w-full max-w-xl md:max-w-md" loading="lazy" format="webp" src="/img/sufit.png" alt="x" />
            </div>
        </div>

        <div class="my-12 md:my-36 md:container md:mx-auto">
            <h1 class="text-gray-800 text-4xl font-bold text-center leading-snug mb-8 md:text-5xl md:text-left">
                Jakie <span class="roboto podkreslenie">możliwości</span> <br class="md:hidden"/>
                daje sufit napinany?
            </h1>

            <div class="md:container md:mx-auto px-8 flex flex-col md:flex-row md:justify-center gap-6">
                <div class="rounded-xl bg-white py-4 px-4 w-fit border md:max-w-sm">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="p-1 bg-whitered rounded-lg">
                            <nuxt-img loading="lazy" src="/icons/paint-roller.svg" alt="x" />
                        </div>
                        <p class="font-semibold">Możliwości aranżacyjne</p>
                    </div>
                    <p class="text-sm">Istnieje wiele rodzajów sufitów napinanych. Od klasycznych połyskowych, przez matowe i satynowe po wielopoziomowe lub z nadrukiem. A jeśli chcesz zrobić impreze możesz również mieć sufit, który w świeci po przez zamontowanie ledów nad sufitem!</p>
                </div>
                <div class="rounded-xl bg-white py-4 px-4 w-fit border md:max-w-sm">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="p-1 bg-whitered rounded-lg">
                            <nuxt-img loading="lazy" src="/icons/feather.svg" alt="x" />
                        </div>
                        <p class="font-semibold">Lekka i cienka konstrukcja</p>
                    </div>
                    <p class="text-sm">Sufit napinany składa się z profili wokół sufity, a pomiędzy nimi rozciągnięta jest membrana zrobiona z gumowej folii. Sufit napinany możezostać zamontowany nawet i 3 cm pod aktualnym sufitem. Pomimo tak lekkiej konstrukcji sufit jest odporny na uderenia (np. z korka od szampana)</p>
                </div>
                <div class="rounded-xl bg-white py-4 px-4 w-fit border md:max-w-sm">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="p-1 bg-whitered rounded-lg">
                            <nuxt-img loading="lazy" src="/icons/waves.svg" alt="x" />
                        </div>
                        <p class="font-semibold">Maskowanie nierówności</p>
                    </div>
                    <p class="text-sm">Sufit napinany umożliwia ukrycie popękanych starych tynków, nierównych stropów i nieestetycznych rur instalacyjnych, co poprawia wygląd wnętrza. Dzięki swojej funkcjonalności i estetyce, sufit napinany jest doskonałym rozwiązaniem do różnorodnych przestrzeni mieszkalnych i komercyjnych</p>
                </div>
            </div>
        </div>

        <div class="my-12 md:my-36 md:container md:mx-auto">
            <h1 class="text-gray-800 text-4xl font-bold text-center leading-snug mb-8 md:text-5xl md:text-left">
                Opinie <span class="roboto podkreslenie">klientów</span>
            </h1>
            <Swpier-review />
        </div>


        <div class="my-12 md:my-36 md:container md:mx-auto" id="kontakt">
            <h1 class="text-gray-800 text-4xl font-bold text-center leading-snug mb-8 md:text-5xl md:text-left">
                <span class="roboto podkreslenie">Skontaktuj</span> się z <br class="md:hidden"/> nami
            </h1>

            <div class="flex flex-col items-center gap-5 md:flex-row md:justify-center md:mt-12">
                <div class="bg-white border w-fit rounded-xl py-2 px-4 flex items-center gap-4 justify-center">
                    <div class="p-2 bg-whitered rounded-lg">
                        <nuxt-img loading="lazy" src="/icons/phone.svg" alt="x" />
                    </div>
                    <a class="text-xl text-red-500 font-semibold" href="tel:737444950">737 444 950</a>
                </div>
                <div class="bg-white border w-fit rounded-xl py-2 px-4 flex items-center gap-4 justify-center">
                    <div class="p-2 bg-whitered rounded-lg">
                        <nuxt-img loading="lazy" src="/icons/envelope.svg" alt="x" />
                    </div>
                    <a class="text-xl text-red-500 font-semibold" href="mailto:radec24@wp.pl">radec24@wp.pl</a>
                </div>
                <div class="bg-white border w-fit rounded-xl py-2 px-4 flex items-center gap-4 justify-center">
                    <div class="p-2 bg-whitered rounded-lg">
                        <nuxt-img loading="lazy" src="/icons/house.svg" alt="x" />
                    </div>
                    <a href="https://www.google.com/maps/place/RADEC24+sufity+napinane,+wyko%C5%84czenia+wn%C4%99trz,+Inowroc%C5%82aw/@52.7947042,18.2821023,17z/data=!3m1!4b1!4m6!3m5!1s0x470350898bd704dd:0xe8d349a8766307bf!8m2!3d52.794701!4d18.2846772!16s%2Fg%2F11bx8kgsb1?entry=ttu" target="_blank">
                        <p class="text-xl text-red-500 font-semibold">Ludzisko 56</p>
                        <p class="text-xl text-red-500 font-semibold">88-160 Janikowo</p>
                    </a>

                </div>
            </div>
            
        </div>

       
    </div>
</template>

<script setup lang="ts">

</script>