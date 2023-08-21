<template>
    <div class="pb-36">
        <div class="py-24 pl-12 md:pl-24">
            <h1 class="text-5xl md:text-7xl xl:text-8xl font-semibold text-gray-800">Nasze <span class="roboto podkreslenie">realizacje</span></h1>
        </div>

        <div class="conatiner mx-auto md:px-12 xl:px-36">
            <p v-if="error">Coś poszło nie tak. Odśwież stronę lub skontaktuj się z właścicielem</p>
            <div v-else>
                <div v-for="post in realizacje">
                    <hr class="mt-6 mb-4">
                    <p class="text-4xl font-semibold text-gray-800 my-2">{{ post.tytul }}</p>
                    <p v-html="post.opis" class="text-gray-700 mb-6"></p>
                    <div class="flex flex-wrap justify-center gap-6">
                        <img class="max-w-sm rounded-xl image-zoomable" v-for="img in post.zdjecia" :src="img.url" alt="photo">
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
                url
            }
        }
    }
`

const { data, error } = await useFetch('https://graphql.datocms.com', {
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

console.log(realizacje)

</script>