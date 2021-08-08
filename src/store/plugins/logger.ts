import { createLogger } from "vuex";

export default createLogger({
    collapsed: false, // auto-expand logged mutations
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filter(mutation, stateBefore, stateAfter) {
        // returns `true` if a mutation should be logged
        // `mutation` is a `{ type, payload }`
        return mutation.type !== "aBlocklistedMutation";
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionFilter(action, state) {
        // same as `filter` but for actions
        // `action` is a `{ type, payload }`
        return action.type !== "aBlocklistedAction";
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformer(state: any) {
        // transform the state before logging it.
        // for example return only a specific sub-tree
        return state.subTree;
    },
    mutationTransformer(mutation) {
        // mutations are logged in the format of `{ type, payload }`
        // we can format it any way we want.
        return mutation.type;
    },
    actionTransformer(action) {
        // Same as mutationTransformer but for actions
        return action.type;
    },
    logActions: true, // Log Actions
    logMutations: true, // Log mutations
    logger: console, // implementation of the `console` API, default `console`
});
