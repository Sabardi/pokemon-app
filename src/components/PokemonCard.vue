<template>
    <section class="bg-white">
        <!-- header -->
        <button class="p-2 flex justify-end w-full" @click="addBookmark(pokemonId)">
            <i :class="isBookmarked(pokemonId) ? 'fa-solid' : 'fa-regular'" class="fa-bookmark text-xl"></i>
        </button>
        <img :src="generateImageUrl()" class="w-full">
        <!-- footer -->
        <section class="p-6 uppercase text-center">
            <router-link :to="`/${pokemonId}`" class="hover:text-blue-500">{{ props.pokemon.name.split("-").join(" ")
                }}</router-link>
        </section>
    </section>
</template>

<script setup>
import { useBookmarkStore } from '@/stores/bookmark';
import { computed } from 'vue';


// initials
const { addBookmark, isBookmarked } = useBookmarkStore()

// props
const props = defineProps({
    pokemon: Object
})

// computeds
const pokemonId = computed(() => props.pokemon.url.split("/")[6])

// handler: generate image url
const generateImageUrl = () => {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`
}

</script>