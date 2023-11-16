const moduleA = {
  namespaced: true,
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
  },
  actions: {},
  getters: {},
};
export default moduleA;
