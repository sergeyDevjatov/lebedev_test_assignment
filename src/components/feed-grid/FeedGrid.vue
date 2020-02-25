<template lang="pug">
    transition-group(:class="gridClass" tag="div" :name="$style.item")
        slot(:item-class="$style.item")
</template>

<script>
    export default {
        props: {
            isFirstElementWide: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            gridClass() {
                return this.isFirstElementWide
                    ? this.$style.gridWithFirstWideElement
                    : this.$style.grid;
            },
        },
    };
</script>

<style lang="scss" module>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
    }

    .gridWithFirstWideElement {
        composes: grid;
        & > :first-child {
            grid-column: 1 / 4;
            --feed-card-padding: 35px 50px 50px 35px;
            --feed-card-font-size: 30px;
            &::before {
                padding-bottom: calc(513 / 1160 * 100%);
            }
        }
    }

    .item {
        transition: all 1s;
    }

    .item:global(-enter), .item:global(-leave-to) {
        opacity: 0;
    }

    .item:global(-active) {
        position: absolute;
    }

    .item:global(-move) {
        transition: transform 1s;
    }

    /*.flip-list-move {*/
    /*    transition: transform 1s;*/
    /*}*/
</style>