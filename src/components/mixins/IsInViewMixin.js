import ScrollMixin from "@/components/mixins/ScrollMixin";

export default {
    mixins: [ ScrollMixin ],
    data() {
        return {
            __$IsInViewMixin_minDelta: document.documentElement.clientHeight,
            isInView: false,
            haveEverBeenInView: false,
        };
    },
    methods: {
        scrollHandler(scrollable) {
            const currentElement = this.$el;
            if(!currentElement || !scrollable) {
                return;
            }
            let topOffset = 0;
            for(
                let parent = currentElement;
                ![null, scrollable].includes(parent);
                parent = parent.offsetParent
            ) {
                topOffset += parent.offsetTop;
            }

            const minDelta = this.$data.__$IsInViewMixin_minDelta;

            const isBelowTopEdge = (scrollable.scrollTop + scrollable.clientHeight + minDelta) >= topOffset;
            const isAboveBottomEdge = (scrollable.scrollTop - minDelta) <= (topOffset + currentElement.clientHeight);

            const isInView = isBelowTopEdge && isAboveBottomEdge;

            this.isInView = isInView;
            this.haveEverBeenInView = this.haveEverBeenInView || isInView;
        },
    },
}