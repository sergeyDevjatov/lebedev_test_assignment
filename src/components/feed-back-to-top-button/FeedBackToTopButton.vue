<template lang="pug">
    div(
        @click.stop="clickHandler"
        :class="$style.button"
    )
        img(
            :class="$style.arrow"
            alt=""
            src="@/assets/back_to_top_arrow.svg"
        )
</template>

<script>
    export default {
        methods: {
            clickHandler() {
                this.$emit('back-to-top');
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';

    .button {
        border: 1px solid $white;
        border-radius: 50%;
        padding: 18px 19px 15px 21px;

        display: flex;

        background: #111013;
    }

    .arrow {

    }
</style>