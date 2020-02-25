<script>
    import ScrollMixin from "@/components/mixins/ScrollMixin";
    import RenderLessMixin from "@/components/mixins/RenderLessMixin";

    export default {
        mixins: [
            ScrollMixin,
            RenderLessMixin,
        ],
        data() {
            return {
                reachedBottom: false,
            };
        },
        computed: {
            scope() {
                return {
                    reachedBottom: this.reachedBottom,
                    loadedHandler: this.loadedHandler,
                };
            },
        },
        mounted() {
            this.scrollHandler();
        },
        methods: {
            scrollHandler(target) {
                target = target ?? this.getScrollable();

                const bottomOffset = target.scrollHeight - (target.scrollTop + target.clientHeight);

                this.reachedBottom = bottomOffset < 400;
            },
            async loadedHandler() {
                await this.$nextTick();
                const reachedBottomBefore = this.reachedBottom;
                this.scrollHandler();
                const reachedBottomWasChanged = this.reachedBottom !== reachedBottomBefore;

                if(!reachedBottomWasChanged && this.reachedBottom) {
                    this.reachedBottom = false;
                    await this.$nextTick();
                    this.reachedBottom = true;
                }
            },
        },
    }
</script>