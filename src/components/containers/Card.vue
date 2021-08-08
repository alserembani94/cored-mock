<template>
    <div class="wrapper">
        <div class="header">
            <h5>{{ title }}</h5>
        </div>
        <div class="content" :data-arrangement="arrangement">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Layout",
    props: {
        title: {
            type: String,
            required: true,
        },
        arrangement: {
            type: String,
            default: "column",
            validator(value: string) {
                return ["row", "column"].includes(value);
            },
        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.label {
    margin-bottom: 2ch;
}
.wrapper {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 6px #00000022;
    padding: 2ch;
}

.content {
    display: flex;
    gap: 1ch;

    &[data-arrangement="row"] {
        flex-flow: row wrap;
    }

    &[data-arrangement="column"] {
        flex-flow: column wrap;
    }
}
</style>
