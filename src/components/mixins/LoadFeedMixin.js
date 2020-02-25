export default {
    props: {
        reachedBottom: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        async reachedBottom(reachedBottom) {
            if(reachedBottom) {
                await this.loadNextPage();
            }
        },
    },
    async mounted() {
        await this.load();
    },
    methods: {
        load() {
            // must be overridden
        },
        loadNextPage() {
            // may be overridden
            this.load();
        },
    },
}