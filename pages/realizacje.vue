<template>
    <div class="pb-36">
        <div class="py-24 pl-12 md:pl-24">
            <h1 class="text-5xl md:text-7xl xl:text-8xl font-semibold text-gray-800">Nasze <span class="roboto podkreslenie">realizacje</span></h1>
        </div>

        <div v-if="pending" class="conatiner mx-auto flex justify-center mb-60">
            Ładowanie...
        </div>
        <div v-else class="conatiner mx-auto md:px-12 xl:px-36">
            <p v-if="error">Coś poszło nie tak. Odśwież stronę lub skontaktuj się z właścicielem</p>
            <div v-else>
                <div class="min-h-[24rem]" v-for="post in realizacje">
                    <hr class="mt-6 mb-4">
                    <p class="text-4xl font-semibold text-gray-800 my-2 px-4">{{ post.tytul }}</p>
                    <p v-html="post.opis" class="text-gray-700 mb-6 px-4" />
                    <div class="flex flex-wrap justify-center gap-6">
                        <div v-for="img in post.zdjecia" class="max-w-sm max-h-[17rem] overflow-hidden relative block">
                            <div aria-hidden="true" class="blur-div" :style="'background-image: url('+img.responsiveImage.base64+');'+'background-size: cover; opacity: 1; transition: opacity 500ms ease 500ms; width: 110%; height: 110%;'">
                                <img class="duration-150 rounded-xl image-zoomable" :src="img.responsiveImage.src" :srcSet="img.responsiveImage.srcSet" :sizes="img.responsiveImage.sizes" loading="lazy" alt="photo"/>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.medium-zoom-image--opened{
    border-radius: 0% !important;
}
</style>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const QUERY = `
    query {
        allRealizacjes {
            id
            tytul
            opis
            zdjecia {
                responsiveImage(imgixParams: {auto: format}) {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    height
                    aspectRatio
                    alt
                    title
                    base64
                }
            }
        }
    }
`

const { data, error, pending } = await useFetch('https://graphql.datocms.com', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
  },
  body: {
    query: QUERY,
  },
  transform: ({ data, errors }) => { 
    if(errors) throw new errors;
    
    return data;
   },
});

let realizacje = data.value.allRealizacjes


onMounted(() => {

    let blurDivs = document.querySelectorAll('.blur-div');

    blurDivs.forEach( div => {
        const img = div.querySelector('img');


        function loaded() {
            div.classList.add('loaded')
        }

        if (img?.complete) {
            loaded()
        } else {
            img?.addEventListener("load", loaded)
        }
    })
})
</script>

<style>
.blur-div.loaded > img{
    opacity: 1;
    transition: opacity .5s ease-in-out;
}

.blur-div > img {
    opacity: 0;
    transition: opacity .5s ease-in-out !important;
} 
</style>