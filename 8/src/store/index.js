import Vuex from "vuex";
import moduleA from "./moudleA";
import moduleB from "./moudleB";
export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
  },
});
