<script>
    import RenderLessMixin from "@/components/mixins/RenderLessMixin";
    import LoadFeedMixin from "@/components/mixins/LoadFeedMixin";
    import {ACTION_NAMES} from "@/store/breedImages";
    import {mapActions} from "vuex";

    export default {
        mixins: [
            RenderLessMixin,
            LoadFeedMixin,
        ],
        props: {
            breed: {
                type: String,
                required: true,
            },
        },
        methods: {
            ...mapActions({
                loadRandomBreedImage: ACTION_NAMES.LOAD_RANDOM_BREED_IMAGE,
            }),
            async load() {
                await this.loadRandomBreedImage({
                    breed: this.breed,
                    count: 20,
                });
                this.$emit('loaded');
            }
        },
    }
</script>