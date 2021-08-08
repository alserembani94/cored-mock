<template>
    <div class="hello">
        <button class="solid_primary" @click="toggleSidebar">Hello</button>
        <p>{{ store.state.layout.isSidebarCollapse }}</p>
        <!-- <button class="solid_secondary">Hello</button>
        <button class="solid_info">Hello</button>
        <button class="solid_success">Hello</button>
        <button class="solid_warning">Hello</button>
        <button class="solid_danger">Hello</button>
        <button class="solid_dark">Hello</button>
        <button class="solid_light">Hello</button>
        <button class="outline_primary">Hello</button>
        <button class="outline_secondary">Hello</button>
        <button class="outline_info">Hello</button>
        <button class="outline_success">Hello</button>
        <button class="outline_warning">Hello</button>
        <button class="outline_danger">Hello</button>
        <button class="outline_dark">Hello</button>
        <button class="outline_light">Hello</button> -->
        <p>{{ tex }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
    },
    setup() {
        const store = useStore();
        const tex = ref("Pulopop!");

        return {
            store,
            toggleSidebar: () => store.commit("layout/toggleSidebar"),
            tex,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
    padding: 0;
}
</style>
