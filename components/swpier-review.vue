<template>
    <swiper 
    :slidesPerView="'auto'"
    :scrollbar="{
      hide: true,
    }"
    :modules="modules" 
    class="mySwiper">
      <swiper-slide class="px-8 md:max-w-sm" >
        <div class="bg-white rounded-lg border py-6 px-3">
            <div class="flex justify-between items-center mb-4">
                <div class="flex gap-2 bg-green-300/30 py-1 px-2 rounded-lg text-green-800 font-semibold text-xs w-fit">
                    <img src="/icons/check.svg" alt="X">
                    <p>Zweryfikowany klient</p>
                </div>
                <p class="text-gray-400 text-xs">Lipiec 2023</p>
            </div>
            <p class="text-gray-800 text-sm text-left">
                Ekipa zgrana, slowna i myslaca. Wykonanie frontem do potrzeb klienta, porzadek, kultura i dobre zarzadzanie czasem. Mowiac krotko sa szybcy zorganizowani i mili. Ze swieczka szukac.
            </p>
            <div class="mt-4 flex items-center gap-4">
                <div class="p-2 shadow-lg rounded-full w-fit">
                    <img src="https://lh3.googleusercontent.com/a/AAcHTtfcvdwS1cT4cyOlfO3kINiRNaAm0eCPTTlwBt8u4LQ=w36-h36-p-rp-mo-br100" alt="avatar">
                </div>
                <div class="w-0.5 h-12 bg-red-500"></div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-semibold">Basia R.</p>
                    <div class="flex">
                        <img v-for="i in 5" src="/icons/star-fill.svg" alt="star full">
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>

      <swiper-slide class="px-8 md:max-w-sm" >
        <div class="bg-white rounded-lg border py-6 px-3">
            <div class="flex justify-between items-center mb-4">
                <div class="flex gap-2 bg-green-300/30 py-1 px-2 rounded-lg text-green-800 font-semibold text-xs w-fit">
                    <img src="/icons/check.svg" alt="X">
                    <p>Zweryfikowany klient</p>
                </div>
                <p class="text-gray-400 text-xs">2019</p>
            </div>
            <p class="text-gray-800 text-sm text-left">
                Zakładanie napinanego sufitu zrobione profesjonalnie i co najważniejsze czysto i frontem do klienta. Polecam wszystkim.
            </p>
            <div class="mt-4 flex items-center gap-4">
                <div class="p-2 shadow-lg rounded-full w-fit">
                    <img src="https://lh3.googleusercontent.com/a/AAcHTteLgztLf0ob_V1KrwF7zIIWatsm4f5VmIcEHKfC7Rfg=w36-h36-p-rp-mo-br100" alt="avatar">
                </div>
                <div class="w-0.5 h-12 bg-red-500"></div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-semibold">Mikołaj K.</p>
                    <div class="flex">
                        <img v-for="i in 5" src="/icons/star-fill.svg" alt="star full">
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>

      <swiper-slide class="px-8 md:max-w-sm" >
        <div class="bg-white rounded-lg border py-6 px-3">
            <div class="flex justify-between items-center mb-4">
                <div class="flex gap-2 bg-green-300/30 py-1 px-2 rounded-lg text-green-800 font-semibold text-xs w-fit">
                    <img src="/icons/check.svg" alt="X">
                    <p>Zweryfikowany klient</p>
                </div>
                <p class="text-gray-400 text-xs">2019</p>
            </div>
            <p class="text-gray-800 text-sm text-left">
                Polecam. Pełen profesjonalizm I bardzo miły kontakt.
            </p>
            <div class="mt-4 flex items-center gap-4">
                <div class="p-2 shadow-lg rounded-full w-fit">
                    <img src="https://lh3.googleusercontent.com/a-/AD_cMMSXP7aIJbI7NJhoEztgYqdPrxzfXYSGc955tTpcRIEmOQ=w36-h36-p-rp-mo-br100" alt="avatar">
                </div>
                <div class="w-0.5 h-12 bg-red-500"></div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-semibold">Miłosz M.</p>
                    <div class="flex">
                        <img v-for="i in 5" src="/icons/star-fill.svg" alt="star full">
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>

    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/scrollbar';
  
    // import required modules
    import { Scrollbar } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Scrollbar],
        };
      },
    };
  </script>
<style>
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  