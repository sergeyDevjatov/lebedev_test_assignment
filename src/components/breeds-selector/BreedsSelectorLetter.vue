<template lang="pug">
    div(:class="$style.letter")
        slot
</template>

<style lang="scss" module>
    @import '~@/styles/colors.scss';

    .letter {
        color: $gray;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.01em;

        margin-right: 15px;

        text-transform: uppercase;
    }
</style>