<template lang="pug">
    router-link(
        :class="$style.button"
        :to="link"
    )
        span(:class="textClass") Избранные пёсели
        heart-icon(
            :class="$style.icon"
            :color="heartIconColor"
        )
</template>

<script>
    import HeartIcon from '@/components/icons/HeartIcon';


    export default {
        components: {HeartIcon},
        data() {
            return {
                link: {
                    name: 'favorites',
                },
            };
        },
        computed: {
            isShowFavorites() {
                return this.$route.matched.some(({ name }) => name === 'favorites');
            },
            textClass() {
                return this.isShowFavorites
                    ? this.$style.textWhite
                    : this.$style.text;
            },
            heartIconColor() {
                return this.isShowFavorites
                    ? 'white'
                    : 'gray';
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';


    .button {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-size: 16px;
    }

    .text {
        line-height: 175%;
        letter-spacing: 0.01em;
        color: $gray;
    }

    .textWhite {
        composes: text;
        color: $white;
    }

    .text + .icon {
        margin-left: 10px;
    }

    .icon {
        height: 0.875em;
    }
</style>