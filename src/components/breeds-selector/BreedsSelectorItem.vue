<template lang="pug">
    div(:class="itemClass")
        slot
        img(
            v-if="isCancelable"
            @click.stop="$emit('cancel')"
            :class="$style.cross"
            src="@/assets/cross.svg"
            alt="x"
        )
</template>

<script>
    export default {
        props: {
            isActive: {
                type: Boolean,
                default: false,
            },
            isCancelable: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            itemClass() {
                return this.isActive
                    ? this.$style.active
                    : this.$style.item;
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';

    .item {
        display: inline-block;
        padding: 3.5px 11px;
        box-sizing: border-box;
        border: 1px solid currentColor;
        border-radius: 20px;
        font-size: 12px;
        line-height: 1.3334em;

        letter-spacing: 0.01em;
        color: $gray;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: $white;
        }
    }

    .active {
        composes: item;
        cursor: default;

        &, &:hover {
            color: $blue;
        }

        padding-right: 14.65px;
    }

    .cross {
        cursor: pointer;
        margin-left: 7.18px;
    }
</style>