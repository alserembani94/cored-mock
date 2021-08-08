<template>
    <!-- <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div> -->
    <!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App" /> -->

    <layout>
        <!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App" /> -->
        <section class="section">
            <p>Main is it?</p>
            <card title="Section Title">
                <p>Hello New Corrad!</p>
            </card>
        </section>
        <section class="section">
            <p>Components</p>
            <card title="Buttons">
                <button class="solid_primary">Primary</button>
                <button class="solid_secondary">Secondary</button>
                <button class="solid_info">Info</button>
                <button class="solid_success">Success</button>
                <button class="solid_warning">Warning</button>
                <button class="solid_danger">Danger</button>
                <button class="solid_light">Light</button>
                <button class="solid_dark">Dark</button>
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Layout from "@/components/layout/Layout.vue";
import Card from "@/components/containers/Card.vue";

export default defineComponent({
    name: "Home",
    components: {
        // HelloWorld,
        Layout,
        Card,
    },
});
</script>

<style scoped lang="scss">
.section {
    display: flex;
    flex-direction: column;
    row-gap: 2ch;
}
</style>
