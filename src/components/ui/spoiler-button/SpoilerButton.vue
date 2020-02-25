<template lang="pug">
    div(:class="$style.button" @click.stop="clickHandler")
        span(:class="$style.text")
            slot
        img(:class="arrowClass" src="@/assets/arrow.svg")
</template>

<script>
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            arrowClass() {
                return this.isShow
                    ? this.$style.arrowReversed
                    : this.$style.arrow;
            }
        },
        methods: {
            clickHandler() {
                this.$emit('update:isShow', !this.isShow);
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';


    .button {
        cursor: pointer;
        user-select: none;
        color: $white;
        border-bottom: 0.5px dashed currentColor;
        padding-bottom: 2px;
        align-items: center;
        display: inline-flex;
        flex-flow: row nowrap;
    }

    .text {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.01em;
    }

    .text + .arrow {
        margin-left: 11px;
    }

    .arrow {
        transition: transform 0.2s;
        margin-top: 3px;
    }

    .arrowReversed {
        composes: arrow;
        transform: scaleY(-1);
    }
</style>