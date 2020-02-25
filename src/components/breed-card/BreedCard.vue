<template lang="pug">
    feed-card(
        @like="likeHandler"
        :image="finalImage"
        :is-liked="isLiked"
    )
        template(#title)
            breed-label(:name="breed")
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {
        ACTION_NAMES as FAVORITE_BREEDS_ACTION_NAMES,
        GETTER_NAMES as FAVORITE_BREEDS_GETTER_NAMES,
    } from "@/store/favoriteBreeds";
    import {
        ACTION_NAMES as BREED_IMAGES_ACTION_NAMES,
        GETTER_NAMES as BREED_IMAGES_GETTER_NAMES,
    } from "@/store/breedImages";
    import FeedCard from "@/components/feed-card/FeedCard";
    import BreedLabel from "@/components/breed/BreedLabel";
    import IsInViewMixin from "@/components/mixins/IsInViewMixin";

    export default {
        components: {BreedLabel, FeedCard},
        mixins: [
            IsInViewMixin,
        ],
        props: {
            image: {
                type: String,
                default: null,
            },
            breed: {
                type: String,
                default: null,
            },
        },
        watch: {
            image: {
                immediate: true,
                async handler() {
                    await this.$nextTick();
                    await this.loadImageIfNecessary();
                },
            },
            haveEverBeenInView: {
                immediate: true,
                async handler() {
                    await this.$nextTick();
                    await this.loadImageIfNecessary();
                },
            },
        },
        computed: {
            ...mapGetters({
                isBreedFavorite: FAVORITE_BREEDS_GETTER_NAMES.IS_BREED_FAVORITE,
                getLastBreedImage: BREED_IMAGES_GETTER_NAMES.GET_LAST_BREED_IMAGE,
            }),
            isLiked() {
                return this.isBreedFavorite(this.breed);
            },
            finalImage() {
                return this.image ?? this.getLastBreedImage(this.breed);
            },
        },
        methods: {
            ...mapActions({
                toggleBreedIsFavorite: FAVORITE_BREEDS_ACTION_NAMES.TOGGLE_BREED_IS_FAVORITE,
                loadRandomBreedImage: BREED_IMAGES_ACTION_NAMES.LOAD_RANDOM_BREED_IMAGE,
            }),
            async likeHandler() {
                this.toggleBreedIsFavorite({
                    breed: this.breed,
                });
            },
            async loadImageIfNecessary() {
                if(this.finalImage || !this.haveEverBeenInView) {
                    return;
                }
                await this.loadRandomBreedImage({
                    breed: this.breed,
                });
            },
        },
    }
</script>