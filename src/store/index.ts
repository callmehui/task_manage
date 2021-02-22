import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { menuModule } from "./modules/menu";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu: menuModule,
  },
  plugins: [createPersistedState()],
});
