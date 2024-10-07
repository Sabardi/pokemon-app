<template>
    <section class="w-4/12">
        <!-- pokemon poster -->
        <img class="w-full"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.pokemonId}.png`"
            alt="">

        <!-- pokemon name -->
        <p class="text-center text-3xl uppercase">{{ pokemon?.name }}</p>

        <!-- back -->
        <button @click="router.go(-1)" class="bg-slate-300 text-slate-700 px-3 py-2 w-full ">Back</button>
    </section>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// initials
const route = useRoute()
const router = useRouter()

// refs
const pokemon = ref()

// hooks
onMounted(async () => {

    // fetching
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemonId}`)

    // parse data
    const data = await res.json()

    // updated state
    pokemon.value = data
})

</script>