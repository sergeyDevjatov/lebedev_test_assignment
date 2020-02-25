<template lang="pug">
    div(
        :class="$style.card"
    )

        // img(
        //     alt=""
        //    :class="$style.image"
        //    :src="image"
        // )
        div(
            :class="$style.content"
            :style="contentStyle"
        )
            heart-icon(
                @click.native.stop="$emit('like')"
                :class="$style.heart"
                color="white"
                :filled="isLiked"
            )
            span(:class="$style.title")
                slot(name="title")
</template>

<script>
    import HeartIcon from "@/components/icons/HeartIcon";
    export default {
        components: {HeartIcon},
        props: {
            image: {
                type: String,
                default: null,
            },
            isLiked: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: null,
            },
        },
        computed: {
            contentStyle() {
                return {
                    '--feed-card-background-image': `url(${this.image})`,
                };
            },
        },
    }
</script>

<style lang="scss" module>
    @import '~@/styles/colors.scss';


    .card {
        position: relative;
        --feed-card-padding: 25px;
        --feed-card-font-size: 25px;
        &::before {
            content: "";
            display: block;
            padding-bottom: calc(290 / 366.65 * 100%);
        }
    }

    .image {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content {
        border-radius: 8px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: var(--feed-card-padding);
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-color: #222222;
        background-image: linear-gradient(1deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%), var(--feed-card-background-image);
        // background: linear-gradient(1deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    }

    .heart {
        margin: 0 auto auto 0;
        cursor: pointer;
    }


    .title {
        margin: auto 0 0 auto;
        color: $white;
        font-weight: 600;
        font-size: var(--feed-card-font-size);

        line-height: 112%;
        letter-spacing: 0.025em;
    }
</style>