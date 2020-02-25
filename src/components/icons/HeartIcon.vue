<template lang="pug">
    div(:class="$style.transitionWrapper")
        transition(:name="$style.transition")
            div(
                :class="[$style.transition, $style.svgContainer, colorClass]"
                v-html="iconCode"
                :key="iconCode"
            )
</template>

<script>
    import heartIconCode from '!html-loader!@/assets/heart_icon.svg';
    import heartIconFilledCode from '!html-loader!@/assets/heart_icon_filled.svg';


    export default {
        props: {
            color: {
                type: String,
                validator(value) {
                    return ['white', 'gray'].includes(value);
                },
                default: 'white',
            },
            filled: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            iconCode() {
                return this.filled
                    ? heartIconFilledCode
                    : heartIconCode;
            },
            colorClass() {
                switch(this.color) {
                    case 'white':
                        return this.$style.white;
                    case 'gray':
                        return this.$style.gray;
                }
                return null;
            },
        },
    };
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';


    .svgContainer {
        display: inline-flex;
        & > svg {
            width: auto;
            height: 100%;
        }
    }

    .white > svg > path {
        fill: $white;
    }

    .gray > svg > path {
        fill: $gray;
    }

    .transitionWrapper {
        position: relative;
        display: inline-flex;

        user-select: none ;
    }

    .transition {
        transition: opacity 0.3s;
        opacity: 1;
    }

    .transition:global(-enter-active) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .transition:global(-enter), .transition:global(-leave-to) {
        opacity: 0;
    }
</style>