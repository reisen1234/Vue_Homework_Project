const moudleB = {
  namespaced: true,
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    updateList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    initList({ commit }, payload) {
      return new Promise((rs) => {
        let newList = [
          {
            id: 1,
            name: "reisen",
            sex: 2,
          },
          {
            id: 2,
            name: "nahida",
            sex: 2,
          },
        ];
        if (3 === payload) {
          newList = [
            {
              id: 1,
              name: "reisen",
              sex: 2,
            },
            {
              id: 2,
              name: "nahida",
              sex: 2,
            },
            {
              id: 3,
              name: "priorityQueue",
              sex: 1,
            },
          ];
        }
        commit("updateList", newList);
        rs();
      });
    },
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    filtersList(state, getters) {
      return state.list.map((item) => {
        item.sexName = item.sex === 1 ? "male" : "fmale";
        return item;
      });
    },
  },
};
export default moudleB;
