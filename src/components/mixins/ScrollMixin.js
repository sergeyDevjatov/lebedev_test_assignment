export default {
    data() {
        return {
            timeoutId: null,
            timeout: 50,
            interval: 200,
            lastTime: null,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.__scrollHandlerThrottled);

        this.__scrollHandlerThrottled();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.__scrollHandlerThrottled);
    },
    methods: {
        getScrollable() {
            return document.documentElement;
        },
        scrollHandler() {
            // must be overridden
        },
        __timeoutHandler() {
            this.timeoutId = null;
            this.lastTime = Date.now();
            this.scrollHandler(this.getScrollable());
        },
        __callScrollHandlerAfterTimeout() {
            if(this.timeoutId !== null) {
                clearTimeout(this.timeoutId);
            }
            setTimeout(this.__timeoutHandler, this.timeout);
        },
        __scrollHandlerThrottled() {
            const time = Date.now();

            if(this.lastTime !== null && time - this.lastTime < this.interval) {
                this.__callScrollHandlerAfterTimeout();
                return;
            }
            this.lastTime = time;
            this.scrollHandler(this.getScrollable());
        },
    },
}