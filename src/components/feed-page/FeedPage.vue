<template lang="pug">
    main-container
        div(:class="innerContainerClass")
            feed-options(
                v-if="!noOptions"
                :class="$style.options"
            )
            slot
            feed-back-to-top-button(
                :class="$style.backToTop"
                @back-to-top="backToTopHandler"
            )
</template>

<script>
    import FeedOptions from "@/components/feed-options/FeedOptions";
    import MainContainer from "@/components/layouts/MainContainer";
    import FeedBackToTopButton from "@/components/feed-back-to-top-button/FeedBackToTopButton";


    export default {
        components: {
            FeedBackToTopButton,
            FeedOptions,
            MainContainer,
        },
        props: {
            noOptions: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            async backToTopHandler() {
                for(
                    let i = 1;
                    document.documentElement.scrollTop > 0;

                ) {
                    document.documentElement.scrollTop = Math.max(0, document.documentElement.scrollTop -= i);
                    i *= 2;
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
            },
        },
        computed: {
            innerContainerClass() {
                return this.noOptions
                    ? this.$style.innerContainerWithoutOptions
                    : this.$style.innerContainer;
            },
        },
    };
</script>

<style lang="scss" module>
    .options {
        margin: 0 0 50px;
    }

    .innerContainer {
        padding: 44px 0 50px;
        display: flex;
        flex-flow: column nowrap;
    }

    .innerContainerWithoutOptions {
        composes: innerContainer;
        padding-top: 122px;
    }

    .backToTop {
        margin-top: 67px;
        margin-left: auto;
    }
</style>