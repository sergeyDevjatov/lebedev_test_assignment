<template lang="pug">
    header(:class="$style.header")
        main-container
            div(:class="$style.content")
                main-header-title
                main-header-favorites-button
</template>


<script>
    import MainContainer from '@/components/layouts/MainContainer';
    import MainHeaderTitle from '@/components/main-header/MainHeaderTitle';
    import MainHeaderFavoritesButton from '@/components/main-header/MainHeaderFavoritesButton';


    export default {
        components: {
            MainHeaderTitle,
            MainHeaderFavoritesButton,
            MainContainer,
        },
    }
</script>

<style lang="scss" module>
    .header {
        height: 100px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        background: #151419;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);
    }

    .content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
</style>