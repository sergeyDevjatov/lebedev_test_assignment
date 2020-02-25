import api from "@/api/api";

export const ACTION_NAMES = {
    LOAD_ALL_BREEDS: 'LOAD_ALL_BREEDS',
};

export const MUTATION_NAMES = {
    SET_BREEDS: 'SET_BREEDS',
};

export default {
    state: {
        breeds: [],
    },
    actions: {
        async [ACTION_NAMES.LOAD_ALL_BREEDS] ({ state, commit }) {
            if(state.breeds.length > 0) {
                return;
            }

            const response = await api.loadAllBreeds();

            const breedsTree = response.data.message;

            const breeds = Object.keys(breedsTree);

            // const breeds = Object.keys(breedsTree).reduce((allBreeds, breed) => {
            //     const hasSubBreeds = breedsTree[breed].length > 0;
            //
            //     return allBreeds.concat([hasSubBreeds])
            // });

            commit(MUTATION_NAMES.SET_BREEDS, {
                breeds,
            });
        },
    },
    mutations: {
        [MUTATION_NAMES.SET_BREEDS] (state, { breeds }) {
            state.breeds = breeds;
        },
    },
}