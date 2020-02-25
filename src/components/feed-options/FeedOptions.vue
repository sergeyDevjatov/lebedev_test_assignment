<template lang="pug">
    div
        div(:class="buttonsClass")
            div
                spoiler-button(:is-show.sync="isShowBreeds") Породы
                breeds-selector-item(
                    v-if="specifiedBreed"
                    @cancel="specifiedBreedCancelHandler"
                    is-active
                    is-cancelable
                    :class="$style.specifiedBreed"
                )
                    breed-label(:name="specifiedBreed")
            switcher(
                v-if="!specifiedBreed"
                v-model="isInAlphabeticalOrder"
            ) Сортировка по алфавиту
        div(
            v-if="!specifiedBreed"
            v-show="isShowBreeds"
            :class="$style.selectorWithAll"
        )
            breeds-selector-item(
                is-active
                :class="$style.allDogsButton"
            ) Все пёсели
            breeds-selector(
                @select="selectBreedHandler"
                :class="$style.selector"
            )
</template>
 
<script>
    import SpoilerButton from "@/components/ui/spoiler-button/SpoilerButton";
    import Switcher from "@/components/ui/switcher/Switcher";
    import BreedsSelectorItem from "@/components/breeds-selector/BreedsSelectorItem";
    import BreedsSelector from "@/components/breeds-selector/BreedsSelector";
    import BreedLabel from "@/components/breed/BreedLabel";


    export default {
        components: {BreedLabel, BreedsSelector, BreedsSelectorItem, Switcher, SpoilerButton},
        data() {
            return {
                isShowBreeds: false,
            };
        },
        computed: {
            isInAlphabeticalOrder: {
                get() {
                    return Object.prototype.hasOwnProperty.call(this.$route.query, 'alphabetically');
                },
                set(value) {
                    this.$router.replace({
                        query: value
                            ? {
                                alphabetically: '',
                            }
                            : {},
                    });
                },
            },
            specifiedBreed() {
                return this.$route.params.breed;
            },
            buttonsClass() {
                return !this.specifiedBreed
                    ? this.$style.buttons
                    : this.$style.buttonsWithoutAlphabeticalSwitcher;
            },
        },
        methods: {
            selectBreedHandler(breed) {
                this.$router.push({
                    name: 'breed',
                    params: {
                        breed,
                    },
                });
            },
            specifiedBreedCancelHandler() {
                this.$router.push({
                    name: 'main',
                });
            },
        },
    }
</script>

<style lang="scss" module>
    .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-end;
    }

    .buttonsWithoutAlphabeticalSwitcher {
        composes: buttons;

        padding: 5px 0 0;
    }

    .buttons + .allDogsButton,
    .buttons + .selector {
        margin-top: 30px;
    }

    .allDogsButton + .selector {
        margin-top: 17px;
    }

    .specifiedBreed {
        margin-left: 20px;
    }

    .buttons + .selectorWithAll {
        margin-top: 30px;
    }
</style>