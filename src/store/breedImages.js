import Vue from 'vue';
import api from "@/api/api";


export const ACTION_NAMES = {
    LOAD_RANDOM_BREED_IMAGE: 'LOAD_RANDOM_BREED_IMAGE',
    ADD_BREED_IMAGES: 'ADD_BREED_IMAGES',
};

export const MUTATION_NAMES = {
    SET_BREED_IMAGES: 'SET_BREED_IMAGES',
};

export const GETTER_NAMES = {
    GET_BREED_IMAGES: 'GET_BREED_IMAGES',
    GET_LAST_BREED_IMAGE: 'GET_LAST_BREED_IMAGE',
};

export default {
    state: {
        breedImages: {
        },
    },
    actions: {
        async [ACTION_NAMES.LOAD_RANDOM_BREED_IMAGE] ({ dispatch }, { breed, count }) {
            const response = await api.loadRandomImageByBreed(breed, null, count);

            const image = response.data.message;

            dispatch(ACTION_NAMES.ADD_BREED_IMAGES, {
                breed,
                images: Array.isArray(image)
                    ? image
                    : [image],
            });
        },
        [ACTION_NAMES.ADD_BREED_IMAGES] ({ state, commit }, { breed, images }) {
            const newImages = Array.from(new Set((state.breedImages[breed] || []).concat(images)));
            commit(MUTATION_NAMES.SET_BREED_IMAGES, {
                breed,
                images: newImages,
            });
        },
    },
    mutations: {
        [MUTATION_NAMES.SET_BREED_IMAGES] (state, { breed, images }) {
            Vue.set(state.breedImages, breed, images);
        },
    },
    getters: {
        [GETTER_NAMES.GET_BREED_IMAGES]: state => breed =>
            state.breedImages[breed] || [],
        [GETTER_NAMES.GET_LAST_BREED_IMAGE]: (state, getters) => breed =>
            getters[GETTER_NAMES.GET_BREED_IMAGES](breed).slice(-1)[0] ?? null,
    },
}