<template lang="pug">
    load-favorite-breeds
        feed-grid
            template(#default="{ itemClass }")
                breed-card(
                    v-for="breed in favoriteBreeds"
                    :class="itemClass"
                    :key="breed"
                    :breed="breed"
                )
</template>
<script>
    import LoadFavoriteBreeds from "@/components/loaders/LoadFavoriteBreeds";
    import {mapState} from "vuex";
    import FeedGrid from "@/components/feed-grid/FeedGrid";
    import BreedCard from "@/components/breed-card/BreedCard";


    export default {
        components: {BreedCard, FeedGrid, LoadFavoriteBreeds},
        computed: {
            ...mapState({
                favoriteBreeds: state => state.favoriteBreeds.favoriteBreeds,
            }),
        },
    }
</script>