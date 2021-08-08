<template>
    <header class="header">
        <button class="outline_light" @click="toggleSidebar">
            <i class="fas fa-bars" />
        </button>
        <div>
            <p>Header</p>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "HelloWorld",
    props: {},
    setup() {
        const store = useStore();

        return {
            store,
            toggleSidebar: () => store.commit("layout/toggleSidebar"),
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    height: var(--header-height);
    position: sticky;
    top: 0px;
    z-index: 100;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}
</style>
