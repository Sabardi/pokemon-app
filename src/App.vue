<template>
  <main class="min-h-screen bg-slate-100 grid place-items-center p-6">

    <!-- banner -->
    <section class="mb-8">
      <img src="/assets/pokemon-banner.png" class="w-8/12 mx-auto" alt="Pokemon Banner">
    </section>

    <div class="w-6/12 mx-auto flex justify-end">
      <span class="absolute">
        <i class="fa-solid fa-bookmark text-3xl"></i>
        <span
          class="grid place-items-center h-8 w-8 bg-red-600 rounded-full text-center text-slate-50 relative -top-12 -right-2">
          {{ bookmarkStore.getBoorkmarkLength }}
        </span>
      </span>
    </div>

    <!-- wrapper -->
    <section class="grid grid-cols-5">
      <!-- list pokemon -->
      <section class="col-span-5">
        <section v-if="pokemons" class="w-full grid grid-cols-5 gap-3 h-[30rem] overflow-auto">
          <template v-for="pokemon in pokemons" :key="pokemon.url">
            <PokemonCard class="col-span-1" :pokemon="pokemon" />
          </template>
        </section>

        <!-- loading state -->
        <p v-else>
          loading...
        </p>
      </section>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PokemonCard from './components/PokemonCard.vue';
import { useBookmarkStore } from '@/stores/bookmark';

// initials
const bookmarkStore = useBookmarkStore()

// refs
const pokemons = ref()

onMounted(() => {

  setTimeout(async () => {

    const res = await fetch("https://pokeapi.co/api/v2/item")

    // parse data
    const data = await res.json()

    // updated state
    pokemons.value = data.results
  }, 2000)
})

</script>