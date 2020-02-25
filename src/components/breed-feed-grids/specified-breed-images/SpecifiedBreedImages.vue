<template lang="pug">
    reached-bottom
        template(#default="{ reachedBottom, loadedHandler }")
            load-random-images-by-breed(
                @loaded="loadedHandler"
                :breed="breed"
                :reached-bottom="reachedBottom"
            )
                feed-grid()
                    breed-card(
                        v-for="image in breedImages"
                        :key="image"
                        :breed="breed"
                        :image="image"
                    )
</template>
<script>
    import LoadRandomBreedImages from "@/components/loaders/LoadRandomBreedImages";
    import BreedCard from "@/components/breed-card/BreedCard";
    import FeedGrid from "@/components/feed-grid/FeedGrid";
    import {mapGetters} from "vuex";
    import ReachedBottom from "@/components/ReachedBottom";
    import LoadRandomImagesByBreed from "@/components/loaders/LoadRandomImagesByBreed";
    import {GETTER_NAMES} from "@/store/breedImages";


    export default {
        components: {LoadRandomImagesByBreed, ReachedBottom, BreedCard, LoadRandomBreedImages,FeedGrid},
        props: {
            breed: {
                type: String,
                required: true,
            },
        },
        computed: {
            ...mapGetters({
                getBreedImages: GETTER_NAMES.GET_BREED_IMAGES,
            }),
            breedImages() {
                return this.getBreedImages(this.breed);
            }
        },
    }
</script>