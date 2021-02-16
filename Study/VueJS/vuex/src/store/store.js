import Vue from 'vue';
import Vuex from 'vuex';
import ResultModule from './modulResutl.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: '',
    },
    getters: {
        value: (state) => state.value,
    },
    mutations: {
        updateValue(state, payload) {
            state.value = payload;
        },
    },
    actions: {
        updateValue({ commit }, payload) {
            commit('updateValue', payload);
        },
    },
    modules: {
        ResultModule,
    },
});
