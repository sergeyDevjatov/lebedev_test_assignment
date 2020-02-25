<template lang="pug">
    feed-page
        specified-breed-images(
            v-if="breed"
            :breed="breed"
        )
</template>

<script>
    import FeedPage from "@/components/feed-page/FeedPage";
    import SpecifiedBreedImages from "@/components/breed-feed-grids/specified-breed-images/SpecifiedBreedImages";
    export default {
        components: {SpecifiedBreedImages, FeedPage},
        computed: {
            breed() {
                return this.$route.params.breed;
            },
        }
    };
</script>