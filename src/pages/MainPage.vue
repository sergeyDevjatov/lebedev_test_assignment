<template lang="pug">
    feed-page
        component(
            :is="gridComponent"
        )
</template>

<script>
    import FeedPage from "@/components/feed-page/FeedPage";
    import RandomBreeds from "@/components/breed-feed-grids/random-breeds/RandomBreeds";
    import SortedAlphabeticallyBreeds
        from "@/components/breed-feed-grids/sorted-alphabetically-breeds/SortedAlphabeticallyBreeds";


    export default {
        components: { FeedPage },
        computed: {
            shouldBeSortedAlphabetically() {
                return Object.prototype.hasOwnProperty.call(this.$route.query, 'alphabetically');
            },
            gridComponent() {
                return this.shouldBeSortedAlphabetically
                    ? SortedAlphabeticallyBreeds
                    : RandomBreeds;
            },
        }
    }
</script>