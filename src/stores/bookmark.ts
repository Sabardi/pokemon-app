import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBookmarkStore = defineStore("bookmark-store", () => {

    // refs
    const bookmarks = ref<number[]>([]);

    // action: push new bookmark
    const addBookmark = (pokemonId: number) => {

        // if already bookmarked, return
        if (bookmarks.value.includes(pokemonId)) {

            // remove bookmark
            bookmarks.value = bookmarks.value.filter((id) => id !== pokemonId);

            return
        }

        // add bookmark
        bookmarks.value.push(pokemonId);
    }

    addBookmark(1)

    // action: check pokemon id is bookmarked
    const isBookmarked = (pokemonId: number) => bookmarks.value.includes(pokemonId);

    // getter: length of bookmarks
    const getBoorkmarkLength = computed(() => bookmarks.value.length);

    return { bookmarks, addBookmark, isBookmarked, getBoorkmarkLength }
},
    {
        persist: {
            storage: localStorage
        }
    }
)