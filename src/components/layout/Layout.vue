<template>
    <sidebar />
    <section class="main-screen">
        <main-header />
        <main class="main-content">
            <slot />
        </main>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "./MainHeader.vue";
import Sidebar from "./Sidebar.vue";
// import { useStore } from "@/store";

export default defineComponent({
    name: "Layout",
    components: {
        MainHeader,
        Sidebar,
    },
    setup() {
        // const store = useStore();
        // const tex = ref("Pulopop!");

        return {
            // store,
            // tex,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
    &-screen {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
    }

    &-content {
        padding: 3ch;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 3ch;
    }
}
</style>
