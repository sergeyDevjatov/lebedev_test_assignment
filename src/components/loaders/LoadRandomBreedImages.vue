<script>
    import {mapActions} from "vuex";
    import {ACTION_NAMES} from "@/store/randomBreedImages";
    import RenderLessMixin from "@/components/mixins/RenderLessMixin";
    import LoadFeedMixin from "@/components/mixins/LoadFeedMixin";

    export default {
        mixins: [
            RenderLessMixin,
            LoadFeedMixin,
        ],
        methods: {
            ...mapActions({
                loadRandomBreedImages: ACTION_NAMES.LOAD_RANDOM_BREED_IMAGES,
            }),
            async load() {
                await this.loadRandomBreedImages();
                this.$emit('loaded');
            },
        },
    }
</script>