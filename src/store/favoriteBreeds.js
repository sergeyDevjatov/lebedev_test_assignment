const FAVORITE_BREEDS_STORAGE_KEY = 'favoriteBreeds';

export const ACTION_NAMES = {
    TOGGLE_BREED_IS_FAVORITE: 'TOGGLE_BREED_IS_FAVORITE',
    LOAD_FAVORITE_BREEDS: 'LOAD_FAVORITE_BREEDS',
    ADD_FAVORITE_BREEDS: 'ADD_FAVORITE_BREEDS',
    REMOVE_FAVORITE_BREEDS: 'REMOVE_FAVORITE_BREEDS',
};

export const MUTATION_NAMES = {
    SET_FAVORITE_BREEDS: 'SET_FAVORITE_BREEDS',
};

export const GETTER_NAMES = {
    IS_BREED_FAVORITE: 'IS_BREED_FAVORITE',
};

export default {
    state: {
        favoriteBreeds: [],
    },
    actions: {
        [ACTION_NAMES.LOAD_FAVORITE_BREEDS]({ commit }) {
            const breeds = JSON.parse(localStorage.getItem(FAVORITE_BREEDS_STORAGE_KEY));

            commit(MUTATION_NAMES.SET_FAVORITE_BREEDS, { breeds });
        },
        [ACTION_NAMES.TOGGLE_BREED_IS_FAVORITE]({ dispatch, getters }, { breed }) {
            const isFavorite = getters[GETTER_NAMES.IS_BREED_FAVORITE](breed);

            const actionName = isFavorite
                ? ACTION_NAMES.REMOVE_FAVORITE_BREEDS
                : ACTION_NAMES.ADD_FAVORITE_BREEDS;

            dispatch(actionName, {
                breeds: [breed],
            });
        },
        [ACTION_NAMES.ADD_FAVORITE_BREEDS]({ state, commit }, { breeds }) {
            const newBreeds = Array.from(new Set(state.favoriteBreeds.concat(breeds)));

            localStorage.setItem(FAVORITE_BREEDS_STORAGE_KEY, JSON.stringify(newBreeds));

            commit(MUTATION_NAMES.SET_FAVORITE_BREEDS, {
                breeds: newBreeds,
            });
        },
        [ACTION_NAMES.REMOVE_FAVORITE_BREEDS]({ state, commit }, { breeds }) {
            const newBreeds = state.favoriteBreeds.filter(breed => !breeds.includes(breed));

            localStorage.setItem(FAVORITE_BREEDS_STORAGE_KEY, JSON.stringify(newBreeds));

            commit(MUTATION_NAMES.SET_FAVORITE_BREEDS, {
                breeds: newBreeds,
            });
        },
    },
    mutations: {
        [MUTATION_NAMES.SET_FAVORITE_BREEDS](state, { breeds }) {
            state.favoriteBreeds = breeds;
        },
    },
    getters: {
        [GETTER_NAMES.IS_BREED_FAVORITE]: state => breed =>
            state.favoriteBreeds.includes(breed),
    },
}