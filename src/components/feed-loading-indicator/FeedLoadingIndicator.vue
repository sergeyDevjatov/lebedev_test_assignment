<template lang="pug">
    div(:class="$style.indicator")
        div(
            v-for="i in 3"
            :class="$style.dot"
        )
</template>

<script>
    export default {
        name: 'FeedLoadingIndicator',
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';

    .indicator {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 16px;
    }

    .dot {
        border: 1px solid $white;
        width: 12px;
        box-sizing: border-box;
        border-radius: 100%;
        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
    }

    .dot + .dot {
        margin-left: 15px;
    }

    @keyframes dot-pulse {
        0% {
            width: 12px;
        }
        50% {
            width: 16px;
        }
        100% {
            width: 12px;
        }
    }

    .dot {
        $duration: 2;
        @for $i from 1 through 3 {
            &:nth-child(#{$i}) {
                // animation: #{$duration}s linear #{($i - 1) * $duration}s dot-pulse;
                animation-duration: #{$duration}s;
                animation-timing-function: linear;
                animation-delay: #{($i - 1) * $duration}s;
                animation-name: dot-pulse;
                animation-iteration-count: infinite;
            }
        }
    }
</style>