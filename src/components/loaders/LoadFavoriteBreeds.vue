<script>
    import {mapActions} from "vuex";
    import {ACTION_NAMES} from "@/store/favoriteBreeds";
    import RenderLessMixin from "@/components/mixins/RenderLessMixin";

    export default {
        mixins: [
            RenderLessMixin,
        ],
        methods: {
          ...mapActions({
              loadFavoriteBreeds: ACTION_NAMES.LOAD_FAVORITE_BREEDS,
          }),
        },
        async mounted() {
            await this.loadFavoriteBreeds();
        },
        render() {
            return this.$slots.default[0];
        },
    }
</script>