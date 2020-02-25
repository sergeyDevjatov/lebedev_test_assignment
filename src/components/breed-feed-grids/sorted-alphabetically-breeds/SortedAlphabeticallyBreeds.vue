<template lang="pug">
    reached-bottom
        template(#default="{ reachedBottom }")
            load-all-breeds
                feed-grid(is-first-element-wide)
                    breed-card(
                        v-for="breed in breeds"
                        :key="breed"
                        :breed="breed"
                    )
</template>
<script>
    import LoadRandomBreedImages from "@/components/loaders/LoadRandomBreedImages";
    import BreedCard from "@/components/breed-card/BreedCard";
    import FeedGrid from "@/components/feed-grid/FeedGrid";
    import {mapState} from "vuex";
    import ReachedBottom from "@/components/ReachedBottom";
    import LoadAllBreeds from "@/components/loaders/LoadAllBreeds";


    export default {
        components: {LoadAllBreeds, ReachedBottom, BreedCard, LoadRandomBreedImages,FeedGrid},
        computed: {
            ...mapState({
                breeds: state => state.breeds.breeds,
            }),
        },
    }
</script>