<template lang="pug">
    label(:class="containerClass")
        span(
            v-if="$slots.default"
            :class="$style.text"
        )
            slot
        div(:class="$style.switcher")
            span(:class="pointerClass")
            input(
                type="checkbox"
                :class="$style.checkbox"
                @change="checkboxChangeHandler"
                :checked="checked"
            )
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'change',
        },
        props: {
            label: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            containerClass() {
              return this.checked
                  ? this.$style.containerChecked
                  : this.$style.container;
            },
            pointerClass() {
              return this.checked
                  ? this.$style.pointerChecked
                  : this.$style.pointer;
            },
        },
        methods: {
            checkboxChangeHandler(event) {
                this.$emit('change', event.target.checked);
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';


    .container {
        color: $gray;

        user-select: none;
        cursor: pointer;
    }

    .containerChecked {
        composes: container;

        color: $white;
    }

    .switcher {
        position: relative;
        box-sizing: border-box;
        border: 1px solid currentColor;
        border-radius: 9px;
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 30px;
        height: 15.5px;
        padding: 0 3px;
    }

    .text {
        font-size: 16px;
        line-height: 175%;

        letter-spacing: 0.01em;
    }

    .pointer {
        display: inline-block;
        background: currentColor;
        flex-shrink: 0;
        width: 9.67px;
        height: 9.67px;
        border-radius: 100%;

        transition: margin-left 0.2s, transform 0.2s;

        margin-left: 0;
        transform: translateX(0);
    }

    .pointerChecked {
        composes: pointer;

        margin-left: 100%;
        transform: translateX(-100%);
    }

    .checkbox {
        visibility: hidden;
        position: absolute;
        height: 0;
        width: 0;
        pointer-events: none;
    }

    .text + .switcher {
        margin-left: 15px;
    }
</style>