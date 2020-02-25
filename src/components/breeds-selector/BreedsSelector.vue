<template lang="pug">
    load-all-breeds
        div(:class="$style.selector")
            template(
                v-for="(items, letter, letterIndex) in breedGroups"
            )
                div(
                    :key="letter"
                    :class="$style.letterWithItem"
                )
                    breeds-selector-letter(
                        :class="$style.letter"
                    ) {{letter}}
                    breeds-selector-item(
                        :class="getItemClass(letterIndex, 0, items.length)"
                        @click.native.stop="$emit('select', items[0])"
                    )
                        breed-label(:name="items[0]")
                breeds-selector-item(
                    v-for="(item, itemIndex) in items.slice(1)"
                    :key="item"
                    :class="getItemClass(letterIndex, itemIndex + 1, items.length)"
                    @click.native.stop="$emit('select', item)"
                )
                    breed-label(:name="item")

</template>
<script>
    import LoadAllBreeds from "@/components/loaders/LoadAllBreeds";


    import {mapState} from "vuex";
    import BreedsSelectorItem from "@/components/breeds-selector/BreedsSelectorItem";
    import BreedsSelectorLetter from "@/components/breeds-selector/BreedsSelectorLetter";
    import BreedsSelectorGroup from "@/components/breeds-selector/BreedsSelectorGroup";
    import BreedLabel from "@/components/breed/BreedLabel";

    export default {
        components: {BreedLabel, BreedsSelectorLetter, BreedsSelectorGroup, BreedsSelectorItem, LoadAllBreeds},
        computed: {
            ...mapState({
                breeds: state => state.breeds.breeds,
            }),
            breedGroups() {
                return this.breeds
                    ?.reduce((groups, breed) => {
                        const letter = breed.slice(0, 1);
                        groups[letter] = (groups[letter] ?? []).concat(breed);

                        return groups;
                    }, {});
            },
        },
        methods: {
            getItemClass(letterIndex, itemIndex, itemsLength) {
                if(itemIndex === itemsLength - 1) {
                    return this.$style.itemBeforeLetter;
                }
                return this.$style.item;
            },
        }
    }
</script>

<style lang="scss" module>
    .selector {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: -16px;
        align-items: center;
    }

    .item {
        margin-right: 15px;
        margin-bottom: 16px;
        & & {
            margin-bottom: 0;
        }
    }

    .letter {
        composes: item;
    }

    .letterWithItem {
        composes: item;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .itemBeforeLetter {
        composes: item;
        margin-right: 40px;
    }

    .item:not(.item .item):last-child {
        margin-right: 0;
    }
</style>