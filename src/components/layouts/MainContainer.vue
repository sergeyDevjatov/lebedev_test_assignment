<template lang="pug">
    div(:class="$style.containerWrapper")
        div(:class="$style.container")
            slot
</template>

<style lang="scss" module>
    .containerWrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        padding: 0 60px;
    }

    .container {
        flex-grow: 1;
        max-width: calc(1280px - 60px * 2);
        margin-left: auto;
        margin-right: auto;
    }
</style>