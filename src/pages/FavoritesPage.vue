<template lang="pug">
    feed-page(no-options)
        favorite-breeds
</template>

<script>
    import MainContainer from '@/components/layouts/MainContainer';
    import FavoriteBreeds from "@/components/breed-feed-grids/favorite-breeds/FavoriteBreeds";
    import FeedPage from "@/components/feed-page/FeedPage";


    export default {
        components: {
            FeedPage,
            FavoriteBreeds,
            MainContainer,
        }
    }
</script>