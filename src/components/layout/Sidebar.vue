<template>
    <section
        class="sidebar"
        :data-collapse="store.state.layout.isSidebarCollapse"
    >
        <!-- <p>Sidebar</p> -->
        <div class="logo">
            <p>Logo</p>
        </div>
        <nav class="menu">
            <p>Menu</p>
        </nav>
        <div class="meta">
            <button class="solid_secondary">Meta</button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "HelloWorld",
    props: {},
    setup() {
        const store = useStore();
        // const tex = ref("Pulopop!");

        return {
            store,
            // tex,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
    // background-color: var(--primary-50);
    background: linear-gradient(to left, var(--primary-50), var(--primary-75));
    color: var(--white);
    width: var(--sidebar-width-expand);
    height: 100vh;
    transition: width 0.5s ease-in-out;
    position: sticky;
    top: 0px;
    left: 0px;
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;

    &[data-collapse="true"] {
        width: var(--sidebar-width-collapse);

        .meta {
            opacity: 0;
        }
    }

    nav {
        flex: 1;
    }

    @media (max-width: 800px) {
        width: 0px;
    }
}

.logo {
    height: var(--header-height);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}

.menu {
    padding: 2ch 0;
}

.meta {
    height: var(--header-height);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    opacity: 1;

    transition: opacity 0.3s ease;
}

.logo,
.meta {
    padding: 2ch 2ch;
}
</style>
