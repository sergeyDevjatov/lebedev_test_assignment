<template lang="pug">
    span {{label}}
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        computed: {
            label() {
                return this.name.slice(0, 1).toUpperCase() + this.name.slice(1).toLowerCase();
            },
        }
    }
</script>