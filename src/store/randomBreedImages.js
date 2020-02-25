import api from "@/api/api";

export const ACTION_NAMES = {
    LOAD_RANDOM_BREED_IMAGES: 'LOAD_RANDOM_BREED_IMAGES',
    ADD_RANDOM_BREED_IMAGES: 'ADD_RANDOM_BREED_IMAGES',
    CLEAR_RANDOM_BREED_IMAGES: 'CLEAR_RANDOM_BREED_IMAGES',
};

export const MUTATION_NAMES = {
    SET_RANDOM_BREED_IMAGES: 'SET_RANDOM_BREED_IMAGES',
};


export default {
    state: {
        randomBreedImages: [],
    },
    actions: {
        async [ACTION_NAMES.LOAD_RANDOM_BREED_IMAGES] ({ dispatch }) {
            const response = await api.loadRandomImage(20);
            const breedImages = response.data.message
                .map(imageUrl => ({
                    breed: imageUrl.match(/breeds\/([a-z]+)-?[a-z]*\//)[1],
                    image: imageUrl,
                }));

            dispatch(ACTION_NAMES.ADD_RANDOM_BREED_IMAGES, {
                breedImages,
            });
        },
        [ACTION_NAMES.ADD_RANDOM_BREED_IMAGES] ({ state, commit }, { breedImages }) {
            const newBreedImages = breedImages.filter(({ image: newImage }) =>
                !state.randomBreedImages.find(({image}) => newImage === image)
            );

            const nextBreedImages = state.randomBreedImages.concat(newBreedImages);
            commit(MUTATION_NAMES.SET_RANDOM_BREED_IMAGES, {
                breedImages: nextBreedImages,
            });
        },
        [ACTION_NAMES.CLEAR_RANDOM_BREED_IMAGES] ({ commit }) {
            commit(MUTATION_NAMES.SET_RANDOM_BREED_IMAGES, {
                breedImages: [],
            });
        },
    },
    mutations: {
        [MUTATION_NAMES.SET_RANDOM_BREED_IMAGES](state, { breedImages }) {
            state.randomBreedImages = breedImages;
        },
    },
}