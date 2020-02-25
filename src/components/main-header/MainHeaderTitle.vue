<template lang="pug" functional>
    router-link(
        :to={ name: 'main' }
    )
        img(
            :class="$style.title"
            src="@/assets/header_title.svg"
            alt="Пёсель"
        )
</template>

<style lang="scss" module>
    .title {

    }
</style>