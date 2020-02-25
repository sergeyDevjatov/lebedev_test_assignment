<template lang="pug">
    ul(:class="$style.group" :data-letter="letter")
        slot(:item-class="$style.item")
</template>

<script>
    export default {
        props: {
            letter: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';

    .group {
        display: inline;
        flex-flow: row wrap;
        font-size: 20px;

        &::before {
            content: attr(data-letter);
            color: $gray;
            font-size: 1em;
            line-height: 140%;
            letter-spacing: 0.01em;

            margin-right: 15px;
        }
    }

    .items {
        display: inline;
        flex-flow: row wrap;
        align-items: center;
    }

    .item {
        display: inline-block;
    }

    .item:not(:last-child) {
        margin-right: 15px;
    }
</style>