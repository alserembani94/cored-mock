import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// Import modules
import auth from "./modules/auth";
import layout from "./modules/layout";

// Import plugins
import logger from "./plugins/logger";

const debug = process.env.NODE_ENV !== "production";

// Define state types here
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {}

// Define injection key
const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<Store<State>>({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        auth,
        layout,
    },
    strict: debug,
    plugins: debug ? [logger] : [],
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useStore = () => {
    return baseUseStore(key);
};

export { store, useStore, key, State };
