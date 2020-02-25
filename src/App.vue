<template lang="pug">
    #app
        main-header
        router-view
</template>

<script>
    const MainHeader = () => import('@/components/main-header/MainHeader');


    export default {
        name: 'App',
        components: {
            MainHeader,
        },
    }
</script>

<style lang="scss">
    body, html {
        height: 100%;
    }
    body, html, #app {
        width: 100%;
        min-height: 100%;
        margin: 0;
        padding: 0;
    }

    ul, ol, li, p {
        margin: 0;
        padding: 0;
    }

    a {
        &, &:hover, &:active, &:visited {
            color: unset;
            text-decoration: none;
        }
    }

    #app {
        font-family: 'IBM Plex Sans', Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);

        display: flex;
        flex-flow: column nowrap;
    }
</style>
