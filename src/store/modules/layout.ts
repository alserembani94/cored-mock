// Initialize layout state
export type LayoutState = {
    isSidebarCollapse: boolean;
};

// Declare initial state for layout
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const state = (): LayoutState => ({
    isSidebarCollapse: false,
});

// Getters for layout - equivalent to compute
const getters = {};

// Actions for layout - equivalent to method (async-ready)
const actions = {
    // oneAction({ commit, state }, payload) {
    //     return;
    // },
};

// Mutations for layout - equivalent to method (only for mutate state, not async-compatible)
const mutations = {
    // oneMutation (state, payload) {
    //      return;
    // }
    toggleSidebar(state: LayoutState): void {
        state.isSidebarCollapse = !state.isSidebarCollapse;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
