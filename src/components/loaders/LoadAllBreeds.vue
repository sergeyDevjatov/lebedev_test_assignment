<script>
    import {mapActions} from "vuex";
    import {ACTION_NAMES} from "@/store/breeds";
    import RenderLessMixin from "@/components/mixins/RenderLessMixin";

    export default {
        mixins: [
            RenderLessMixin,
        ],
        methods: {
          ...mapActions({
              loadAllBreeds: ACTION_NAMES.LOAD_ALL_BREEDS,
          }),
        },
        async mounted() {
            await this.loadAllBreeds();
        },
    }
</script>