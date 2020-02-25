export default {
    computed: {
        scope() {
            // must be overridden
            return null;
        },
    },
    render() {
        const defaultSlot = this.$scopedSlots.default;
        const defaultSlotWithParams = defaultSlot && defaultSlot(this.scope);
        return (defaultSlotWithParams && defaultSlotWithParams[0]) ?? null;
    },
}