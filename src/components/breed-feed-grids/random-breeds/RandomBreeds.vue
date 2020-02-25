<template lang="pug">
    reached-bottom
        template(#default="{ reachedBottom, loadedHandler }")
            load-random-breed-images(
                @loaded="loadedHandler"
                :reached-bottom="reachedBottom"
            )
                feed-grid(is-first-element-wide)
                    breed-card(
                        v-for="image in randomBreedImages"
                        :key="image.image"
                        :breed="image.breed"
                        :image="image.image"
                    )
</template>
<script>
    import LoadRandomBreedImages from "@/components/loaders/LoadRandomBreedImages";
    import BreedCard from "@/components/breed-card/BreedCard";
    import FeedGrid from "@/components/feed-grid/FeedGrid";
    import {mapState} from "vuex";
    import ReachedBottom from "@/components/ReachedBottom";


    export default {
        components: {ReachedBottom, BreedCard, LoadRandomBreedImages,FeedGrid},
        computed: {
            ...mapState({
                randomBreedImages: state => state.randomBreedImages.randomBreedImages,
            }),
        },
    }
</script>