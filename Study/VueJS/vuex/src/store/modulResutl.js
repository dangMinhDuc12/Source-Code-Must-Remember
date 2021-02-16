export default {
    state: {
        result: 0,
    },
    getters: {
        tenResult: (state) => state.result * 10,
        nameResult: (state) => `${state.result} name product`,
    },
    mutations: {
        increment(state, n) {
            state.result += n;
        },
        decrement(state, n) {
            state.result -= n;
        },
    },
    actions: {
        increment({ commit }, n) {
            setTimeout(() => {
                commit('increment', n);
            }, 2000);
        },
    },
};
