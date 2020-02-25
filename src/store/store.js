import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import breeds from "@/store/breeds";
import breedImages from "@/store/breedImages";
import randomBreedImages from "@/store/randomBreedImages";
import favoriteBreeds from "@/store/favoriteBreeds";


Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        breeds,
        breedImages,
        randomBreedImages,
        favoriteBreeds,
    },
    strict: isDevelopment,
    plugins: isDevelopment
        ? [createLogger()]
        : [],
});